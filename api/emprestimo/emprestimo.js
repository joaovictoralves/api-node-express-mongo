'use strict';
module.exports = function (app) {

    const db = require('../../config/database');
    const Emprestimo = db.Mongoose.model('emmprestimo', db.EmprestimoSchema, 'emmprestimo');

    app.get('/api/emprestimo/listar', function (req, res) {
        Emprestimo.find({}).lean().exec(function (e, docs) {

            if (e !== null) {
                res.status(400);
                return;
            }

            res.send(docs)
        });
    });

    app.post('/api/emprestimo/cadastrar', function (req, res) {
        var parametro = req.body;

        var emprestimo = new Emprestimo({
            codigo: parametro.codigo, titulo: parametro.titulo, credito: parametro.credito,
            jurosMes: parametro.jurosMes, parcelas: parametro.parcelas, prestacoes: parametro.prestacoes
        });

        emprestimo.save(function (erro) {
            if (erro) {
                return erro;
            }

            res.send(emprestimo);
        });
    });
};
