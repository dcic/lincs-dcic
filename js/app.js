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
			templateUrl: "partials/news.html",
			controller: "newsCtrl"
		}).
		when("/introduction", {
			templateUrl: "partials/introduction.html"
		}).

		/* Education */
		when("/education", {
			templateUrl: "partials/education.html",
			controller: "educationCtrl"
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
			templateUrl: "partials/publications.html",
			controller: "publicationsCtrl"
		}).
		when("/dataassays", {
			templateUrl: "partials/dataassays.html",
			controller: "datasetsassaysCtrl"
		}).
		when("/toolsapps", {
			templateUrl: "partials/toolsapps.html",
			controller: "toolsappsCtrl"
		}).
		when("/apidocs", {
			templateUrl: "partials/apidocs.html",
			controller: "apidocsCtrl"
		}).

		/* Extras */
		when("/about", {
			templateUrl: "partials/about.html",
		}).
		when("/contact", {
			templateUrl: "partials/contact.html",
			controller: "contactCtrl"
		}).
		when("/jobs", {
			templateUrl: "partials/jobs.html"
		}).
		when("/analysis", {
			templateUrl: "partials/analysis.html",
			controller: "AnalysisCtrl"
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