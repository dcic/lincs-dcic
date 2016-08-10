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
            title: 'Data Science',
            image: DIR + 'research.png',
            description: 'The BD2K-LINCS DCIC focuses on construction of high fidelity networks from LINCS data combined with other resources.',
            links: [
                {
                    title: 'Publications',
                    url: '#/publications#nav'
                },
                {
                    title: 'Internal Projects',
                    url: '#/internal-dsrp#nav'
                },
                {
                    title: 'External Projects',
                    url: '#/external-dsrp#nav'
                },
                {
                    title: 'Collaborate with Us',
                    url: '#/edsr#nav'
                }
            ]
        },
        {
            location: 'top',
            title: 'Data Integration',
            image: DIR + 'data.png',
            description: 'Aims of the BD2K-LINCS DCIC include standardizing metadata, integrating datasets, and federating access to LINCS data.',
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
                    url: 'http://amp.pharm.mssm.edu/Harmonizome',
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
            description: 'We are developing tools for integrative data access and visualization across LINCS, BD2K and other relevant data sources.',
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
                    title: 'Analyze Your Gene Signatures',
                    url: '#/analyze#nav'
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
            description: 'Our Center actively engages the research community by delivering data science courses as well as through mentoring trainees.',
            links: [
                {
                    title: 'PhD Program in Big Data at UC',
                    url: 'https://med.uc.edu/eh/divisions/bio/programs/phd-biostatistics-big-data-track',
                    target: '_blank'
                },
                {
                    title: 'Summer Research Training Program',
                    url: '#/summer-research-app#nav'
                },
                {
                    title: 'Big Data Science Course',
                    url: 'https://www.coursera.org/learn/bd2k-lincs',
                    target: '_blank'
                }
            ]
        },
        {
            location: 'bottom',
            title: 'Crowdsourcing',
            image: DIR + 'webinars.png',
            description: 'The BD2K-LINCS DCIC developed a crowdsourcing portal which engages the research community in various micro- and megatasks.',
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
            description: 'The BD2K-LINCS DCIC uses webinars, training seminars, challenges, workshops and symposia to create an active LINCS community.',
            links: [
                {
                    title: 'Webinars',
                    url: '#/webinars#nav'
                },
                {
                    title: 'Community Outreach',
                    url: '#/workshops-seminars-symposia#nav'
                },
                {
                    title: 'Invited Seminar Series',
                    url: '#/seminar-series#nav'
                }
            ]
        }
    ];
}]);
