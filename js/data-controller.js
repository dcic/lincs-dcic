var mod = angular.module("controllersMod", [
	"analyzeMod",
	"calendarMod",
	"carouselMod",
	"communityMod",
	"contactMod",
	"datacentersMod",
	"emailMod",
	"newsMod",
	"publicationsMod"
]);

mod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

mod.controller("newsCtrl", ["$scope", "news", function($scope, news) {
	$scope.entries = news.getLinks();
}]);

mod.controller("publicationsCtrl", ["$scope", "publications", function($scope, publications) {
	$scope.entries = publications.links;
}]);

mod.controller("datacentersCtrl", ["$scope", "datacenters", function($scope, datacenters) {
	$scope.entries = datacenters.links;
}]);
