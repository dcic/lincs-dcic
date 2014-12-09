var controllersMod = angular.module("controllersMod", [
	"apidocsMod",
	"communityMod",
	"datasetsassaysMod",
	"educationMod",
	"newsMod",
	"publicationsMod",
	"toolsappsMod"
]);

var txtCtrl = function(processor, filename) {
	return function($scope, $http) {
		$http.get("data/" + filename + ".txt").success(function(data) {
			$scope.entries = processor(data);
		});
	}
}

var processLinks = function(data) {
	var result = [],
		lines = data.split("\n");
	lines.forEach(function(line, i) {
		var line = line.split("\t"),
			title = line[0],
			url = line[1]
		result.push({
			title: title,
			url: url
		});
	});
	return result;
}

var processLinksImg = function(data) {
	var result = [],
		lines = data.split("\n");
	lines.forEach(function(line, i) {
		var line = line.split("\t"),
			title = line[0],
			url = line[1],
			image  = line[2];
		result.push({
			title: title,
			url: url,
			image: image
		});
	});
	return result;
}

var processPubs = function(data) {
	var pubs = [],
		lines = data.split("\n");
	lines.forEach(function(line, i) {
		var line = line.split("\t"),
			title = line[0],
			extra = line[1],
			year = line[2]
			url  = line[3];
		pubs.push({
			title: title,
			extra: extra,
			year: year,
			url: url
		});
	});
	return pubs;
}

var processContacts = function(data) {
	var entries = [];
	data.split("\n").forEach(function(e,i) {
		if (e) {
			var entry = {}
			var splits = e.split("\t");
			entry.name = splits[0];
			entry.affiliation = splits[1];
			entry.email = splits[2];
			entries.push(entry);
		}
	});
	return _.sortBy(entries,function(entry) {
		return entry.name;
	});
}

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


controllersMod.controller("contactCtrl", ["$scope", "$http",
	function($scope, $http) {
		$http.get("data/contact/data-integration.txt").success(function(data) {
			$scope.dataIntegration = processContacts(data);
		});
		$http.get("data/contact/web-development.txt").success(function(data) {
			$scope.webDevelopment = processContacts(data);
		});
	}
]);

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