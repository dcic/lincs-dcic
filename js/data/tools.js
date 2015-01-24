
var mod = angular.module("toolsMod", []);

mod.controller("toolsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = 'images/apps/';

    $scope.introText = $sce.trustAsHtml(
        "The DCIC develops web-based tools for integrative data access and visualization across the distributed LINCS and BD2K sites and other relevant data sources. Our next generation integrated web-based platform for the LINCS project serves as the foundation for all LINCS activities and federates all LINCS data, signatures, analysis algorithms, pipelines, APIs and web tools."    );

    $scope.tools = [
        {
            title: "GEO2Enrichr",
            description: "A Google Chrome Extension to extract gene sets from GEO and analyze these lists for common biological functions.",
            url: "http://maayanlab.net/g2e",
            target: "_blank",
            image: DIR + "g2e.png",
            shortDesc: "Differential Expression Analysis Tool"
        },
        {
            title: "LINCS Information Framework (LIFE)",
            description: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
            url: "http://life.ccs.miami.edu/life/",
            target: "_blank",
            image: DIR + "life.png",
            shortDesc: "LINCS Information System"
        },
        {
            title: "iLINCS",
            description: "A computational biology project aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the Library of Integrated Network-based Cellular Signatures (LINCS) program.",
            url: "http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp",
            target: "_blank",
            image: DIR + "ilincs.png",
            shortDesc: "LINCS Web Portal"
        },
        {
            title: "LINCS Canvas Browser",
            description: "The LINCS Canvas Browser is an interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.",
            url: "http://www.maayanlab.net/LINCS/LCB/",
            target: "_blank",
            image: DIR + "lincs-canvas-browser.png",
            shortDesc: "LINCS L1000 Clustering, Visualization and Enrichment Analysis Tool"
        },
        {
            title: "Drug/Cell-line Browser",
            description: "An online interactive HTML5 data visualization tool for interacting with three of the recently published datasets of cancer cell lines/drug-viability studies.",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            target: "_blank",
            image: DIR + "drug-cell-line-browser.png",
            shortDesc: "Data Visualization Tool"
        },
        {
            title: "Enrichr - Search engine for gene lists and signatures",
            description: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
            url: "http://amp.pharm.mssm.edu/Enrichr/",
            target: "_blank",
            image: DIR + "enrichr.png",
            shortDesc: "Search Engine for Gene Lists and Signatures"
        }
    ];
}]);
