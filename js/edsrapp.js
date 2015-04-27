var mod = angular.module("edsrappMod", []);

mod.controller("edsrappCtrl", ["$scope", function($scope) {
    $('.datepicker').datepicker();
}]);
