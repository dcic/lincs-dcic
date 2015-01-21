var mod = angular.module("subnavMod", []);

var $el;

mod.controller('subnavCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: 'About DCIC',
            url: '#/about'
        },
        {
            title: 'Data',
            url: '#/data'
        },
        {
            title: 'Training and Outreach',
            url: '#/training'
        },
        {
            title: 'Resources',
            url: '#/resources'
        },
        {
            title: 'Publications',
            url: '#/publications'
        },
        {
            title: 'Events',
            url: '#/events'
        },
        {
            title: 'News',
            url: '#/news'
        }
    ];

    $scope.categoriesRight = [
        {
            title: 'LINCSPROJECT',
            url: 'http://www.lincsproject.org/',
            target: '_blank'
        }
    ];

    // -1 for border.
    $scope.width = Math.round($el.width() / $scope.categories.length) - 1;
}]);
