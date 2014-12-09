var mod = angular.module("lincsDcic", [
	"ngRoute",
 	"controllersMod"
]);

mod.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "partials/container.html"
		}).
		
		/* Main categories */
		when("/news", {
			templateUrl: "partials/news.html"
		}).
		when("/introduction", {
			templateUrl: "partials/introduction.html"
		}).

		/* Education */
		when("/education", {
			templateUrl: "partials/education.html"
		}).
		when("/education/summerresearch", {
			templateUrl: "partials/summerresearch.html"
		}).
		when("/education/phd", {
			templateUrl: "partials/phd.html"
		}).
		when("/education/sotoutreach", {
			templateUrl: "partials/sotoutreach.html"
		}).

		when("/publications", {
			templateUrl: "partials/publications.html"
		}).
		when("/dataassays", {
			templateUrl: "partials/dataassays.html"
		}).
		when("/toolsapps", {
			templateUrl: "partials/toolsapps.html"
		}).
		when("/apidocs", {
			templateUrl: "partials/apidocs.html"
		}).

		/* Extras */
		when("/about", {
			templateUrl: "partials/about.html",
		}).
		when("/contact", {
			templateUrl: "partials/contact.html"
		}).
		when("/team", {
			templateUrl: "partials/team.html"
		}).
		when("/jobs", {
			templateUrl: "partials/jobs.html"
		}).
		when("/analyze", {
			templateUrl: "partials/analyze.html"
		}).
		when("/callfordsrp", {
			templateUrl: "partials/callfordsrp.html"
		}).

		/* Default */
		otherwise({
			redirectTo: "/"
		});
	}
]);