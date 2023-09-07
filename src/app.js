const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const process = require('process');

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) // obrigatório (conforme as docs do Node.js)
})

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(router);

module.exports = app;