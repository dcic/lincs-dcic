var mod = angular.module("toolsappsMod", []);

mod.factory("toolsapps", function() {
	return {
		links: [
			{
				title: "LINCS Information Framework (LIFE)",
				url: "http://life.ccs.miami.edu/life/",
				target: "_blank",
				image: "life.png"
			},
			{
				title: "iLINCS",
				url: "http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp",
				target: "_blank",
				image: "ilincs.png"
			},
			{
				title: "LINCS Canvas Browser",
				url: "http://www.maayanlab.net/LINCS/LCB/",
				target: "_blank",
				image: "lincs-canvas-browser.png"
			},
			{
				title: "Drug/Cell-line Browser",
				url: "http://www.maayanlab.net/LINCS/DCB/",
				target: "_blank",
				image: "drug-cell-browser.png"
			},
			{
				title: "Enrichr - Search engine for gene lists and signatures",
				url: "http://amp.pharm.mssm.edu/Enrichr/",
				target: "_blank",
				image: "enrichr.png"
			},
			{
				title: "lincscloud web apps",
				url: "http://apps.lincscloud.org/",
				target: "_blank",
				image: "lincscloud.png"
			},
			{
				title: "HMS software & tools",
				url: "http://lincs.hms.harvard.edu/resources/software-tools/",
				target: "_blank",
				image: "hms-lincs.png"
			}
		]
	}
});