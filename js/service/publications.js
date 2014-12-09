var mod = angular.module("publicationsMod", []);

mod.factory("publications", function() {
	return {
		links: [
			{
				title: "Metadata Standard and Data Exchange Specifications to Describe, Model, and Integrate Complex and Diverse High-Throughput Screening Data from the Library of Integrated Network-based Cellular Signatures (LINCS)",
				citation: "Vempati U et al, Journal of Biomolecular Screening, pp 803-816",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/24518066"
			},
			{
				title: "A blueprint of cell identity",
				citation: "Ma'ayan A and Duan Q. Nature Biotechnology, pp 1007-8",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25299921"
			},
			{
				title: "Genome-wide signatures of transcription factor activity: connecting transcription factors, disease, and small molecules",
				citation: "Chen J et al, PLoS Computational Biology",
				year: "2013",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/24039560"
			},
			{
				title: "Lean Big Data integration in systems biology and systems pharmacology",
				citation: "Ma'ayan A et al, Trends in Pharmacological Sciences, pp 450-60",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25109570"
			},
			{
				title: "Drug/Cell-line Browser: interactive canvas visualization of cancer drug/cell-line viability assay datasets",
				citation: "Duan Q et al, Bioinformatics, pp 3289-90",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25100688"
			},
			{
				title: "LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures",
				citation: "Duan Q et al, Nucleic Acids Research, pp 449-60",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=24906883"
			},
			{
				title: "Enrichr: interactive and collaborative HTML5 gene list enrichment analysis tool",
				citation: "Chen EY et al, BMC Bioinformatics, pp 128-42",
				year: "2013",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/23586463"
			},
			{
				title: "Fast and accurate semantic annotation of bioassays exploiting a hybrid of machine learning and user confirmation",
				citation: "Clark AM et al, PeerJ, 524",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/25165633"
			},
			{
				title: "Large-scale integration of small molecule-induced genome-wide transcriptional responses, Kinome-wide binding affinities and cell-growth inhibition profiles reveal global trends characterizing systems-level drug action",
				citation: "Vidović D et al, Frontiers in Genetics, 5:342",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/25324859"
			},
			{
				title: "Evolving BioAssay Ontology (BAO): modularization, integration and applications",
				citation: "Abeyruwan S et al, Journal of Biomedical Semantics, 5",
				year: "2014",
				url: "http://www.ncbi.nlm.nih.gov/pubmed/25093074"
			}
		]
	};
});