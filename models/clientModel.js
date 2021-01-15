const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OAuthClient = new OAuthClientSchema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
         },
    client: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'OAuthClient'
         },
    authorizationCode: { 
        type: String
     },
    expiresAt: { 
        type: Date
     },
    scope: { 
        type: String
     }
}, {
    timestamps: true
    })

const OAuthClient = mongoose.model('OAuthClient', OAuthClientSchema)
module.exports = OAuthClient