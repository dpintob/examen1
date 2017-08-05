(function(){
  angular
    .module('WWP-app')
    .controller('PropertyController', PropertyController);

    PropertyController.$inject = ['PropertyService','UserService'];
    function PropertyController(PropertyService, UserService){
      var propertyCtrl = this;

      function init(){
        propertyCtrl.properties = PropertyService.getProperties();
        propertyCtrl.to = {};
        propertyCtrl.users = UserService.getUsers();
      }
      init();

      propertyCtrl.getInfo = function(pproperty){
        propertyCtrl.name = pproperty.name;
        propertyCtrl.price = pproperty.price;
        propertyCtrl.id = pproperty.id;
        propertyCtrl.posistion = pproperty.posistion;
        propertyCtrl.rent = pproperty.rent;
        propertyCtrl.housecost = pproperty.housecost;
        propertyCtrl.group = pproperty.group;
        propertyCtrl.ownedby = pproperty.ownedby;
        propertyCtrl.buildings = pproperty.buildings;
        propertyCtrl.mortgaged = pproperty.mortgaged;
        propertyCtrl.probability = pproperty.probability;

      }
    }
})();
