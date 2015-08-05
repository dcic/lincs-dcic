var mod = angular.module("navMod", []);

var $el;

mod.controller('navCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: 'About',
            url: '#/about',
            subnav: [
                {
                    title: 'DCIC',
                    url: '#/about#intro'
                },
                {
                    title: 'Team',
                    url: '#/about#team'
                },
                {
                    title: 'Data and Signature Generating Centers',
                    url: '#datacenters'
                }
            ]
        },
        {
            title: 'Training and Outreach',
            url: '#/training',
            subnav: [
                {
                    title: 'Summer Fellows',
                    url: '#/summer-fellows'
                },
                {
                    title: 'Webinars',
                    url: '#/webinars'
                }
            ]
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
            title: 'News and Events',
            url: '#/news'
        },
        {
            title: 'Funding Opportunities',
            url: '#/funding'
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
