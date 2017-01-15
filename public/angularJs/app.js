(function(){
  // Déclaration APP
  var app = angular.module('myApp', ['ngRoute']);

  // Directive navbar
  app.directive('header',function(){
    return {
      restrict:'A',
      templateUrl:'partials/common/header.html',
      link: function(scope, elem, attr) {
        // Lorsque la navbar est chargée, on met le focus sur le premier élement
        $('a.blue').focus();
      }
    }
  });

  // Controller page typeDefensif
  app.controller('typeDefensifController',function(DashboardService, $scope){
    $scope.defensifs = [];
    DashboardService.defensifgetAll().then(function(response) {
      $scope.defensifs = response.data; // Rempli la variable avec les données
    });
  });

  // Controller page typeOffensif
  app.controller('typeOffensifController',function(DashboardService, $scope){
    $scope.offensifs = [];
    DashboardService.offensifgetAll().then(function(response) {
      $scope.offensifs = response.data; // Rempli la variable avec les données
    });
  });

  // Controller personnages offensifs
  app.controller('personnageOfController',function(DashboardService, $scope, $routeParams){
    var persoOfId = $routeParams.persoOfId; // On récupère l'id qui est dans l'url
    $scope.personnage = {};
    DashboardService.offensifgetOne(persoOfId).then(function(response) {
      $scope.personnage = response.data; // Rempli la variable avec les données
    });
  });

  // Controller personnages defensifs
  app.controller('personnageDefController',function(DashboardService, $scope, $routeParams){
    var persoDefId = $routeParams.persoDefId;  // On récupère l'id qui est dans l'url
    $scope.personnage = {};
    DashboardService.defensifgetOne(persoDefId).then(function(response) {
      $scope.personnage = response.data; // Rempli la variable avec les données
    });
  });

  // Définition du router
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/', {
      templateUrl:'partials/home.html'
    })
    .when('/typeOffensif', {
      templateUrl:'partials/typeOffensif.html',
      controller:'typeOffensifController',
      controllerAs:'typeOffensifCtrl'
    })
    .when('/typeDefensif', {
      templateUrl:'partials/typeDefensif.html',
      controller:'typeDefensifController',
      controllerAs:'typeDefensifCtrl'
    })
    .when('/epee', {
      templateUrl:'partials/epee.html'
    })
    .when('/sceptre', {
      templateUrl:'partials/sceptre.html'
    })
    .when('/personnageOffensif/:persoOfId', {
      templateUrl:'partials/personnageOffensif.html',
      controller:'personnageOfController',
      controllerAs:'personnageOfCtrl'
    })
    .when('/personnageDefensif/:persoDefId', {
      templateUrl:'partials/personnageDefensif.html',
      controller:'personnageDefController',
      controllerAs:'personnageDefCtrl'
    })
    .when('/contact', {
      templateUrl:'partials/contact.html'
    });
  }]);


  // Définition du service DashboardService
  app.factory('DashboardService', function($http) {
    return {
        defensifgetAll: defensifgetAll, // Retourne tous les personnages defensifs
        defensifgetOne: defensifgetOne, // Retourne un seul personnage defensif
        offensifgetAll: offensifgetAll, // Retourne tous les personnages offensifs
        offensifgetOne: offensifgetOne  // Retourne un seul personnage offensif
    };

    function defensifgetAll() {
        return $http.get('/api/defensif').then(complete).catch(failed);
    }
    function defensifgetOne(defensifid) {
        return $http.get('/api/defensif/' + defensifid).then(complete).catch(failed);
    }
    function offensifgetAll() {
        return $http.get('/api/offensif').then(complete).catch(failed);
    }
    function offensifgetOne(offensifid) {
        return $http.get('/api/offensif/' + offensifid).then(complete).catch(failed);
    }
    function complete(response) {
        return response;
    }
    function failed(error) {
        console.log(error.statusText);
    }
  });

}());
