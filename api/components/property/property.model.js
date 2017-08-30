var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
      customer: {type: String, required: false},
      property: {type: String, required: false}
});

module.exports = mongoose.model('Property', PropertySchema);
