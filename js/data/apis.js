var mod = angular.module("apisMod", []);

mod.controller("apisCtrl", ["$scope", function($scope) {
    $scope.apis = [
        {
            title: "Data standards",
            url: "http://www.lincsproject.org/LINCS/data/standards",
            target: "_blank"
        },
        {
            title: "LIFE API",
            url: "http://life.ccs.miami.edu/life/api",
            target: "_blank"
        },
        {
            title: "Enrichr API",
            url: "http://amp.pharm.mssm.edu/Enrichr/help#api",
            target: "_blank"
        }
    ];
}]);
