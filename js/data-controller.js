var mod = angular.module("controllersMod", [
	"analyzeMod",
	"carouselMod",
	"communityMod",
	"contactMod",
	"datacentersMod",
	"emailMod"
]);

mod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

mod.controller("datacentersCtrl", ["$scope", "datacenters", function($scope, datacenters) {
	$scope.entries = datacenters.links;
}]);
