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
                    title: 'BD2K-LINCS DCIC',
                    url: '#/about#intro'
                },
                {
                    title: 'Data and Signature Generating Centers',
                    url: '#datacenters'
                },
                {
                    title: 'Team',
                    url: '#/about#team'
                }
            ]
        },
        {
            title: 'Training and Outreach',
            url: '#/training',
            subnav: [
                {
                    title: 'Summer Fellows',
                    url: '#/summer-fellows-2015'
                },
                {
                    title: 'Big Data Science on Coursera',
                    url: 'https://www.coursera.org/course/bd2klincs',
                    target: '_blank'
                },
                {
                    title: 'Data Science Research Webinars',
                    url: '#/webinars'
                },
                {
                    title: 'Big Data Biostatistics PhD Program',
                    url: 'http://eh.uc.edu/',
                    target: '_blank'
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
            url: '#/news',
            subnav: [
                {
                    title: 'Workshops, Seminars, Symposia',
                    url: '#/workshops-seminars-symposia#nav'
                },
                {
                    title: 'BD2K-LINCS DCIC Seminar Series',
                    url: '#/seminar-series#nav'
                }
            ]
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
