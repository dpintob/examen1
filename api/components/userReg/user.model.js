var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
      id: {type: String, required: false},
      name: {type: String, required: false},
      alias: {type: String, required: false},
      money: {type: String, required: false},
      property: {type: String, required: false},
      photo: {type: String, required: false}
});

module.exports = mongoose.model('User', UserSchema);
