var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/settings', {
      templateUrl: 'templates/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'templates/productTmpl.html',
      controller: 'productsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});