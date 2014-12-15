var mod = angular.module("communityMod", []);

mod.factory("community", function() {
	return {
		links: [
			{
				title: "Open Call for Data Science Research Projects",
				url: "#/callfordsrp",
				target: "_blank"
			},
			{
				title: "Satellite BD2K-LINCS meeting at the Society of Toxicology (SOT) annual meeting",
				url: "/#/education/sotoutreach",
				target: "_blank"
			}
		]
	};
});