// admin/models/Admin.js
// load the things we need
var mongoose = require('mongoose');
var relationship = require('mongoose-relationship');
var User = require('../app_auth/models/user.js');
var schema = mongoose.schema,
    ObjectId = schema.ObjectId;

var adminSchema = mongoose.Schema({

  user: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' }
    },
    permissions: [{
      name: String,
      permit: Boolean
    }],
    timeCreated: { type: Date, default: Date.now },
    search: [String]

});
