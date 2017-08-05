(function() {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS', 'ngMessages', 'ngFileUpload'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: './components/landing/landing.view.html',
        css: './css/style.css'
      })
      .state('userReg', {
          url: '/userReg',
          templateUrl: './components/userReg/userReg.view.html',
          css: './css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('./components/userReg/userReg.controller.js')
            }]
          },
          controller: 'UserController',
          controllerAs: 'ctrl'
        })
        .state('property', {
          url: '/property',
          templateUrl: 'components/property/property.view.html',
          css:  './css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['./components/property/propertyController.controller.js', './components/userReg/userReg.controller.js'])
            }]
          },
          controller: 'PropertyController',
          controllerAs: 'ctrl'
        })

        $urlRouterProvider.otherwise('/landing');
    };
  })();
