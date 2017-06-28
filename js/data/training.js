var mod = angular.module("trainingMod", []);

mod.controller("trainingCtrl", ["$scope", "$sce", function($scope, $sce) {

    var LINCS_MOOC_LINK = "https://www.coursera.org/course/bd2klincs",
        SYSBIO_MOOC_LINK = "https://www.coursera.org/learn/network-biology",
        SUMMER_FELLOWS_LINK_2015 = "/summer-fellows-2015#nav",
        SUMMER_FELLOWS_LINK_2016 = "/summer-fellows-2016#nav",
        SUMMER_PROGRAM_DESC = "/summer-research-app#nav",
        GEO2Enrichr_LINK = "http://amp.pharm.mssm.edu/g2e/",
        DCIC_Youtube_LINK = "https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg",
        Google_LINK = "https://www.google.com/+BD2KLINCSDCIC",
        Twitter_LINK = "https://twitter.com/BD2KLINCSDCIC",
        FLYER_LINK = "static/dcic_summer17_oct25v.pdf",
        ARTICLE_LINK = "http://www.asbmb.org/asbmbtoday/201606/Coordinates/"
        DATAMINING_LINK = "http://events.mountsinaihealth.org/event/bd2k-lincs_data_mining_and_network_analysis_course"
        DIR = "/images/general/";

    $scope.introText = $sce.trustAsHtml("The BD2K-LINCS DCIC engages the research community by delivering high quality educational materials through the web as well as through mentoring, seminars and symposia. Also, Center investigators actively engage in the education of a new generation of Big Data Scientists by developing a graduate-level Big Data Science MOOC that will be delivered to graduate students in Big Data Biostatistics and other Biomedical Informatics graduate programs.");

    $scope.sections = [
		{
            title: "Summer Research Training Program",
            text: $sce.trustAsHtml("The BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science is a research intensive ten-week training program for undergraduate and graduate students." +
                "<ul>" +
                    "<li>" +
                        "<a href='" + SUMMER_PROGRAM_DESC + "'>Program Description and How to Apply</a>" +
                    "</li>" +
                     "<li>" +
                        "<a href='" + FLYER_LINK + "' target='_blank'>2017 Program Flyer</a>" +
                    "</li>" +
                      "<li>" +
                        "<a href='" + SUMMER_FELLOWS_LINK_2016 + "'>2016 Summer Fellows and Research Projects</a>" +
                    "</li>" +
                     "<li>" +
                        "<a href='" + SUMMER_FELLOWS_LINK_2015 + "'>2015 Summer Fellows and Research Projects</a>" +
                    "</li>" +

                                   "</ul>"),
            image: DIR + "esther.png"
        },
        {
            title: "Big Data Courses",
            text: $sce.trustAsHtml("The DCIC investigators are currently offering two MOOCs on Coursera and a graduate-level big data course at the Icahn School of Medicine at Mount Sinai:" +
                "<ul>" +
                    "<li>" +
                    "<a href='" + LINCS_MOOC_LINK + "' target='blank'>Big Data Science with the BD2K-LINCS DCIC MOOC on Coursera</a>" +
                    "</li>" +
                    "<li>" +
                        "<a href='" + SYSBIO_MOOC_LINK + "' target='blank'>Network Analysis in Systems Biology MOOC on Coursera</a>" +
                    "</li>" +
                     "</li>" +
                    "<li>" +
                        "<a href='" + DATAMINING_LINK + "' target='blank'>BD2K-LINCS: Data Mining and Network Analysis Course (ISMMS Course)</a>" +
                    "</li>" +

                    "<li>" +
                        "<a href='" + ARTICLE_LINK + "' target='blank'>Feature Article in ASBMB Today: Back on the Road with Coursera</a>" +
                    "</li>" +

                "</ul>"),
            image: DIR + "mooc.png"
        },
        {
            title: "Webinars",
            text: $sce.trustAsHtml("These webinars provide a forum for data scientists within and outside of the LINCS project to present their work on problems related to LINCS data analysis and integration:" +
                "<ul>" +
                    "<li>" +
                        "<a href='/webinars'>LINCS Data Science Research Webinars</a>" +
                    "</li>" +
		    "<li>" +
			"<a href='" + DCIC_Youtube_LINK + "' target='blank'>BD2K-LINCS DCIC YouTube Channel</a>" +
		    "</li>" +
                "</ul>"),
            image: DIR + "webinars.png"
        },
        {
            title: "Big Data Biostatistics PhD Program",
            text: $sce.trustAsHtml("The <a href='http://med.uc.edu/eh/divisions/bio/programs/phd-biostatistics-big-data-track' target='_blank'>Big Data Biostatistics PhD Program at the University of Cincinnati College of Medicine</a> provides rigorous foundations in probability theory, statistics and computational sciences, combined with a broad knowledge of applications to biomedical research."),
            image: DIR + "cincinnati.png"
        },
        {
            title: "Crowdsourcing Projects",
            text: $sce.trustAsHtml("As part of our educational efforts to bring awareness to LINCS data and explain the efforts of LINCS to the general public, we developed a crowdsourcing portal to engage the research community in various micro- and megatasks." +
                "<ul>" +
                    "<li>" +
                        "<a href='http://www.maayanlab.net/crowdsourcing/' target='blank'>Crowdsourcing Portal</a>" +
                    "</li>" +
                    "<li>" +
                        "<a href='" + GEO2Enrichr_LINK + "' target='blank'>Extract Gene Sets with GEO2Enrichr</a>" +
                    "</li>" +
                "</ul>"),
            image: DIR + "crowd.png"
        },
        {
            title: "Community Outreach | Social Media",
            text: $sce.trustAsHtml("Center investigators engage the research community through workshops, seminars and symposia to expose them to LINCS data and resources." +
                "<ul>" +
                    "<li>" +
                        "<a href='/workshops-seminars-symposia#nav'>Workshops, Seminars and Symposia</a>" +
                    "</li>" +
		    "<li>" +
			"<a href='" + Google_LINK + "' target='blank'>google.com/+BD2KLINCSDCIC</a>" +
		    "</li>" +
		    "<li>" +
			"<a href='" + DCIC_Youtube_LINK + "' target='blank'>BD2K-LINCS DCIC YouTube Channel</a>" +
		    "</li>" +
		     "<li>" +
			"<a href='" + Twitter_LINK + "' target='blank'>@BD2KLINCSDCIC on Twitter</a>" +
		    "</li>" +

                "</ul>"),
            image: DIR + "mjones.png"
        }
    ];
}]);
