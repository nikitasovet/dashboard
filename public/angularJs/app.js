(function(){
  var angular = angular.module('myApp', ['ngRoute']);

  app.directive('header',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/hearder.html'
    }
  });

  app.directive('footer',function(){
    return{
      restrict:'A',
      templateUrl:'partials/common/footer.html'
    }
  });

  app.config([('$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'partials/home/home.html'
    })

  }]);

}())
