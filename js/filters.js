angular.module("htmlFilters", []).filter('sceTrustHtml', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
