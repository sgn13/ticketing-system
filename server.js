const app = require('./app');

const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const uri = process.env.DATABASE_LOCAL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('!!! Database successfully connected !!!');

});

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})