// admin/models/AdminGroup.js
// load the things we need 
var mongoose = require('mongoose');
var relationship = require('mongoose-relationship');
var User = require('../app_auth/models/user.js');
var schema = mongoose.schema,
    ObjectId = schema.ObjectId;
  var adminGroupSchema = mongoose.Schema({
    _idOwner : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    name: { type: String, default: '' },
    permissions: {
       name: String,
       permit: Boolean
      }


});

// create the model for users and expose it to our app
module.exports = mongoose.model('AdminGroup', userSchema);
