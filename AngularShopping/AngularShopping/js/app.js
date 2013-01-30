(function () {
    'use strict';

    var app = angular.module('myCart', []).
        config(function ($routeProvider) {
            $routeProvider.
                when('/', {
                    controller: 'IndexController',
                    templateUrl: '/templates/list.html'
                }).
                when('/:id', {
                    controller: 'DetailController',
                    templateUrl: '/templates/detail.html'
                }).
                otherwise({ redirectTo: '/' });
        });

    app.factory('shoppingItemsService', function () {
        var data = [
            {
                "id": 1,
                "title": "The Door",
                "artist": "Religious Knives",
                "image": "http://ecx.images-amazon.com/images/I/51og8BkN8jL._SS250_.jpg",
                "large_image": "http://ecx.images-amazon.com/images/I/51og8BkN8jL._SS500_.jpg",
                "price": 9.98,
                "url": "http://www.amazon.com/Door-Religious-Knives/dp/B001FGW0UQ/?tag=quirkey-20"
            },
            {
                "id": 2,
                "title": "Album",
                "artist": "Girls",
                "image": "http://ecx.images-amazon.com/images/I/51hDxOeIeML._SS250_.jpg",
                "large_image": "http://ecx.images-amazon.com/images/I/51hDxOeIeML._SS500_.jpg",
                "price": 13.98,
                "url": "http://www.amazon.com/gp/product/B002GNOMJE?ie=UTF8&tag=quirkeycom-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B002GNOMJE"
            },
            {
                "id": 3,
                "title": "Bitte Orca",
                "artist": "The Dirty Projectors",
                "image": "http://z2-ec2.images-amazon.com/images/P/B0026T4RTI.01._SS250_.jpg",
                "large_image": "http://z2-ec2.images-amazon.com/images/P/B0026T4RTI.01._SS500_.jpg",
                "price": 13.98,
                "url": "http://www.amazon.com/Bitte-Orca-Dirty-Projectors/dp/B0026T4RTI/ref=pd_sim_m_12?tag=quirkey-20"
            },
            {
                "id": 4,
                "title": "The Pains of Being Pure at Heart",
                "artist": "The Pains of Being Pure at Heart",
                "image": "http://z2-ec2.images-amazon.com/images/P/B001LGXIDS.01._SS250_.jpg",
                "large_image": "http://z2-ec2.images-amazon.com/images/P/B001LGXIDS.01._SS500_.jpg",
                "price": 13.99,
                "url": "http://www.amazon.com/Pains-Being-Pure-Heart/dp/B001LGXIDS/ref=pd_sim_m_44?tag=quirkey-20"
            }
        ];

        return {
            getItems: function () { return data; },
            getItem: function (itemId) {
                return data.filter(function (x) { return x.id === parseInt(itemId, 10); })[0];
            }
        };
    });

    app.factory('basketService', function () {
        return {
            getCount: function () {
                var basket = JSON.parse((localStorage.getItem('shoppingBasket') || '{ "items": [] }'));
                var count = 0;
                basket.items.forEach(function (element) {
                    count += element.quantity;
                });

                return count;
            },

            addItem: function (item) {
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
})();