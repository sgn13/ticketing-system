const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// for parsing application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()) ;

//Route Path
app.use('/api/query', require('./routes/api/query'));



module.exports = app;