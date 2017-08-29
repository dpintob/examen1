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
        templateUrl: './public/components/landing/landing.view.html',
        css: './public/css/style.css'
      })
      .state('userReg', {
          url: '/userReg',
          templateUrl: './public/components/userReg/userReg.view.html',
          css: './public/css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('./public/components/userReg/userReg.controller.js')
            }]
          },
          controller: 'UserController',
          controllerAs: 'ctrl'
        })
        .state('property', {
          url: '/property',
          templateUrl: './public/components/property/property.view.html',
          css:  './public/css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['./public/components/property/propertyController.controller.js', './public/components/userReg/userReg.controller.js'])
            }]
          },
          controller: 'PropertyController',
          controllerAs: 'ctrl'
        })
        .state('usersList', {
          url: '/usersList',
          templateUrl: './public/components/usersList/usersList.view.html',
          css: './public/css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('./public/components/userReg/userReg.controller.js')
            }]
          },
          controller: 'UserController',
          controllerAs: 'ctrl'
        })

        $urlRouterProvider.otherwise('/landing');
    };
  })();
