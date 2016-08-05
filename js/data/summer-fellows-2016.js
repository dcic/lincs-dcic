var mod = angular.module("summerFellows2016Mod", []);

mod.controller("summerFellows2016Ctrl", ["$scope", "$sce", function($scope, $sce) {

    var SUMMER_RESEARCH_LINK = "#/summer-research-app",
        DIR = "/images/summer-fellows/2016/",
        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",
        MAAYAN_LAB_LINK = "http://icahn.mssm.edu/research/labs/maayan-laboratory",
        FDU = "Fairleigh Dickinson University";

    $scope.fellows = [
        {
            name: "Axel S. Feldmann",
            image: DIR + "axel_feldmann.png",
            school: "Carnegie Mellon University",
            project: "X2K-Web: an Updated Web-based Version of the Expression2Kinases Pipeline",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Colette T. Malyack",
            image: DIR + "colette_malyack.png",
            school: FDU,
            project: "Predicting Experimental Platforms by Examining Gene-Set Content",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Daniel J. B. Clarke",
            image: DIR + "daniel_clarke.png",
            school: FDU,
            project: "Adhesome 2016: an Updated Adhesome Site with Predictions of New Member Components",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Esther X. Chen",
            image: DIR + "esther_chen.png",
            school: "Cornell University",
            project: "Cite-D-Lite: Chrome Extension for Data and Paper Citations with Text Importance Highlighting",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Jennifer Lin",
            image: DIR + "jennifer_lin.png",
            school: "Oceanside High School",
            project: "Predicting Potential Drugs for Diabetic Nephropathy Using L1000 Data",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK,
            highSchooler: true
        },
        {
            name: "Katie Lin",
            image: DIR + "katie_lin.png",
            school: "Columbia University",
            project: "Visualizing the MCF10A Dense Cube Project Data",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Kevin Sani",
            image: DIR + "kevin_sani.png",
            school: "Harvard University",
            project: "Dr. Gene Budger: Web App to Predict Drugs for Turning Genes On or Off",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        }
    ];
}]);
