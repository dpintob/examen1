(function(){
  angular
    .module('WWP-app')
    .controller('UserController', UserController);

    function UserController(UserService){
      var userCtrl = this;

      function init(){
        userCtrl.users = UserService.getUsers();
        userCtrl.to = {};
      }
      init();

      userCtrl.save = function(){
        var newUser = {
          id: userCtrl.id,
          name: userCtrl.name,
          alias: userCtrl.alias,
          money: 1000,
          photo: userCtrl.photo
        }
        var Validation = UserService.noRepeat(newUser)
        if( Validation == false){

        UserService.setUsers(newUser);
        init();
        clean();
        }
      }
      userCtrl.getInfo = function(puser){
        userCtrl.id = puser.id;
        userCtrl.name = puser.name;
        userCtrl.alias = puser.alias;
        userCtrl.money = puser.money;
        userCtrl.photo = puser.photo;
      }

      userCtrl.update = function(){
        var editedUser = {
          id: userCtrl.id,
          name: userCtrl.name,
          alias: userCtrl.alias,
          money: 1000,
          photo: userCtrl.photo
        }

        UserService.updateUser(editedUser);
        init();
        clean();
      }

      function clean() {
        userCtrl.id = '';
        userCtrl.name = '';
        userCtrl.alias = '';
        userCtrl.photo = '';
      }
    }
})();
