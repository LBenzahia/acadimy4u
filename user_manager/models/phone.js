// user-manager/models/phone.js
// load the things we need
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
//we load profile model for building a relationship one to many
var Profile = require('profile');


var phoneSchema = new Schema({
    owner: { type:ObjectId, ref:"Profile", childPath:"id_phone" },
    typeNumber: String,
    number: String,
    created_at: Date,
    updated_at: Date

});

phoneSchema.plugin(relationship, { relationshipPathName:'owner' });
module.exports = mongoose.model('Phone', phoneSchema);
