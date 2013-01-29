angular.module('myCart', ['dataModule']).
  config(function ($routeProvider) {
      $routeProvider.
        when('/', { controller: IndexController, templateUrl: '/templates/list.html', resolve: {
            shoppingItems: function ($q, shoppingItemsService) {
                var deferred = $q.defer();

                deferred.resolve(shoppingItemsService.getItems());

                return deferred.promise;
            }
        } }).
        when('/:id', {
            controller: DetailController, templateUrl: '/templates/detail.html', resolve: {
                item: function ($q, $route, shoppingItemsService) {
                    var deferred = $q.defer();

                    deferred.resolve(shoppingItemsService.getItem($route.current.params.id));

                    return deferred.promise;
                }
            }
        }).
        otherwise({ redirectTo: '/' });
  });