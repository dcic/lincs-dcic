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
            title: "Gene Expression's Big Rethink",
            source: "GEN",
            url: "http://www.genengnews.com/gen-articles/gene-expressions-big-rethink/5987?page=2",
            target: "_blank",
            date: "3/15/2017",
            mainText: "Open-source bioinformatics pipeline to extract knowledge from typical RNA-Seq studies and generate interactive principal component analysis (PCA) plots.",
            image: DIR + "pca_plot.jpg"
          },
          {
            title: "BD2K Wow Stories",
            source: "BD2K CCC",
            url: "https://bd2kccc.org/2017/02/24/bd2k-wow-stories/",
            target: "_blank",
            date: "3/8/2017",
            mainText: "",
            image: DIR + "pca_plot.jpg"
          },
          {
            title: "The Harmonizome",
            source: "Biomedical Computation Review",
            url: "http://biomedicalcomputationreview.org/content/harmonizome",
            target: "_blank",
            date: "11/1/2016",
            mainText: "By applying machine learning to data from diverse resources integrated to create the Harmonizome, the Ma'ayan Lab was able to predict likely knockout mouse phenotypes that have not yet been observed.",
            image: DIR + "biomedical-computation-review.png"
          },
          {
            title: "Big (Data) Changes",
	          source: "Biomedical Computation Review",
            url: "http://biomedicalcomputationreview.org/content/big-data-changes",
	          target: "_blank",
	          date: "11/1/2016",
            mainText: "",
            image: DIR + "biomedical-computation-review.png"
        },
	      {
            title: "Crowdsourcing for Scientific Discovery: Mount Sinai Researchers Find Novel Ways to Analyze Data for Drug and Target Discovery",
            source: "Newswise",
            url: "http://www.newswise.com/articles/crowdsourcing-for-scientific-discovery-mount-sinai-researchers-find-novel-ways-to-analyze-data-for-drug-and-target-discovery",
            target: "_blank",
            date: "9/26/2016",
            mainText: "",
            image: DIR + "creeds.png"
        },
	      {
            title: "Back on the Road with Coursera",
            source: "ASBMB Today",
            url: "http://www.asbmb.org/asbmbtoday/201606/Coordinates/",
            target: "_blank",
            date: "6/29/2016",
            mainText: "",
            image: DIR + "carol_m_img.fw.png"
        },
	      {
            title: "BD2K-LINCS DCIC's First Annual Systems Biology Data Science Symposium",
            source: "University of Miami News",
            url: "http://med.miami.edu/news/sylvester-director-delivers-keynote-address-at-first-annual-systems-biology",
            target: "_blank",
            date: "2/23/2016",
            mainText: "",
            image: DIR + "dcic_symposium_group.png"
        },
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
			title: "Mount Sinai Researchers Awarded One of the Big Data to Knowledge (BD2K) Centers of Excellence Grants",
		    source: "Icahn School of Medicine at Mount Sinai",
			url: "http://www.mountsinai.org/about-us/newsroom/press-releases/center-to-seek-new-therapeutics-by-integrating-gene-protein-databases-",
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
			title: "NIH Award Aims to Improve Understanding of Cell Pathways, Development of New Therapies",
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
			title: "4 Pieces of NIH's Big Data Puzzle",
			source: "Government Health IT",
			url: "http://www.govhealthit.com/news/4-pieces-nihs-big-data-puzzle",
			target: "_blank",
			date: "10/20/2014"
		},
		{
			title: "NIH Invests $32 Million to Crack Big Data",
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
