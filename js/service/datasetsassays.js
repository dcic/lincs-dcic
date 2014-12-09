var mod = angular.module("datasetsassaysMod", []);

mod.factory("datasetsassays", function() {
	return {
		links: [
			{
				title: "Submit your gene signatures for analysis",
				url: "/#/analysis",
				target: "_self"
			},
			{
				title: "LINCS Catalog",
				url: "http://lifekb.org/catalog/",
				target: "_blank"
			},
			{
				title: "Lincscloud",
				url: "http://www.lincscloud.org/",
				target: "_blank"
			},
			{
				title: "HMS LINCS Database",
				url: "http://lincs.hms.harvard.edu/db/",
				target: "_blank"
			},
			{
				title: "HMS KINOMEscan Data",
				url: "http://lincs.hms.harvard.edu/data/kinomescan/",
				target: "_blank"
			}
		]
	};
});