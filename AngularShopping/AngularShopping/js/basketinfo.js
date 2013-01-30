angular.module('basketModule', []).
    factory('basketService', function () {
        return {
            getCount: function () {
                var basket = JSON.parse((localStorage.getItem('shoppingBasket') || '{ "items": [] }'));
                var count = 0;
                basket.items.forEach(function(element) {
                    count += element.quantity;
                });

                return count;
            },
            
            addItem : function(item) {
                var basket = JSON.parse((localStorage.getItem('shoppingBasket') || '{ "items": [] }'));

                var itemStoredAlready = basket.items.filter(function (x) { return x.id === item.id; }).length === 1;

                if (itemStoredAlready) {
                    var basketItem = basket.items.filter(function (x) { return x.id === item.id; })[0];
                    basketItem.quantity += parseInt(item.quantity, 10);
                } else {

                    var basketItem = {};
                    basketItem.id = item.id;
                    basketItem.title = item.title;
                    basketItem.quantity = parseInt(item.quantity, 10);

                    basket.items.push(basketItem);
                }

                localStorage.setItem('shoppingBasket', JSON.stringify(basket));
            }

        };
});