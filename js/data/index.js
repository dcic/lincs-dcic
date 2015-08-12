var mod = angular.module("indexMod", []);

mod.controller("indexCtrl", ["$scope", "$sce", "$controller", function($scope, $sce, $controller) {

    var DIR = '/images/index/';

    var datasetsCtrlScope = $scope.$new();
    $controller('datasetsCtrl', { $scope: datasetsCtrlScope });
    var datasets = _.filter(datasetsCtrlScope.datasets, function(obj) {
        return obj.showOnIndexPage;
    });

    /*var calendarCtrlScope = $scope.$new();
    $controller('calendarCtrl', { $scope: calendarCtrlScope });
    calendarCtrlScope.getEvents(function(data) {
        var $eventsList = $('.events .caption ul'),
            html;
        html = _.map(data.upcoming.slice(0,2), function(obj) {
            return '<li><a href="' + obj.link + '" target="_blank">' + obj.title + '</a>';
        });
        html += '<li><a href="#/news#nav">More</a>';
        $eventsList.html(html);
    });*/

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
            description: 'The BD2K-LINCS DCIC focuses on construction of high fidelity networks from LINCS data combined with other resources.',
            links: [
                {
                    title: 'Publications',
                    url: '#/publications#nav'
                },
                {
                    title: 'Collaborate with Us',
                    url: '#/edsr#nav'
                },
                {
                    title: 'External Data Science Research Projects',
                    url: '#/external-dsrp#nav'
                },
                {
                    title: 'Internal Data Science Research Projects',
                    url: '#/internal-dsrp#nav'
                }
            ]
        },
        {
            location: 'top',
            title: 'Data',
            image: DIR + 'big-data.png',
            description: 'The BD2K-LINCS DCIC works with the Data and Signature Generation Centers to standardize metadata, integerate integrate datasets, and federate access to LINCS data.',
            links: datasets.concat([
                {
                    title: 'Data Standards and Releases on lincsproject.org',
                    url: 'http://www.lincsproject.org/data/',
                    target: '_target'
                },
                {
                    title: 'Metadata Standards',
                    url: 'http://www.lincsproject.org/data/data-standards/',
                    target: '_blank'
                },
                {
                    title: 'LINCS Data Registry',
                    url: 'http://amp.pharm.mssm.edu/LDR'
                },
                {
                    title: 'Harmonizome',
                    url: 'http://maayanlab.net/harmonizome/',
                    target: '_blank'
                },
                {
                    title: 'Gene Set Libraries',
                    url: 'http://amp.pharm.mssm.edu/Enrichr/#stats',
                    target: '_blank'
                },
                {
                    title: 'BD2K-LINCS DCIC Data Portal (under construction)',
                    url: ''
                }
            ])
        },
        {
            location: 'top',
            title: 'Software',
            image: DIR + 'software.jpg',
            description: 'The BD2K-LINCS DCIC develops web-based tools for integrative data access and visualization across the distributed LINCS and BD2K sites and other relevant data sources.',
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
                    title: 'Analyze Your Data with the B2DK-LINCS DCIC Tools',
                    url: '#/analyze#nav'
                },
                {
                    title: 'Global View of LINCS Datasets',
                    url: '#/resources#global-visualization-of-lincs-data'
                },
                {
                    title: 'APIs',
                    url: '#/resources#nav'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Summer Research Program',
            image: DIR + 'summer.jpg',
            description: 'The BD2K-LINCS DCIC Summer Research Program is a research intensive, ten week training program for undergraduates in big data biomedical science.',
            links: [
                {
                    title: 'Online Application',
                    url: 'https://docs.google.com/forms/d/1_gQ7En4jgWBZeAuV0gzg2TmOpgm0EQTfPF3hHY2e-go/viewform',
                    target: '_blank'
                },
                {
                    title: 'Past Trainees',
                    url: '#/summer-fellows-2015#nav'
                },
                {
                    title: 'Program Description',
                    url: '#/srp#nav'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Crowdsourcing',
            image: DIR + 'webinars.png',
            description: 'For problems that are difficult for machine learning and automation, crowdsourcing is a powerful alterantive. The BD2K-LINCS DCIC offers several crowdsourcing projects and tools.',
            links: [
                {
                    title: 'Participate in Microtasks',
                    url: 'http://www.maayanlab.net/crowdsourcing/',
                    target: '_blank'
                },
                {
                    title: 'Participate in Megatasks',
                    url: 'http://www.maayanlab.net/crowdsourcing/',
                    target: '_blank'
                },
                {
                    title: 'Data Science Course on Coursera',
                    url: 'https://www.coursera.org/course/bd2klincs',
                    target: '_blank'
                },
                {
                    title: 'Extract Gene Sets with GEO2Enrichr',
                    url: 'http://amp.pharm.mssm.edu/g2e/',
                    target: '_blank'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Events',
            domClass: 'events',
            image: DIR + 'events.jpg',
            description: 'Participate in upcoming BD2K-LINCS DCIC events.',
            links: [
                {
                    title: 'Webinars',
                    url: '#/webinars#nav'
                },
                {
                    title: 'Workshops, Seminars, Symposia',
                    url: '#/workshops-seminars-symposia#nav'
                },
                {
                    title: 'BD2K-LINCS DCIC Seminar Series',
                    url: '#/seminar-series#nav'
                }
            ]
        }
    ];
}]);