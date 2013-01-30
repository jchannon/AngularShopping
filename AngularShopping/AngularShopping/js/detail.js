function DetailController($scope, $rootScope, item, basketDetail) {
    'use strict';

    $scope.item = item;
    $scope.item.quantity = 1;

    $rootScope.item = $rootScope.item || {};
    $rootScope.item.basketCount = basketDetail.getCount();
    
    $scope.addItem = function () {

        var basket = JSON.parse((localStorage.getItem('shoppingBasket') || '{ "items": [] }'));

        var itemStoredAlready = basket.items.filter(function (x) { return x.id === $scope.item.id; }).length === 1;

        if (itemStoredAlready) {
            var basketItem = basket.items.filter(function (x) { return x.id === $scope.item.id; })[0];
            basketItem.quantity += parseInt($scope.item.quantity, 10);
        } else {

            var basketItem = {};
            basketItem.id = $scope.item.id;
            basketItem.title = $scope.item.title;
            basketItem.quantity = parseInt($scope.item.quantity, 10);

            basket.items.push(basketItem);
        }

        localStorage.setItem('shoppingBasket', JSON.stringify(basket));
        $rootScope.item.basketCount = 999;
    };

}
