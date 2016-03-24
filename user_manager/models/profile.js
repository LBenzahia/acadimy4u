// user-manager/models/profile.js
// load the things we need
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");
var User = require('../../app_auth/models/user');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


// define the schema for our profile model

var profileSchema = mongoose.Schema({

   id_user: { type: ObjectId, ref:"User", childPath:"id_profile" }
});

profileSchema.plugin(relationship, { relationshipPathName:'id_user' });


module.exports = mongoose.model('Profile', profileSchema);
