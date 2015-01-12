var mod = angular.module("subnavMod", []);

var $el;

mod.controller('subnavCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: "Education",
            url: "/#/education"
        },
        {
            title: "Publications",
            url: "/#/publications"
        },
        {
            title: "Datasets & Assays",
            url: "/#/dataassays"
        },
        {
            title: "Tools & Apps",
            url: "/#/toolsapps"
        },
        {
            title: "APIs & Docs",
            url: "/#/apisdocs"
        },
        {
            title: "Events",
            url: "/#/events"
        },
        {
            title: "Community",
            url: "/#/community"
        }
    ];

    // -1 for border.
    $scope.width = Math.round($el.width() / $scope.categories.length) - 1;
}]);
