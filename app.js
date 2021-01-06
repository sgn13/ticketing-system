const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// for parsing application/json
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false })); 

//Route Path
app.use('/api/query', require('./routes/api/query'));
app.use('/api/answer', require('./routes/api/answer'))

app.post('/', (req, res) => {
    res.send(req.body)
})

app.use('/users', require('./routes/api/userRouter'))

module.exports = app;