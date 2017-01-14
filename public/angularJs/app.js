(function(){
  var app = angular.module('myApp', ['ngRoute']);

  app.directive('header',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/header.html'
    }
  });

  app.controller('homeController', function(DashboardService, $scope) {
    $scope.personnagesOffensif = {};
    $scope.personnagesDefensif = {};
    DashboardService.offensifgetAll().then(function(response) {
        $scope.personnagesOffensif = response.data;
    });
    DashboardService.defensifgetAll().then(function(response) {
        $scope.personnagesDefensif = response.data;
    });
  });

  app.controller('typeDefensifController',function(DashboardService, $scope){
    $scope.defensifs = [];
        DashboardService.defensifgetAll().then(function(response) {
            // console.log(response.data);
            $scope.defensifs = response.data;
        });
  });

  app.controller('typeOffensifController',function(DashboardService, $scope){
    $scope.offensifs = [];
        DashboardService.offensifgetAll().then(function(response) {
            // console.log(response.data);
            $scope.offensifs = response.data;
        });
  });

    app.controller('personnageOfController',function(DashboardService, $scope, $routeParams){
      var persoOfId = $routeParams.persoOfId;
       console.log(persoOfId);
       $scope.personnage = {};
       DashboardService.offensifgetOne(persoOfId).then(function(response) {
           $scope.personnage = response.data;
           console.log($scope.personnage);
       });

    });

    app.controller('personnageDefController',function(DashboardService, $scope, $routeParams){
      var persoDefId = $routeParams.persoDefId;
       console.log(persoDefId);
       $scope.personnage = {};
       DashboardService.defensifgetOne(persoDefId).then(function(response) {
           $scope.personnage = response.data;
           console.log($scope.personnage);
       });

    });

  app.controller('epeeController',function(){});
  app.controller('sceptreController',function(){});

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'partials/home/home.html',
      controller:'homeController',
      controllerAs:'homeCtrl'
    })
    .when('/typeOffensif',{
      templateUrl:'partials/typeOffensif.html',
      controller:'typeOffensifController',
      controllerAs:'typeOffensifCtrl'
    })
    .when('/typeDefensif',{
      templateUrl:'partials/typeDefensif.html',
      controller:'typeDefensifController',
      controllerAs:'typeDefensifCtrl'
    })

    .when('/epee',{
      templateUrl:'partials/epee.html',
      controller:'epeeController',
      controllerAs:'epeeCtrl'
    })

    .when('/sceptre',{
      templateUrl:'partials/sceptre.html',
      controller:'sceptreController',
      controllerAs:'sceptreCtrl'
    })

    .when('/personnageOffensif/:persoOfId',{
      templateUrl:'partials/personnageOffensif.html',
      controller:'personnageOfController',
      controllerAs:'personnageOfCtrl'
    })

    .when('/personnageDefensif/:persoDefId',{
      templateUrl:'partials/personnageDefensif.html',
      controller:'personnageDefController',
      controllerAs:'personnageDefCtrl'
    })

  }]);

  app.factory('DashboardService', function($http) {
        return {
            defensifgetAll: defensifgetAll,
            defensifgetOne: defensifgetOne,
            offensifgetAll: offensifgetAll,
            offensifgetOne: offensifgetOne,

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

}())
