var Association = require('./property.model.js');
var bcrypt = require('bcrypt');

module.exports.save = function(req,res){ //exporta el controlador
  var currentPass;
  bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(req.body.password,salt,function(err,hash){
        currentPass = hash;


        var newPurchase = new Property({
          customer: req.body.customer,
          property: req.body.property
        });

        newPurchase.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });

      });
    });
}

module.exports.findAll = function(req,res){
  Property.find().then(function(properties){
    res.send(properties);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Property.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Property.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
