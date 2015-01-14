var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    $scope.slides = [
        {
            'index': '0',
            'image': '/images/carousel/summer-research.png',
            'title': 'Summer Research Training Program in Biomedical Big Data Science',
            'caption': 'Apply for an research intensive ten-week training program offered at six sites affiliated with our NIH-funded BD2K Center.',
            'link': '/#/education/summerresearch',
            'target': '_self',
            'id': 'carousel-btn-0'
        },
        {
            'index': '1',
            'image': '/images/carousel/big-data.png',
            'title': '',
            'caption': 'whajsjdfsfjd',
            'link': '/#/summerresearch',
            'target': '_self',
            'id': 'carousel-btn-0'
        }
    ];
}]);
