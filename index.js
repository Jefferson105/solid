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

    server.post('/api/sendmail', async (req, res) => {
        const { assunto, mensagem, to = 'contato@solidsolucoes.com.br' } = req.body;

        const msg = {
            to,
            from: {
                email: 'contato@solidsolucoes.com.br',
                name: 'Contato Site SOLID'
            },
            subject: assunto,
            text: mensagem,
        };

        try {
            let email = await sgMail.send(msg);
            console.log("Sucesso: ", email);
            res.json({ sucesso: true, mensagem: "Email enviado com sucesso." });
        }catch(erro) {
            console.log("Erro: ", erro);
            res.json({ sucesso: false, erro })
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