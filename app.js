(function() {
  'use strict';
  angular
    .module('WWP-app', ['appRoutes', 'ngMaterial', 'ngFileUpload'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('yellow');
    })
  //red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
})();
