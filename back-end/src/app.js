const express = require('express');

const userController = require('./controller/user.controller');

const app = express()

app.use(express.json());

app.get('/users/:id', userController.getById);

app.get('/users', userController.getAll);


module.exports = app;