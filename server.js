const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');

const bodyParser = require('body-parser');


dotenv.config();

const uri = process.env.DATABASE_LOCAL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('!!! Database Successfully Connected !!!');
})

// for parsing application/json
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());




//app.use(cors());
// app.use(cors({
//     origin:'http://localhost:3000/'
// }))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

