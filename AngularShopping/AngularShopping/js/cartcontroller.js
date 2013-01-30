function CartController($scope, basketService) {
    $scope.basketCount = basketService.getCount;
}