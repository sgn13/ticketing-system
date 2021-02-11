const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OAuthAccessTokenSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OAuthClient",
    },
    accessToken: {
      type: String,
    },
    accessTokenExpiresAt: {
      type: Date,
    },
    refreshToken: {
      type: String,
    },
    refreshTokenExpiresAt: {
      type: Date,
    },
    scope: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const OAuthAccessToken = mongoose.model(
  "OAuthAcsessToken",
  OAuthAccessTokenSchema
);
module.exports = OAuthAccessToken;
