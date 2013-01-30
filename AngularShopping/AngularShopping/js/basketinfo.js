angular.module('basketModule', []).
    factory('basketInfoService', function () {
        return {
            getCount: function () {
                var basket = JSON.parse((localStorage.getItem('shoppingBasket') || '{ "items": [] }'));
                var count = 0;
                basket.items.forEach(function(element) {
                    count += element.quantity;
                });

                return count;
            },

        };
});