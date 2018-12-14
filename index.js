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
                type: 'OAuth2',
                user: "mailapisender@gmail.com",
                //accessToken: 'QPq569K6vSIZEcfRU_rAzLpc'
                //pass: "Informatic@",
                //clientId: '377146351254-jfu92s8otehkua2gg2nsr8kb7j696nbv.apps.googleusercontent.com',
                //clientSecret: 'QPq569K6vSIZEcfRU_rAzLpc',
                accessToken: 'ya29.GltyBiFugNtCSUAo7e6lFP-myANsNYxUp8v5pNs8FiLFUCLLVwubvo2lpeIEDa2mDqqD-erW8wDZwr856aFZtWJbXWGwBkeH4ZEGp4-FVzyYtDwxfR9gXLERfWpw'
            }
            /*auth: {
                user: "mailapisender@gmail.com",
                pass: "Informatic@"
            }*/
        })

        let mailOptions = {
            from: '"Contato Site Solid" <mailsenderapi@gmail.com>',
            to,
            subject: assunto,
            text: mensagem
        }

        transporter.sendMail(mailOptions, function(err, info) {
            console.log({ err, info });

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