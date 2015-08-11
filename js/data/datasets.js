var mod = angular.module("datasetsMod", []);

mod.controller("datasetsCtrl", ["$scope", function($scope) {
    $scope.datasets = [
        {
            title: "Submit your gene signatures for analysis",
            url: "#/analyze#nav",
            target: "_self"
        },
        {
            title: "Data and Signature Generation Centers",
            url: "#/datacenters#nav",
            target: "_self"
        },
        {
            title: "L1000 data on GEO",
            url: "http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138",
            target: "_blank",
            showOnIndexPage: true
        },
        {
            title: "L1000 and P100 data on lincscloud.org",
            url: "http://download.lincscloud.org/",
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
            url: "http://neurolincs.org/index.php?pageID=5",
            target: "_blank"
        },
        {
            title: "Drug combination data on DToxS",
            url: "http://research.mssm.edu/pst/DToxS/data.html",
            target: "_blank"
        }
    ];
}]);
