var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", function($scope) {

    var DIR = '/images/carousel/';

    $scope.slides = [
        {
            index: 0,
            image: DIR + 'bubble-graph.png',
            title: 'Big Data Science Course',
            caption: 'Learn various methods of analysis of LINCS data and other relevant Big Data with the DCIC\'s MOOC on Coursera.',
            link: 'https://www.coursera.org/course/bd2klincs',
            target: '_blank'
        },
        {
            index: 1,
            image: DIR + 'dag.png',
            title: 'Research Projects',
            caption: 'The BD2K-LINCS DCIC is conducting research by integrating and analyzing various big data resources.',
            link: '#/summer-fellows-2015'
        },
        {
            index: 2,
            image: DIR + 'summer-fellows-2015.png',
            title: 'Summer Research Program',
            caption: 'BD2K-LINCS DCIC summer fellows complete a ten-week intensive research experience within our Center.',
            link: '#/summer-fellows-2015'
        }
    ];

    $(function() {
       $('#carousel').carousel({
           interval: 5000
       });
    });
}]);
