'use strict';
const express = require('express');
const consign = require('consign');

const bodyParser = require('body-parser');
const allowCors = require('./cors');
const queryParser = require('express-query-int');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(allowCors);
    app.use(queryParser());

    consign().include('api').into(app);
    return app;
};