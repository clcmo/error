// install Express, Pug and JSTransformer
const express = require('express');
const pug = require('pug');
require('jstransformer-markdown-it');

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(pug.renderFile('public/index.pug')); 
});

app.get('/home', function (req, res) {
    res.send(pug.renderFile('public/index.pug')); 
});

// Add more URLs and Pug files here...

app.listen(8080, function() {
    console.log('Servidor Funcionando!');
});