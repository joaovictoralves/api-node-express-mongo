'use strict';
const port = 8080;

var app = require('./custom-express')();

app.listen(port, function () {
    console.log('Sistema de Emprestimos na porta: ' + port)
});
