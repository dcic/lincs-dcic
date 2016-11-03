var mod = angular.module("summerFellows2016Mod", []);



mod.controller("summerFellows2016Ctrl", ["$scope", "$sce", function($scope, $sce) {



    var SUMMER_RESEARCH_LINK = "#/summer-research-app",

        DIR = "/images/summer-fellows/2016/",

        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB_LINK = "http://icahn.mssm.edu/research/labs/maayan-laboratory",

        FDU = "Fairleigh Dickinson University",

        SCHURER_LAB = "Stephan Schurer PhD, University of Miami",

        SCHURER_LAB_LINK = "http://ccs.miami.edu/focus-area/drug-discovery/";


        



    $scope.fellows = [

          {

            name: "Erin Carr",

            image: DIR + "carr.png",

            school: "Pine Crest High School (Florida)",

            project: "Annotation of Peptide Probes to Integrate LINCS GCP and P100 Proteomics Data",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK,

            highSchooler: true

        },


	{

            name: "Esther Chen",

            image: DIR + "chen.png",

            school: "Cornell University",

            project: "Cite-D-Lite: Chrome Extension for Data and Paper Citations with Text Importance Highlighting",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },

        {

            name: "Daniel Clarke",

            image: DIR + "clarke.png",

            school: FDU,

            project: "Adhesome 2016: an Updated Adhesome Site with Predictions of New Member Components",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },


         {

            name: "Alessandro D'urso",

            image: DIR + "durso.png",

            school: "MAST Academy (Florida)",

            project: "LINCS Data Portal Landing Page",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK,

            highSchooler: true

        },


        {

            name: "Axel Feldmann",

            image: DIR + "feldmann.png",

            school: "Carnegie Mellon University",

            project: "X2K-Web: an Updated Web-based Version of the Expression2Kinases Pipeline",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },

        {

            name: "Jennifer Lin",

            image: DIR + "j_lin.png",

            school: "Oceanside High School (New York)",

            project: "Predicting Potential Drugs for Diabetic Nephropathy Using L1000 Data",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK,

            highSchooler: true

        },

         {

            name: "Regina Lee",

            image: DIR + "lee.png",

            school: "University of California, Los Angeles",

            project: "Using LINCS Data to Stratify Small Molecule Combinations as Potential Cancer Drugs",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK

        },


        {

            name: "Katie Lin, BS",

            image: DIR + "k_lin.png",

            school: "Columbia University",

            project: "Visualizing the MCF10A Dense Cube Project Data",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },

        {

            name: "Colette Malyack, BS",

            image: DIR + "malyack.png",

            school: FDU,

            project: "Predicting Experimental Platforms by Examining Gene-Set Content",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },

        {

            name: "Shreeya Mishra",

            image: DIR + "mishra.png",

            school: "University of Miami",

            project: "LINCS Cell Curator",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK

        },

        {

            name: "Olga Padilla",

            image: DIR + "padilla.png",

            school: "MAST Academy (Florida)",

            project: "Curation and Annotation of LINCS Cell Line Metadata",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK,

            highSchooler: true

        },


        {

            name: "Kevin Sani",

            image: DIR + "sani.png",

            school: "Harvard University",

            project: "Dr. Gene Budger: Web App to Predict Drugs for Turning Genes On or Off",

            labName: MAAYAN_LAB,

            labLink: MAAYAN_LAB_LINK

        },

        {

            name: "Alaz Sengul",

            image: DIR + "sengul.png",

            school: "Gulliver Preparatory School (Florida)",

            project: "Automated Metadata Integration for LINCS Microenvironment Perturbagen Center",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK,

            highSchooler: true

        },

        {

            name: "Ziqi Wang",

            image: DIR + "wang.png",

            school: "University of Florida",

            project: "Curation and Annotation of Drug Targets in the PDSP Database",

            labName: SCHURER_LAB,

            labLink: SCHURER_LAB_LINK

        }



    ];

}]);

