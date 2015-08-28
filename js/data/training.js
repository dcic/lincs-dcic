var mod = angular.module("trainingMod", []);

mod.controller("trainingCtrl", ["$scope", "$sce", function($scope, $sce) {

    var LINCS_MOOC_LINK = "https://www.coursera.org/course/bd2klincs",
        SYSBIO_MOOC_LINK = "https://www.coursera.org/course/netsysbio",
        SUMMER_RESEARCH_LINK = "#/summer-research-app#nav",
        SUMMER_FELLOWS_LINK = "#/summer-fellows-2015#nav",
        SUMMER_PROGRAM_DESC = "#/summer-research-app#nav",
        NETWORK_GAME_LINK = "http://www.maayanlab.net/NASB15/NMG/",
    
        DIR = "/images/general/";

    $scope.introText = $sce.trustAsHtml("The BD2K-LINCS DCIC engages the research community by delivering high quality educational materials through the web as well as through mentoring, seminars and symposia. Also, Center investigators actively engage in the education of a new generation of Big Data Scientists by developing a graduate-level Big Data Science MOOC that will be delivered to graduate students in Big Data Biostatistics and other Biomedical Informatics graduate programs.");
 
    $scope.sections = [
		{
            title: "Summer Research Training Program",
            text: $sce.trustAsHtml("The BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science is a research intensive ten-week training program for undergraduate and graduate students. We are currently accepting applications for the summer 2016 session:" +
                "<ul>" +
                    "<li>" +
                        "<a href='" + SUMMER_FELLOWS_LINK + "'>2015 Summer Fellows and Research Projects</a>" +
                    "</li>" +
                    "<li>" +
                        "<a href='" + SUMMER_PROGRAM_DESC + "'>Program Description and How to Apply</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "mounica.png"
        },
        {
            title: "MOOCs on Coursera",
            text: $sce.trustAsHtml("The DCIC investigators and research staff are currently offering two graduate-level courses on Coursera:" +
                "<ul>" +
                    "<li>" +
                        "<a href='" + LINCS_MOOC_LINK + "' target='blank'>Big Data Science</a>" +
                    "</li>" +
                    "<li>" +
                        "<a href='" + SYSBIO_MOOC_LINK + "' target='blank'>Network Analysis in Systems Biology</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "mooc.png"
        },
        {
            title: "Webinars",
            text: $sce.trustAsHtml("These webinars provide a forum for data scientists within and outside of the LINCS project to present their work on problems related to LINCS data analysis and integration:" +
                "<ul>" +
                    "<li>" +
                        "<a href='#/webinars'>Data Science Research Webinars</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "webinars.png"
        },
        {
            title: "Big Data Biostatistics PhD Program",
            text: $sce.trustAsHtml("The <a href='http://eh.uc.edu/' target='_blank'>Big Data Biostatistics PhD Program at the University of Cincinnati College of Medicine</a> provides rigorous foundations in probability theory, statistics and computational sciences, combined with a broad knowledge of applications to biomedical research."),
            image: DIR + "cincinnati.png"
        },
        {
            title: "Crowdsourcing Projects",
            text: $sce.trustAsHtml("As part of our educational efforts to bring awareness to LINCS data and explain the efforts of LINCS to the general public, we developed interactive games to teach the research community about LINCS data, how it is collected, and how it can be analyzed and integrated." +
                "<ul>" +
                    "<li>" +
                        "<a href='http://www.maayanlab.net/crowdsourcing/' target='blank'>Crowdsourcing Portal</a>" +
                    "</li>" +
                    "<li>" +
                        "<a href='" + NETWORK_GAME_LINK + "' target='blank'>Network Matching Game</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "crowd.png"
        },
        {
            title: "Community Outreach",
            text: $sce.trustAsHtml("Center investigators engage the research community through workshops, seminars and symposia to expose them to LINCS data and resources." +
                "<ul>" +
                    "<li>" +
                        "<a href='#/workshops-seminars-symposia#nav'>Workshops, Seminars and Symposia</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "mjones.png"
        }
    ];
}]);
