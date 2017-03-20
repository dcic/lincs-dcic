var mod = angular.module('LincsDirectAccessTools',
    ["mgcrea.ngStrap.popover", "ngTagsInput"]
    // ['ngTagsInput', 'ui.bootstrap.tooltip']  // for tooltips
);

// Filter which removes all html tags from string and returns the plain text.
mod.filter("html2text", function() {
    return function(text) {
        return text ? String(text).replace(/<[^>]+>/gm, "") : "";
    };
});

mod.directive('scrollOnClick', function() {
    return {
        restrict: 'A',
        link: function(scope, $elem, attrs) {
            var id = attrs.href;

            $elem.on('click', function() {
                var $target;
                if (id) {
                    $target = $(id);
                } else {
                    $target = $elem;
                }
                $("body").animate(
                    {scrollTop: $target.offset().top},
                    300);
            });
        }
    }
});

mod.controller('DirectAccessToolsCtrl',
    ['$scope', '$sce', '$compile', '$anchorScroll', '$location',
    function($scope, $sce, $compile, $anchorScroll, $location) {

    var DIR = 'js/lincs-direct-access-tools/tool-icons/';

    // $scope.introText = $sce.trustAsHtml('');

    $scope.mode = "";  // selected mode

    $scope.buttons = [
        {
            name: "search",
            description: "Search"
        },
        {
            name: "download",
            description: "Download"
        },
        {
            name: "navigation",
            description: "Visualize"
        },
        {
            name: "analysis",
            description: "Analyze"
        },
        {
            name: "integration",
            description: "Integrate"
        },
        {
            name: "api",
            description: "API"
        },
        {
            name: "cells",
            description: "Cell lines"
        },
        {
            name: "drugs",
            description: "Small molecules"
        },
        {
            name: "genetics",
            description: "Gene experiments"
        },
        {
            name: "assays",
            description: "Assay types"
        },
        {
            name: "external",
            description: "External data"
        },
        {
            name: "publication",
            description: "Publication"
        },
        {
            name: "education",
            description: "Educational resource"
        },
        {
            name: "collaboration",
            description: "Collaborate"
        }
    ];

    $scope.tools = [
        {
            title: 'L1000CDS<sup>2</sup>',
            url: 'http://amp.pharm.mssm.edu/L1000CDS2',
            image: DIR + 'l1000cds2.png',
            description: {
                // main description always shown.
                main: "A search engine for gene expression signatures. Submit your own gene expression signature and get a ranked lists of signatures from the LINCS L1000 dataset that are predicted to reverse or mimic the input signature.",
                // mode-specific descriptions shown when mode buttons are clicked
                analysis: "Submitting up- and down-regulated lists of genes allows the identification of similar or opposite perturbations. Alternatively, gene expression vectors can be analyzed by L1000CDS<sup>2</sup>.",
                search: "The data-oriented search allows finding relevant signatures where the query is based on gene lists.",
                cells: "The queried L1000 datasets include data on 62 unique cell lines.",
                drugs: "3,924 small-molecule perturbations from the L1000 dataset are included in the search."
            },
            // alternative modes which can be selected by clicking the mode buttons
            modes: {
                functionality: ["analysis", "search"],
                content: ["cells", "drugs"]
            },
            directive: 'l1000cds2-textarea',
            cssClass: 'l1000cds2',
        },
        {
            title: 'LINCS Data Portal',
            url: 'http://lincsportal.ccs.miami.edu/dcic-portal/',
            image: DIR + "portal.png",
            description: {
                // main: "Search and download LINCS datasets and entities.",
                main: "A unified resource for accessing all LINCS dataset packages and entities.",
                search: "Search LINCS metadata by entering names of small molecules, assays, genes, or cell types.",
                api: "The available data can be accessed programmatically through an <a target='_blank' href='http://lincsportal.ccs.miami.edu/apis/'>API</a>.",
                download: "Data packages are available for download.",
                cells: "1,097 cell lines across LINCS data<a target='_blank' href='http://lincsportal.ccs.miami.edu/entities/'>...</a>",
                drugs: "41,727 small-molecule compounds across LINCS data<a target='_blank' href='http://lincsportal.ccs.miami.edu/entities/'>...</a>",
                genetics: "3,126 cDNA and 18000 shRNA gene alteration experiments across LINCS data<a target='_blank' href='http://lincsportal.ccs.miami.edu/entities/'>...</a>",
                assays: "18 experimental platforms across LINCS data<a target='_blank' href='http://lincsportal.ccs.miami.edu/datasets/'>...</a>"
            },
            modes: {
                functionality: ["search", "api", "download"],
                content: ["cells", "drugs", "genetics", "assays"]
            },
            directive: 'lincs-data-portal-bar',
            cssClass: 'lincs-data-portal'
        },
        {
            title: 'iLINCS',
            url: 'http://eh3.uc.edu/GenomicsPortals/Lincs.jsp',
            image: DIR + 'i-lincs.png',
            description: {
                // main: 'Use iLINCS to analyze differential gene expression in a dataset identified via LINCS Data Portal.',
                main: "A data analysis platform aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the LINCS program.",
                analysis: "Datasets on the portal can be analyzed using a collection of standard statistical methods including volcano plots, hierarchical clustering heatmaps, and principal component analysis (PCA). The iLINCS analysis engine is written in R and is open source, enabling users to reproduce analyses using R Studio.",
                search: "A selected collection of LINCS datasets can be searched for experimental conditions such as small-molecule perturbations and cell lines."
                // cells: "Data on a subset of LINCS cell lines are available.",
                // drugs: "Data on a subset of LINCS small molecules are available.",
                // assays: "Experimental platforms include RNA-seq, phosphosite mass spectrometry."
            },
            modes: {
                functionality: ["analysis", "search"],
                content: []
            },
            directive: 'i-lincs-bar',
            cssClass: 'i-lincs'
        },
        {
            title: 'piLINCS',
            url: 'http://eh3.uc.edu/pilincs/',
            image: DIR + 'pilincs.png',
            description: {
                // main: "Access to LINCS proteomics datasets with platforms P100 and GCP.",
                main: "An interface for visualizing and accessing LINCS proteomics datasets (P100 and GCP) on Panorama.",
                navigation: "Each signature protein phosphosite signature can be browsed as a histogram.",
                search: "Experimental conditions can be searched by cell lines and small molecules.",
                api: "<a target='_blank' href='http://eh3.uc.edu/pilincs/#/api'>API documentation</a>."
                // drugs: "The small molecules investigated in the experiment are thought to be kinase inhibitors, epigenetically active drugs, or neuroactive drugs. For more information about the experimental setup consult the <a target='_blank' href='https://panoramaweb.org/labkey/project/LINCS/begin.view'>Panorama repository</a>.",
                // cells: "A targeted set of cell lines are available at this stage."
            },
            modes: {
                functionality: ["navigation", "search", "api"],
                content: []
            },
            directive: 'pi-lincs-bar',
            cssClass: 'pi-lincs'
        },
        {
            title: 'Slicr',
            url: 'http://amp.pharm.mssm.edu/slicr/',
            image: DIR + 'slicr.png',
            description: {
                // main: "Search LINCS L1000 gene expression profiles.",
                main: "A metadata search engine that provides easier access to the LINCS L1000 gene expression profiles deposited on GEO. Users can download signatures for specific conditions and run analyses directly from the search results pages.",
                search: "The experimental conditions of the L1000 dataset which are deposited in GEO.",
                download: "Each individual signature can be selected, downloaded, and analyzed by downstream tools."
                // drugs: "All L1000 small molecules.",
                // genetics: "All L1000 genetic experiments.",
                // cells: "All L1000 cell lines."
            },
            modes: {
                functionality: ["search", "download"],
                content: []
            },
            directive: 'slicr-bar',
            cssClass: 'slicr'
        },
        {
            title: "P100/GCP Mosaic",
            url: "http://amp.pharm.mssm.edu/p100mosaic",
            image: DIR + "mosaic_by_freepik.jpg",
            description: {
                main: "Mosaic visualization of the LINCS targeted phosphoproteomics and post-translation histone modification datasets.",
                navigation: "Clusters of correlated of phosphosites and histone modifications can be investigated using 2D canvas visualizations.",
                integration: "Data integration of the phosphoproteomic and global chromatin post-translational modifications collected for the LINCS program.",
                drugs: "Small-molecule compounds which can be categorized as kinase inhibitors, epigenetically active, or neurologically active.",
                cells: "Small set of cancer and brain cell lines including MCF7, PC3, HL60, A549, NPC, and A375."
            },
            modes: {
                functionality: ["navigation", "integration"],
                content: ["drugs", "cells"]
            },
            // directive: "P100mosaic-bar",
            cssClass: "p100mosaic"
        },
        {
            title: "MEP Mosaic",
            url: "http://amp.pharm.mssm.edu/MEPmosaic",
            image: DIR + "cells_grid.svg",
            description: {
                main: "Mosaic visualization of high-content imaging assays of cancer cell lines following treatment with ligand-microenvironment pairs.",
                navigation: "Clusters of correlated of ligand-microenvironment pairs can be investigated using 2D canvas visualizations.",
                integration: "Imaging data are integrated across staining sets allowing for comparison across cellular features related to morphology, metabolism, cell cycle, nuclear state, and lineage status.",
                cells: "Small set of cancer cell lines including MCF7, PC3, and YAPC."
            },
            modes: {
                functionality: ["navigation", "integration"],
                content: ["cells"]
            },
            // directive: "P100mosaic-bar",
            cssClass: "p100mosaic"
        },
        {
            title: "Gen3va",
            url: "http://amp.pharm.mssm.edu/gen3va/",
            image: DIR + "gen3va_logo.png",
            description: {
                main: "Analyzes aggregated gene expression signatures from LINCS, TCGA, BioGPS, and signatures extracted from GEO by the crowd using GEO2Enrichr.",
                analysis: "Principal component analysis (PCA), hierarchical clustering heatmaps, enrichment analysis, and LINCS drugs that can either reverse or mimic expression across signatures.",
                download: "Collections of signatures can be downloaded as TSV files."
                // external: "The data is aggregated from GEO by crowd-sourcing through GEO2Enrichr browser extension."
            },
            modes: {
                functionality: ["analysis", "download"],
                content: []
            },
            // directive: "Geneva-bar",
            cssClass: "geneva"
        },
        {
            title: 'Harmonizome',
            url: 'http://amp.pharm.mssm.edu/Harmonizome/',
            image: DIR + 'harmonizome.png',
            description: {
                // main: 'Search for genes or proteins and their functional terms extracted and organized from over 100 publicly available resources.',
                main: "A knowledge engine for discovery of relationships across diverse sets of omics resources. Access knowledge about genes and proteins from 70 resources and 116 datasets.",
                search: "General text-based search.",
                api: "Data can be accessed programmatically through GET requests. Consult the <a target='_blank' href='http://amp.pharm.mssm.edu/Harmonizome/documentation'>API documentation</a> for more information.",
                download: "Processed data can be downloaded in various formats including gene set libraries, attribute tables, and networks.",
                external: "External data are collected from many different large-scale omics projects.",
                analysis: "Datasets can be analyzed for correlations across resources using different measures of similarity.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4930834/'>The harmonizome: a collection of processed datasets gathered to serve and mine knowledge about genes and proteins</a>."
            },
            modes: {
                functionality: ["search", "api", "download", "analysis"],
                content: ["external", "publication"]
            },
            directive: 'harmonizome-bar',
            cssClass: 'harmonizome'
        },
        {
            title: 'Enrichr',
            url: 'http://amp.pharm.mssm.edu/Enrichr/',
            image: DIR + 'enrichr.png',
            description: {
                main: "A web-based gene set enrichment analysis tool containing a large collection of gene set libraries. Enrichment results are visualized in several interactive modes.",
                analysis: "Gene set enrichment analysis is performed using three alternative methods.",
                search: "Gene symbols can be searched retrieving information about a single gene.",
                api: "Analyses can be performed and results downloaded using the <a target='_blank' href='http://amp.pharm.mssm.edu/Enrichr/#help'>API</a>.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3637064/'>Enrichr: interactive and collaborative HTML5 gene list enrichment analysis tool</a>."
                // external: "Choose between a wide selection of external gene libraries such as Gene Ontologies for functional analysis."
            },
            modes: {
                functionality: ["analysis", "search", "api"],
                content: ["publication"]
            },
            directive: 'enrichr-textarea',
            cssClass: 'enrichr'
        },
        {
            title: "Geo2Enrichr",
            url: "http://amp.pharm.mssm.edu/g2e/",
            image: DIR + "Geo2Enrichr.png",
            description: {
                // main: "GEO2Enrichr is a web application and two browser extensions designed to ease the extraction of signatures from studies posted on the Gene Expression Omnibus (GEO) database as well as extract signatures from your own data tables.",
                main: "A browser extension and web server application to extract gene expression signatures from GEO and analyze these lists for common biological functions.",
                analysis: "Analyzes gene expression samples using the Charactaristic Direction method. Processed signatures are piped for furter analysis with Enrichr, L1000CDS<sup>2</sup>, PAEA, and Gen3va.",
                external: "Geo2Enrichr analyzes data from the Gene Expression Omnibus (GEO).",
                publication: "<a target='_blank' href='https://bioinformatics.oxfordjournals.org/content/early/2015/05/28/bioinformatics.btv297.full'>GEO2Enrichr: browser extension and server app to extract gene sets from GEO and analyze them for biological functions</a>."
            },
            modes: {
                functionality: ["analysis"],
                content: ["external", "publication"]
            },
            directive: "geo2enrichr-bar"
        },
        {
            title: "PAEA",
            url: "http://amp.pharm.mssm.edu/PAEA/",
            image: DIR + "paea.png",
            description: {
                main: "Principal Angle Enrichment Analysis (PAEA) is a gene set enrichment analysis web application implemented in R/Shiny.",
                analysis: "PAEA implements a multivariate approach to perform gene-set enrichment analysis. This approach is an extension of the Charactaristic Direction method and it outperforms standard methods such as GSEA and the Fisher test.",
                external: "70 gene set libraries available for enrichment analysis.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4737646/'>Principal Angle Enrichment Analysis (PAEA): Dimensionally reduced multivariate gene set enrichment analysis tool</a>."
            },
            modes: {
                functionality: ["analysis"],
                content: ["external", "publication"]
            },
            directive: "Paea-bar",
            cssClass: "paea"
        },
        {
            title: "CREEDS",
            url: "http://amp.pharm.mssm.edu/CREEDS",
            image: DIR + "creeds.png",
            description: {
                main: "Collections of processed gene, drug, and disease signatures from GEO.",
                navigation: "Global visualization of all signatures in a bubble chart or heatmap.",
                collaboration: "Users can contribute signatures through GEO2Enrichr and the Crowdsourcing Portal.",
                search: "Signatures can be searched using up/down gene lists or by search term.",
                download: "Data can be downloaded in gmt or json format.",
                external: "Crowd extracted signatures from GEO that are categorized by diasese vs normal, single gene perturbations, or single chemcial perturbation."
            },
            modes: {
                functionality: ["navigation", "collaboration", "search", "download"],
                content: ["external"]
            },
            directive: "CREEDS-Bar"
        },
        {
            title: "SEP-L1000",
            url: "http://maayanlab.net/SEP-L1000",
            image: DIR + "logo-sep.png",
            description: {
                main: "A web portal for searching and browsing predictive small-molecule/ADR connections.",
                integration: "The model integrates the L1000 data with side effect data from SIDER.",
                drugs: "The predictions made from a LINCS collection of 20,000 small-molecule compounds.",
                navigation: "The side effect predictions can be navigated on a 2 dimensional bubble chart representation.",
                publication: "<a target='_blank' href='http://bioinformatics.oxfordjournals.org/content/early/2016/04/20/bioinformatics.btw168'>Drug-induced adverse events prediction with the LINCS L1000 data</a>."
            },
            modes: {
                functionality: ["integration", "navigation"],
                content: ["drugs", "publication"]
            },
            directive: "SEP-L1000-Bar"
        },
        {
            title: "LINCS Canvas Browser",
            url: "http://www.maayanlab.net/LINCS/LCB",
            image: DIR + "lincs-canvas-browser.png",
            description: {
                main: "The LINCS Canvas Browser is an interactive web application to query, browse and investigate LINCS L1000 gene expression signatures.",
                navigation: "Each L1000 experiment is visualized in the content of other L1000 experiments using canvases where similar signatures are located next to each other.",
                search: "Search for L1000 experiments based on small-molecule compounds, time points, or cell lines.",
                drugs: "A subset of L1000 small-molecule compounds.",
                cells: "A subset of cell lines: MCF7, MCF10A, BT20, HS578T, MDAMB2, and SKBR3.",
                external: "Gene set libraries such as Gene Ontology is analyzed for functional analysis of the L1000.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4086130/'>LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures</a>"
            },
            modes: {
                functionality: ["navigation", "search"],
                content: ["drugs", "cells", "external", "publication"]
            },
            directive: "Canvas-Browser-bar",
            cssClass: "lcb"
        },
        {
            title: "Drug/Cell-line Browser",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            image: DIR + "drug-cell-line-browser.png",
            description: {
                main: "An interactive HTML5 data visualization for interacting with datasets of cancer cell lines/drug-viability studies.",
                navigation: "2D canvases show clustering of cell lines and small-molecule drugs across cancer tissue types.",
                drugs: "A selection of anticancer small-molecule compounds from LINCS phase I: the MGH/Sanger and Heiser datasets.",
                cells: "Human cancer cell lines deriving from numerous tissue types.",
                external: "CCLE data.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4221125/'>Drug/Cell-line Browser: interactive canvas visualization of cancer drug/cell-line viability assay datasets</a>"
            },
            modes: {
                functionality: ["navigation"],
                content: ["drugs", "cells", "publication"]
            },
            // directive: "DCB-bar",
            cssClass: "dcb"
        },
        //{
        //    title: "LIFE",
        //    url: "http://life.ccs.miami.edu/life/",
        //    image: DIR + "life.png",
        //    description: {
                // main: "LINCS information framework. Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
         //       main: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
         //       search: "Find data aggregated from HMS LINCS Database, the Broad institute, and other LINCS data generation centers.",
         //       navigation: "The data categories can be navigated using layered pie charts.",
         //       cells: "A wide range of human cell lines across different tissue types.",
         //       drugs: "A wide range of small-molecule compounds which are annotated based on mechanism of action.",
         //       genetics: "L1000 data based on shRNA and cDNA screens are available.",
         //       assays: "All assays which are part of the LINCS project."
         //  },
         //   modes: {
         //       functionality: ["search", "navigation"],
          //      content: ["cells", "drugs", "genetics", "assays"]
           // },
        //    directive: "LIFE-bar",
         //   cssCLass: "life"
       // },
       // {
            //title: "Docent",
           // url: "http://amp.pharm.mssm.edu/milestones/grid.html",
           // image: DIR + "docent-grid.png",
           // description: {
               // main: "Global visual representation of available LINCS Phase II datasets.",
               // navigation: "Available data on specific cell line and assay combinations can be navigated and compared via a matrix representation.",
               // assays: "The assays include RNA-seq, RPPA, ATAC-seq, cell viability assays, and many others.",
               // cells: "A core set of cell lines highlighting common experiments for characterizing these cell lines."
            //},
            //modes: {
                //functionality: ["navigation"],
                //content: ["assays", "cells"]
           // },
            // directive: "Docent-bar",
            //cssClass: "docent"
        //},
       // {
        //    title: "LDR",
          //  url: "http://amp.pharm.mssm.edu/ldr/",
          //  image: DIR + "LDR.png",
         //   description: {
          //      main: "LINCS Dataset Registry (LDR) ensures data consistency and control among LINCS Data and Signature Generation Centers.",
          //      search: "Search registered datasets based on submitting institute or experimental condition.",
           //     assays: "The available assays are from LINCS phase II."
           // },
          //  modes: {
               // functionality: ["search"],
              //  content: ["assays"]
           // },
            // directive: "LDR-bar",
          //  cssClass: "ldr"
      //  },
        {
            title: "Network2Canvas",
            url: "http://www.maayanlab.net/N2C/",
            image: DIR + "network2canvas.png",
            description: {
                main: "A web application that provides an alternative way to view networks and visualizes them by placing nodes on a square toroidal canvas.",
                analysis: "Simulated annealing of adjacency matrix onto toroidal sphere grid. The resulting 2D 'canvas' show similar network nodes next to each other. Analogous to self-organizing maps. Users can analyze their gene lists.",
                navigation: "The resulting canvas is interactively visualized.",
                external: "Canvases of gene set libraries are precomputed.",
                publication: "<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3712222/'>Network2Canvas: network visualization on a canvas with enrichment analysis</a>"
            },
            modes: {
                functionality: ["analysis", "navigation"],
                content: ["external", "publication"]
            },
            directive: "Network2Canvas-bar",
            cssClass: "network2canvas"
        },
        {
            title: "Crowdsourcing Portal",
            url: "http://www.maayanlab.net/crowdsourcing/",
            image: DIR + "crowd.png",
            description: {
                main: "The portal enables user contributions to an assortment of scientific challenges termed microtasks and megatasks.",
                collaboration: "By organizing scientific challenges and allowing users, both within the LINCS consortium and students, to submit and share solutions, the Crowsourcing Portal faciliates collaboration.",
                education: "The Crowdsourcing Portal is associated with the <a target='_blank' href='https://www.coursera.org/course/bd2klincs'>BD2K-LINCS data science course</a>, enabling students to contribute to the process of scientific discovery."
            },
            modes: {
                functionality: ["collaboration", "education"],
                // content: [""]
            }
        },
        {
            title: "GUIdock",
            url: "https://github.com/WebDataScience/GUIdock",
            image: DIR + "gui_dock.fw.png",
            description: {
                main: "A method for deploying containers with a graphical user interface.",
                publication: "<a target='_blank' href='http://dx.doi.org/10.1371/journal.pone.0152686'>GUIdock: Using Docker Containers with a Common Graphics User Interface to Address the Reproducibility of Research</a>"
            },
            modes: {
                functionality: [""],
                content: ["publication"]
            }
        },
    ];


    $scope.findTool = function(title) {
        // Find tool index from tool array
        var tool_index = $scope.tools.map(function(tool) {
            return tool.title;
        }).indexOf(title);

        // Return tool object, or -1 if not found.
        if (tool_index >= 0) {
            return $scope.tools[tool_index];
        } else {
            return tool_index;
        }
    };

    // Filter tools based on modes (buttons) in the tool data.
    // Returns a list of filtered tool data.
    $scope.filterTools = function(query_mode) {
        var out_tools = [];  // filtered tools

        tool_data = $scope.tools;

        for (var i in tool_data) {
            try {
                if (query_mode === "" || tool_data[i].modes.functionality.indexOf(query_mode) > -1 || tool_data[i].modes.content.indexOf(query_mode) > -1) {
                    out_tools.push(tool_data[i]);
                }
            } catch(err) {
                // errors such as undefined allowed
            }
        }

        // return tool_data;
        return out_tools;
    };

    // Type search query in all child <tool>
    $scope.typeSearch = function(query) {
        // broadcast type-search event
        $scope.$broadcast("type-search", query);
    };

    // Change selected mode for all tool elements.
    // Changes which tools are displayed.
    $scope.setMode = function(mode) {
        $scope.mode = mode;
    };

    // Broadcasts an '\n' separated string of all arguments
    $scope.typeUpGenes = function() {
        genes = $.makeArray(arguments)
        $scope.$broadcast("up-genes", genes.join("\n"));
    };

    $scope.typeDownGenes = function(genes) {
        genes = $.makeArray(arguments)
        $scope.$broadcast("down-genes", genes.join("\n"));
    };

    $scope.removeHash = function() {
        // reseting the hash
        $location.hash("");
    };
}]);

// Tooltip texts for toolDirective buttons
mod.factory("tooltips", function() {
    return {
        search: "Search data collection",
        analysis: "Analyze data",
        api: "Programatic access through API",
        navigation: "Visualization that help explore data",
        download: "Download",
        cells: "LINCS cell lines",
        drugs: "LINCS small-molecule compounds",
        genetics: "LINCS genetic experiments",
        assays: "LINCS assay types",
        external: "Data from external sources",
        publication: "Academic publications",
        education: "Educational resource",
        collaboration: "Tool that faciliate scientific collaboration"
    };
});

// Tool icon buttons with goto functionality
mod.directive("scrollButton", function() {
    return{
        restrict: "A",
        scope: {
            targetId: "@",
            modes: "="
        },
        link: function(scope, elem, attrs) {
            elem.bind("click", function() {
                scope.gotoAnchor();
            });
            elem.bind("mouseover", function() {
                scope.highlightSelector();
            });
            elem.bind("mouseleave", function() {
                scope.resetSelector();
            });
        },
        controller: ["$scope", "$element", "$location", "$anchorScroll", "$sce", function($scope, $elem, $location, $anchorScroll, $sce) {
            // $scope.title_ = $sce.trustAsHtml($scope.targetId);
            // $scope.title_ = $sce.trustAsHtml("<h1>test</h1>");

            $scope.gotoAnchor = function() {
                // Prevent reload issues
                // event.preventDefault();
                // event.stopPropagation();
                // if ($location.hash() !== $scope.targetId) {
                    $location.hash($scope.targetId);
                // } else {
                    $anchorScroll();
                    // $location.hash("cat");
                // }

                    $location.hash("");  // don't show #anchor in url, which breaks selection functionality

            };

            $scope.highlightSelector = function() {
                var all_modes = [];
                if ("content" in $scope.modes && "functionality" in $scope.modes) {
                    // Both  functionality and content modes
                    all_modes = $scope.modes.functionality.concat($scope.modes.content);
                } else if ("content" in $scope.modes) {
                    // only content modes
                    all_modes = $scope.modes.content;
                } else if ("functionality") {
                    // only functionality modes
                    all_modes = $scope.modes.functionality;
                }

                $("#tool-categories button").removeClass("selected");  // remove precious selection

                for (var i in all_modes) {
                    // Highlight tool selector buttons
                    $("#tool-categories button." + all_modes[i]).addClass("selected");
                }
                // $scope.$apply();
            };

            $scope.resetSelector = function() {
                $("#tool-categories button").removeClass("selected");
                // $scope.$apply();
            };
        }]
    }
});

// Wrapper for tools. Sets up the frame with icon,
mod.directive("tool", ["$compile", "$timeout", function($compile, $timeout) {
    return {
        restrict: 'EA',
        scope: {
            // data object assignemnt
            toolData: '=',
            // string specification
            toolMode: '@',
            toolButtons: '@'
        },
        link: function(scope, elem, attrs) {
            var tool_obj = scope.toolData;
            if (tool_obj && tool_obj.directive !== undefined) {
                // elem
                var compiled = $compile("<hr>" + '<' + tool_obj.directive + '></' + tool_obj.directive + '>');

                elem.find('placeholder').replaceWith(compiled(scope));

                // elem.html("<hr>" + '<' + tool_obj.directive + '></' + tool_obj.directive + '>');
                // $compile(elem.contents())(scope);

                // elem.find("placeholder").html("<hr>" + '<' + tool_obj.directive + '></' + tool_obj.directive + '>');
                // $compile(elem.find("placeholder").contents())(scope);
            };

            // Call change mode after directive has rendered. timeout makes it work -- even with 0ms. It's magic.
            $timeout(function(){
                if (typeof scope.toolMode !== "undefined") {
                    // Input mode provided
                    // loop over space delimited input calling the mode() function for each
                    try {
                        scope.toolMode.split(" ")
                            .forEach(scope.mode);
                    } catch(err) {
                        // WARNING: suppresses all errors from toolMode()
                        // including syntax errors from button-less <tools>
                    }
                }
            }, 0);
        },
        controller: ["$scope", "$element", "$sce", "tooltips", function($scope, $element, $sce, tooltips) {

            // Selected descriptions
            $scope.functional_description = "";
            $scope.data_content_description = "";

            // Assume HTML content, other description texts are handled by the mode() callback function.
            $scope.title = $sce.trustAsHtml($scope.toolData.title);
            // $scope.title = $sce.trustAsHtml($scope.toolData.title.replace(/<(?:.|\n)*?>/gm, ''));

            var title = $scope.toolData.title
            $scope.text_title = $("<html>" + $scope.toolData.title + "</html>").text();

            try {
                $scope.main_description = $sce.trustAsHtml($scope.toolData.description.main);
            }
            catch(err) {
                $scope.main_description = $sce.trustAsHtml("None");
            }

            // For inherited "Dot" syntax in child controllers.
            // Query template.
            $scope.query = {
                term: "",
                option: ""
            };

            // Query data object for up and down gene lists.
            $scope.list_query = {
                up: [],
                down: []
            };

            // Change viewiew mode. To be overwritten by child directives.
            $scope.mode = function(mode_id) {
                $scope.$broadcast("mode", mode_id);

                var button = $element.find("." + mode_id);  // the button associated with the mode
                var was_selected = button.hasClass("selected");  // already selected?

                if (button.hasClass("functionality-button")) {
                    // Other functionality buttons
                    $element.find(".mode-button.functionality-button").removeClass("selected");  // remove all selected
                    if (was_selected) {
                        // unselect and revert  to default
                        button.removeClass("selected");
                        $scope.functional_description = "";
                    } else {
                        // select and instiantiate functionality
                        button.addClass("selected");
                        $scope.functional_description = $sce.trustAsHtml($scope.toolData.description[mode_id]);
                    }

                } else if (button.hasClass("content-button")) {
                    // Other content buttons
                    $element.find(".mode-button.content-button").removeClass("selected");

                    if (was_selected) {
                        button.removeClass("selected");
                        $scope.data_content_description = "";
                    } else {
                        button.addClass("selected");
                        $scope.data_content_description = $sce.trustAsHtml($scope.toolData.description[mode_id]);
                    }
                } else {
                    throw "Button name not found in tool directive: " + mode_id + ", " + $scope.toolData.title;
                }
            };
            $scope.buttonTooltip = function(name) {
                return tooltips[name];
            };
            // On function is inherited
            $scope.$on("type-search", function(event, query) {
                $scope.query.term = query;
            });

            $scope.$on("up-genes", function(event, genes) {
                // $scope.list_query.up = genes.join("\n");
                $scope.list_query.up = genes;
            });

            $scope.$on("down-genes", function(event, genes) {
                $scope.list_query.down = genes;
            });
        }],
        // templateUrl: script_path + "/partials/tool-directive.html"
        templateUrl: "js/lincs-direct-access-tools/partials/tool-directive.html"
        // templateUrl: "./partials/tool-directive.html"
    }
}]);

mod.directive('lincsDataPortalBar', function() {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs, ctrls) {
        },
        controller: ['$scope', '$http', '$element', function($scope, $http, $element) {
            $scope.query = $scope.$parent.query;  // query binding from parent

            $scope.searchTypeOptions = [
                {name: 'Datasets', value: 'datasets'},
                {name: 'Entities', value: 'entities'}
            ];

            $scope.query.option = $scope.searchTypeOptions[0].value;  // default search type

            var base_url = 'http://lincsportal.ccs.miami.edu/';
            var suggest_url = base_url + 'dcic/api/autosuggest?searchTerm=';

            $scope.search = function() {
                // construct search url
                var search_url = base_url + $scope.query.option + '/#?query=' + $scope.query.term;
                window.open(search_url, '_blank');
            };
            $scope.entities = function(searchTerm) {
                return $http.get(suggest_url + searchTerm).then(function(response) {
                    return response.data.suggestTerms;
                });
            };
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial1").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    // $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/CU1qS_kAFVs' frameborder='0' allowfullscreen></iframe>");
                    $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/dBgccwNRri4?list=PL0Bwuj8819U9YWHbAbfj_RG9Q3xIOq7wo' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/lincs-data-portal.html'
    }
});

mod.directive('piLincsBar', ["$compile", function($compile) {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs) {
        },
        controller:['$scope', '$http', function($scope, $http) {
            // $scope.query = $scope.$parent.query;  // query binding from parent

            $scope.searchTypeOptions = [
                {name: 'Cell ID', value: 'CellId'},
                {name: 'Perturbation Name', value: 'Pertiname'},
                {name: 'Gene Symbol', value: 'PrGeneSymbol'}
            ];
            $scope.search = function() {
                var URL_PARTS = ['http://www.eh3.uc.edu/pilincs/#/technical-profiles/name', '', 'annotation', ''];
                URL_PARTS[1] = $scope.search_term;
                URL_PARTS[3] = $scope.searchType;
                var searchUrl = URL_PARTS.join('/');
                window.open(searchUrl, '_blank');
            };
            $scope.entities = function() {
                var SUGGEST_URL = 'http://www.eh3.uc.edu/pilincs/api-tags';
                return $http.get(SUGGEST_URL).then(function(response) {
                    return response.data;
                });
            };
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/pi-lincs.html'
    }
}]);

mod.directive('iLincsBar', ["$compile", function($compile) {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs) {
            // scope.searchTerm = '';
        },
        controller: ['$scope', "$element", '$http', function($scope, $element, $http) {

            $scope.search_type_options = [
                {name: 'LINCS', value: "Lincs.jsp?"},
                {name: 'External', value: "bs_keywordSearch.do?organism=%&sample_type=%&data_type=%&portal_name=ALL&gene_list_selected=false&"}
            ];

            $scope.query.option = $scope.search_type_options[0].value;
            $scope.search = function() {
                // LINCS genomics portal
                var base_url = "http://www.eh3.uc.edu/GenomicsPortals/"

                // path = $scope.searchType,
                // map_ = {
                //     genesearch: 'genelist',
                //     datasetsearch: 'keyword',
                //     signaturesearch: 'search_term'
                // },
                // key = map_[path];
                var searchUrl = base_url + $scope.query.option + "keyword=" + $scope.query.term;
                window.open(searchUrl, '_blank');
            };
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial1").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/qBRLabOFvjQ' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/i-lincs.html'
    }
}]);

mod.directive('l1000cds2Textarea', function() {
    return {
        restrict: 'E',
        scope: true,
        controller: ['$scope', '$element', function($scope, $element) {
            $scope.list_query.up = '';
            $scope.list_query.down = '';
            $scope.example = function() {
                $scope.list_query.up = [
                    'KIAA0907', 'KDM5A', 'CDC25A',
                    'EGR1', 'GADD45B', 'RELB', 'TERF2IP',
                    'SMNDC1', 'TICAM1', 'NFKB2', 'RGS2',
                    'NCOA3', 'ICAM1', 'TEX10', 'CNOT4',
                    'ARID4B', 'CLPX', 'CHIC2', 'CXCL2',
                    'FBXO11', 'MTF2', 'CDK2', 'DNTTIP2',
                    'GADD45A', 'GOLT1B', 'POLR2K', 'NFKBIE',
                    'GABPB1', 'ECD', 'PHKG2', 'RAD9A',
                    'NET1', 'KIAA0753', 'EZH2', 'NRAS',
                    'ATP6V0B', 'CDK7', 'CCNH', 'SENP6',
                    'TIPARP', 'FOS', 'ARPP19', 'TFAP2A',
                    'KDM5B', 'NPC1', 'TP53BP2', 'NUSAP1'
                ].join('\n');
                $scope.list_query.down = [
                    'SCCPDH', 'KIF20A',
                    'FZD7', 'USP22', 'PIP4K2B', 'CRYZ',
                    'GNB5', 'EIF4EBP1', 'PHGDH', 'RRAGA',
                    'SLC25A46', 'RPA1', 'HADH', 'DAG1',
                    'RPIA', 'P4HA2', 'MACF1', 'TMEM97',
                    'MPZL1', 'PSMG1', 'PLK1', 'SLC37A4',
                    'GLRX', 'CBR3', 'PRSS23', 'NUDCD3',
                    'CDC20', 'KIAA0528', 'NIPSNAP1', 'TRAM2',
                    'STUB1', 'DERA', 'MTHFD2', 'BLVRA',
                    'IARS2', 'LIPA', 'PGM1', 'CNDP2',
                    'BNIP3', 'CTSL1', 'CDC25B', 'HSPA8',
                    'EPRS', 'PAX8', 'SACM1L', 'HOXA5',
                    'TLE1', 'PYGL', 'TUBB6', 'LOXL1'
                ].join('\n');
            };
            $scope.search = function() {
                var payload = {
                    data: {
                        upGenes: $scope.list_query.up.split('\n'),
                        dnGenes: $scope.list_query.down.split('\n')
                    },
                    config: {
                        aggravate: true,
                        searchMethod: 'geneSet',
                        share: true,
                        combination: true,
                        'db-version': 'latest'
                    },
                    metadata: []
                };
                $.ajax({
                    method: 'POST',
                    url: 'http://amp.pharm.mssm.edu/L1000CDS2/queryURLEncoded',
                    data: {
                        input: JSON.stringify(payload)
                    },
                    success: function(data) {
                        var button_result = $element.find('a.result');
                        button_result.attr('href', 'http://amp.pharm.mssm.edu/L1000CDS2/#/result/' + data.shareId);
                        button_result.removeClass('hidden');
                        // a.text('L1000CDS2 results');
                    }
                });
            };
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial1").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/kiTAGlvoyWU' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/l1000cds2.html'
    }
});

mod.directive('enrichrTextarea', function() {
    return {
        restrict: 'E',
        scope: true,
        controller: ['$scope', '$element', function($scope, $element) {
            var BASE_URL = 'http://amp.pharm.mssm.edu/Enrichr/';
            $scope.genes = '';
            $scope.enrichUrl;
            $scope.example = function() {
                $scope.genes = [
                    'Nsun3', 'Polrmt', 'Nlrx1', 'Sfxn5', 'Zc3h12c', 'Slc25a39', 'Arsg', 'Defb29', 'Ndufb6', 'Zfand1', 'Tmem77', '5730403B10Rik',
                    'RP23-195K8.6', 'Tlcd1', 'Psmc6', 'Slc30a6', 'LOC100047292', 'Lrrc40', 'Orc5l', 'Mpp7', 'Unc119b', 'Prkaca', 'Tcn2', 'Psmc3ip', 'Pcmtd2',
                    'Acaa1a', 'Lrrc1', '2810432D09Rik', 'Sephs2', 'Sac3d1', 'Tmlhe', 'LOC623451', 'Tsr2', 'Plekha7', 'Gys2', 'Arhgef12', 'Hibch',
                    'Lyrm2', 'Zbtb44', 'Entpd5', 'Rab11fip2', 'Lipt1', 'Intu', 'Anxa13', 'Klf12', 'Sat2', 'Gal3st2', 'Vamp8', 'Fkbpl',
                    'Aqp11', 'Trap1', 'Pmpcb', 'Tm7sf3', 'Rbm39', 'Bri3', 'Kdr', 'Zfp748', 'Nap1l1', 'Dhrs1', 'Lrrc56',
                    'Wdr20a', 'Stxbp2', 'Klf1', 'Ufc1', 'Ccdc16', '9230114K14Rik', 'Rwdd3', '2610528K11Rik', 'Aco1', 'Cables1', 'LOC100047214', 'Yars2', 'Lypla1', 'Kalrn', 'Gyk',
                    'Zfp787', 'Zfp655', 'Rabepk', 'Zfp650', '4732466D17Rik', 'Exosc4', 'Wdr42a', 'Gphn', '2610528J11Rik', '1110003E01Rik',
                    'Mdh1', '1200014M14Rik', 'AW209491', 'Mut', '1700123L14Rik', '2610036D13Rik',
                    'Cox15', 'Tmem30a', 'Nsmce4a', 'Tm2d2', 'Rhbdd3', 'Atxn2', 'Nfs1', '3110001I20Rik', 'BC038156', 'LOC100047782', '2410012H22Rik', 'Rilp',
                    'A230062G08Rik', 'Pttg1ip', 'Rab1', 'Afap1l1', 'Lyrm5', '2310026E23Rik', 'C330002I19Rik', 'Zfyve20', 'Poli',
                    'Tomm70a', 'Slc7a6os', 'Mat2b', '4932438A13Rik', 'Lrrc8a', 'Smo', 'Nupl2', 'Trpc2', 'Arsk', 'D630023B12Rik',
                    'Mtfr1', '5730414N17Rik', 'Scp2', 'Zrsr1', 'Nol7', 'C330018D20Rik', 'Ift122', 'LOC100046168', 'D730039F16Rik', 'Scyl1',
                    '1700023B02Rik', '1700034H14Rik', 'Fbxo8', 'Paip1', 'Tmem186', 'Atpaf1', 'LOC100046254', 'LOC100047604', 'Coq10a', 'Fn3k',
                    'Sipa1l1', 'Slc25a16', 'Slc25a40', 'Rps6ka5', 'Trim37', 'Lrrc61', 'Abhd3', 'Gbe1', 'Parp16', 'Hsd3b2',
                    'Esm1', 'Dnajc18', 'Dolpp1', 'Lass2', 'Wdr34', 'Rfesd', 'Cacnb4', '2310042D19Rik', 'Srr',
                    'Bpnt1', '6530415H11Rik', 'Clcc1', 'Tfb1m', '4632404H12Rik', 'D4Bwg0951e', 'Med14', 'Adhfe1', 'Thtpa',
                    'Cat', 'Ell3', 'Akr7a5', 'Mtmr14', 'Timm44', 'Sf1', 'Ipp', 'Iah1', 'Trim23', 'Wdr89', 'Gstz1', 'Cradd', '2510006D16Rik',
                    'Fbxl6', 'LOC100044400', 'Zfp106', 'Cd55', '0610013E23Rik', 'Afmid', 'Tmem86a', 'Aldh6a1', 'Dalrd3', 'Smyd4',
                    'Nme7', 'Fars2', 'Tasp1', 'Cldn10', 'A930005H10Rik', 'Slc9a6', 'Adk', 'Rbks', '2210016F16Rik',
                    'Vwce', '4732435N03Rik', 'Zfp11', 'Vldlr', '9630013D21Rik', '4933407N01Rik', 'Fahd1', 'Mipol1', '1810019D21Rik',
                    '1810049H13Rik', 'Tfam', 'Paics', '1110032A03Rik', 'LOC100044139', 'Dnajc19', 'BC016495', 'A930041I02Rik', 'Rqcd1',
                    'Usp34', 'Zcchc3', 'H2afj', 'Phf7', '4921508D12Rik', 'Kmo', 'Prpf18', 'Mcat', 'Txndc4',
                    '4921530L18Rik', 'Vps13b', 'Scrn3', 'Tor1a', 'AI316807', 'Acbd4', 'Fah', 'Apool', 'Col4a4', 'Lrrc19',
                    'Gnmt', 'Nr3c1', 'Sip1', 'Ascc1', 'Fech', 'Abhd14a', 'Arhgap18', '2700046G09Rik', 'Yme1l1',
                    'Gk5', 'Glo1', 'Sbk1', 'Cisd1', '2210011C24Rik', 'Nxt2', 'Notum', 'Ankrd42', 'Ube2e1', 'Ndufv1',
                    'Slc33a1', 'Cep68', 'Rps6kb1', 'Hyi', 'Aldh1a3', 'Mynn', '3110048L19Rik', 'Rdh14',
                    'Proz', 'Gorasp1', 'LOC674449', 'Zfp775', '5430437P03Rik', 'Npy', 'Adh5', 'Sybl1', '4930432O21Rik',
                    'Nat9', 'LOC100048387', 'Mettl8', 'Eny2', '2410018G20Rik', 'Pgm2', 'Fgfr4', 'Mobkl2b',
                    'Atad3a', '4932432K03Rik', 'Dhtkd1', 'Ubox5', 'A530050D06Rik', 'Zdhhc5', 'Mgat1', 'Nudt6',
                    'Tpmt', 'Wbscr18', 'LOC100041586', 'Cdk5rap1', '4833426J09Rik', 'Myo6', 'Cpt1a', 'Gadd45gip1',
                    'Tmbim4', '2010309E21Rik', 'Asb9', '2610019F03Rik', '7530414M10Rik', 'Atp6v1b2', '2310068J16Rik', 'Ddt',
                    'Klhdc4', 'Hpn', 'Lifr', 'Ovol1', 'Nudt12', 'Cdan1', 'Fbxo9', 'Fbxl3', 'Hoxa7', 'Aldh8a1', '3110057O12Rik', 'Abhd11',
                    'Psmb1', 'ENSMUSG00000074286', 'Chpt1', 'Oxsm', '2310009A05Rik', '1700001L05Rik', 'Zfp148', '39509',
                    'Mrpl9', 'Tmem80', '9030420J04Rik', 'Naglu', 'Plscr2', 'Agbl3', 'Pex1', 'Cno',
                    'Neo1', 'Asf1a', 'Tnfsf5ip1', 'Pkig', 'AI931714', 'D130020L05Rik', 'Cntd1', 'Clec2h',
                    'Zkscan1', '1810044D09Rik', 'Mettl7a', 'Siae', 'Fbxo3', 'Fzd5', 'Tmem166', 'Tmed4',
                    'Gpr155', 'Rnf167', 'Sptlc1', 'Riok2', 'Tgds', 'Pms1', 'Pitpnc1', 'Pcsk7',
                    '4933403G14Rik', 'Ei24', 'Crebl2', 'Tln1', 'Mrpl35', '2700038C09Rik', 'Ubie', 'Osgepl1',
                    '2410166I05Rik', 'Wdr24', 'Ap4s1', 'Lrrc44', 'B3bp', 'Itfg1', 'Dmxl1', 'C1d'
                ].join('\n');
            };
            $scope.search = function() {
                var formData = new FormData();
                formData.append('list', $scope.genes);
                formData.append('description', '');
                $.ajax({
                    type: 'POST',
                    url: BASE_URL + 'addList',
                    cache:false,
                    processData:false,
                    contentType:false,
                    data: formData
                }).success(function(response, status, headers, config) {
                    var resp = JSON.parse(response),
                        url = BASE_URL + 'enrich?dataset=' + resp.shortId;
                    var a = $element.find('a');
                    a.attr('href', url);
                    a.removeClass('hidden');
                    a.text('Enrichr results');
                }).error(function(error, status, headers, config) {
                    alert('Unknown error. Please try again later or contact the DCIC at support@lincs-dcic.org.');
                });
            }
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/enrichr.html'
    }
});

mod.directive('slicrBar', function() {
    return {
        restrict: 'E',
        scope: true,
        controller: ['$scope', '$http', function($scope, $http) {
            var url = $scope.toolData.url;
            $scope.tags = [];
            $scope.loadTags = function(typed) {
                return $http.get(url + 'tags?typed=' + typed);
            };
            $scope.$watchCollection('tags', function(newVal, oldVal) {
                $scope.search_term = $scope.tags.map(function(tag) {
                    return tag.text;
                }).join(',');
                $scope.slicerSearchUrl = url + '#/search/' + $scope.search_term;
            });
            $scope.search = function() {
                window.open($scope.slicerSearchUrl, "_blank");
            };
            // Overwrite type-search listener, changes tags variable (the search query model of slicrBar).
            $scope.$on("type-search", function(event, query) {
                $scope.tags = query.split(" ");
            });
        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/slicr.html'
    }
});

mod.directive('harmonizomeBar', function() {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs) {
        },
        controller: ["$scope", "$element", "$http", function($scope, $element, $http) {
            var base_url = 'http://amp.pharm.mssm.edu/Harmonizome/';
            var search_url = base_url + 'search?q=';
            var suggest_url = base_url + 'api/1.0/suggest?q='

            $scope.search = function() {
                window.open(search_url + $scope.query.term, '_blank');
            };
            $scope.entities = function(searchTerm) {
                return $http.get(suggest_url + searchTerm).then(function(response) {
                    return response.data;
                })  ;
            };
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial1").empty();
                    $element.find("#tutorial2").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/yGkIQjeWh9U' frameborder='0' allowfullscreen></iframe>");
                    $element.find("#tutorial2").html("<iframe src='https://www.youtube.com/embed/ZyOIQwEh_58' frameborder='0' allowfullscreen></iframe>");
                }
            };

        }],
        templateUrl: 'js/lincs-direct-access-tools/templates/harmonizome.html'
    }
});

mod.directive("lifeBar", function() {
    return {
        restrict: "E",
        scope: true,
        link: function(scope, element, attrs) {
            // scope.search_term = "";
        },
        controller: ["$scope", "$http", function($scope, $http) {
            $scope.search = function() {
                window.open($scope.toolData.url + "search?load=AssayTypeName&search=" + $scope.query.term + "&q=" + $scope.query.term + "&wt=json&indent=true&group=false&facet=true&facet.field=ProteinId&facet.field=SmallMoleculeId&facet.field=GeneId&facet.field=CellLineId&facet.field=AssayTypeName&facet.field=PhosphoProteinId&facet.field=ShRnaID&facet.field=CdnaID&facet.field=AntibodyId&facet.field=NonKinaseProteinId&facet.field=LigandProteinId&group.field=ProteinId&facet.mincount=1&facet.limit=-1&rows=20&start=0&group.ngroups=true#",
                    "_blank");
            };
        }],
        templateUrl: "js/lincs-direct-access-tools/templates/life.html"
    }
});

mod.directive("network2canvasBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.tutorials_shown = false;
            // Load tutorial video when tutorial button is pressed. For performance reasons; avoids delay on page load.
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial1").empty();
                    $element.find("#tutorial2").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial1").html("<iframe src='https://www.youtube.com/embed/N75lhV5lxIk' frameborder='0' allowfullscreen></iframe>");
                    $element.find("#tutorial2").html("<iframe src='https://www.youtube.com/embed/R3eBQcRcOEY' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: "js/lincs-direct-access-tools/templates/network2canvas.html"
    }
});

mod.directive("canvasBrowserBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.tutorials_shown = false;
            // Load tutorial video when tutorial button is pressed. For performance reasons; avoids delay on page load.
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial").html("<iframe src='https://www.youtube.com/embed/G8IYNmzzk0c' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: "js/lincs-direct-access-tools/templates/canvas-browser.html"
    }
});

mod.directive("geo2enrichrBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.tutorials_shown = false;
            // Load tutorial video when tutorial button is pressed. For performance reasons; avoids delay on page load.
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial").html("<iframe src='https://www.youtube.com/embed/IWurkCCacFU' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: "js/lincs-direct-access-tools/templates/geo2enrichr.html"
    }
});

mod.directive("paeaBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", "$element", function($scope, $element) {
            $scope.tutorials_shown = false;
            // Load tutorial video when tutorial button is pressed. For performance reasons; avoids delay on page load.
            $scope.loadTutorials = function() {
                if ($scope.tutorials_shown) {
                    // remove toggle
                    $scope.tutorials_shown = false;
                    $element.find("#tutorial").empty();
                } else {
                    // load and show
                    $scope.tutorials_shown = true;
                    $element.find("#tutorial").html("<iframe src='https://www.youtube.com/embed/8vez3CHNGHY' frameborder='0' allowfullscreen></iframe>");
                }
            };
        }],
        templateUrl: "js/lincs-direct-access-tools/templates/paea.html"
    }
});

mod.directive("lincscloudBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", function($scope) {
            var base_url = "http://api.lincscloud.org/a2/";
            var user_key = "lincsdemo";

            // API choices
            $scope.engine_options = [
                {name: "Cell line", value: "cellinfo"},
                {name: "Genes", value: "geneinfo"},
                // {name: "Instance metadata", value: "instinfo"},
                {name: "Perturbations", value: "pertinfo"},
                // {name: "Plates", value: "plateinfo"},
                // {name: "Signature metadata", value: "siginfo"}
            ];

            // Selected exampple for each engine
            $scope.engine_example_fields = {
                cellinfo: "cell_id",
                geneinfo: "pr_gene_symbol",
                // instinfo: "",
                pertinfo: "pert_iname",
                // plateinfo: "",
                // siginfo: ""
            };

            // Extending the query object, and specifying default selection
            $scope.query.engine = "pertinfo";
            $scope.query.field = "pert_iname";

            $scope.search = function() {
                $scope.query.field = $scope.engine_example_fields[$scope.query.engine];  // find example field for engine
                var http_request = base_url + $scope.query.engine + "?q={\"" + $scope.query.field + "\":\"" + $scope.query.term + "\"}&user_key=" + user_key;
                window.open(http_request, "_blank");
            };

            // Extend mode switch function
            $scope.$on("mode", function(event, mode_id) {

                switch (mode_id) {
                    case "cells":
                        $scope.query.engine = "cellinfo";
                        break;
                    case "drugs":
                        $scope.query.engine = "pertinfo";
                        break;
                }
            });

        }],
        templateUrl: "js/lincs-direct-access-tools/templates/lincscloud.html"
    }
});

mod.directive("sepL1000Bar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", function($scope) {
            var search_url = "http://maayanlab.net/SEP-L1000/#search/"

            $scope.search = function() {
                window.open(search_url + $scope.query.term, '_blank');
            };

        }],
        templateUrl: "js/lincs-direct-access-tools/templates/SEP-L1000.html"
    }
});

mod.directive("creedsBar", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", function($scope) {
            var search_url = "http://amp.pharm.mssm.edu/CREEDS/index.html#similarity/"

            $scope.search = function() {
                window.open(search_url + $scope.query.term, '_blank');
            };

        }],
        templateUrl: "js/lincs-direct-access-tools/templates/CREEDS.html"
    }
});




// Tool directive extension template
// ---------------------------------------------------------
mod.directive("myDirective", function() {
    return {
        restrict: "E",
        scope: true,  // important for inheriting the functions and data structures of the <tool> parent scope
        controller: ["$scope", function($scope) {
            // Listener to click events from parent <tool>
            $scope.$on("mode", function(event, mode_id) {
            })
        }],
        // templateUrl: "view/getting-started/myDirective.html"
    }
});
