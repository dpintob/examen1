var express = require('express');
var router = express.Router();
var propertyController = require('./property.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/propertiesPost')
  .post(function(req, res){
    propertyController.save(req,res);
 });

router.route('/propertiesGet')
  .get(function(req, res){
      propertyController.findAll(req,res);
 });

router.route('/propertiesUpdate')
  .put(function(req, res){
    propertyController.update(req,res);
 });


// Se exporta el modulo
module.exports = router;
