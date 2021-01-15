const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OAuthCodeSchema = new Schema({
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
    }},
    {
        timestamps: true
    })

const OAuthCode = mongoose.model('OAuthCode', OAuthCodeSchema)
module.exports = OAuthCode