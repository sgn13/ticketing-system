const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnsSchema = new Schema({
    queryid:{
        type:String,
        required:true
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