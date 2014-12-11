var mod = angular.module("datasetsassaysMod", []);

mod.factory("datasetsassays", function() {
	return {
		links: [
			{
				title: "Submit your gene signatures for analysis",
				url: "#/analyze",
				target: "_self"
			},
			{
				title: "Data and Signature Generating Centers",
				url: "#/datacenters",
				target: "_self"
			},
			{
				title: "LINCS Catalog",
				url: "http://lifekb.org/catalog/",
				target: "_blank"
			},
			{
				title: "L1000 on lincscloud.org",
				url: "http://www.lincscloud.org/l1000/",
				target: "_blank"
			},
			{
				title: "P100 on lincscloud.org",
				url: "http://www.lincscloud.org/p100/",
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