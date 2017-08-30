(function(){
  angular
    .module('WWP-app')
    .service('UserService', UserService);

    function UserService($http) {
      var users = [
        {
          id: 001,
          name:'Goku',
          alias: 'Kokkun',
          money: 1500,
          property: [],
          photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
       },
       {
          id: 002,
          name:'Piccolo',
          alias: 'PikOREO',
          money: 1500,
          property: [],
          photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
        },
        {
          id: 003,
          name:'Logan',
          alias: 'Lovezno',
          money: 1500,
          property: [],
          photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
        },
        {
          id: 004,
          name:'Bomberman',
          alias: 'Don Pepe y los Globos',
          money: 1500,
          property: [],
          photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
        }, ];
      var publicAPI = {
        setUsers: _setUsers,
        getUsers: _getUsers,
        updateUser: _updateUser,
        noRepeat: _noRepeat,
        userInfo: _userInfo
      };
      return publicAPI;

      function _setUsers(pUser){
        return $http.post('http://localhost:3000/api/users',pUser);
      }
      function _getUsers(){
        return $http.get('http://localhost:3000/api/users');
      }

      function _updateUser(pobjUser) {
        var userlist = _getUsers();
        for (var i = 0; i < userlist.length; i++) {
          if (userlist[i].id == pobjUser.id) {
            userlist[i] = pobjUser;
          }
        }
        localStorage.setItem('lsusersList', JSON.stringify(userlist));
      }
      function _noRepeat(pEditUser) {
        var userlist = _getUsers();
        var Validation = false;
        for (var i = 0; i < userlist.length; i++) {
          if (userlist[i].id == pEditUser.id) {
            Validation = true;
          }
        }
        return Validation;
      }
      function _userInfo(puser) {
        var userlist = _getUsers();
        var userInfo = [];
        for (var i = 0; i < userlist.length; i++) {
          if (puser == userlist[i].name) {
            userInfo = userlist[i];
          }
        }
        return userInfo
      }

    }
})();
