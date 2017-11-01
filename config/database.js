'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_emprestimo');

var clienteSchema = new mongoose.Schema(
    {nome: String, sexo: String, cpf: String, nascimento: String, profissao: String, salario: String},
    {collection: 'cliente'}
);

var emprestimoSchema = new mongoose.Schema(
    {codigo: String, titulo: String, credito: Number, jurosMes: Number, parcelas: Number, prestacoes: Number},
    {collection: 'emprestimo'}
);

module.exports = {Mongoose: mongoose, ClienteSchema: clienteSchema, EmprestimoSchema: emprestimoSchema};

