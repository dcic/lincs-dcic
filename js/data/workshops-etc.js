var mod = angular.module("workshopsEtcMod", []);

mod.controller("workshopsEtcCtrl", ["$scope", "$sce", function($scope, $sce) {

    $scope.workshops = [
        {
            title: 'SAMSI Innovation Workshop: Interdisciplinary Approaches to Biomedical Data Science Challenges',
            description: $sce.trustAsHtml('Stephan Schurer PhD, served as a mentor in this <a href="http://www.samsi.info/workshop/interdisciplinary-approaches-biomedical-data-science-challenges-samsi-innovations-lab-july-" target="_blank">workshop</a> to guide scientists in the formation of interdisciplinary projects aimed at developing models, methods, and approaches to overcome biomedical data science challenges. During the course of the workshop, participants were exposed to LINCS resources.'),
            details: 'July 20-24, 2015, Research Triangle Park, NC'
        },
        {
            title: 'NIAAA Workshop: Genomic and Computational Approaches for Biomarker and Drug Discovery',
            description: $sce.trustAsHtml('<p>Session Leader: Avi Ma’ayan PhD</p><p>The purpose of this <a href="https://www.youtube.com/watch?v=eAIKbz4AWXY&list=PL0Bwuj8819U8vZYpXObOMtmpOZmujLOXb&index=1" target="_blank">workshop</a> was to bring together (Library of Integrated Network-based Cellular Signatures) LINCS scientists and scientists from the alcohol research community to explore how LINCS resources can facilitate identification of druggable targets and novel and/or repurposed compounds for the treatment of alcohol dependence.</p>'),
            details: 'June 19, 2015, San Antonio, TX'
        }
    ];

    $scope.symposia = [
         {
            title: 'Systems Biology Data Science Symposium',
            description: $sce.trustAsHtml('This first <a href="#/2016-data-science-symposium" target="_blank">Systems Biology Data Science Symposium</a> at the University of Miami will bring together the BD2K-LINCS DCIC, local researchers, and outside experts who apply or develop computational systems biology resources.'),
            details: 'January 19-20, 2016, Coral Gables, FL'
        },
	{
            title: 'Big Data Symposium: Convergence of Science, Technology and Data Sciences – Impact on Pharma',
            description: $sce.trustAsHtml('In the Impact on Big Data on Drug Discovery session, Avi Ma’ayan PhD presented, "GEO2Enrichr, Enrichr and L1000CDS2: BD2K-LINCS DCIC Software Tools for Drug Discovery and Repurposing".'),
            details: 'June 29-30, 2015, Cambridge, MA'
        },
        {
            title: 'Society of Toxicology’s Annual Meeting',
            description: $sce.trustAsHtml('The BD2K-LINCS DCIC held an outreach session, "Turning Big Data to Knowledge - An Introduction to the BD2K and LINCS Projects" at the <a href="http://www.toxicology.org/pubs/docs/Prog/2015Program.pdf" target="_blank">SOT Annual Meeting</a>. Poster session: Big Data to Knowledge (BD2K) - A Graphical Approach for Data Coordination and Integration presented by John Reichard PhD, Mario Medvedovic PhD, Siva Sivaganesan PhD.'),
            details: 'March 23, 2015, San Diego, CA'
        },
        {
            title: 'BD2K-LINCS Data Coordination and Integration Center’s Mini-Symposium: Big Data Applications for Drug and Target Discovery',
            description: $sce.trustAsHtml('This <a href="static/big_data_symposium.pdf" target="_blank">mini-symposium</a> held at the Icahn School of Medicine at Mount Sinai was an introduction to big data resources for target prioritization, development of novel therapeutics, and drug repurposing opportunities.'),
            details: 'January 7, 2015, New York, NY'
        }
    ];

    $scope.conferences = [
        {
            title: 'AACR Special Conference on Computational and Systems Biology of Cancer',
            description: $sce.trustAsHtml('Avi Ma\'ayan PhD presented "Lean Data Integration Strategy in Cancer Systems Biology and Systems Pharmacology" as part of the <a href="http://www.aacr.org/Meetings/Pages/Program-Detail.aspx?EventItemID=29&DetailItemID=180&Day=02102015#.VcpaLXFVhBc" target="_blank">Modeling and Interrogating Cancer Regulatory Network</a> session.'),
            details: 'February 10, 2015, San Francisco, CA'
        }
    ];

    $scope.seminars = [
        {
            title: 'Community Science Project to Link Drugs, Targets and Diseases from Expression Signatures',
            description: $sce.trustAsHtml('Avi Ma’ayan PhD was an invited speaker for the Computational Biology Seminar Series at IBM T.J. Watson Research Center.'),
            details: 'March 4, 2015, Yorktown Heights, NY'
        },
        {
            title: 'Enrichr and GEO2Enrichr: Tools to Extract and Analyze Signatures',
            description: $sce.trustAsHtml('Gregory Gundersen and Matthew Jones from the Ma’ayan Laboratory at Icahn School of Medicine at Mount Sinai, presented in the Department of Pharmacology’s seminar series.'),
            details: 'January 15, 2015, New York, NY'
        },
        {
            title: 'Meta-analysis of Microarray Studies Profiling EBOV to Identify Molecular Mechanisms and suggest Potential Therapeutics',
            description: $sce.trustAsHtml('Avi Ma’ayan PhD was an invited speaker at the United States Army Medical Research Institute of Infectious Diseases.'),
            details: 'December 14, 2014, Frederick, MD'
        }
    ];
}]);













