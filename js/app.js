var mod = angular.module("lincsDcic", [
	"ngRoute",
 	"analyzeMod",
	"apisMod",
	"calendarMod",
	"carouselMod",
	"communityMod",
 	"datacentersMod",
 	"datasetsMod",
	"emailMod",
 	"introMod",
 	"newsMod",
 	"publicationsMod",
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
        when("/data", {
			templateUrl: "view/page/datasets.html"
		}).
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
		when("/srp", {
			templateUrl: "view/page/srp.html"
		}).
		when("/phd", {
			templateUrl: "view/page/phd.html"
		}).
		when("/toxicology", {
			templateUrl: "view/page/toxicology.html"
		}).
		when("/jobs", {
			templateUrl: "view/page/jobs.html"
		}).
		when("/analyze", {
			templateUrl: "view/page/analyze.html"
		}).
		when("/dsrp", {
			templateUrl: "view/page/dsrp.html"
		}).
		when("/datacenters", {
			templateUrl: "view/page/datacenters.html"
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
