const express = require('express');

const userController = require('./controller/user.controller');

const app = express()

app.use(express.json());

app.get('/users', userController.getAll);

app.get('/',(_req, res) => {
    res.status(200).json({ message: 'to vivo' })
})

module.exports = app;