var mod = angular.module("subnavMod", []);

var $el;

mod.controller('subnavCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: "Intro",
            url: "/#/introduction"
        },
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
            title: "News",
            url: "/#/news"
        },
        {
            title: "Events",
            url: "/#/events"
        }
    ];

    // -1 for border.
    $scope.width = Math.round($el.width() / $scope.categories.length) - 1;
}]);
