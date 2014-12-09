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
				title: "Turning Big Data to Knowledge (BD2K): A discussion of the NIH BD2K initiative and how it might advance the practice of Toxicology and Risk Assessment",
				url: "/#/education/sotoutreach",
				target: "_blank"
			}
		]
	};
});