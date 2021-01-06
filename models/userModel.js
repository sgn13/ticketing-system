const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
    },
    fullname: {
        type: String
    }


})

const User = mongoose.model('user', userSchema)
module.exports = User