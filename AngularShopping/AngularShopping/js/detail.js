(function () {
    'use strict';

    var app = angular.module('myCart');

    app.controller(
        'DetailController',
        function ($scope, $routeParams, basketService, shoppingItemsService) {

            $scope.item = shoppingItemsService.getItem($routeParams.id);
            $scope.item.quantity = 1;

            $scope.item.basketCount = basketService.getCount();

            $scope.addItem = function () {
                basketService.addItem($scope.item);
            };
        }
    );
})();