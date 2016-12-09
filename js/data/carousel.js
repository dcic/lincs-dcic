
var mod = angular.module("carouselMod", ["ui.bootstrap"]);

mod.controller("carouselCtrl", ["$scope", function($scope) {

    var DIR = '/images/carousel/';

    $scope.slides = [
         {
             index: 0,
             image: DIR + 'bubble-graph.png',
             title: 'Big Data Science Course',
             caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
             link: 'https://www.coursera.org/learn/bd2k-lincs',
             target: '_blank'
         },
        //{
          //  index: 1,
          //  image: DIR + 'bubble-graph.png',
          //  title: 'PhD Program in Big Data at UC',
          //  caption: 'The Big Data Biostatistics program aims to train the next generation of biomedical data scientists.',
          //  link: 'https://med.uc.edu/eh/divisions/bio/programs/phd-biostatistics-big-data-track',
          //  target: '_blank'
       // },
        {
            index: 1,
            image: DIR + 'harmonizome.png',
            title: 'The Harmonizome',
            caption: 'The BD2K-LINCS DCIC developed a biological knowledge engine built on top of information about genes and proteins from 114 datasets.',
            link: 'http://amp.pharm.mssm.edu/Harmonizome',
            target: '_blank'
        },
        {
            index: 2,
            image: DIR + 'dag.png',
            title: 'Research Projects',
            caption: 'The BD2K-LINCS DCIC is conducting research by integrating and analyzing various big data resources.',
            link: '#/internal-dsrp#nav'
        },
        {
            index: 3,
            image: DIR + 'summer-fellows-2016.png',
            title: 'Summer Research Program',
            caption: 'We are currently accepting applications for our 2017 Summer Research Training Program in Biomedical Big Data Science!',
            link: '#/summer-research-app#nav'
        }
    ];

    $(function() {
       $('#carousel').carousel( {
           interval: 10000
       });
    });
}]);
