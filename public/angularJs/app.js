(function(){
  var app = angular.module('myApp', ['ngRoute', 'angularLoad']);

  app.directive('header',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/header.html'
    }
  });

  app.controller('homeController', function(DashboardService, $scope) {

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
  app.controller('chartsController',function(){});
  app.controller('contactController',function(){});

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'partials/home/home.html',
      controller:'homeController',
      controllerAs:'homeCtrl',
      resolve: {
        loadMyService: ['angularLoad', function(angularLoad) {

          angularLoad.loadScript('js/plugins/morris/raphael.min.js').then(function() {
            angularLoad.loadScript('js/plugins/morris/morris.js').then(function() {
                angularLoad.loadScript('js/plugins/morris/morris-data.js').then(function() {
                  console.log('aaaaa');
                  console.log($(window).Morris);
                });
            });
          })


              // <!-- Morris Charts JavaScript -->
              // <script src="js/plugins/morris/raphael.min.js"></script>
              // <script src="js/plugins/morris/morris.min.js"></script>
              // <script src="js/plugins/morris/morris-data.js"></script>
              //
              // <!-- Flot Charts JavaScript -->
              // <!--[if lte IE 8]><script src="js/excanvas.min.js"></script><![endif]-->
              // <script type="text/javascript" src="js/plugins/flot/jquery.flot.js"></script>
              // <script type="text/javascript" src="js/plugins/flot/jquery.flot.tooltip.min.js"></script>
              // <script type="text/javascript" src="js/plugins/flot/jquery.flot.resize.js"></script>
              // <script type="text/javascript" src="js/plugins/flot/jquery.flot.pie.js"></script>
              // <script type="text/javascript" src="js/plugins/flot/flot-data.js"></script>
          console.log('ici');
          // return $ocLazyLoad.load([
          //   'js/plugins/morris/raphael.min.js',
          //   'js/plugins/morris/morris.min.js',
          //   'js/plugins/morris/morris-data.js',
          //   'js/plugins/flot/jquery.flot.js',
          //   'js/plugins/flot/jquery.flot.tooltip.min.js',
          //   'js/plugins/flot/jquery.flot.resize.js',
          //   'js/plugins/flot/jquery.flot.pie.js',
          //   'js/plugins/flot/flot-data.js'
          // ]);
        }]
      }
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

    .when('/contact',{
    templateUrl:'partials/contact.html',
    controller:'contactController',
    controllerAs:'contactCtrl'
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
