'use strict';

/* App Module */
var LINCS_DCIC = angular.module('LINCS-DCIC', [
 	'indexControllers',
 	'ngRoute'
]);

LINCS_DCIC.config(['$routeProvider', '$locationProvider',

	function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/container.html'
			}).
			
			/* Main categories */
			when('/news', {
				templateUrl: 'partials/news.html',
				controller: 'newsCtrl'
			}).
			when('/introduction', {
				templateUrl: 'partials/introduction.html'
			}).

			/* education */
			when('/education', {
				templateUrl: 'partials/education.html',
				controller: 'educationCtrl'
			}).
			when('/education/summerresearch', {
				templateUrl: 'partials/summerresearch.html'
			}).
			when('/education/phd', {
				templateUrl: 'partials/phd.html'
			}).
			when('/education/sotoutreach', {
				templateUrl: 'partials/sotoutreach.html'
			}).

			when('/publications', {
				templateUrl: 'partials/publications.html',
				controller: 'publicationsCtrl'
			}).
			when('/dataassays', {
				templateUrl: 'partials/dataassays.html',
				controller: 'dataassaysCtrl'
			}).
			when('/toolsapps', {
				templateUrl: 'partials/toolsapps.html',
				controller: 'toolsappsCtrl'
			}).
			when('/apidocs', {
				templateUrl: 'partials/apidocs.html',
				controller: 'apidocsCtrl'
			}).

			/* Extras */
			when('/about', {
				templateUrl: 'partials/about.html',
			}).
			when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'contactCtrl'
			}).
			when('/jobs', {
				templateUrl: 'partials/jobs.html'
			}).
			when('/analysis', {
				templateUrl: 'partials/analysis.html',
				controller: "AnalysisCtrl"
			}).
			when('/callfordsrp', {
				templateUrl: 'partials/callfordsrp.html'
			});

			/*when('/crowdsourcing',{
				templateUrl: 'partials/crowdsourcing.html',
			}).
			otherwise({
				redirectTo: '/index'
			});*/

	// $locationProvider.html5Mode(true);
	}]);
  
  // custom dotdotdot directive
LINCS_DCIC.directive("dotdotdot",function() {
	return function($scope, $element, attrs) {
		var id = $element.parent().parent().attr('id');
		$scope.$watch('$last', function(v, test, test2) {
			if (v) {
				$('#' + id + " .category .content").dotdotdot({
					watch: "window"
				});
			}
		});
	};
});


