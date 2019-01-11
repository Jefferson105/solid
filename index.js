const express = require("express");
const next = require("next");
const compression = require("compression");
const nodeMailer = require('nodemailer');
const bodyParser = require("body-parser");
const fetch = require('isomorphic-fetch');
const prefix = "http://www.solidsolucoes.com.br:8197";

var apiKey = 'cdb13cbcea5c9a5f9a1e160ed6dd92d9-49a2671e-63e3d5f4';
//var domain = 'www.mydomain.com';
const domain = 'sandboxe01f58fefc5843b9b30c5de95a01bf5f.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey, domain });

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sendMail = ({ assunto, mensagem, to }) =>
    new Promise((resolve, reject) => {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            //port: 465,
            //secure: true,
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

        var data = {
            from: '"Contato Site Solid" <mailsenderapi@gmail.com>',
            to,
            subject: assunto,
            text: mensagem
        };

        mailgun.messages().send(data, function (erro, body) {
            if(erro) {
                res.json({ sucesso: false, erro });
            }

            res.json({ sucesso: true, mensagem: "Email enviado", data: body });
        });
    });

    server.get("/request/:name", async (req, res) => {
        try {
            let resp = await fetch(`${prefix}/${req.params.name}`);
            let data = await resp.json();

            res.json({ data });
        }catch(error) {
            res.json({ error })
        }
    });

    server.get("/blog/artigo/:id", (req, res) => {
        app.render(req, res, "/blog", { artigo: req.params.id });        
    });

    server.get("/blog/categoria/:id", (req, res) => {
        app.render(req, res, "/blog", { categoria: req.params.id });        
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