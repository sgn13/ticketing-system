const mongoose = require('mongoose');
const Schema = mongoose.Schema

const QueSchema = new Schema({
    query: {
      type: String,
      required: true
    },
    ellaborate: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      default:Date.now
    }
  });  

  module.exports = Query = mongoose.model('Query',QueSchema)