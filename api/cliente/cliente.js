'use strict';
module.exports = function (app) {
    const db = require('../../config/database');
    const Cliente = db.Mongoose.model('cliente', db.ClienteSchema, 'cliente');

    app.get('/api/emprestimo/cliente/listar', function (req, res) {
        Cliente.find({}).lean().exec(function (e, docs) {

            if (e !== null) {
                res.status(400);
                return;
            }

            res.send(docs)
        });
    });

    app.get('/api/emprestimo/cliente/consultar/:cpf', function (req, res) {
        Cliente.find({cpf: req.params.cpf}).lean().exec(function (e, docs) {

            if (e !== null) {
                res.status(400);
                return;
            }

            res.send(docs)
        });
    });

    app.post('/api/emprestimo/cliente/cadastrar', function (req, res) {
        var parametro = req.body;

        var cliente = new Cliente({
            nome: parametro.nome, sexo: parametro.sexo, cpf: parametro.cpf, nascimento: parametro.nascimento,
            profissao: parametro.profissao, salario: parametro.salario
        });

        cliente.save(function (erro) {
            if (erro) {
                return erro;
            }

            res.send(cliente);
        });
    });

};
