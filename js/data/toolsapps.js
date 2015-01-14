var mod = angular.module("toolsappsMod", []);

mod.factory("toolsapps", function() {
	return {
		dcicLinks: [
	        {
				title: "GEO2Enrichr",
				description: "A Google Chrome Extension to extract gene sets from GEO and analyze these lists for common biological functions.",
				url: "http://maayanlab.net/g2e",
				target: "_blank",
				image: "geo2enrichr.png"
            },
            {
				title: "LINCS Information Framework (LIFE)",
	            description: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
				url: "http://life.ccs.miami.edu/life/",
				target: "_blank",
				image: "life.png"
			},
			{
				title: "iLINCS",
	            description: "A computational biology project aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the Library of Integrated Network-based Cellular Signatures (LINCS) program.",
				url: "http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp",
				target: "_blank",
				image: "ilincs.png"
			},
			{
				title: "LINCS Canvas Browser",
				description: "The LINCS Canvas Browser is an interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.",
				url: "http://www.maayanlab.net/LINCS/LCB/",
				target: "_blank",
				image: "lincs-canvas-browser.png"
			},
			{
				title: "Drug/Cell-line Browser",
				description: "An online interactive HTML5 data visualization tool for interacting with three of the recently published datasets of cancer cell lines/drug-viability studies.",
				url: "http://www.maayanlab.net/LINCS/DCB/",
				target: "_blank",
				image: "drug-cell-browser.png"
			},
			{
				title: "Enrichr - Search engine for gene lists and signatures",
				description: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
				url: "http://amp.pharm.mssm.edu/Enrichr/",
				target: "_blank",
				image: "enrichr.png"
			}
        ],
		// Data signature generation centers
        dsgcLinks: [
			{
				title: "lincscloud web apps",
				description: "Brings together datasets and tools from the LINCS consortium.",
				url: "http://apps.lincscloud.org/",
				target: "_blank",
				image: "lincscloud.png"
			},
			{
				title: "HMS software & tools",
				description: "Creating and re-purposing various types of software to collect, manage and analyze data.",
				url: "http://lincs.hms.harvard.edu/resources/software-tools/",
				target: "_blank",
				image: "hms-lincs.png"
			}
	    ]
	}
});
