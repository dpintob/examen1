var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
      customer:String,
      property:String
});

module.exports = mongoose.model('Property', PropertySchema);
