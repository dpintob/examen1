var User = require('./user.model.js');

module.exports.save = function(req,res){ //exporta el controlador
        var newUser = new User({
          id: req.body.id,
          name: req.body.name,
          alias: req.body.alias,
          money: req.body.money,
          property: req.body.property,
          photo: req.body.photo
        });

        newUser.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });
      }

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  User.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  User.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});
    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
}
