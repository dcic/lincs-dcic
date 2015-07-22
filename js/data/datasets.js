var mod = angular.module("datasetsMod", []);

mod.controller("datasetsCtrl", ["$scope", function($scope) {
    $scope.datasets = [
        {
            title: "Submit your gene signatures for analysis",
            url: "#/analyze",
            target: "_self"
        },
        {
            title: "Data and Signature Generation Centers",
            url: "#/datacenters",
            target: "_self"
        },
        {
            title: "LINCS Catalog",
            url: "http://lifekb.org/catalog/",
            target: "_blank"
        },
        {
            title: "L1000 data on lincscloud.org",
            url: "http://www.lincscloud.org/l1000/",
            target: "_blank"
        },
        {
            title: "L1000 data on GEO",
            url: "http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138",
            target: "_blank"
        },
        {
            title: "P100 data on lincscloud.org",
            url: "http://www.lincscloud.org/p100/",
            target: "_blank"
        },
        {
            title: "P100 data on Panorama",
            url: "https://panoramaweb.org/labkey/project/LINCS/P100/begin.view",
            target: "_blank"
        },
        {
            title: "KINOMEscan data on HMS",
            url: "http://lincs.hms.harvard.edu/data/kinomescan/",
            target: "_blank"
        },
        {
            title: "ALS data on NeuroLINCS",
            url: "http://neurolincs.org/index.php",
            target: "_blank"
        },
        {
            title: "Drug combination data on DToxS",
            url: "http://research.mssm.edu/pst/DToxS/",
            target: "_blank"
        }
    ];
}]);
