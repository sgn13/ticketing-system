const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
    grants: { type: Array },
  },
  {
    timestamps: true,
  }
);

const OAuthClient = mongoose.model("OAuthClient", ClientSchema);
module.exports = OAuthClient;
