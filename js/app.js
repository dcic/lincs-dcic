var mod = angular.module("lincsDcic", [
	"ngRoute",
 	"controllersMod",
 	"introMod",
 	"teamMod"
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
		when("/education", {
			templateUrl: "view/page/education.html"
		}).
		when("/publications", {
			templateUrl: "view/page/publications.html"
		}).
		when("/dataassays", {
			templateUrl: "view/page/dataassays.html"
		}).
		when("/toolsapps", {
			templateUrl: "view/page/toolsapps.html"
		}).
		when("/apisdocs", {
			templateUrl: "view/page/apisdocs.html"
		}).
		when("/news", {
			templateUrl: "view/page/news.html"
		}).

		/* Extra pages */
		when("/education/summerresearch", {
			templateUrl: "view/page/summerresearch.html"
		}).
		when("/education/phd", {
			templateUrl: "view/page/phd.html"
		}).
		when("/education/sotoutreach", {
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
