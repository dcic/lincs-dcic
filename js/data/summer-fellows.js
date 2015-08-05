var mod = angular.module("summerFellowsMod", []);

mod.controller("summerFellowsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var SUMMER_RESEARCH_LINK = "#/srp", 
        DIR = "/images/summer-fellows/",
        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",
        MAAYAN_LAB_LINK = "http://icahn.mssm.edu/research/labs/maayan-laboratory",
        CMU = "Carnegie Mellon University",
        WASHINGTON = "University of Washington",
        MIAMI = "University of Miami",
        SCHURER_LAB = "Stephan Schürer PhD, University of Miami",
        SCHURER_LAB_LINK = "http://ccs.miami.edu/?p=1103",
        UPENN = "University of Pennsylvania";

    $scope.fellows = [
        {
            name: "Byron Fang",
            image: DIR + "byron_fang.png",
            school: MIAMI,
            project: "Exploration and Classification of LINCS Small Molecules by Topological and Shape Similarity",
            labName: SCHURER_LAB,
            labLink: SCHURER_LAB_LINK
        },
        {
            name: "Benjamin Kaplan",
            image: DIR + "benjamin_kaplan.jpg",
            school: CMU,
            project: "Integrative Analysis and Visualization of Gene Expression Signatures toward the Repurposing of FDA Approved Drugs as Antiviral Medications",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Emily Kuang",
            image: DIR + "emily_kuang.png",
            school: "New York City College of Technology",
            project: "Assessing the Dimensionality of MCF7 Cells Response to Perturbations",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Azu Lee*",
            image: DIR + "azu_lee.png",
            school: WASHINGTON,
            project: "Interactive Mobile App Game for Deconvolution of Gene Set Modules from Gene Set Enrichment Analyses",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK
        },
        {
            name: "Kebra Thompson*",
            image: DIR + "kebra_thompson.png",
            school: WASHINGTON,
            project: "Exploration, Processing and Analyses of LINCS L1000 Gene Expression Data",
            labName: "Ka Yee Yeung PhD, University of Washington",
            labLink: "http://directory.tacoma.uw.edu/employee/kayee"
        },
        {
            name: "Stephanie Tillit",
            image: DIR + "stephanie_tillit.png",
            school: UPENN,
            project: "Classification and Annotation of Epigenetic Drug Target Proteins for Integrated Data Analysis",
            labName: SCHURER_LAB,
            labLink: SCHURER_LAB_LINK
        },
        {
            name: "Christine Xu",
            image: DIR + "christine_xu.png",
            school: CMU,
            project: "Characterizing Drug-Protein Interactions Based on LINCS Data",
            labName: "Ziv Bar-Joseph PhD, Carnegie Mellon University",
            labLink: "http://www.cs.cmu.edu/~zivbj/"
        },
        {
            name: "Mounica Kamesam",
            image: DIR + "mounica_kamesam.jpg",
            school: "Yorktown High School",
            project: "Automated Data Integration and Data Mining to Improve Breast Cancer Classification",
            labName: MAAYAN_LAB,
            labLink: MAAYAN_LAB_LINK,
            highSchooler: true
        }
    ];
}]);
