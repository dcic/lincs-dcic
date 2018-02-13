
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
        // },
	// {
        //    index: 5,
        //    image: DIR + 'dcic_dss_2017.png',
        //    title: 'BD2K-LINCS Data Science Symposium (DSS 2018)',
        //    caption: 'The BD2K-LINCS DCIC hosted the third annual BD2K-LINCS Data Science Symposium on Jan 31 - Feb 2, 2018.',
        //    link: '/2018-data-science-symposium'
        //  }

        {
            index: 0,
            image: DIR + 'L1000_fireworks.jpg',
            title: 'L1000 Fireworks Display (L1000FWD)',
            caption: 'Large-scale Visualization of Drug-induced Transcriptomic Signatures',
            link: 'http://amp.pharm.mssm.edu/L1000FWD/',
            target: '_blank'
        },
	{
            index: 1,
            image: DIR + 'ldp.jpg',
            title: 'LINCS Data Portal',
            caption: 'Integrated Access to Diverse Large-scale Cellular Perturbation Response Data',
            link: 'http://lincsportal.ccs.miami.edu/'
        },
	 {
            index: 2,
            image: DIR + 'ljp_network.jpg',
            title: 'LINCS Joint Project - Breast Cancer Network Browser ',
            caption: 'LINCS Joint Project Network Enrichment Tool',
            link: 'http://amp.pharm.mssm.edu/LJP/'
        },
	{
            index: 3,
            image: DIR + 'dcic_summer_cp2017.jpg',
            title: 'BD2K-LINCS Summer Research Training Program',
            caption: 'The BD2K-LINCS 2018 Summer Research Training Program in Biomedical Big Data Science begins June 4!',
            link: '/summer-research-app#nav'
        },
        {
            index: 4,
            image: DIR + 'course_banner.png',
            title: 'Big Data Science Course',
            caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
            link: 'https://www.coursera.org/learn/bd2k-lincs'
        },
        {
            index: 5,
            image: DIR + 'outreach.png',
            title: 'Community Training and Outreach',
            caption: 'BD2K-LINCS DCIC engages, informs and educates key biomedical research communities about LINCS resources.',
            link: '/training'
        },
    ];

    $(function() {
       $('#carousel').carousel( {
           interval: 10000
       });
    });
}]);
