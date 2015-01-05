var mod = angular.module("datacentersMod", []);

mod.factory("datacenters", function() {
	return {
		links: [
			{
				title: "Harvard Medical School; HMS-LINCS",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/hms-lincs-u54/",
				target: "_blank"
			},
			{
				title: "Broad Institute; LINCS Center for Transcriptomics",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-trx/",
				target: "_blank"
			},
			{
				title: "Broad Institute; LINCS Center Proteomic Characterization Center for Signaling and Epigenetics",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-prx/",
				target: "_blank"
			},
			{
				title: "Oregon Health & Science University; Center for Extrinsic Perturbations of Cell Physiology",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/oregon-u/",
				target: "_blank"
			},
			{
				title: "University of California – Irvine; NeuroLINCS",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/neurolincs/",
				target: "_blank"
			},
			{
				title: "Icahn School of Medicine at Mount Sinai; Drug Toxicity Signature Generation Center",
				url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/dtoxs/",
				target: "_blank"
			}
		]
	};
});
