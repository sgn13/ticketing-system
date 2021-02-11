const express = require("express");
const OAuthServer = require("express-oauth-server");
const router = express.Router();
const mongoose = require("mongoose");
const oauthController = require("../../controller/authController");
const User = require("../../models/userModel");
const OAuthCode = require("../../models/authorizationTokenModel");
const OAuthAccessToken = require("../../models/accessTokenModel");
const OAuthClient = require("../../models/clientModel");

const oauth = new OAuthServer({
  model: oauthController,
  debug: true,
});
router.post("/setclient", async (req, res, next) => {
  try {
    //const user_id = req.params.id;
    const newClient = await new OAuthClient({
      clientId: req.body.clientId,
      clientSecret: req.body.clientSecret,
    });
    //const {query,ellaborate} = req.body;
    newClient.save().then((OAuthClient) => res.json(OAuthClient));
    console.log("ok");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post(
  "/access_token",
  oauth.token({
    requireClientAuthentication: { authorization_code: false },
  })
);
router.get("/authenticate", async (req, res, next) => {
  return res.render("authenticate");
});
router.post(
  "/authenticate",
  async (req, res, next) => {
    let UserModel = mongoose.model("User");
    req.body.user = await UserModel.findOne({ username: req.body.username });
    return next();
  },
  oauth.authorize({
    authenticateHandler: {
      handle: (req) => {
        return req.body.user;
      },
    },
  })
);

module.exports = router;
