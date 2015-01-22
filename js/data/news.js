var mod = angular.module("newsMod", []);

mod.controller("newsCtrl", ["$scope", function($scope) {
	
	var formatStories = function(stories) {
        $(stories).each(function(i, story) {
            if (!story.image) {
                story.image = "dcic-logo.png";
            }
        });
        return _.sortBy(stories, function(story) {
            return -Date.parse(story.date);
        });
    };

	$scope.stories = formatStories([
        {
            title: "NIH Launches a United Ecosystem for Big Data",
		    source: "Biomedical Computation Review",
			url: "http://biomedicalcomputationreview.org/content/nih-launches-united-ecosystem-big-data",
			target: "_blank",
			date: "1/8/2015",
		    mainText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        },
		{
			title: "UC Part of Team Selected for NIH's Multimillion-Dollar 'Big Data' Push",
		    source: "University of Cincinnati Health News",
			url: "http://healthnews.uc.edu/news/?/25274/",
			target: "_blank",
			date: "10/9/2014",
			image: "meller-medvedovic.png"
		},
		{
			title: "Mount Sinai researchers awarded one of the Big Data to Knowledge (BD2K) Centers of Excellence grants",
		    source: "Icahn School of Medicine at Mount Sinai",
			url: "http:/icahn.mssm.edu/research/labs/maayan-laboratory/about-us/news/center-to-seek-new-therapeutics-by-integrating-gene-protein-databases-",
			target: "_blank",
			date: "10/9/2014",
			image: "Maayan-Team.jpg"
		},
		{
			title: "UM Awarded NIH Big Data to Knowledge (BD2K) Grant",
			source: "University of Miami Health System",
			url: "http://med.miami.edu/news/um-awarded-nih-big-data-to-knowledge-bd2k-grant",
			target: "_blank",
			date: "10/22/2014",
			image: "Schurer-Grant-250x161.jpg"
		},
		{
			title: "NIH Puts Big Bucks in Big Data",
			source: "Pharmaceutical Manufacturing",
			url: "http://www.pharmamanufacturing.com/industrynews/2014/nih-puts-big-bucks-in-big-data/",
			target: "_blank",
			date: "10/21/2014",
			image: "pharmamanu.jpg"
		},
		{
			title: "NIH award aims to improve understanding of cell pathways, development of new therapies",
			source: "National Institutes of Health",
			url: "http://www.nih.gov/news/health/sep2014/nhgri-11.htm",
			target: "_blank",
			date: "9/11/2014",
			image: ""
		},
		{
			title: "Why Health Care May Finally Be Ready for Big Data",
			source: "Harvard Business Review",
			url: "https://hbr.org/2014/12/why-health-care-may-finally-be-ready-for-big-data",
			target: "_blank",
			date: "12/3/2014",
			image: "hbr.png"
		},
		{
			title: "Grants Focus on Leveraging Biomedical Big Data",
			source: "Journal of the American Medical Association",
			url: "http://jama.jamanetwork.com/article.aspx?articleID=1938545",
			target: "_blank",
			date: "11/26/2014",
			image: "jama.png"
		},
		{
			title: "4 pieces of NIH's big data puzzle",
			source: "Government Health IT",
			url: "http://www.govhealthit.com/news/4-pieces-nihs-big-data-puzzle",
			target: "_blank",
			date: "10/20/2014",
			image: "govthealthit.png"
		},
		{
			title: "NIH invests $32 million to crack big data",
			source: "Government Computer News",
			url: "http://gcn.com/articles/2014/10/17/nih-big-data-bd2k.aspx",
			target: "_blank",
			date: "10/17/2014",
			image: "gcn.png"
		},
		{
			title: "NIH Awards $64M for Cellular Signatures Library Network",
			source: "Genome Web",
			url: "https://www.genomeweb.com/nih-awards-64m-cellular-signatures-library-network",
			target: "_blank",
			date: "9/12/2014",
			image: "genomeweb.png"
		}
	]);
}]);


			
			
			
			
		
			
			
			
			
			
