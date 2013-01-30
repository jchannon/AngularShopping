(function () {
    'use strict';

    var app = angular.module('myCart');

    app.controller(
        'CartController',
       function ($scope, basketService) {
           $scope.basketCount = basketService.getCount;
       }
    );

})();