const express = require("express");
const app = express.Router();
const User = require("../../models/userModel");
const authController = require("../../controller/authController");
const stauthController = require("../../controller/stauthController");

// app.get('/', authController.protect, authController.restrictTo(), (req, res) => {
//     User.find()
//         .then(user => res.json(user))
// })
app.post("/register", authController.register);

app.post("/login", authController.login);

//app.post('/yo', authController.protect, authController.restrictTo(['admin', 'customer']))

app.post("/stregister", stauthController.register);
app.post("/st_login", stauthController.login);
//app.post("/stlogin", stauthController.login.restrictTo([]));
//app.post('/protect_to', stauthController.restrictTo([""]))

module.exports = app;
