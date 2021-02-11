const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/userModel");

const QueSchema = new Schema({
  query: {
    type: String,
    required: true,
  },
  ellaborate: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: String,
    required: true,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    // required: [false, "User id is required"]
  },
  q_type: {
    type: String,
  },
  is_answered: {
    type: String,
    default: false,
  },
});

module.exports = Query = mongoose.model("Query", QueSchema);
