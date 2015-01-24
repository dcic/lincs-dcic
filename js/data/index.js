var mod = angular.module("indexMod", []);

mod.controller("indexCtrl", ["$scope", function($scope) {
    $scope.sections = [
        {
            title: "Integrated Knowledge Environment",
            image: "/images/wireframes/integration.png",
            text: "The DCIC uses a simple schema to combine LINCS and other data into a coherent and computable knowledge framework. The Center develops meta-data standards that enable data integration and representation across the data and signature generation centers (DGSCs). Members of the DCIC are actively developing a next generation integrated web-based platform for the LINCS project that will serve as the foundation for LINCS activities and federate LINCS data, signatures, analysis algorithms, pipelines, APIs and web tools."
        },
        {
            title: "Data Science Research",
            image: "/images/wireframes/data-science.png",
            text: "The DCIC conducts several internal research projects and supports several external data science research projects, addressing various data integration and intracellular molecular regulatory network challenges. The Center aims to develop: 1) methods to connect cellular and organismal phenotypes with molecular cellular signatures, and 2) novel data visualization methods for dynamically interacting with large-genomics and proteomics datasets."
        },
        {
            title: "Training and Outreach",
            image: "/images/wireframes/outreach.png",
            text: "The DCIC established several educational programs, including a Big Data Science MOOC on Coursera and a Summer Research Training Program in Biomedical Big Data Science. One of the objectives of the DCIC’s outreach efforts is to train biomedical researchers with LINCS-related experimental methods, datasets, and computational tools."
        }
    ];
}]);
