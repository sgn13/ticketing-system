const OAuthAccessToken = require("../models/accessTokenModel");
const OAuthCode = require("../models/authorizationTokenModel");
const OAuthClient = require("../models/clientModel");
const User = require("../models/userModel");

module.exports.saveAuthorizationCode = (code, client, user) => {
  let authCode = new OAuthCode({
    user: user.id,
    client: client.id,
    authorizationCode: code.authorizationCode,
    expiresAt: code.expiresAt,
    scope: code.scope,
  });
  return authCode.save();
};

module.exports.saveToken = (token, client, user) => {
  let accessToken = new OAuthAccessToken({
    user: user.id,
    client: client.id,
    accessToken: token.accessToken,
    accessTokenExpiresAt: token.accessTokenExpiresAt,
    refreshToken: token.refreshToken,
    refreshTokenExpiresAt: token.TokenExpiresAt,
    scope: token.scope,
  });
  if (!accessToken.user) {
    accessToken.user = {};
  }
  return accessToken;
};

module.exports.getAuthorizationCode = (authorizationCode) => {
  return OAuthCode.findOne({
    authorizationCode: authorizationCode,
  })
    .populate("user")
    .populate("client");
};

module.exports.getAccessToken = async (accessToken) => {
  let access_Token = await OAuthAccessToken.findOne({
    accessToken: accessToken,
  })
    .populate("user")
    .populate("client");

  if (!access_Token) {
    return false;
  }
  _accessToken = _accessToken.toObject();
  if (!_accessToken.user) {
    _accessToken.user = {};
  }

  return access_Token;
};

module.exports.refreshToken = (refreshToken) => {
  return OAuthAccessToken.findOne({
    refreshToken: refreshToken,
  })
    .populate("user")
    .populate("client");
};

module.exports.getClient = (clientId, clientSecret) => {
  let params = { clientId: clientId };
  if (clientSecret) {
    params.clientSecret = clientSecret;
  }
  return OAuthClientModel.findOne(params);
};
// module.exports.getUser = async (username, password) => {
//   let UserModel = mongoose.model("User");
//   let user = await UserModel.findOne({ username: username });
//   if (user.validatePassword(password)) {
//     return user;
//   }
//   return false;
// };
module.exports.getUserFromClient = (client) => {
  // let UserModel = mongoose.model('User');
  // return UserModel.findById(client.user);
  return {};
};
module.exports.getUser = async (req, res) => {
  try {
    const { email, password, firstname, role } = req.body;

    //validate
    if (!email || !password) {
      return res.status(400).json({ msg: "Fill up the form" });
    }

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "There is no email as per your input" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        firstname: user.firstname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// module.exports.getUserFromClient = () => {};
module.exports.revokeToken = (accessToken) => {
  const revoke = OAuthAccessToken.deleteOne({ accessToken: accessToken });
  return revoke.deletedCount > 0;
};
module.exports.revokeAuthorizationCode = (authorizationCode) => {
  const revokeAuthCode = OAuthCode.deleteOne({
    authorizationCode: authorizationCode,
  });
  return revokeAuthCode.deletedCount > 0;
};
module.exports.setClient = async (req, res) => {
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
};
