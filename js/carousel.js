var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    $scope.slides = [
        {
            'index': 0,
            'image': '/images/carousel/summer-research.png',
            'title': '',
            'description': '',
            'link': '/#/summerresearch',
            'target': '_self',
            'id': 'carousel-btn-0'
        },
        {
            index: 1,
            'image': '/images/carousel/big-data.png',
            'title': '',
            'description': '',
            'link': '/#/summerresearch',
            'target': '_self',
            'id': 'carousel-btn-0'
        }
    ];
}]);
