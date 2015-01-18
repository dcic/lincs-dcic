var mod = angular.module("lincsDcic", [
	"ngRoute",
	"apisMod",
 	"controllersMod",
 	"datasetsMod",
 	"introMod",
 	"teamMod",
 	"toolsMod",
 	"trainingMod",
 	"subnavMod"
]);

mod.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "view/container.html"
		}).
		
		/* Main categorie pages */
		when("/about", {
			templateUrl: "view/page/about.html"
		}).
		when("/training", {
			templateUrl: "view/page/training.html"
		}).
		when("/resources", {
			templateUrl: "view/page/resources.html"
		}).
		when("/publications", {
			templateUrl: "view/page/publications.html"
		}).
		when("/news", {
			templateUrl: "view/page/news.html"
		}).

		/* Extra pages */
		when("/training/summerresearch", {
			templateUrl: "view/page/summerresearch.html"
		}).
		when("/training/phd", {
			templateUrl: "view/page/phd.html"
		}).
		when("/training/sotoutreach", {
			templateUrl: "view/page/sotoutreach.html"
		}).
		when("/contact", {
			templateUrl: "view/page/contact.html"
		}).
		when("/jobs", {
			templateUrl: "view/page/jobs.html"
		}).
		when("/analyze", {
			templateUrl: "view/page/analyze.html"
		}).
		when("/eDSR", {
			templateUrl: "view/page/callfordsrp.html"
		}).
		when("/datacenters", {
			templateUrl: "view/page/datacenters.html"
		}).
		when("/mooc", {
			templateUrl: "view/page/mooc.html"
		}).
		when("/events", {
			templateUrl: "view/page/events.html"
		}).

		/* Default */
		otherwise({
			redirectTo: "/"
		});
	}
]);
