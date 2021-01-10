const express = require('express');
const app = express.Router();
const User = require('../../models/userModel')
const authController = require('../../controller/authController')
const queController = require('../../controller/queController')

app.get('/', authController.protect, authController.restrictTo(['admin', 'customer']), (req, res) => {
    User.find()
        .then(user => res.json(user))
})
app.post('/register', authController.register)

app.post('/login', authController.login)

app.post('/yo', authController.protect, authController.restrictTo(['admin', 'customer']))

app.post('/protect_to', authController.restrictTo(['admin', 'customer']))



module.exports = app;