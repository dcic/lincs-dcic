var mod = angular.module('fundingMod', []);

mod.controller('fundingCtrl', ['$scope', '$sce', function($scope, $sce) {

    DIR = 'images/general/';

    $scope.introText = $sce.trustAsHtml(
        'There are opportunities for support of collaborations with the BD2K-LINCS DCIC through various funding opportunities and channels. These are additional funds provided by the NIH to enable collaborations with computational and experimental groups that are currently not a part of the LINCS program.');

    $scope.opportunities = [
        {
            title: 'Archived Funding Opportunities',
            text: $sce.trustAsHtml('' +
                '<ul>' +
                    '<li>' +
                        '<a href="/edsr#nav">BD2K-LINCS DCIC External Data Science Research Projects</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="http://grants.nih.gov/grants/guide/notice-files/NOT-RM-15-012.html#sthash.Vnh5tJtE.dpuf" target="_blank">Administrative Supplements for LINCS Projects</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="http://grants.nih.gov/grants/guide/rfa-files/RFA-MD-15-005.html" target="_blank">R25 to Support Diversity in Biomedical Research</a>' +
                    '</li>' +
                '</ul>'),
            image: DIR + 'growing.png'
        }
    ];
}]);
