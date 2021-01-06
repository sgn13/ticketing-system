const express = require('express')
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.send(req.body)
})

app.use('/users', require('./routes/api/userRouter'))

module.exports = app;