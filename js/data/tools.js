
var mod = angular.module("toolsMod", []);

mod.controller("toolsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = 'images/apps/';

    $scope.introText = $sce.trustAsHtml("The DCIC develops web-based tools for integrative data access and visualization across the distributed LINCS and BD2K sites and other relevant data sources. Our next generation integrated web-based platform for the LINCS project serves as the foundation for all LINCS activities and federates all LINCS data, signatures, analysis algorithms, pipelines, APIs and web tools.");

    $scope.tools = [
        {
            title: "Concierge",
            description: "Provides multiple points of entry to the LINCS tools and databases.",
            url: "/getting-started/concierge",
            target: "_blank",
            image: DIR + "concierge_bell.svg",
            shortDesc: "Interactive Introduction to LINCS Tools and Resources"
        },
        {
            title: "LINCS Data Portal",
            description: "Features for searching and exploring LINCS dataset packages and reagents.",
            url: "http://lincsportal.ccs.miami.edu/dcic-portal/",
            target: "_blank",
            image: DIR + "portal.png",
            docsUrl: "",
            shortDesc: "Access to LINCS Data and Signatures"
        },
        {
            title: "L1000CDS2",
            description: "L1000CDS<sup>2</sup> queries gene expression signatures against the LINCS L1000 to identify and prioritize small molecules that can reverse or mimic the observed input expression pattern.",
            url: "http://amp.pharm.mssm.edu/L1000CDS2/",
            target: "_blank",
            image: DIR + "l1000cds2.png",
            docsUrl: "http://amp.pharm.mssm.edu/L1000CDS2/help/#api",
            shortDesc: "L1000 Characteristic Direction Signature Search Engine",
            isHtml: true
        },
        {
            title: "iLINCS",
            description: "An integrative web platform for analysis of LINCS data and signatures.",
            url: "http://www.ilincs.org",
            target: "_blank",
            image: DIR + "ilincs.png",
            docsUrl: "http://www.ilincs.org/ilincs/APIinfo",
            shortDesc: "LINCS Web Portal"
        },
        {
            title: "piLINCS",
            description: "A seamless user interface and intermediate API for accessing LINCS proteomics datasets (P100, GCP, etc.) on Panorama.",
            url: "http://eh3.uc.edu/pilincs",
            target: "_blank",
            image: DIR + "pilincs.png",
            docsUrl: "http://eh3.uc.edu/pilincs/#/api",
            shortDesc: "Interface to panoramaweb.org"
        },
	{
            title: "LINCS Joint Project - Breast Cancer Network Browser",
            description: "LJP-BCNB visualizes thousands of signatures from six breast cancer cell lines treated with ~100 single molecule perturbations, mostly kinase inhibitors.",
            url: "http://amp.pharm.mssm.edu/LJP/",
            target: "_blank",
            image: DIR + "ljp.png",
            docsUrl: "",
            shortDesc: "LINCS Joint Project Network Enrichment Tool"
        },
	{
            title: "L1000FWD",
            description: "L1000FWD provides interactive visualization of over 16,000 drug and small-molecule induced gene expression signatures.",
            url: "http://amp.pharm.mssm.edu/L1000FWD/",
            target: "_blank",
            image: DIR + "L1000FWD_logo.png",
            docsUrl: "http://amp.pharm.mssm.edu/l1000fwd/api_page",
            shortDesc: "L1000 Fireworks Display"
        },
	{
            title: "DGB",
            description: "An application for ranking drugs to modulate a specific gene based on transcriptomic signatures.",
            url: "http://amp.pharm.mssm.edu/DGB/",
            target: "_blank",
            image: DIR + "dgb.jpg",
            shortDesc: "Drug Gene Budger"
        },
	{
            title: "GRcalculator",
            description: "Interactive website for calculation, analysis, and visualization of dose-response data using the GR approach.",
            url: "http://www.grcalculator.org/grtutorial/Home.html",
            target: "_blank",
            image: DIR + "GR.png",
            docsUrl: "",
            shortDesc: "Tool for Calculating and Mining Dose-Response Data"
        },
	{
            title: "SEP L1000",
            description: "SEP L1000 is a web portal to share predicted ADRs.",
            url: "http://maayanlab.net/SEP-L1000/",
            target: "_blank",
            image: DIR + "sep.png",
            docsUrl: "",
            shortDesc: "Side Effect Prediction Based on L1000 Data"
        },
	{
            title: "Slicr",
            description: "Slicr is a metadata search engine that searches for LINCS L1000 gene expression profiles and signatures matching user's input parameters.",
            url: "http://amp.pharm.mssm.edu/Slicr",
            target: "_blank",
            image: DIR + "slicr2.png",
            docsUrl: "",
            shortDesc: "LINCS L1000 Slicr [GSE70138 data only]"
        },
	{
            title: "SynergySeq",
            description: "Ranking of the LINCS L1000 compounds based on their transcriptional similarity to a reference compound and their reversal of a disease signature.",
            url: "https://schurerlab.shinyapps.io/synergyseq/",
            target: "_blank",
            image: DIR + "synergyseq.jpg",
            docsUrl: "",
            shortDesc: "Identify Synergistic Drug Combinations"
        },
	{
            title: "Harmonizome",
            description: "Built on top of information about genes and proteins from 114 datasets, the Harmonizome is a knowledge engine for a diverse set of integrated resources.",
            url: "http://amp.pharm.mssm.edu/Harmonizome",
            target: "_blank",
            image: DIR + "harmonizome.png",
            docsUrl: "http://amp.pharm.mssm.edu/Harmonizome/documentation",
            shortDesc: "Biological Knowledge Engine"
        },
        {
            title: "Enrichr",
            description: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
            url: "http://amp.pharm.mssm.edu/Enrichr/",
            target: "_blank",
            image: DIR + "enrichr.png",
            docsUrl: "http://amp.pharm.mssm.edu/Enrichr/help#api",
            shortDesc: "Search Engine for Gene Lists and Signatures"
        },
	 {
            title: "modEnrichr",
            description: "A suite of gene set enrichment analysis tools for model organisms.",
            url: "https://amp.pharm.mssm.edu/modEnrichr/",
            target: "_blank",
            image: DIR + "modEnrichr.jpg",
            docsUrl: "",
            shortDesc: "Expansion of Enrichr for Four Model Organisms: Fish, Fly, Worm and Yeast"
        },
	{
            title: "BioJupies",
            description: "A web application that enables the automated creation, storage, and deployment of Jupyter Notebooks containing RNA-seq data analyses.",
            url: "https://amp.pharm.mssm.edu/biojupies/",
            target: "_blank",
            image: DIR + "biojupies_logo.jpg",
            shortDesc: "Automated Generation of Interactive Notebooks for RNA-Seq Data Analysis in the Cloud"
        },
	{
            title: "ARCHS4",
            description: "A web resource that makes the majority of previously published RNA-seq data from human and mouse freely available at the gene count level.",
            url: "http://amp.pharm.mssm.edu/archs4",
            target: "_blank",
            image: DIR + "archs4_icon_720.png",
            shortDesc: "All RNA-seq and CHIP-seq Signature Search Space"
        },
	{
            title: "Geneshot",
            description: "Submit biomedical terms to receive ranked lists of relevant genes.",
            url: "https://amp.pharm.mssm.edu/geneshot/",
            target: "_blank",
            image: DIR + "geneshot.jpg",
	    docsUrl: "https://amp.pharm.mssm.edu/geneshot/api.html",
            shortDesc: "Search Engine for Ranking Genes from Arbitrary Text Queries"
        },
        {
            title: "ChEA3",
            description: "Transcription factor enrichment analysis by orthogonal omics integration.",
            url: "https://amp.pharm.mssm.edu/ChEA3",
            target: "_blank",
            image: DIR + "chea3logo.jpg",
	    docsUrl: "https://amp.pharm.mssm.edu/chea3/index.html#content4-z",
            shortDesc: "ChIP-X Enrichment Analysis 3"
        },
	{
            title: "X2K Web",
            description: "Computationally predicts involvement of upstream cell signaling pathways, given a signature of differentially expressed genes.",
            url: "http://X2K.cloud",
            target: "_blank",
            image: DIR + "expression2kinases.jpg",
            docsUrl: "https://amp.pharm.mssm.edu/X2K/#api",
            shortDesc: "eXpression2Kinases Web"
        },
        {
            title: "Gen3va",
            description: "Aggregates and analyzes gene expression signatures extracted from GEO by the crowd using GEO2Enrichr.",
            url: "http://amp.pharm.mssm.edu/gen3va",
            target: "_blank",
            image: DIR + "gen3va_logo.png",
            docsUrl: "http://amp.pharm.mssm.edu/gen3va/documentation#api",
            shortDesc: "Gene Expression and Enrichment Vector Analyzer"
        },
	{
            title: "CREEDS",
            description: "Collections of processed gene, drug and disease signatures from GEO.",
            url: "http://amp.pharm.mssm.edu/CREEDS/",
            target: "_blank",
            image: DIR + "creeds_logo.fw.png",
            docsUrl: "http://amp.pharm.mssm.edu/CREEDS/#help",
            shortDesc: "Crowd Extracted Expression of Differential Signatures"
        },
        {
            title: "Datasets2Tools",
            description: "A repository indexing 31,473 canned bioinformatics analyses applied to 6,431 datasets.",
            url: "http://amp.pharm.mssm.edu/datasets2tools",
            target: "_blank",
            image: DIR + "d2t_icon_720.png",
	    docsUrl: "http://amp.pharm.mssm.edu/datasets2tools/api",
            shortDesc: "Repository and Search Engine for Bioinformatics Datasets, Tools and Canned Analyses"
        },
        {
            title: "GEO2Enrichr",
            description: "A browser extension and web application to extract gene sets from GEO and analyze these lists for common biological functions.",
            url: "http://amp.pharm.mssm.edu/g2e/",
            target: "_blank",
            image: DIR + "g2e.png",
            docsUrl: "http://amp.pharm.mssm.edu/g2e/documentation",
            shortDesc: "Differential Expression Analysis Tool"
        },
	{
            title: "GREIN",
            description: "An interactive web platform for re-analyzing GEO RNA-seq data.",
            url: "https://shiny.ilincs.org/grein",
            target: "_blank",
            image: DIR + "grein_logo.jpg",
            docsUrl: "",
            shortDesc: "GEO RNA-seq Experiments Interactive Navigator"
        },
        {
            title: "PAEA",
            description: "PAEA is a new R/Shiny gene set enrichment web application with over 70 gene set libraries available for enrichment analysis.",
            url: "http://amp.pharm.mssm.edu/PAEA/",
            target: "_blank",
            image: DIR + "paea.png",
            docsUrl: "http://amp.pharm.mssm.edu/PAEA/#api",
            shortDesc: "Principal Angle Enrichment Analysis"
        },
        //{
        //    title: "LINCS Information Framework (LIFE)",
        //    description: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
        //    url: "http://life.ccs.miami.edu/life/",
        //    target: "_blank",
        //    image: DIR + "life.png",
        //    docsUrl: "",
        //    shortDesc: "LINCS Information System"
        //},
        {
            title: "LINCS Canvas Browser",
            description: "The LINCS Canvas Browser is an interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.",
            url: "http://www.maayanlab.net/LINCS/LCB",
            target: "_blank",
            image: DIR + "lincs-canvas-browser.png",
            docsUrl: "http://www.maayanlab.net/LINCS/LCB/LCB-Tutorial-042314.pdf",
            shortDesc: "LINCS L1000 Clustering, Visualization and Enrichment Analysis Tool"
        },
        {
            title: "Drug/Cell-line Browser",
            description: "An online interactive HTML5 data visualization tool for interacting with three of the recently published datasets of cancer cell lines/drug-viability studies.",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            target: "_blank",
            image: DIR + "drug-cell-line-browser.png",
            docsUrl: "http://www.maayanlab.net/LINCS/DCB/DCB%20Manual.pdf",
            shortDesc: "Data Visualization Tool"
        },
        {
            title: "Cite-D-Lite",
            description: "Functions on specific pages of GEO, PubMed, and DataMed. It has two functions: (1) to create downloadable citations for GEO data and PubMed articles and (2) to highlight the most important sentences in PubMed abstracts in a graded manner (based on TextRank algorithm).",
            url: "https://chrome.google.com/webstore/detail/cite-d-lite/ipiffhgeigmiffclkpkgdaklbdgdegkk",
            target: "_blank",
            image: DIR + "cdl_icon_720.png",
            shortDesc: "Chrome Extension for Data and Paper Citations with Text Importance Highlighting"
        },
        {
            title: "Network2Canvas",
            description: "A web application that provides an alternative way to view networks and visualizes them by placing nodes on a square toroidal canvas.",
            url: "http://www.maayanlab.net/N2C/",
            target: "_blank",
            image: DIR + "network2canvas.png",
            docsUrl: "http://www.maayanlab.net/N2C/help.html",
            shortDesc: "Network Visualization on a Canvas with Enrichment Analysis"
        },
        {
            title: "GUIdock",
            description: "A method for deploying containers with a graphical user interface.",
            url: "https://github.com/WebDataScience/GUIdock",
            target: "_blank",
            image: DIR + "gui_dock.fw.png",
            docsUrl: "https://github.com/WebDataScience/GUIdock",
            shortDesc: "Using Docker Containers with a Common Graphics User Interface to Address the Reproducibility of Research"
        },
    ];

    //$scope.docentWarning = "*Experiments with content that may not be up to date.";

    //$scope.lincsVizTools = [
        //{
        //    title: "Docent - Grid view",
        //    description: "Docent's grid view provides two interfaces for searching LINCS data by assay, perturbagen, cell, and readout.",
        //    url: "http://amp.pharm.mssm.edu/milestones/grid.html",
        //    target: "_blank",
        //    image: DIR + "docent-grid.png",
        //    shortDesc: "Searchable overview of the LINCS Consortium's datasets."
       // },
      //  {
      //      title: "Docent - List view",
      //      description: "Docent's list view provides an interactive matrix of the most studied cell lines by assay.",
      //      url: "http://amp.pharm.mssm.edu/milestones/product.html",
      //      target: "_blank",
      //      image: DIR + "docent-list.png",
      //      shortDesc: "Overview of the LINCS Consortium's datasets by assay and cell type."
      //  },
      //  {
      //      title: "Docent - Card view",
      //      description: "Docent's card view provides an interactive matrix of the most studied cell lines by assay.",
      //      url: "http://amp.pharm.mssm.edu/milestones/cards.html",
      //      target: "_blank",
      //      image: DIR + "docent-card.png",
      //      shortDesc: "Overview of the LINCS Consortium's datasets by assay and cell type."
      //  }
   // ];

   // $scope.lincsVizToolsArchived = [
       // {
       //     title: "Docent I",
       //     description: "Docent provides a quantified, interactive view of the biological entities such as cell lines, small molecules, and assays within LINCS data.",
       //     url: "http://amp.pharm.mssm.edu/public/docent/",
       //     target: "_blank",
       //     image: DIR + "docent-i.png",
       //     shortDesc: "Overview guide into LINCS data"
       // },
       // {
       //     title: "Docent II",
       //     description: "Docent II provides an interactive plot of available and upcoming data from the LINCS DSGCs.",
       //     url: "http://amp.pharm.mssm.edu/milestonesViz/",
       //     target: "_blank",
       //     image: DIR + "docent-ii.png",
       //    shortDesc: "Overview of the LINCS Data and Signature Generation Centers (DSGCs) Data Release Milestones"
       // }
   // ];
}]);
