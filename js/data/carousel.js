
var mod = angular.module("carouselMod", ["ui.bootstrap"]);

mod.controller("carouselCtrl", ["$scope", function($scope) {

    var DIR = '/images/carousel/';

    $scope.slides = [
        //  {
        //      index: 0,
        //      image: DIR + 'bubble-graph.png',
        //      title: 'Big Data Science Course',
        //      caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
        //      link: 'https://www.coursera.org/learn/bd2k-lincs',
        //      target: '_blank'
        //  },
        // {
        //     index: 1,
        //     image: DIR + 'harmonizome.png',
        //     title: 'The Harmonizome',
        //     caption: 'The BD2K-LINCS DCIC developed a biological knowledge engine built on top of information about genes and proteins from 114 datasets.',
        //     link: 'http://amp.pharm.mssm.edu/Harmonizome',
        //     target: '_blank'
        // },
        // {
        //     index: 2,
        //     image: DIR + 'dag.png',
        //     title: 'Research Projects',
        //     caption: 'The BD2K-LINCS DCIC is conducting research by integrating and analyzing various big data resources.',
        //     link: /internal-dsrp#nav'
        // },
        // {
        //     index: 3,
        //     image: DIR + 'summer-fellows-2016.png',
        //     title: 'Summer Research Program',
        //     caption: 'We are currently accepting applications for our 2017 Summer Research Training Program in Biomedical Big Data Science!',
        //     link: /summer-research-app#nav'
        // }
        {
            index: 0,
            image: DIR + 'dcic_dss_2017.png',
            title: 'BD2K-LINCS Data Science Symposium 2017',
            caption: 'DSS 2017 focused on the systems biology of cellular perturbations and applications in drug development, translational biomedicine and environmental health.',
            link: 'https://sites.google.com/view/sbdss2017/home',
            target: '_blank'
        },
        {
            index: 1,
            image: DIR + 'bubble-graph.png',
            title: 'Crowdsourcing for Scientific Discovery',
            caption: 'BD2K-LINCS DCIC researchers find novel ways to analyze data for drug and target discovery',
            link: 'https://www.ncbi.nlm.nih.gov/pubmed/27667448',
            target: '_blank'
        },
        {
            index: 2,
            image: DIR + 'zichen_poster.png',
            title: 'BD2K All Hands Meeting and Open Data Science Symposium',
            caption: 'Summary of BD2K-LINCS DCIC activities at this annual BD2K grantee meeting.',
            link: 'http://lincs-dcic.org/2016-bd2k-meeting',
            target: '_blank'
        },
        {
            index: 3,
            image: DIR + 'summer_banner_2016.png',
            title: 'Summer Research Program',
            caption: 'Research-intensive 10 week training program for undergraduate and graduate students starting June 5th.',
            link: '/summer-research-app#nav',
            target: '_blank'
        },
        {
            index: 4,
            image: DIR + 'course_banner.png',
            title: 'Big Data Science Course',
            caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
            link: 'https://www.coursera.org/learn/bd2k-lincs',
            target: '_blank'
        },
        {
            index: 5,
            image: DIR + 'clustergrammer_skin_cancer.png',
            title: 'LINCS Tools for Integrative Data Access and Visualization',
            caption: 'BD2K-LINCS DCIC develops web-based tools to enable researchers to be more productive with LINCS data.',
            link: 'http://lincs-dcic.org/getting-started/direct-access-tools',
            target: '_blank'
        },
        {
            index: 6,
            image: DIR + 'outreach.png',
            title: 'Community Training and Outreach',
            caption: 'BD2K-LINCS DCIC engages, informs and educates key biomedical research communities about LINCS resources.',
            link: 'http://lincs-dcic.org/training',
            target: '_blank'
        },
    ];

    $(function() {
       $('#carousel').carousel( {
           interval: 10000
       });
    });
}]);
