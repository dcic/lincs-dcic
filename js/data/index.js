var mod = angular.module("indexMod", []);

mod.controller("indexCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = '/images/index/';

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
            image: DIR + 'data.png',
            description: 'The BD2K-LINCS DCIC works with the Data and Signature Generation Centers to standardize metadata, integerate integrate datasets, and federate access to LINCS data.',
            links: [
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
                }
            ]
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
                    title: 'Global View of LINCS Datasets',
                    url: '#/resources#global-visualization-of-lincs-data'
                },
                {
                    title: 'Analyze Your Data',
                    url: '#/analyze#nav'
                },
                {
                    title: 'Open Source Code',
                    url: 'https://github.com/dcic',
                    target: '_blank'
                },
                {
                    title: 'APIs',
                    url: '#/resources#nav'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Training',
            image: DIR + 'summer.png',
            description: 'The BD2K-LINCS DCIC Summer Research Program is a research intensive, ten week training program for undergraduates in big data biomedical science.',
            links: [
                {
                    title: 'Data Science Course on Coursera',
                    url: 'https://www.coursera.org/course/bd2klincs',
                    target: '_blank'
                },
                {
                    title: 'Summer Research',
                    url: '#/summer-research-app#nav'
                },
                {
                    title: 'Postdoctoral Positions',
                    url: '#/jobs#postdoctoral-positions'
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