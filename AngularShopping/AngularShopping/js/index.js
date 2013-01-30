(function () {
    'use strict';

    var app = angular.module('myCart');

    app.controller(
        'IndexController',
        function ($scope, shoppingItemsService) {
            $scope.items = shoppingItemsService.getItems();
        }
    );

})();