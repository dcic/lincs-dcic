var mod = angular.module("lincsDcic", [
	"ngRoute",
 	"analyzeMod",
	"apisMod",
	"miniSymposiumMod",
	"calendarMod",
	"carouselMod",
 	"datacentersMod",
 	"datasetsMod",
	"emailMod",
	"edsrappMod",
	"externalDsrpMod",
	"fundingMod",
	"gettingStartedMod",
	"htmlFilters",
	"indexMod",
	"internalDsrpMod",
 	"introMod",
 	"newsMod",
    "portalMod",
 	"publicationsMod",
 	"teamMod",
 	"toolsMod",
 	"trainingMod",
 	"navMod",
	"seminarSeriesMod",
 	"summerFellowsMod",
 	"webinarsMod",
 	"workshopsEtcMod",
	"ui.bootstrap"
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
		when("/funding", {
            templateUrl: "view/page/funding.html"
		}).
        /* Getting started and pages */
        when("/getting-started/concierge", {
            templateUrl: "view/getting-started/concierge.html"
        }).
		when("/getting-started/direct-access-tools", {
			templateUrl: "view/getting-started/direct-access-tools.html"
		}).
        when("/getting-started/temp", {
            templateUrl: "view/getting-started/temp.html"
        }).

		/* Extra pages */
		when("/webinars", {
			templateUrl: "view/page/webinars.html"
		}).
		when("/summer-research-app", {
			templateUrl: "view/page/summer-research-app.html"
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
		when("/edsr", {
			templateUrl: "view/page/edsr.html"
		}).
		// Applications are closed.
		//when("/edsrapp", {
		//    templateUrl: "view/page/edsrapp.html"
		//}).
		when("/datacenters", {
			templateUrl: "view/page/datacenters.html"
		}).
		when("/events", {
			templateUrl: "view/page/events.html"
		}).
		when("/summer-fellows-2015", {
            templateUrl: "view/page/summer-fellows-2015.html"
		}).
		when("/internal-dsrp", {
			templateUrl: "view/page/internal-dsrp.html"
		}).
		when("/external-dsrp", {
			templateUrl: "view/page/external-dsrp.html"
		}).
		when("/workshops-seminars-symposia", {
			templateUrl: "view/page/workshops-etc.html"
		}).
		when("/seminar-series", {
			templateUrl: "view/page/seminar-series.html"
		}).
		when("/2014-big-data-symposium", {
			templateUrl: "view/page/2014-big-data-symposium.html"
		}).
		when("/2016-data-science-symposium", {
			templateUrl: "view/page/2016-data-science-symposium.html"
		}).
		/* Default */
		otherwise({
			redirectTo: "/"
		});
	}
]);

mod.run(function($rootScope, $location, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if ($location.hash()) {
            setTimeout(function() {
                $anchorScroll();
            }, 100);
        }
    });
});