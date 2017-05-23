var mod = angular.module("apisMod", []);

mod.controller("apisCtrl", ["$scope", function($scope) {
    $scope.apis = [
        {
            title: "Data standards",
            url: "http://www.lincsproject.org/LINCS/data/standards",
            target: "_blank"
        }
    ];
}]);
