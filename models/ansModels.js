const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Query = require('./queModel')

const AnsSchema = new Schema({
    queryid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Query'
    },
    answer: {
      type: String,
      required: true
    },
    date:{
      type:Date,
      default:Date.now
    }
  });  

  module.exports = Answer = mongoose.model('Answer',AnsSchema)