const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
  },
  fullname: {
    type: String,
  },
  role: {
    type: String,
    // default: 'customer',
    // enum: ['customer', 'admin']
  },
  verificationCode: { type: String },
  verifiedAt: { type: Date },
});

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;
