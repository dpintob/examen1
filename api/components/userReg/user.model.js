var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
      id: String,
      name: String,
      alias: String,
      money: String,
      property: String,
      photo: String
});

module.exports = mongoose.model('User', UserSchema);
