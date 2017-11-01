# Projeto Micro Serviços

Projeto para estudo com Node.js - Express - MongoDB

## Requisitos

* Node.js instalado.
* MongoDB instalado e executando.

## MongoDB

### Iniciando o Mongo

`mongod`
`mkdir c:\\data\db`

### Criando a tabela

`mongo`
`use db_emprestimo`

## NPM

### Instalando as dependencias
`npm install`

### Executando em modo *dev*

`npm run dev`

## Executando Serviço via Postman

* CLIENTE

POST
http://localhost:8080/api/emprestimo/cliente/cadastrar

{
   "nome":"Maria da Silva",
   "sexo":"FEMININO",
   "cpf":"098767834",
   "nascimento":"1992-11-20",
   "profissao":"advogada",
   "salario":1800.00
}

GET
http://localhost:8080/api/emprestimo/cliente/listar

GET
http://localhost:8080/api/emprestimo/cliente/consultar/098767834


* EMPRESTIMO

POST
http://localhost:8080/api/emprestimo/cadastrar

{
 "codigo": "h453",
 "titulo":"Crédito para emergências",
 "credito":1000,
 "jurosMes":0.05,
 "parcelas":105.00,
 "prestacoes":10
}
