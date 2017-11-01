'use strict';
module.exports = function (app) {
    const db = require('../../config/database');
    const Cliente = db.Mongoose.model('cliente', db.ClienteSchema, 'cliente');
    const Emprestimo = db.Mongoose.model('emmprestimo', db.EmprestimoSchema, 'emmprestimo');

    app.get('/api/emprestimo/simulacao/{cpf}', function (req, res) {
        console.log('Requisicao recebida');
        res.send('Ok')
    });

};
