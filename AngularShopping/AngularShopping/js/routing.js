angular.module('myCart', ['dataModule', 'basketModule']).
  config(function ($routeProvider) {
      $routeProvider.
        when('/', {
            controller: IndexController,
            templateUrl: '/templates/list.html'
        }).
        when('/:id', {
            controller: DetailController,
            templateUrl: '/templates/detail.html'
        }).
        otherwise({ redirectTo: '/' });
  });