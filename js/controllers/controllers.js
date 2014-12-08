var indexControllers = angular.module('indexControllers', []);

// TODO: If we want to move the txt files over to a "real" database with Google spreadsheets:
// var DB_URL = 'https://spreadsheets.google.com/feeds/list/1fYZ551rG9aorcv7Ymc0mBZD-nluZ3btHR7fzy9GRi-Y/od6/public/basic?hl=en_US&alt=json';

var processNews = function(data) {
	var news = [];
	data.split('\n').forEach(function(e, i) {
		if (e) {
			var aNews = {}
			var splits = e.split('\t');
			aNews.date = splits[0];
			aNews.title = splits[1];
			aNews.url = splits[2];
			if (splits.length > 3 && splits[3]) {
				// check if aNews has a image.
				aNews.image = splits[3];
			} else {
				aNews.image = 'dcic-logo.png';
			}
			news.push(aNews);
		}
	});
	return _.sortBy(news,function(aNews) {
		return -Date.parse(aNews.date);
	});
}

var txtCtrl = function(processor, filename) {
	return function($scope, $http) {
		$http.get('data/' + filename + '.txt').success(function(data) {
			$scope.entries = processor(data);
		});
	}
}

var processLinks = function(data) {
	var result = [],
		lines = data.split('\n');
	lines.forEach(function(line, i) {
		var line = line.split('\t'),
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
		lines = data.split('\n');
	lines.forEach(function(line, i) {
		var line = line.split('\t'),
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
		lines = data.split('\n');
	lines.forEach(function(line, i) {
		var line = line.split('\t'),
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
	data.split('\n').forEach(function(e,i) {
		if (e) {
			var entry = {}
			var splits = e.split('\t');
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

indexControllers.controller('newsCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('data/news.txt').success(function(data) {
			$scope.entries = processNews(data);
		});
	}
]);

indexControllers.controller('communityCtrl',   ['$scope', '$http', txtCtrl(processLinks, 'community')]);
indexControllers.controller('educationCtrl',   ['$scope', '$http', txtCtrl(processLinks, 'education')]);
indexControllers.controller('publicationsCtrl',['$scope', '$http', txtCtrl(processPubs, 'publications')]);
indexControllers.controller('apidocsCtrl',     ['$scope', '$http', txtCtrl(processLinks, 'apidocs')]);
indexControllers.controller('toolsappsCtrl',   ['$scope', '$http', txtCtrl(processLinksImg, 'toolsapps')]);
indexControllers.controller('dataassaysCtrl',  ['$scope', '$http', txtCtrl(processLinks, 'dataassays')]);

indexControllers.controller('contactCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('data/contact/data-integration.txt').success(function(data) {
			$scope.dataIntegration = processContacts(data);
		});
		$http.get('data/contact/web-development.txt').success(function(data) {
			$scope.webDevelopment = processContacts(data);
		});
	}
]);

indexControllers.controller('emailCtrl', ['$scope', '$http','$timeout',
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


indexControllers.controller('AnalysisCtrl', ['$scope', '$http',
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


