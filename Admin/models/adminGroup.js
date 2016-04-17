
var mongoose = require('mongoose');
var relationship = require('mongoose-relationship');
var schema = mongoose.schema,
    ObjectId = schema.ObjectId;
  var adminGroupSchema = mongoose.Schema({
    _id: { type: String },
    name: { type: String, default: '' },
    permissions: [{ name: String, permit: Boolean }]


});
