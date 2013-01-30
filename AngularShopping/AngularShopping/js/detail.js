function DetailController($scope, $routeParams, basketService, shoppingItemsService) {
    'use strict';

    $scope.item = shoppingItemsService.getItem($routeParams.id);
    $scope.item.quantity = 1;

    $scope.item.basketCount = basketService.getCount();
    
    $scope.addItem = function () {
        basketService.addItem($scope.item);
    };

}

