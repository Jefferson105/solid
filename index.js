const express = require("express");
const next = require("next");
const compression = require("compression");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare()
.then(async () => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(compression());

    server.get("*", (req, res) => handle(req, res));

    const port = 3002;

    const msg = {
        to: 'festivaldetalentos123@gmail.com',
        
        subject: 'Teste Sendgrid',
        text: 'Mensagem de teste'
    };
    try {
        let data = await sgMail.send(msg);
        console.log(data)
    }catch(err) {
        console.error(err);
    }

    server.post("/api/sendmail", async (req, res) => {
        const { assunto, mensagem, name } = req.body;

        const msg = {
            to: 'festivaldetalentos123@gmail.com',
            from: {
                name: name || 'Contato Site SOLID',
                email: 'contato@solidsolucoes.com.br'
            },
            subject: assunto,
            text: mensagem,
        };

        try {
            let email = await sgMail.send(msg);
            res.json({ sucesso: true, mensagem: "Email enviado com sucesso." });
        }catch(err) {
            res.json({ sucesso: false, erro: "Ocorreu um erro ao enviar o email. Tente novamente." })
        }
    });

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