var mod = angular.module("summerFellows2017Mod", []);



mod.controller("summerFellows2017Ctrl", ["$scope", "$sce", function($scope, $sce) {



    var SUMMER_RESEARCH_LINK = "/summer-research-app",

        DIR = "/images/summer-fellows/2017/",

        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB_LINK = "http://labs.icahn.mssm.edu/maayanlab/";


    $scope.fellows = [
      {
        name: "Patrycja Krawczuk",
        image: DIR + "PKrawzcuk.png",
        school: "Hunter College",
        project: "Automated Indexing of Bioinformatics Tools",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Marina Latif",
        image: DIR + "MLatif.png",
        school: "Princeton University",
        project: "Mining the Human Kinome",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Joyce (Hyojin) Lee",
        image: DIR + "JLee.png",
        school: "Princeton University",
        project: "Predicting Gene Function and PPIs with Co-Expression Data",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Ariel Leong",
        image: DIR + "ALeong.png",
        school: "Stanford University",
        project: "ChEA3 – Improving Transcription Factor Enrichment Analysis by Data Integration",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Damon Pham",
        image: DIR + "DPham.png",
        school: "Indiana University",
        project: "Developing Novel Gene Set Enrichment Analysis Algorithms",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Christopher Tseng",
        image: DIR + "CTseng.png",
        school: "Emory University",
        project: "Analysis and Visualization of MCF10A Data for the LINCS Common Project",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Lily Wang",
        image: DIR + "LWang.png",
        school: "Cornell University",
        project: "FAIRShake: Digital Objects Evaluation System",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Charlotte Zuber",
        image: DIR + "CZuber.png",
        school: "Rutgers University",
        project: "Visualization of the Space of 200,000 Annotated Gene Sets",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      }
    ];

}]);
