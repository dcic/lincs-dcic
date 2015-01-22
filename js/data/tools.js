
var mod = angular.module("toolsMod", []);

mod.controller("toolsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = 'images/app-logos/',
        DCIC = "Data Coordination and Integration Center",
        DSGC = "Data and Signature Generating Centers";

    $scope.introText = $sce.trustAsHtml(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    /* We include `organization` to filter on it. */
    $scope.tools = [
        {
            title: "GEO2Enrichr",
            description: "A Google Chrome Extension to extract gene sets from GEO and analyze these lists for common biological functions.",
            url: "http://maayanlab.net/g2e",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "geo2enrichr.png",
            organization: DCIC
        },
        {
            title: "LINCS Information Framework (LIFE)",
            description: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
            url: "http://life.ccs.miami.edu/life/",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "life.png",
            organization: DCIC
        },
        {
            title: "iLINCS",
            description: "A computational biology project aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the Library of Integrated Network-based Cellular Signatures (LINCS) program.",
            url: "http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "ilincs.png",
            organization: DCIC
        },
        {
            title: "LINCS Canvas Browser",
            description: "The LINCS Canvas Browser is an interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.",
            url: "http://www.maayanlab.net/LINCS/LCB/",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "lincs-canvas-browser.png",
            organization: DCIC
        },
        {
            title: "Drug/Cell-line Browser",
            description: "An online interactive HTML5 data visualization tool for interacting with three of the recently published datasets of cancer cell lines/drug-viability studies.",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "drug-cell-browser.png",
            organization: DCIC
        },
        {
            title: "Enrichr - Search engine for gene lists and signatures",
            description: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
            url: "http://amp.pharm.mssm.edu/Enrichr/",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "enrichr.png",
            organization: DCIC
        },
        {
            title: "lincscloud web apps",
            description: "Brings together datasets and tools from the LINCS consortium.",
            url: "http://apps.lincscloud.org/",
            target: "_blank",
            image: "http://placehold.it/150x150",
			//image: DIR + "lincscloud.png",
            organization: DSGC
        },
        {
            title: "HMS software and tools",
            description: "Creating and re-purposing various types of software to collect, manage and analyze data.",
            url: "http://lincs.hms.harvard.edu/resources/software-tools/",
            target: "_blank",
            image: "http://placehold.it/150x150",
            //image: DIR + "hms-lincs.png",
            organization: DSGC
        }
    ];
}]);
