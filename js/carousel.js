var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    $scope.slides = [
        {
            'index': '0',
            'image': '/images/carousel/summer-research.png',
            'subtitle': 'Data Coordination and Integration Center\'s 2015',
            'title': 'Summer Research Program',
            'caption': 'Currently accepting applications for our ten-week summer research training program in biomedical big data science!',
            'link': '/#/education/summerresearch',
            'target': '_self',
            'id': 'carousel-btn-0'
        },
        {
            'index': '1',
            'image': '/images/carousel/big-data.png',
            'subtitle': 'DCIC\'s MOOC on Coursera',
            'title': 'Big Data Science',
            'caption': 'Learn various methods of analysis of LINCS data and other relevant Big Data.',
            'link': 'https://www.coursera.org/course/bd2klincs',
            'target': '_blank',
            'id': 'carousel-btn-0'
        }
    ];
}]);
