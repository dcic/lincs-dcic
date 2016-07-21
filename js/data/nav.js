var mod = angular.module("navMod", []);

var $el;

mod.controller('navCtrl', ['$scope', '$element', function($scope, $element) {
    $el = $($element);

    $scope.categories = [
        {
            title: 'About',
            url: '#/about#nav',
            subnav: [
                {
                    title: 'Concierge',
                    url: '#/getting-started/concierge'
                },
                {
                    title: 'Tools',
                    url: '#/getting-started/direct-access-tools'
                    // target: '_self'
                },
                {
                    title: 'Team',
                    url: '#/about#team'
                },
                {
                    title: 'Internal Projects',
                    url: '#/internal-dsrp#nav'
                },
                {
                    title: 'External Projects',
                    url: '#/external-dsrp#nav'
                }
            ]
        },
        {
            title: 'Training and Outreach',
            url: '#/training',
            subnav: [
                {
                    title: 'Summer Research',
                    url: '#/summer-research-app#nav'
                },
                {
                    title: 'Webinars',
                    url: '#/webinars#nav'
                },
                {
                    title: 'Community Outreach',
                    url: '#/workshops-seminars-symposia#nav'
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
                    title: '2016 Data Science Symposium',
                    url: '#/2016-data-science-symposium'
                },
		        {
                    title: '2014 Big Data Symposium',
                    url: '#/2014-big-data-symposium#nav'
                },
		        {
                    title: 'Invited Seminar Series',
                    url: '#/seminar-series#nav'
                },
            ]
        },
        {
            title: 'Funding Opportunities',
            url: '#/funding'
        },
    ];

    $scope.categoriesRight = [
        // {
        //     title: 'QUICK START',
        //     url: '#/getting-started/direct-access-tools',
        //     target: '_self'
        // },
        {
            title: 'LINCSPROJECT',
            url: 'http://www.lincsproject.org/',
            target: '_blank'
        }
    ];

    // -1 for border.
    $scope.width = Math.round($el.width() / $scope.categories.length) - 1;
}]);
