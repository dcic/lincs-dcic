var mod = angular.module("controllersMod", [
	"analyzeMod",
	"apisdocsMod",
	"carouselMod",
	"communityMod",
	"contactMod",
	"datacentersMod",
	"datasetsassaysMod",
	"educationMod",
	"emailMod",
	"newsMod",
	"publicationsMod",
	"teamMod",
	"toolsappsMod",
	"subnavMod"
]);

mod.controller("apisdocsCtrl", ["$scope", "apisdocs", function($scope, apisdocs) {
	$scope.entries = apisdocs.links;
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
	$scope.dcicLinks = toolsapps.dcicLinks;
	$scope.dsgcLinks = toolsapps.dsgcLinks;
}]);

mod.controller("datasetsassaysCtrl", ["$scope", "datasetsassays", function($scope, datasetsassays) {
	$scope.entries = datasetsassays.links;
}]);

mod.controller("publicationsCtrl", ["$scope", "publications", function($scope, publications) {
	$scope.entries = publications.links;
}]);

mod.controller("teamCtrl", ["$scope", "team", function($scope, team) {
	$scope.pis = team.pis;
	$scope.webDevelopment = team.webDevelopment;
	$scope.dataIntegration = team.dataIntegration;
	$scope.dataScience = team.dataScience;
	$scope.outreach = team.outreach;
	$scope.nih = team.nih;
}]);

mod.controller("datacentersCtrl", ["$scope", "datacenters", function($scope, datacenters) {
	$scope.entries = datacenters.links;
}]);