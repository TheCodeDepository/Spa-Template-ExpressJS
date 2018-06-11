App.controller('CustomerCtrl', function ($scope, $http) {

    $scope.dataPool = [];
    $scope.records = [];

    $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.dataPool = response.data;
        $scope.records = response.data;
    });

    //$scope.getCustomersByID = function (controlID) {
    //    if (controlID === "") {
    //        $scope.records = $scope.dataPool;
    //    }
    //    var id = document.getElementById(controlID).value;      
    //    var customers = [];
    //    for (var i = 0; i < $scope.dataPool.length; i++) {
    //        var record = $scope.dataPool[i];
    //        if (record.CustomerID === id) {
    //            customers.push(record);
    //        }
    //    }    
    //    $scope.records = customers;
    //};
});


App.filter('idFilter', function () {
    return function (input, searchParameter) {

        var out = [];
        if (searchParameter === "") {
            return input;
        }

        else {

            for (var i = 0; i < input.length; i++) {

                var record = input[i].CustomerID.toString().toLowerCase();
                var searchParam = searchParameter.toString().toLowerCase();

                if (record.includes(searchParam)) {
                    out.push(input[i]);
                    console.log("found record");
                }

            }

            return out;
        }

    };
});


App.controller('OrderCtrl', function ($scope, $http) {

    $http.get("http://localhost:55516/api/Orders").then(function (response) {
        $scope.records = response.data;
    });
});
