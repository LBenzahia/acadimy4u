// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var relationship = require("mongoose-relationship");
var bcrypt   = require('bcrypt-nodejs');
var Profile = require('../../user_manager/models/profile');//this for define one to one

// define the schema for our user model
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = mongoose.Schema({

    local            : {
        email        : { type: String, required: true, unique: true },
        password     : { type: String, required: true }
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        img          : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String,
        img          : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        img          : String
    },
    id_profile       :{ type: ObjectId, ref:"Profile" }, //one to one
    fullName: {
      firstName: String,
      lastName: String
    },
    admin: Boolean,
    location: String,
    meta: {
          age   : Number,
          birthDte: Date
  },
   created_at: Date,
   updated_at: Date

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
