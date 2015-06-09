var mod = angular.module("publicationsMod", []);

mod.controller("publicationsCtrl", ["$scope", function($scope) {
	$scope.publications = [
	    {
            title: "Dynamics of the discovery process of protein-protein interactions from low content studies",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26048415",
            authors: "Wang Z, Clark NR, Ma'ayan A",
            citation: "BMC Systems Biology. 2015 Jun;9(1):26.",
            ids: "PMID: 26048415 | PMCID: PMC4456804",
            year: 2015
	    }, 
	    {
            title: "GEO2Enrichr: browser extension and server app to extract gene sets from GEO and analyze them for biological functions",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25971742",
            authors: "Gundersen GW, Jones MR, Rouillard AD, Kou Y, Monteiro CD, Feldmann AS, Hu KS, Ma'ayan A",
            citation: "Bioinformatics. 2015 May 13. pii: btv297.",
            ids: "PMID: 25971742",
            year: 2015
	    },
	    {
            title: "PhosphoSitePlus, 2014: mutations, PTMs and recalibrations",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25514926",
            authors: "Hornbeck PV, Zhang B, Murray B, Kornhauser JM, Latham V, Skrzypek E.",
            citation: "Nucleic Acids Research 2015 Jan;43:D512-20.",
            ids: "PMID: 25514926 | PMCID: PMC4383998",
            year: 2015
	    },
	    {
            title: "Sex- and tissue-specific methylome changes in brains of mice perinatally exposed to lead",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25530354",
            authors: "Sánchez-Martín FJ, Lindquist DM, Landero-Figueroa J, Zhang X, Chen J, Cecil KM, Medvedovic M, Puga A.",
            citation: "Neurotoxicology 2015 Jan;46:92-100.",
            ids: "PMID: 25530354 | PMCID: PMC4339411",
            year: 2015
	    },
	    {
            title: "Multitask learning of signaling and regulatory networks with application to studying human response to flu",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25522349",
            authors: "Jain S, Gitter A, Bar-Joseph Z.",
            citation: "PLoS Computational Biology 2014 Dec 18;10(12):e1003943.",
            ids: "PMID: 25522349 | PMCID: PMC4270428",
            year: 2014
	    },
        {
            title: "Drug/Cell-line Browser: interactive canvas visualization of cancer drug/cell-line viability assay datasets",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25100688",
            authors: "Duan Q, Wang Z, Fernandez NF, Rouillard AD, Tan CM, Benes CH, Ma'ayan A.",
            citation: "Bioinformatics 2014 Nov 15;30(22):3289-90.",
            ids: "PMID: 25100688 | PMCID: PMC4221125",
            year: 2014
        },
        {
            title: "Histone H3.3 and its proteolytically processed form drive a cellular senescence programme",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25394905",
            authors: "Duarte LF, Young AR, Wang Z, Wu HA, Panda T, Kou Y, Kapoor A, Hasson D, Mills NR, Ma'ayan A, Narita M, Bernstein E.",
            citation: "Nature Communications 2014 Nov 14;5:5210.",
            ids: "PMID: 25522349 | PMCID: PMC4270428",
            year: 2014
        },
        {
            title: "A blueprint of cell identity",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25299921",
            authors: "Ma'ayan A, Duan Q.",
            citation: "Nature Biotechnology 2014 Oct;32(10):1007-8.",
            ids: "PMID: 25299921 | PMCID: PMC4274604",
            year: 2014,
        },
        {
            title: "Large-scale integration of small molecule-induced genome-wide transcriptional responses, Kinome-wide binding affinities and cell-growth inhibition profiles reveal global trends characterizing systems-level drug action",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25324859",
            authors: "Vidović D, Koleti A, Schürer SC.",
            citation: "Frontiers in Genetics 2014 Sep 30;5:342.",
            ids: "PMID: 25324859 | PMCID: PMC4179751",
            year: 2014,
        },
        {
            title: "Lean Big Data integration in systems biology and systems pharmacology",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=25109570",
            authors: "Ma'ayan A, Rouillard AD, Clark NR, Wang Z, Duan Q, Kou Y.",
            citation: "Trends Pharmacological Sciences 2014 Sep;35(9):450-60.",
            year: 2014,
            ids: "PMID: 25109570 | PMCID: PMC4153537"
        },
        {
            title: "Fast and accurate semantic annotation of bioassays exploiting a hybrid of machine learning and user confirmation",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25165633",
            authors: "Clark AM, Bunin BA, Litterman NK, Schürer SC, Visser U.",
            citation: "PeerJ 2014 Aug 14;2:e524.",
            year: 2014,
            ids: "PMID: 25165633 | PMCID: PMC4137659"
        },
        {
            title: "LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/?term=24906883",
            authors: "Duan Q, Flynn C, Niepel M, Hafner M, Muhlich JL, Fernandez NF, Rouillard AD, Tan CM, Chen EY, Golub TR, Sorger PK, Subramanian A, Ma'ayan A.",
            citation: "Nucleic Acids Research 2014 Jul;42:W449-60.",
            year: 2014,
            ids: "PMID: 24906883 | PMCID: PMC4086130"
        },
        {
            title: "Evolving BioAssay Ontology (BAO): modularization, integration and applications",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25093074",
            authors: "Abeyruwan S, Vempati UD, Küçük-McGinty H, Visser U, Koleti A, Mir A, Sakurai K, Chung C, Bittker JA, Clemons PA, Brudz S, Siripala A, Morales AJ, Romacker M, Twomey D, Bureeva S, Lemmon V, Schürer SC.",
            citation: "Journal of Biomedical Semantics 2014 Jun 3;5:S5.",
            year: 2014,
            ids: "PMID: 25093074 | PMCID: PMC4108877"
        },
        {
            title: "Metadata Standard and Data Exchange Specifications to Describe, Model, and Integrate Complex and Diverse High-Throughput Screening Data from the Library of Integrated Network-based Cellular Signatures (LINCS)",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/24518066",
            authors: "Vempati UD, Chung C, Mader C, Koleti A, Datar N, Vidović D, Wrobel D, Erickson S, Muhlich JL, Berriz G, Benes CH, Subramanian A, Pillai A, Shamu CE, Schürer SC.",
            citation: "Journal of Biomolecular Screening 2014 Feb 11;19(5):803-816.",
            year: 2014,
            ids: "PMID: 24518066"
        },
        {
            title: "Enrichr: interactive and collaborative HTML5 gene list enrichment analysis tool",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/23586463",
            authors: "Chen EY, Tan CM, Kou Y, Duan Q, Wang Z, Meirelles GV, Clark NR, Ma'ayan A.",
            citation: "BMC Bioinformatics 2013 Apr 15;14:128.",
            year: 2013,
            ids: "PMID: 23586463 | PMCID: PMC3637064"
        },
        {
            title: "Genome-wide signatures of transcription factor activity: connecting transcription factors, disease, and small molecules",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/24039560",
            authors: "Chen J, Hu Z, Phatak M, Reichard J, Freudenberg JM, Sivaganesan S, Medvedovic M.",
            citation: "PLoS Computational Biology 2013;9(9):e1003198.",
            year: 2013,
            ids: "PMID: 24039560 | PMCID: PMC3764016"
        },
        {
            title: "Metasignatures identify two major subtypes of breast cancer",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/23836026",
            authors: "Duan Q, Kou Y, Clark NR, Gordonov S, Ma'ayan A.",
            citation: "CPT Pharmacometrics and Systems Pharmacology. 2013 Mar 27;2:e35.",
            year: 2013,
            ids: "PMID: 23836026 | PMCID: PMC3615534"
        },
        {
            title: "Network2Canvas: network visualization on a canvas with enrichment analysis",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/23749960",
            authors: "Tan CM, Chen EY, Dannenfelser R, Clark NR, Ma'ayan A.",
            citation: "Bioinformatics 2013 Aug 1;29(15):1872-8.",
            year: 2013,
            ids: "PMID: 23749960 | PMCID: PMC3712222"

        }
    ];
}]);
