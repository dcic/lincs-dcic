var mod = angular.module("introMod", []);

mod.controller("introCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = "/images/general/";

    $scope.introText = $sce.trustAsHtml(
        "The BD2K-LINCS Data Coordination and Integration Center is part of the Big Data to Knowledge (BD2K) NIH initiative, and it is the data coordination center for the NIH Common Fund's Library of Integrated Network-based Cellular Signatures (LINCS) program, which aims to characterize how a variety of human cells, tissues and the entire organism respond to perturbations by drugs and other molecular factors. This Center is co-funded by BD2K and the NIH Common Fund (NI­H grant number: <a href='http://projectreporter.nih.gov/project_info_description.cfm?aid=8825168&icde=22649457&ddparam=&ddvalue=&ddsub=&cr=9&csb=default&cs=ASC' target='_blank'>U54HL127624</a>)."
    );
    
    $scope.sections = [
        {
            title: "Integrated Knowledge Environment",
            text: $sce.trustAsHtml("The DCIC is constructing a high-capacity, scalable IKE enabling federated access, intuitive querying, and integrative analysis and visualization across all LINCS resources together with external data from other relevant resources."),
            image: DIR + "ml.png"
        },
        {
            title: "Data Science Research",
            text:  $sce.trustAsHtml("The DCIC conducts several internal research projects and supports several external data science research projects, addressing various data integration and intracellular molecular regulatory network challenges."),
            image: DIR + "big-data-research.png"
        },
        {
            title: "Community Training and Outreach",
            text: $sce.trustAsHtml("The CTO established several educational programs, including a <a href='https://www.coursera.org/course/bd2klincs' target='_blank'>Big Data Science MOOC on Coursera</a> and a <a href='#/srp'>Summer Research Training Program in Biomedical Big Data Science</a>. In addition, the CTO is initiating and supporting diverse and collaborative projects that leverage LINCS resources and disseminate LINCS data and tools."),
            image: DIR + "mooc.png"
        },
        {
            title: "Consortium Coordination and Administration",
            text: $sce.trustAsHtml("The CCA supports and manages the DCIC goals and deliverables and coordinates activities across the LINCS and BD2K programs."),
            image: DIR + "admin.png"
        }
    ];
}]);
