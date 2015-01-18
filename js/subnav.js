var mod = angular.module("subnavMod", []);

var $el;

mod.controller('subnavCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: 'About DCIC',
            url: '/#/about'
        },
        {
            title: 'Training and Outreach',
            url: '/#/outreach'
        },
        {
            title: 'Resources',
            url: '/#/resources'
        },
        {
            title: 'Publications',
            url: '/#/publications'
        },
        {
            title: 'Events',
            url: '/#/events'
        },
        {
            title: 'News',
            url: '/#/news'
        }
        /*{
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
        }*/
    ];

    $scope.categoriesRight = [
        {
            title: 'LINCSPROJECT',
            url: 'http://www.lincsproject.org/'
        }
    ];

    // -1 for border.
    $scope.width = Math.round($el.width() / $scope.categories.length) - 1;
}]);
