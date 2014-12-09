var controllersMod = angular.module("controllersMod", [
	"apidocsMod",
	"communityMod",
	"contactsMod",
	"datasetsassaysMod",
	"educationMod",
	"newsMod",
	"publicationsMod",
	"toolsappsMod"
]);

controllersMod.controller("apidocsCtrl", ["$scope", "apidocs", function($scope, apidocs) {
	$scope.entries = apidocs.links;
}]);

controllersMod.controller("communityCtrl", ["$scope", "community", function($scope, community) {
	$scope.entries = community.links;
}]);

controllersMod.controller("educationCtrl", ["$scope", "education", function($scope, education) {
	$scope.entries = education.links;
}]);

controllersMod.controller("newsCtrl", ["$scope", "news", function($scope, news) {
	$scope.entries = news.getLinks();
}]);

controllersMod.controller("toolsappsCtrl", ["$scope", "toolsapps", function($scope, toolsapps) {
	$scope.entries = toolsapps.links;
}]);

controllersMod.controller("datasetsassaysCtrl", ["$scope", "datasetsassays", function($scope, datasetsassays) {
	$scope.entries = datasetsassays.links;
}]);

controllersMod.controller("publicationsCtrl", ["$scope", "publications", function($scope, publications) {
	$scope.entries = publications.links;
}]);

controllersMod.controller("contactCtrl", ["$scope", "contacts", function($scope, contacts) {
	$scope.pis = contacts.pis;
	$scope.webDevelopment = contacts.webDevelopment;
	$scope.dataIntegration = contacts.dataIntegration;
}]);

controllersMod.controller("emailCtrl", ["$scope", "$http","$timeout",
	function($scope, $http, $timeout) {
		$scope.submitted = false;
		$scope.submit = function() {
			if ($scope.email) {
				$http.get("http://www.maayanlab.net/LINCS/DCIC/index.php?email=" + $scope.email)
					.success(function(data){
						$scope.submitted = true;
						var reset = function() {
							$scope.submitted = false;
						}
						$timeout(reset, 500);
					});
			}
		}
	}
]);

controllersMod.controller("AnalysisCtrl", ["$scope", "$http",
	function($scope, $http) {
		$scope.formData = {}
		$scope.submit = function(){
			if($scope.formData.geneList){
				$http.post("http://www.maayanlab.net/LINCS/DCIC/signature.php",$scope.formData);
				enrich({list:$scope.formData.geneList,description:$scope.formData.desc});
			}
		}
	}
]);