var mod = angular.module("introMod", []);

mod.controller("introCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = "/images/general/";

    $scope.introText = $sce.trustAsHtml(
        "The BD2K-LINCS Data Coordination and Integration Center is part of the <a href='https://commonfund.nih.gov/bd2k' target='_blank'>Big Data to Knowledge (BD2K)</a> NIH initiative, and it is the data coordination center for the NIH Common Fund's <a href='http://www.lincsproject.org/' target='_blank'>Library of Integrated Network-based Cellular Signatures (LINCS) program</a>, which aims to characterize how a variety of human cells, tissues and the entire organism respond to perturbations by drugs and other molecular factors. This Center is co-funded by the <a href='https://commonfund.nih.gov/' target='_blank'>NIH Common Fund's</a> <a href='https://commonfund.nih.gov/bd2k' target='_blank'>BD2K</a> and <a href='https://commonfund.nih.gov/LINCS' target='_blank'> LINCS</a> programs (NIH grant number: <a href='http://projectreporter.nih.gov/project_info_description.cfm?aid=8825168&icde=22649457&ddparam=&ddvalue=&ddsub=&cr=9&csb=default&cs=ASC' target='_blank'>U54HL127624</a>)."
    );

    $scope.sections = [
        {
            id: "data-science-research",
            title: "Data Science Research",
            text:  $sce.trustAsHtml("<p>The objective of the Data Science Research (DSR) component of the BD2K-LINCS DCIC is to develop methods that would further extract knowledge from <a href='http://lincsportal.ccs.miami.edu/dcic-portal/' target='_blank'>LINCS data</a> by integrating LINCS data with other relevant resources. The integration of LINCS perturbation data with other datasets helps us unravel the mode of action (MOA) of perturbations which is not readily possible to obtain by processing the LINCS data alone. Understanding and extracting new knowledge from MOA network models created from LINCS data integrated with other resources facilitates drug repositioning strategies, identification of new drugs and targets, as well as help in predicting deleterious effects of relevant perturbations. Our data science projects address methodological and computational challenges related to such integrative analyses.</p><p>The BD2K-LINCS DCIC has several <a href='/internal-dsrp#nav' target='_blank'>internal research projects</a> and supports several <a href='/#external-dsrp#nav' target='_blank'>external data science research projects</a>, addressing various data integration and intracellular molecular regulatory network challenges. The Center actively develops: 1) methods to connect cellular and organismal phenotypes with molecular cellular signatures, and 2) novel data visualization methods for dynamically interacting with large-genomics and proteomics datasets.</p>"),
            image: DIR + "big-data-research.png"
        },
        {
            id: "integrated-knowledge-environment",
            title: "Integrated Knowledge Environment",
            text: $sce.trustAsHtml("The Integrated Knowledge Environment (IKE) component of the BD2K-LINCS DCIC is developing a schema to combine LINCS and other data into a coherent and computable knowledge framework. The Center develops <a href='http://www.lincsproject.org/data/data-standards/' target='_blank'>metadata standards</a> that enable data integration and representation across the <a href='/datacenters'>LINCS Data and Signature Generation Centers (DGSCs)</a>. Members of the DCIC are actively developing a next generation integrated web-based platform for the LINCS project that serves as the foundation for LINCS activities and federated LINCS data, signatures, analysis algorithms, pipelines, APIs and web tools. For implementing this web-based platform we realize the Big Data to Knowledge vision with a specific focus on data and knowledge generated in the LINCS project."),
            image: DIR + "ml.png"
        },
        {
            id: "community-training-and-outreach",
            title: "Community Training and Outreach",
            text: $sce.trustAsHtml("The Community Training and Outreach (CTO) component established several <a href='/training'>educational programs</a>, including a <a href='https://www.coursera.org/course/bd2klincs' target='_blank'>Big Data Science MOOC on Coursera</a> and a <a href='/summer-fellows-2017'>Summer Research Training Program in Biomedical Big Data Science</a>. One of the objectives of the DCIC’s outreach efforts is to train biomedical researchers with LINCS-related experimental methods, datasets, and <a href='/resources'>computational tools</a>. In addition, the CTO initiates and supports diverse and collaborative projects that leverage LINCS resources and disseminate <a href='http://www.lincsproject.org/data/tools-and-databases/' target='_blank'>LINCS data and tools</a>."),
            image: DIR + "mooc.png"
        },
        {
            id: "consortium-coordination-and-administration",
            title: "Consortium Coordination and Administration",
            text: $sce.trustAsHtml("The Consortium Coordination and Administration (CCA) component coordinates the implementation of the BD2K-LINCS DCIC’s aims within the LINCS consortium and the BD2K Centers."),
            image: DIR + "admin.png"
        }
    ];
}]);
