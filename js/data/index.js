var mod = angular.module("indexMod", []);

mod.controller("indexCtrl", ["$scope", "$sce", "$controller", function($scope, $sce, $controller) {

    var DIR = '/images/index/';

    var datasetsCtrlScope = $scope.$new();
    $controller('datasetsCtrl', { $scope: datasetsCtrlScope });
    var datasets = _.filter(datasetsCtrlScope.datasets, function(obj) {
        return obj.showOnIndexPage;
    });
    datasets.push({
        title: 'Data Standards and Releases on lincsproject.org',
        url: 'http://www.lincsproject.org/data/',
        target: '_target'
    });

    var calendarCtrlScope = $scope.$new();
    $controller('calendarCtrl', { $scope: calendarCtrlScope });
    calendarCtrlScope.getEvents(function(data) {
        var $eventsList = $('.events .caption ul'),
            html;
        html = _.map(data.upcoming.slice(0,2), function(obj) {
            return '<li><a href="' + obj.link + '" target="_blank">' + obj.title + '</a>';
        });
        html += '<li><a href="#/news#nav">More</a>';
        $eventsList.html(html);
    });

    $scope.overviewText = $sce.trustAsHtml("The BD2K-LINCS DCIC is comprised of four major components: Integrated Knowledge Environment (IKE), Data Science Research (DSR), Community Training and Outreach (CTO) and Consortium Coordination and Administration (CCA). The Center is constructing a high-capacity scalable integrated knowledge environment enabling federated access, intuitive querying and integrative analysis and visualization across all LINCS resources and many additional external data types from other relevant resources. The Center’s data science research projects are aimed at addressing various data integration and intracellular molecular regulatory network challenges. The Center aims to develop: 1) methods to connect cellular and organismal phenotypes with molecular cellular signatures, and 2) novel data visualization methods for dynamically interacting with large-genomics and proteomics datasets.");

    twitterFetcher.fetch({
        id: '540278089990029312',
        domId: 'twitter-fetcher',
        maxTweets: 1,
        enableLinks: true,
        showUser: false,
        showTime: false,
        showRetweet: false,
        showInteraction: false
    });

    $scope.overviewList = [
        {
            title: "Data Science Research",
            url: "#about#data-science-research"
        },
        {
            title: "Integrated Knowledge Environment",
            url: "#about#integrated-knowledge-environment"
        },
        {
            title: "Training and Outreach",
            url: "#about#community-training-and-outreach"
        },
        {
            title: "Team",
            url: "#about#team"
        }
    ];

    $scope.stories = [
        {
            location: 'top',
            title: 'Research',
            image: DIR + 'research.png',
            description: 'The DCIC focuses on construction of high fidelity networks from LINCS data combined with other resources.',
            links: [
                {
                    title: 'Publications',
                    url: '#/publications#nav'
                },
                {
                    title: 'Collaborate with Us',
                    url: '#/edsr#nav'
                }
            ]
        },
        {
            location: 'top',
            title: 'Data',
            image: DIR + 'big-data.png',
            description: 'The DCIC works with Data Signature Generation Centers to standardize metadata, integerate datasets, and federate access.',
            links: datasets
        },
        {
            location: 'top',
            title: 'Software',
            image: DIR + 'software.jpg',
            description: 'The DCIC develops web-based tools for integrative data access and visualization across the distributed LINCS and BD2K sites and other relevant data sources.',
            links: [
                {
                    title: 'Tools and Apps',
                    url: '#/resources#nav'
                },
                {
                    title: 'Open Source Code',
                    url: 'https://github.com/dcic',
                    target: '_blank'
                },
                {
                    title: 'Analyze Your Data',
                    url: '#/analyze#nav'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Outreach',
            image: DIR + 'summer.jpg',
            description: 'The DCIC\'s outreach includes a research intensive summer program for undergraduates and Massive Open Online Courses.',
            links: [
                {
                    title: 'Summer Research Training Program',
                    url: '#/summer-fellows#nav'
                },
                {
                    title: 'Big Data Science on Coursera',
                    url: 'https://www.coursera.org/course/bd2klincs',
                    target: '_blank'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Webinars',
            image: DIR + 'webinars.png',
            description: 'Join or watch DCIC Data Science Research webinars.',
            links: [
                {
                    title: 'Upcoming Talks',
                    url: '#/webinars#nav'
                },
                {
                    title: 'DCIC YouTube Channel',
                    url: 'https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg',
                    target: '_blank'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Events',
            domClass: 'events',
            image: DIR + 'events.jpg',
            description: 'Participate in upcoming DCIC events.',
            links: [
                {
                    title: 'More',
                    url: '#/news'
                }
            ]
        }
    ];
}]);