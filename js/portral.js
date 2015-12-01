var mod = angular.module('portalMod', ['ngTagsInput', 'mgcrea.ngStrap']);

mod.directive('lichBar', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', '$http', function ($scope, $http) {
            var url = 'http://amp.pharm.mssm.edu/Lich/';
            $scope.tags = [];
            $scope.loadTags = function(typed) {
                return $http.get(url + 'tags?typed=' + typed);
            };
            $scope.$watchCollection('tags', function(newVal, oldVal) {
                var tagString = $scope.tags.map(function(tag) {
                    return tag.text;
                }).join(',');
                $scope.lichSearchUrl = url + '#/search/' + tagString
            });
        }],
        templateUrl: 'view/getting-started/lich.html'
    }
});

mod.directive('harmonizomeBar', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            scope.searchTerm = "";
            scope.states = ['foo', 'bar'];
        },
        controller: ['$scope', '$http', function ($scope, $http) {
            var BASE_URL = 'http://amp.pharm.mssm.edu/Harmonizome/',
                SEARCH_URL = BASE_URL + 'search?q=',
                SUGGEST_URL = BASE_URL + 'api/1.0/suggest?q=';
            $scope.search = function() {
                window.open(SEARCH_URL + $scope.searchTerm, '_blank');
            };
            $scope.entities = function(searchTerm) {
                return $http.get(SUGGEST_URL + searchTerm).then(function(response){
                    return response.data;
                });
            };
        }],
        templateUrl: 'view/getting-started/harmonizome.html'
    }
});