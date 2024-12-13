require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

// Livereload setup
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const liveReloadServer = livereload.createServer({
    exts: ['ejs'],
});

app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", webRouter);

// Lắng nghe server
app.listen(port, hostname, () => {
    // console.log(`Example app listening on http://${hostname}:${port}`);
});
