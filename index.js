const express = require("express");
const next = require("next");
const compression = require("compression");
const nodeMailer = require('nodemailer');
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sendMail = ({ assunto, mensagem, to }) =>
    new Promise((resolve, reject) => {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            //port: 465,
            //secure: false,
            auth: {
                user: "mailapisender@gmail.com",
                pass: "Informatic@"
            }
        })

        let mailOptions = {
            from: '"Contato Site Solid" <mailsenderapi@gmail.com>',
            to,
            subject: assunto,
            text: mensagem
        }

        transporter.sendMail(mailOptions, function(err, info) {
            if(err) reject(err);
            
            resolve(info);
        });
    })

app.prepare()
.then(async () => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(compression());

    server.post('/api/sendmail', async (req, res) => {
        const { assunto, mensagem, to = 'contato@solidsolucoes.com.br' } = req.body;

        try {
            let info = await sendMail({ assunto, mensagem, to });

            res.json({ sucesso: true, mensagem: "Email enviado", data: info });
        }catch(erro) {
            res.json({ sucesso: false, erro });
        }
    });

    server.get("*", (req, res) => handle(req, res));

    const port = 3002;

    server.listen(process.env.PORT || port, (err) => {
        if(err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});

module.exports = app;