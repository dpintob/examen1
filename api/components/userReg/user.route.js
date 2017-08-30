var express = require('express');
var router = express.Router();
var userController = require('./user.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/user')
  .post(function(req, res){
    userController.save(req,res);
 });

router.route('/user')
  .get(function(req, res){
      userController.findAll(req,res);
 });

router.route('/userUpdate')
  .put(function(req, res){
    userController.update(req,res);
 });


// Se exporta el modulo
module.exports = router;
