var App = angular.module('App', ['ngRoute','smart-table']);


App.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index.pug'
                
            })
            .when("/customers", {
                templateUrl: 'partials/customerPartial.pug',
                controller: "CustomerCtrl"
            })
            .when("/orders", {
                templateUrl: "partials/orders.pug",
                controller: "OrderCtrl"
            })
            .otherwise({ redirectTo: "/" });
    }
]
);




