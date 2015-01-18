var mod = angular.module("controllersMod", [
	"analyzeMod",
	"carouselMod",
	"communityMod",
	"contactMod",
	"datacentersMod",
	"emailMod",
	"newsMod"
]);

mod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

mod.controller("newsCtrl", ["$scope", "news", function($scope, news) {
	$scope.entries = news.getLinks();
}]);

mod.controller("datacentersCtrl", ["$scope", "datacenters", function($scope, datacenters) {
	$scope.entries = datacenters.links;
}]);
