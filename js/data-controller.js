var mod = angular.module("controllersMod", [
	"analyzeMod",
	"apisdocsMod",
	"calendarMod",
	"carouselMod",
	"communityMod",
	"contactMod",
	"datacentersMod",
	"datasetsassaysMod",
	"emailMod",
	"newsMod",
	"publicationsMod",
	"toolsappsMod"
]);

mod.controller("apisdocsCtrl", ["$scope", "apisdocs", function($scope, apisdocs) {
	$scope.entries = apisdocs.links;
}]);

mod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

mod.controller("newsCtrl", ["$scope", "news", function($scope, news) {
	$scope.entries = news.getLinks();
}]);

mod.controller("toolsappsCtrl", ["$scope", "toolsapps", function($scope, toolsapps) {
	$scope.dcicLinks = toolsapps.dcicLinks;
	$scope.dsgcLinks = toolsapps.dsgcLinks;
}]);

mod.controller("datasetsassaysCtrl", ["$scope", "datasetsassays", function($scope, datasetsassays) {
	$scope.entries = datasetsassays.links;
}]);

mod.controller("publicationsCtrl", ["$scope", "publications", function($scope, publications) {
	$scope.entries = publications.links;
}]);

mod.controller("datacentersCtrl", ["$scope", "datacenters", function($scope, datacenters) {
	$scope.entries = datacenters.links;
}]);
