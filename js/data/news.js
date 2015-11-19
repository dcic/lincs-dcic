var mod = angular.module("newsMod", []);

mod.controller("newsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = '/images/news/';

	var formatStories = function(stories) {
        return _.sortBy(stories, function(story) {
            return -Date.parse(story.date);
        });
    };

	$scope.stories = formatStories([
        {
            title: "Genetics: Big Hopes for Big Data",
            source: "Nature | Outlook",
            url: "http://www.nature.com/nature/journal/v527/n7578_supp/full/527S108a.html",
            target: "_blank",
            date: "11/19/2015",
            mainText: "",
            image: DIR + "nature_outlook_cover.png"
        },
	 {
            title: "\"The characteristic direction: a geometrical approach to identify differentially expressed genes\" has been recommended in F1000Prime as being of special significance in its field by F1000 Faculty Member Charles Auffray",
            source: "F1000 Prime",
            url: "http://f1000.com/prime/718324928?subscriptioncode=73f1be84-cf1b-47e0-87d4-8ce34f95c9fc",
            target: "_blank",
            date: "3/10/2015",
            mainText: "",
            image: DIR + "chdir.png"
        },
        {
            title: "NIH Launches a United Ecosystem for Big Data",
		    source: "Biomedical Computation Review",
			url: "http://biomedicalcomputationreview.org/content/nih-launches-united-ecosystem-big-data",
			target: "_blank",
			date: "1/8/2015",
		    mainText: "Francis Collins, MD, PhD, Director of the National Institutes of Health (NIH), says he used to feel \"data envy\" toward the field of physics. In those days, \"no one would have predicted that biology would emerge as the biggest challenge in terms of data. But that is now the case.\"",
		    image: DIR + "biomedical-computation-review.png"
        },
		{
			title: "UC Part of Team Selected for NIH's Multimillion-Dollar 'Big Data' Push",
		    source: "University of Cincinnati Health News",
			url: "http://healthnews.uc.edu/news/?/25274/",
			target: "_blank",
			date: "10/9/2014"
		},
		{
			title: "Mount Sinai researchers awarded one of the Big Data to Knowledge (BD2K) Centers of Excellence grants",
		    source: "Icahn School of Medicine at Mount Sinai",
			url: "http:/icahn.mssm.edu/research/labs/maayan-laboratory/about-us/news/center-to-seek-new-therapeutics-by-integrating-gene-protein-databases-",
			target: "_blank",
			date: "10/9/2014"
		},
		{
			title: "UM Awarded NIH Big Data to Knowledge (BD2K) Grant",
			source: "University of Miami Health System",
			url: "http://med.miami.edu/news/um-awarded-nih-big-data-to-knowledge-bd2k-grant",
			target: "_blank",
			date: "10/22/2014"
		},
		{
			title: "NIH Puts Big Bucks in Big Data",
			source: "Pharmaceutical Manufacturing",
			url: "http://www.pharmamanufacturing.com/industrynews/2014/nih-puts-big-bucks-in-big-data/",
			target: "_blank",
			date: "10/21/2014"
		},
		{
			title: "NIH award aims to improve understanding of cell pathways, development of new therapies",
			source: "National Institutes of Health",
			url: "http://www.nih.gov/news/health/sep2014/nhgri-11.htm",
			target: "_blank",
			date: "9/11/2014"
		},
		{
			title: "Why Health Care May Finally Be Ready for Big Data",
			source: "Harvard Business Review",
			url: "https://hbr.org/2014/12/why-health-care-may-finally-be-ready-for-big-data",
			target: "_blank",
			date: "12/3/2014"
		},
		{
			title: "Grants Focus on Leveraging Biomedical Big Data",
			source: "Journal of the American Medical Association",
			url: "http://jama.jamanetwork.com/article.aspx?articleID=1938545",
			target: "_blank",
			date: "11/26/2014"
		},
		{
			title: "4 pieces of NIH's big data puzzle",
			source: "Government Health IT",
			url: "http://www.govhealthit.com/news/4-pieces-nihs-big-data-puzzle",
			target: "_blank",
			date: "10/20/2014"
		},
		{
			title: "NIH invests $32 million to crack big data",
			source: "Government Computer News",
			url: "http://gcn.com/articles/2014/10/17/nih-big-data-bd2k.aspx",
			target: "_blank",
			date: "10/17/2014"
		},
		{
			title: "NIH Awards $64M for Cellular Signatures Library Network",
			source: "Genome Web",
			url: "https://www.genomeweb.com/nih-awards-64m-cellular-signatures-library-network",
			target: "_blank",
			date: "9/12/2014"
		}
	]);
}]);


			
			
			
			
		
			
			
			
			
			
