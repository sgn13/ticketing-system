const mongoose = require("mongoose");

const RoleSchema = mongoose.Schema({
  role: {
    type: String,
  },
});
module.exports = Role = mongoose.model("RoleModel", RoleSchema);
