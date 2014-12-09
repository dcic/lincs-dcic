var mod = angular.module("controllersMod", [
	"analyzeMod",
	"apidocsMod",
	"communityMod",
	"contactMod",
	"datasetsassaysMod",
	"educationMod",
	"emailMod",
	"newsMod",
	"publicationsMod",
	"teamMod",
	"toolsappsMod"
]);

mod.controller("apidocsCtrl", ["$scope", "apidocs", function($scope, apidocs) {
	$scope.entries = apidocs.links;
}]);

mod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

mod.controller("educationCtrl", ["$scope", "education", function($scope, education) {
	$scope.entries = education.links;
}]);

mod.controller("newsCtrl", ["$scope", "news", function($scope, news) {
	$scope.entries = news.getLinks();
}]);

mod.controller("toolsappsCtrl", ["$scope", "toolsapps", function($scope, toolsapps) {
	$scope.entries = toolsapps.links;
}]);

mod.controller("datasetsassaysCtrl", ["$scope", "datasetsassays", function($scope, datasetsassays) {
	$scope.entries = datasetsassays.links;
}]);

mod.controller("publicationsCtrl", ["$scope", "publications", function($scope, publications) {
	$scope.entries = publications.links;
}]);

mod.controller("teamCtrl", ["$scope", "team", function($scope, contacts) {
	$scope.pis = contacts.pis;
	$scope.webDevelopment = contacts.webDevelopment;
	$scope.dataIntegration = contacts.dataIntegration;
}]);

mod.controller("contactCtrl", ["$scope", "contacts", function($scope, contacts) {
	$scope.pis = contacts.pis;
	$scope.webDevelopment = contacts.webDevelopment;
	$scope.dataIntegration = contacts.dataIntegration;
}]);