(function(){
  angular
    .module('WWP-app')
    .controller('UserController', UserController);
    UserController.$inject = ['UserService'];

    function UserController(UserService){
      var userCtrl = this;
      loadUsers();
      userCtrl.fileURL = "";
      var client;

      userCtrl.showPicker = function() {
        client.pick({
        }).then(function(result) {
            console.log(JSON.stringify(result.filesUploaded))
            userCtrl.fileURL = result.filesUploaded[0].url;
        });
    }

      function loadUsers() {
        UserService.getUsers().then(function(response) {
          userCtrl.users = response.data;
        });
      }
      function init(){
        client = filestack.init('A3kT6wcvoQCiDhivHSkKpz');
        userCtrl.users = UserService.getUsers();
        userCtrl.to = {};
      }
      init();

      userCtrl.save = function(){
        var fileStackUrl = userCtrl.fileURL;
        var newUser = {
          id: userCtrl.id,
          name: userCtrl.name,
          alias: userCtrl.alias,
          money: 1000,
          property: userCtrl.property,
          photo: fileStackUrl,
          bio: fileStackUrl
        }
        setTimeout(location.reload.bind(location),1500);
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
        userCtrl.property = puser.property;
        fileStackUrl = puser.photo;
        fileStackUrl = puser.bio;
      }

      userCtrl.update = function(){
        var editedUser = {
          id: userCtrl.id,
          name: userCtrl.name,
          alias: userCtrl.alias,
          money: 1000,
          property: userCtrl.property,
          photo: fileStackUrl,
          bio: fileStackUrl,
        }

        UserService.updateUser(editedUser);
        init();
        clean();
      }

    userCtrl.save

      function clean() {
        userCtrl.id = '';
        userCtrl.name = '';
        userCtrl.alias = '';
        userCtrl.photo = '';
      }
    }
})();
