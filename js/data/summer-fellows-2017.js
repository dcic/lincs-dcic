var mod = angular.module("summerFellows2017Mod", []);



mod.controller("summerFellows2017Ctrl", ["$scope", "$sce", function($scope, $sce) {



    var SUMMER_RESEARCH_LINK = "/summer-research-app",

        DIR = "/images/summer-fellows/2017/",

        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB_LINK = "http://icahn.mssm.edu/research/labs/maayan-laboratory";


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
        project: "Enriching Gene Set Libraries with Co-Expression Data",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Ariel Leong",
        image: DIR + "Unk.png",
        school: "Stanford University",
        project: "Construction, Analysis and Visualization of the Human Gene Regulatory Network",
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
        project: "Interacting with 3D Maps of the Human Transcriptome",
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
