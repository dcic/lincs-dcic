var mod = angular.module('directAccessToolsMod', 
    ['ngTagsInput',
    'ui.bootstrap.tooltip']  // for tooltips
);

mod.controller('directAccessToolsCtrl', ['$scope', "$element", '$sce', '$compile', function($scope, $element, $sce, $compile) {

    var DIR = 'images/apps/';

    $scope.introText = $sce.trustAsHtml('');

    $scope.mode = "";  // selected mode

    $scope.buttons = [
        {
            name: "search",
            description: "Search data"
        },
        {
            name: "analysis",
            description: "Analyze data"
        },
        {
            name: "api",
            description: "Access through API"
        },
        {
            name: "navigation",
            description: "Data visualization"
        },
        {
            name: "download",
            description: "Download data"
        },
        {
            name: "cells",
            description: "LINCS cell lines"
        },
        {
            name: "drugs",
            description: "LINCS small molecules"
        },
        {
            name: "genetics",
            description: "LINCS genetic experiments"
        },
        {
            name: "assays",
            description: "LINCS assay types"
        },
        {
            name: "external",
            description: "External data"
        },
        {
            name: "education",
            description: "Educational resource"
        },
        {
            name: "collaboration",
            description: "Collaboration"
        }
    ];

    $scope.tools = [
        {
            title: 'LINCS Data Portal',
            url: 'http://lincsportal.ccs.miami.edu/dcic-portal/',
            image: DIR + "portal.png",
            description: {
                // main: "Search and download LINCS data sets and entities.",
                main: "Features for searching and exploring LINCS dataset packages and reagents.",
                search: "Search for LINCS data sets in a data base containing controlled entities of the LINCS experiments.",
                api: "The data can also be accessed programmatically increasing the utility of the data base. For programmatic access, refer to the <a target='_blank' href='http://lincsportal.ccs.miami.edu/apis/'>API documentation</a>.",
                download: "Data packages for each data set can be downloaded after login.",
                cells: "All cell lines across LINCS data.",
                drugs: "All small-molecule compounds across LINCS data.",
                genetics: "All knockout, overexpression, and other genetic alterations across LINCS data.",
                assays: "All experimental platforms across LINCS data."
            },
            modes: {
                functionality: ["search", "api", "download"],
                content: ["cells", "drugs", "genetics", "assays"]
            },
            directive: 'lincs-data-portal-bar',
            cssClass: 'lincs-data-portal'
        },
        {
            title: 'piLINCS',
            url: 'http://eh3.uc.edu/pilincs/',
            image: DIR + 'pilincs.png',
            description: {
                // main: "Access to LINCS proteomics data sets with platforms P100 and GCP.",
                main: "A seamless user interface and intermediate API for accessing LINCS proteomics datasets (P100, GCP, etc.) on Panorama.",
                navigation: "Each protein signature can be browsed as a histogram.",
                search: "The experimental conditions can be searched.",
                drugs: "The compounds are throught to be kinase inhibitors, epigenetically active drugs, or neuroactive drugs. For more information about the experimental setup consult the <a target='_blank' href='https://panoramaweb.org/labkey/project/LINCS/begin.view'>Panorama repository</a>  .",
                cells: "A targeted set of cell lines are available."
            },
            modes: {
                functionality: ["navigation", "search"],
                content: ["drugs", "cells"]
            },
            directive: 'pi-lincs-bar',
            cssClass: 'pi-lincs'
        },
        {
            title: 'iLINCS',
            url: 'http://eh3.uc.edu/GenomicsPortals/Lincs.jsp',
            image: DIR + 'i-lincs.png',
            description: {
                // main: 'Use iLINCS to analyze differential gene expression in a data set identified via LINCS Data Portal.',
                main: "A computational biology project aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the Library of Integrated Network-based Cellular Signatures (LINCS) program.",
                analysis: "Data sets on the portal can be analyzed using a collection of standard statistical methods including correlations, heatmaps, and PCA.",
                search: "The data sets can be searched for experimental conditions.",
                cells: "Data on selected LICNS cell lines are available.",
                drugs: "Data on selected LINCS small-molecules are available.",
                assays: "Experimental platforms include RNA-seq, phosphosite mass spectrometry."
            },
            modes: {
                functionality: ["analysis", "search"],
                content: ["cells", "drugs", "assays"]
            },
            directive: 'i-lincs-bar',
            cssClass: 'i-lincs'
        },
        {
            title: 'Slicr',
            url: 'http://amp.pharm.mssm.edu/slicr/',
            image: DIR + 'slicr.png',
            description: {
                // main: "Search LINCS L1000 gene expression profiles.",
                main: "Slicr is a metadata search engine that searches for LINCS L1000 gene expression profiles and signatures matching user's input parameters.",
                search: "The experimental conditions of the L1000 data set can be searched.",
                download: "Each individual signature can be selected and downloaded.",
                drugs: "All L1000 small-molecule compounds.",
                genetics: "All L1000 genetic alterations.",
                cells: "All L1000 cell lines."
            },
            modes: {
                functionality: ["search", "download"],
                content: ["drugs", "genetics", "cells"]
            },
            directive: 'slicr-bar',
            cssClass: 'slicr'
        },
        {
            title: 'Enrichr',
            url: 'http://amp.pharm.mssm.edu/Enrichr/',
            image: DIR + 'enrichr.png',
            description: {
                // main: "Perform gene set enrichment analysis.",
                main: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
                analysis: "Gene set enrichment analysis for identifying functional signals.",
                external: "Choose between a wide selection of external gene libraries such as Gene Onthologies for functional analysis."
            },
            modes: {
                functionality: ["analysis"],
                content: ["external"]
            },
            directive: 'enrichr-textarea',
            cssClass: 'enrichr'
        },
        {
            title: 'L1000CDS2',
            url: 'http://amp.pharm.mssm.edu/L1000CDS2',
            image: DIR + 'l1000cds2.png',
            description: {
                // main description always shown.
                // main: "Analyze gene expression profiles using a signature search engine for the LINCS L1000 data set.",
                main: "L1000CDS2 queries gene expression signatures against the LINCS L1000 to identify and prioritize small molecules that can reverse or mimic the observed input expression pattern.",
                // mode-specific descriptions shown when mode buttons are clicked
                analysis: "Providing up- and down-regulated lists of genes allows the identification of similar or reciprocal perturbations, which can be used to analyze such gene lists in the context of the L1000 gene expressin data set. Alternatively, numerical vectors can also be analyzed.",
                search: "Data-oriented search allows finding relevant signatures where the query is based on data rather than names.",
                cells: "The L1000 data set contains numerous human cell lines including several tissue and disease models",
                drugs: "All small-molecule perturbations from the L1000 data set are used as a reference and search target.",
                genetics: "RNAi interference experiments of the L1000 data set."
            },
            // alternative modes which can be selected by clicking the mode buttons
            modes: {
                // functionality
                functionality: ["analysis", "search"],
                // content
                content: ["cells", "drugs", "genetics"]
            },
            directive: 'l1000cds2-textarea',
            cssClass: 'l1000cds2',
        },
        {
            title: 'Harmonizome',
            url: 'http://amp.pharm.mssm.edu/Harmonizome/',
            image: DIR + 'harmonizome.png',
            description: {
                // main: 'Search for genes or proteins and their functional terms extracted and organized from over 100 publicly available resources.',
                main: "Built on top of information about genes and proteins from 114 datasets, the Harmonizome is a knowledge engine for a diverse set of integrated resources.",
                search: "General text-based search.",
                api: "Data can be accessed programmatically through GET requests. Consult <a target='_blank' href='http://amp.pharm.mssm.edu/Harmonizome/documentation'>API documentation</a> for more information.",
                download: "Data can be downloaded in a standardized format.",
                external: "External data are collected from many different large-scale data projects.",
                analysis: "Data sets can be analyzed for gene co-expression using measures of similarity."
            },
            modes: {
                functionality: ["search", "api", "download", "analysis"],
                content: ["external"]
            },
            directive: 'harmonizome-bar',
            cssClass: 'harmonizome'
        },
        {
            title: "HMS LINCS Database",
            url: "http://lincs.hms.harvard.edu/db/",
            image: DIR + "hms_lincs.png",
            description: {
                main: "Harvard Medical School's LINCS database.",
                search: "General text-based search. Find data sets and information about experimental reagents. Small-molecule compounds can be queried based on SMILES.",
                download: "Data is hosted on the web-site and can be downloaded.",
                api: "Programmatic access is detailed in the <a target='_blank' href='https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit'>URL Scheme and Access Guide</a>.",
                assays: "The available data are focused on dose-dependence and dynamics of responses to small-molecule perturbations. It primarily has data on biochemical binding assays and microscopy imaging measuring cell viability.",
                drugs: "A wide range of small-molecule compounds.",
                cells: "A wide range of cell lines."
            },
            modes: {
                functionality: ["search", "download", "api"],
                content: ["assays", "drugs", "cells"]
            },
            directive: "HMS-DB-bar",
            cssClass: "hms-db"
        },
        {
            title: "LIFE",
            url: "http://life.ccs.miami.edu/life/",
            image: DIR + "life.png",
            description: {
                // main: "LINCS information framework. Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
                main: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
                search: "Find data aggregated from HMS LINCS Database, the Broad institute, and other LINCS data generation centers.",
                navigation: "The data categories can be navigated using layered pie charts.",
                cells: "A wide range of human cell lines across different tissue types.",
                drugs: "A wide range of small-molecule compounds which are annotated based on mechanism of action.",
                genetics: "L1000 data based on shRNA and cDNA screens are available.",
                assays: "A wide range of assays."
            },
            modes: {
                functionality: ["search", "navigation"],
                content: ["cells", "drugs", "genetics", "assays"]
            },
            directive: "LIFE-bar",
            cssCLass: "life"
        },
        {
            title: "Docent",
            url: "http://amp.pharm.mssm.edu/milestones/grid.html",
            image: DIR + "docent-grid.png",
            description: {
                main: "Global visual representation of available LINCS Phase II data sets.",
                navigation: "Available data on specific cell line and assay combinations can be navigated and compared via a matrix representation.",
                assays: "The assays include RNA-seq, RPPA, ATAC-seq, cell viability assays, and many others.",
                cells: "A core set of cell lines."
            },
            modes: {
                functionality: ["navigation"],
                content: ["assays", "cells"]
            },
            // directive: "Docent-bar",
            cssClass: "docent"
        },
        {
            title: "LDR",
            url: "http://amp.pharm.mssm.edu/ldr/",
            image: "",
            description: {
                main: "LINCS Dataset Registry (LDR) ensures data consistency and control among LINCS Data and Signature Generation Centers.",
                search: "Search registered data sets based on submitting institute or experimental condition.",
                assays: "The available assays are from LINCS phase II."
            },
            modes: {
                functionality: ["search"],
                content: ["assays"]
            },
            // directive: "LDR-bar",
            cssClass: "ldr"
        },
        {
            title: "Gen3va",
            url: "http://amp.pharm.mssm.edu/gen3va/",
            image: DIR + "gen3va_logo.png",
            description: {
                main: "GEN3VA: the GENE Expression and Enrichment Vector Analyzer aggregates and analyzes gene expression signatures extracted from GEO by the crowd using GEO2Enrichr.",
                analysis: "Data can be analyzed using PCA and heatmaps. Data can be aggregated from multiple studies using tags.",
                download: "Data can be downloaded as TSV text files.",
                external: "The data is aggregated from GEO."
            },
            modes: {
                functionality: ["analysis", "download"],
                content: ["external"]
            },
            // directive: "Geneva-bar",
            cssClass: "geneva"
        },
        {
            title: "Lincscloud",
            url: "http://www.lincscloud.org/",
            image: DIR + "cmap2.jpg",
            description: {
                main: "Lincs cloud is designed to make LINCS L1000 data accessible to a wide audience.",
                api: "For programmatic access refer to the <a target='_blank' href='http://api.lincscloud.org/'>API documentation</a>.",
                analysis: "Web-based analysis of the L1000 data set in the CLUE unified research environment. In development.",
                search: "The API can be used for searching the L1000 data set. Note that the direct access search only provides a small fraction of the functionality available through the API.",
                download: "The entire L1000 data set can be <a target='_blank' href='http://download.lincscloud.org/'>downloaded from Amazon S3</a>.",
                drugs: "A collection of ~18000 small-molecule compounds.",
                genetics: "Systematic RNAi/shRNA screens and cDNA overexpression screens.",
                cells: "A wide range of cell lines.",
                assay: "L1000 gene expression of ~1000 landmark genes and image-based morphology profiles."
            },
            modes: {
                functionality: ["api", "analysis", "search", "download"],
                content: ["drugs", "genetics", "cells"]
            },
            directive: "Lincscloud-bar",
            cssClass: "lincscloud"
        },
        {
            title: "PAEA",
            url: "http://amp.pharm.mssm.edu/PAEA/",
            image: DIR + "paea.png",
            description: {
                // main: "Principal Angle Enrichment Analysis (PAEA) is a R/Shiny gene set enrichment web application.",
                main: "PAEA is a new R/Shiny gene set enrichment web application with over 70 gene set libraries available for enrichment analysis.",
                analysis: "Multivariate approach to gene-set enrichment based on the concept of principle angles.",
                external: "70 gene set libraries available for enrichment analysis."
            },
            modes: {
                functionality: ["analysis"],
                content: ["external"]
            },
            // directive: "Paea-bar",
            cssClass: "paea"
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
                cells: "A subset of cell lines: MCF7, MCF10A, BT20, HS578T, MDAMB2, and SKBR3",
                external: "Gene set libraries such as Gene Ontology is analyzed for functional analysis of the L1000."
            },
            modes: {
                functionality: ["navigation", "search"],
                content: ["drugs", "cells", "external"]
            },
            // directive: "LCB-bar",
            cssClass: "lcb"
        },
        {
            title: "Drug/Cell-line Browser",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            image: DIR + "drug-cell-line-browser.png",
            description: {
                main: "An interactive HTML5 data visualization for interacting with data sets of cancer cell lines/drug-viability studies.",
                navigation: "2D canvases show clustering of cell lines and small-molecule drugs across cancer tissue types.",
                drugs: "A selection of anticancer small-molecule compounds from LINCS phase I: the MGH/Sanger and Heiser data sets.",
                cells: "Human cancer cell lines deriving from numerous tissue types.",
                external: "CCLE data."
            },
            modes: {
                functionality: ["navigation"],
                content: ["drugs", "cells"]
            },
            // directive: "DCB-bar",
            cssClass: "dcb"
        },
        {
            title: "Network2Canvas",
            url: "http://www.maayanlab.net/N2C/",
            image: DIR + "network2canvas.png",
            description: {
                main: "A web application that provides an alternative way to view networks and visualizes them by placing nodes on a square toroidal canvas.",
                analysis: "Simulated annealing of adjacency matrix onto toroidal sphere grid. The resulting 2D 'canvas' show similar network nodes next to each other. Analogous to self-organizing maps. Users can analyze their gene lists.",
                navigation: "The resulting canvas is interactively visualized.",
                external: "Canvases of gene set libraries are precomputed."
            },
            modes: {
                functionality: ["analysis", "navigation"],
                content: ["external"]
            },
            directive: "Network2Canvas-bar",
            cssClass: "network2canvas"
        },
        {
            title: "P100/GCP Mosaic",
            url: "http://amp.pharm.mssm.edu/p100mosaic",
            image: DIR + "mosaic_by_freepik.jpg",
            description: {
                main: "Mosaic visualization of targeted phosphoproteomics and post-translation histone modifications after chemical perturbation of cancer cell lines.",
                navigation: "Clusters and correlations of phosphosites and histone modifications can be investigated using 2d canvas visualizations.",
                drugs: "Small-molecule compounds which can be categorized as kinase inhibitors, epigenetically active, or neurologically active.",
                cells: "Small set of cancer and brain cell lines."
            },
            modes: {
                functionality: ["navigation"],
                content: ["drugs", "cells"]
            },
            // directive: "P100mosaic-bar",
            cssClass: "p100mosaic"
        },
        {
            title: "Crowdsourcing Portal",
            url: "http://www.maayanlab.net/crowdsourcing/",
            image: "",
            description: {
                main: "The portal enables user contributions to an assortment of scientific challenges termed microtasks and megatasks.",
                collaboration: "By organizing scientific challenges and allowing users, both within the LINCS consortium and students, to submit and share solutions, the Crowsourcing Portal faciliates collaboration.",
                education: "The Crowdsourcing Portal is associated with the <a href='https://www.coursera.org/course/bd2klincs'>BD2K-LINCS data science course</a>, enabling students to contribute to the process of scientific discovery."
            },
            modes: {
                functionality: ["collaboration", "education"],
                // content: [""]
            }
        },
        {
            title: "Geo2Enrichr",
            url: "http://amp.pharm.mssm.edu/g2e/",
            image: DIR + "Geo2Enrichr.png",
            description: {
                // main: "GEO2Enrichr is a web application and two browser extensions designed to ease the extraction of signatures from studies posted on the Gene Expression Omnibus (GEO) database as well as extract signatures from your own data tables.",
                main: "A browser extension and web application to extract gene sets from GEO and analyze these lists for common biological functions.",
                analysis: "Analyzes gene expression data using t-tests or the characteristic direction method.",
                external: "External data from the Gene Expression Omnibus (GEO)."
            },
            modes: {
                functionality: ["analysis"],
                content: ["external"]
            }
        }
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
    $scope.filterTools = function(tool_data, query_mode) {
        var out_tools = [];  // filtered tools

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
    }

}]);

// Tooltip texts for toolDirective buttons
mod.factory("tooltips", function() {
    return {
        search: "Search data collection",
        analysis: "Analyze data",
        api: "Programatic access through API",
        navigation: "Visual elements that help navigate data",
        download: "Download",
        cells: "LINCS cell lines",
        drugs: "LINCS small-molecule compounds",
        genetics: "LINCS genetic experiments",
        assays: "LINCS assay types",
        external: "Data from external sources",
        education: "Educational resource",
        collaboration: "Tool that faciliate scientific collaboration"
    };
});

// Wrapper for tools. Sets up the frame with icon, 
mod.directive("tool", function($compile, $timeout) {
    return {
        restrict: 'E',
        scope: {
            // data object assignemnt
            toolData: '=',
            // string specification
            toolMode: '@',
            toolButtons: '@'
        },
        link: function(scope, elem, attrs) {
            // console.log("test");
            var tool_obj = scope.toolData;
            if (tool_obj && tool_obj.directive !== undefined) {
                elem.find('placeholder').replaceWith(
                    $compile("<hr>" + '<' + tool_obj.directive + '></' + tool_obj.directive + '>')(scope)
                );
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

            // For inherited "Dot" syntax in child controllers.
            // Query template.
            $scope.query = {
                term: "",
                option: ""
            };

            // Change viewiew mode. To be overwritten by child directives.
            $scope.mode = function(mode_id) {
                $scope.$broadcast("mode", mode_id);

                // console.log("base mode called: ", mode_id);
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
        }],
        templateUrl: "view/getting-started/tool-directive.html"
    }
});

mod.directive('lincsDataPortalBar', function($compile) {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs, ctrls) {
            // console.log("lincsDataPortalBar controller: ", ctrls);
        },
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.query = $scope.$parent.query;  // query binding from parent

            $scope.searchTypeOptions = [
                {name: 'Data sets', value: 'datasets'},
                {name: 'Entities', value: 'entities'}
            ];

            $scope.query.option = $scope.searchTypeOptions[0].value;  // default search type

            var base_url = 'http://dev3.ccs.miami.edu:8080/';
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
        }],
        templateUrl: 'view/getting-started/lincs-data-portal.html'
    }
});

mod.directive('piLincsBar', function($compile) {
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
        templateUrl: 'view/getting-started/pi-lincs.html'
    }
});

mod.directive('iLincsBar', function($compile) {
    return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs) {
            // scope.searchTerm = '';
        },
        controller: ['$scope', '$http', function($scope, $http) {

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
        }],
        templateUrl: 'view/getting-started/i-lincs.html'
    }
});

mod.directive('l1000cds2Textarea', function() {
    return {
        restrict: 'E',
        scope: true,
        controller: ['$scope', '$element', function($scope, $element) {
            $scope.upGenes = '';
            $scope.dnGenes = '';
            $scope.example = function() {
                $scope.upGenes = [
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
                $scope.dnGenes = [
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
                        upGenes: $scope.upGenes.split('\n'),
                        dnGenes: $scope.dnGenes.split('\n')
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
            }
        }],
        templateUrl: 'view/getting-started/l1000cds2.html'
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
        templateUrl: 'view/getting-started/enrichr.html'
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
        templateUrl: 'view/getting-started/slicr.html'
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
                });
            };
        }],
        templateUrl: 'view/getting-started/harmonizome.html'
    }
});

mod.directive("hmsDbBar", function() {
    return {
        restrict: "E",
        scope: true,
        link: function(scope, element, attrs) {
        },
        controller: ["$scope", "$element", "$http", function($scope, $element, $http) {
            var search_url = $scope.toolData.url + "?search="
            $scope.search = function() {
                window.open(search_url + $scope.query.term, "_blank");
            }

            // Extend mode() function from parent scope. Inherited mode() functionality from toolDirective.
            // Copies base function, overwrites, and recalls.
            // console.log($scope);

            $scope.$on("mode", function(event, mode_id) {
                // console.log("broadcast recieved: ", event, mode_id);
            });
        }],
        templateUrl: "view/getting-started/hms-db.html"
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
        templateUrl: "view/getting-started/life.html"
    }
});

// Tool directive extension template
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
        templateUrl: "view/getting-started/network2canvas.html"
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
                // console.log($scope.query.field);
                var http_request = base_url + $scope.query.engine + "?q={\"" + $scope.query.field + "\":\"" + $scope.query.term + "\"}&user_key=" + user_key;
                window.open(http_request, "_blank");
            };

            // Extend mode switch function
            $scope.$on("mode", function(event, mode_id) {

                // console.log(mode_id);

                switch (mode_id) {
                    case "cells":
                        $scope.query.engine = "cellinfo";
                        break;
                    case "drugs":
                        $scope.query.engine = "pertinfo";
                        break;
                }
                // console.log("HMS overwritten mode called with: ", name);
            });

        }],
        templateUrl: "view/getting-started/lincscloud.html"
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
                console.log("new mode: ", mode_id);
            })
        }],
        // templateUrl: "view/getting-started/myDirective.html"
    }
});
