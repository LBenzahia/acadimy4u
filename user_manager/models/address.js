// user-manager/models/phone.js
// load the things we need
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// load profile model for building a relationship one to many 
var Profile = require('profile');


var addressSchema = new Schema({
    owner: { type:ObjectId, ref:"Profile", childPath:"id_address" },
    country: String,
    state: String,
    city: String,
    street: String,
    postal_code: Number,
    created_at: Date,
    updated_at: Date

});

addressSchema.plugin(relationship, { relationshipPathName:'owner' });
module.exports = mongoose.model('Address', addressSchema);
