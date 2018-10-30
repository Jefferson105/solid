const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

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