var mod = angular.module("educationMod", []);

mod.factory("education", function() {
	return {
		links: [
			{
				title: "Summer Research Training Program in Biomedical Big Data Science",
	            highlight: "Accepting applications: ",
				url: "/#/education/summerresearch",
				target: "_self"
			},
			{
				title: "LINCS MOOC on Coursera: Big Data Science with the BD2K-LINCS Data Coordination and Integration Center",
				url: "https://www.coursera.org/course/bd2klincs",
	            highlight: "Accepting applications: ",
				target: "_blank"
			},
			{
				title: "Network Analysis in Systems Biology on Coursera",
				url: "https://www.coursera.org/course/netsysbio",
	            highlight: "Started but registration still open: ",
				target: "_blank"
			},
			{
				title: "New PhD program in Biostatistics with an emphasis on Big Data Science",
				url: "/#/education/phd",
				highlight: "",
				target: "_self"
			},
			{
				title: "Network Matching Game",
				url: "http://www.maayanlab.net/NASB15/NMG/",
				highlight: "",
				target: "_blank"
			}

		]
	};
});
