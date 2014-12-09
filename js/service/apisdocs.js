var mod = angular.module("apidocsMod", []);

mod.factory("apidocs", function() {
	return {
		links: [
			{
				title: "Data standards",
				url: "http://www.lincsproject.org/data/data-standards/",
				target: "_blank"
			},
			{
				title: "Enrichr API",
				url: "http://amp.pharm.mssm.edu/Enrichr/#help",
				target: "_blank"
			},
			{
				title: "lincscloud API",
				url: "http://api.lincscloud.org/",
				target: "_blank"
			},
			{
				title: "HMS LINCS API",
				url: "https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit",
				target: "_blank"
			}
		]
	};
});