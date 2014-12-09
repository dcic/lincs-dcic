var mod = angular.module("emailMod", []);

mod.controller("emailCtrl", ["$scope", "$http","$timeout", function($scope, $http, $timeout) {
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
}]);