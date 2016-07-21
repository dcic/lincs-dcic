var mod = angular.module("externalDsrpMod", []);

mod.controller("externalDsrpCtrl", ["$scope", function($scope) {

    var DIR = 'images/dsrp/'

    $scope.labs = [
        {
            name: 'Mark Grimes – Division of Biological Sciences, University of Montana',
            projects: [
                {
                    title: 'Elucidate and extend pathways involving kinases, transcription factors, and chromatin modifying enzymes from lung cancer cell line protein modification data',
                    text: 'We propose to contribute to the LINCS project by building on methods that employ effective clustering methods to filter protein-protein interaction (PPI) networks. New relationships among proteins will be indicated by common post translational modifications that highly correlate and co-cluster. Perturbations caused by kinase inhibitor drugs will be examined in candidate pathways to extend specific signaling pathways downstream from drug targets.'
                },
                {
                    title: 'Construct navigable data structures that may be explored using web browsers',
                    text: 'A major challenge in the analysis of large data sets is visualizing the results in a way that makes sense to clinicians and biologists. Exploration of networks such as the one described above requires programming skills and knowledge of applications that have a steep learning curve. We will develop new web-based visualizations that efficiently render graphs of large data sets and are customizable, dynamic, and accessible to investigators without programming skills. Results will be evaluated by investigators in the LINCS consortium.'
                }
            ]
        },
        {
            name: 'Oliver He – Department of Microbiology and immunology, University of Michigan',
            projects: [
                {
                    title: 'Leverage the cell type ontology (CLO) consortium activities as a platform for discussion and standardization of minimal information required for describing cell lines',
                    text: 'The CLO consortium activities will be to organize open CLO consortium calls, maintain the CLO web site, and hold an annual CLO consortium face-to-face meeting. In these channels various cell line related topics including top level CLO design will be discussed. The CLO consortium will standardize minimal information required for describing a cell line. It will generate an ontology metadata representation of the minimal cell line information requirements.'
                },
                {
                    title: 'Expand CLO to cover LINCS-related cell line information',
                    text: 'Collect and process the data related to LINCS cell lines. Such information would include tissue and organism origins, cell membrane protein markers, gene mutations, up- or down-regulated genes, cell culturing conditions. The information may be extracted from LINCS websites and other resources such as the ATCC and biomedical literature. Ontologically represent the collected LINCS-related cell line information in CLO. Provide SPARQL query demonstrations on how the LINCS-related cell line information can be easily queried and analyzed.'
                },
                {
                    title: 'Expand CLO to cover LINCS-related cell line information',
                    text: 'Collect and ontologically represent and analyze cell responses induced by drug perturbations, exampled by the treatment of neuropathy-inducing chemical drugs. Generate top level ontology models and metadata standards to represent cell line responses induced by chemical drugs. Case study will focus on neuropathy-inducing chemical drugs, which have been collected and represented in the Ontology of Drug Neuropathy Adverse Events (ODNAE). Collect drug/cell-related data (e.g., cellular targets of drugs, drug-gene-cell-phenotype links) from LINCS and other resources and ontologically represent the data based on established ontology models.'
                }
            ]
        },
        {
            name: 'Ka Yee Yeung – Institute of Technology, University of Washington',
            projects: [
                {
                    title: 'Construction of transcriptional and protein-protein interaction network models',
                    text: 'Build Bayesian regression-based methods to infer transcriptional gene networks using LINCS L1000 gene expression data. Specifically, leverage genetic perturbation data (knock-down, over-expression) and graph algorithms to infer accurate and compact networks for different cell lines. Construct protein-protein interaction (PPI) networks by applying sequence-based similarity methods to curated PPI repositories such as BioGRID and Reactome.'
                },
                {
                    title: 'Identification of predictive drug combinations biased towards druggable targets',
                    text: 'Compute target signatures in response to drug perturbations at the transcription and translation levels. Specifically, compute L1000 gene signatures and enriched transcriptional modules using the transcriptional networks inferred. Identify protein kinases inhibited by drugs/compounds from the LINCS KINOMEscan data, and compute enriched protein modules using the PPI described above. Develop multivariate variable selection methods that integrate multiple data sources using prior probabilities in a Bayesian framework. Predictions of which targets bind existing compounds will be used to bias our target discovery efforts towards druggable targets. Apply methods to identify drug combinations predictive of clinical outcomes using The Cancer Genome Atlas (TCGA) data.'
                },
                {
                    title: 'Iterative refinement of predictive drug signatures using high content cell-imaging, pharmacological profiling data and curated databases',
                    text: 'Substantiate predictions using the drug sensitivity data generated using cell imaging technologies applied in LINCS and the pharmacological profiling data generated from the Cancer Cell Line Encyclopedia (CCLE). Use curated databases such as PharmGKB, DrugBank and ChEMBL. Iteratively refine and improve the predictive models.'
                }
            ]
        },
        {
            name: 'Jeffrey Saucerman– Department of Biomedical Engineering, University of Virginia',
            projects: [
                {
                    title: 'Apply dynamic logic-based network model and known drug targets to predict how drugs cause cardiomyocyte toxicity',
                    text: 'Simulate a panel of FDA-approved drugs under evaluation at LINCS and with associated clinical cardiotoxicity data. Model predictions will be validated against measurements of hypertrophic gene expression and cardiomyocyte morphology, which are molecular and cellular biomarkers for cardiotoxicity. Sensitivity analysis will then be used to predict network mechanisms underlying drug-induced cardiomyocyte toxicity.'
                },
                {
                    title: 'Integrate the network model with transcriptomic/proteomic signatures to predict drug toxicity or mitigation by both known targets and indirect mechanisms',
                    text: 'Transcriptomic or proteomic response to each drug will be used to remodel the network by scaling relative expression parameters for all nodes (apart from the output genes). This approach accounts for indirect mechanisms by which a drug affects the network. We will test the hypothesis that scaling expression parameters based on –omic signatures will improve model predictions of hypertrophic gene expression and cardiomyocyte morphology.'
                },
                {
                    title: 'Generalize our model-driven approach by developing predictive network models based on signatures generated at other LINCS Centers.',
                    text: 'Focus on paired –omic and imaging data generated at HMS LINCS (drug response of breast cancer cell lines) and MEP LINCS Centers (response of breast, prostate and pancreatic cancer cell lines to microenvironment patterning). These new application areas will allow us to identify challenges in network model-based data integration across multiple biological systems.'
                }
            ]
        },
        {
            name: 'Cathy Wu– Department of Bioinformatics & Computational Biology, University of Delaware',
            projects: [
                {
                    title: 'Enhance PTM-focused full-scale literature mining and develop a PTM-centric knowledgebase',
                    text: 'Develop a knowledgebase focusing on protein PTMs, their regulators and their cross-talks. Enhance iPTMnet, which integrates phosphorylation and other major PTM information from a PTM-focused literature mining system and from manually curated PTM databases for PTM network analysis as well as Protein Ontology (PRO), which allows for precise definition of PTM protein forms (proteoforms) beyond gene-centric or site-centric levels, thus supporting PTM-proteoform specific knowledge representation, including PTM-dependent protein-protein interactions (PPIs) and PTM-specific biological and disease context. Extend text mining system using a generalizable relation extraction framework to capture PTM types of special importance to LINCS, their functional impacts, and regulation of kinases/PTM enzymes, including regulation by miRNAs. Provide full-scale, full-text literature mining and integrate automatically generated and normalized text-mining results into the iPTMnet database with evidence attribution. Where appropriate, information will be integrated from relevant specialized resources, including novel PTM sites/proteoforms uncovered in LINCS and LINCS-validated PTM signaling networks. The database, currently implemented as a relational database, is being extended to a graph database to support semantic queries and knowledge network representation. For PTM visualization, in addition to a multi-relation PTM network view, provide a sequence alignment view to facilitate comparative analysis of PTM proteoforms across species and identification of PTM-relevant variants/SNPs.'
                },
                {
                    title: 'Develop Integrative panomics analysis pipeline for LINCS PTM discovery',
                    text: 'Develop pipelines to integrate panomics data—including single cell measures and accompanying metadata for sample selection—produced by LINCS for integrative quantitative analysis of PTM knowledge networks. For proteomics, pipeline will be agnostic to the upstream methodology for protein quantification and will interoperate with DIA technologies used in LINCS (SWATH-MS and QE-MS). Develop software modules for visualization and quantitative analysis of transcriptomic, proteomic and PTM proteomic data from different biological states (e.g., cell type, perturbageninduced or disease) in the PTM network context, thereby facilitating the translation of LINCS panomics data into knowledge. Scientific use scenarios will be developed, which may include construction of kinase/PTM regulatory networks displaying differential protein/phosphosite levels and/or other PTM site levels (e.g., in drug-resistant vs. sensitive cells); evolutionary conservation of the specific PTM sites/proteoforms across species; and calculation of correlations between levels of kinases and their corresponding phosphorylated proteoforms.'
                },
                {
                    title: 'Collaborate with DCIC to broaden integration, interoperability and dissemination',
                    text: 'To facilitate data integration, map gene/protein lists from LINCS panomics data to UniProt accession numbers and will provide an ID mapping service for mapping unique identifiers and gene/protein names in major databases. LINCS protein data will be further mapped to the most granular level, including PTM proteoforms, using the PRO ontological structure that has already integrated proteins and isoforms in UniProtKB. Establish a LINCS cross-reference (“DR”) line in UniProtKB for LINCS-UniProtKB/PRO reciprocal links. Further develop the iPTMnet web services for seamless integration with the DCIC portal to serve as a gateway for users to search, browse, download, and review results interactively with evidence attribution and to visualize PTM networks and sequence features. A suite of tools will support analysis of LINCS panomics data in conjunction with customized PTM knowledge networks to address research questions. For long-term sustainability, the resource will be maintained as part of the bioinformatics infrastructure at the PIR and will also be integrated into other open-source repositories as appropriate.'
                }
            ]
        }
        // {
        //     name: 'Ziv Bar-Joseph – Department of Computer Science, Carnegie Mellon University',
        //     projects: [
        //         {
        //             title: 'Target prediction using LINCS data ',
        //             text: 'A major challenge in drug discovery is to identify a potential inhibitor for protein targets that is both specific and effective. In collaboration with the Camacho Lab at the University of Pittsburgh we are using LINCS data to predict such targets for the tens of thousands of small molecules that have profiled in the datasets. For this, we are using a training set of known targets for a small set of drugs and developing classifiers that, based on the expression response following treatment with the drug predict potential targets based on the similarity of their expression profiles to the drug expression response. To further improve the accuracy we are utilizing a large cohort of protein interaction data and using information from modules to refine the rankings of potential targets. The genomics and interaction data is then used to rank potential targets and the top 100 targets for each small molecule are than further analyzed using docking to determine which are likely to bind the molecule / drug. For proteins of interest we would identify the top predicted molecules and would be experimentally test the impact of these molecules on the protein.'
        //         },
        //         {
        //             title: 'Multi-task learning of cancer pathways',
        //             text: 'A key goal of the methods we develop is to reconstruct the signaling and regulatory pathways that are activated in cancer cells prior and after treatment. While each cell type may respond differently to a specific drug, it is likely that these responses significantly overlap since the pathways targets by the drug are usually the same in all cells. To accurately model these pathways we are developing methods that integrate information from multiple types of cells to reconstruct such core response pathways while at the same time also allowing for a cell specific component. Such a process is termed multi-task learning in the machine learning terminology and while it was extensively applied in the part to classification problems it has rarely been applied to model and reconstruct response networks. In our case we are integrating the LINCS data with additional interaction data including protein-protein and protein-DNA and further using the data to infer new protein-DNA interactions from the knockdown experiments. Preliminary results indicate that multi-task learning improves upon both – models constructed from a single cell type data and models constructed by using the union of all cell types (without allowing for cell specific component).'
        //         }
        //     ]
        // },
        // {
        //     name: 'Peter Hornbeck – Cell Signaling Technology Inc.',
        //     projects: [
        //         {
        //             title: 'Curation and Computational Access to Cancer TMT Datasets via PhosphoSitePlus',
        //             text: 'We have accomplished work that will enable PhosphoSitePlus to serve the proteomic cancer datasets including: 1) set up a server in the PhosphoSItePlus (PSP) cluster for running CORE, the analytical suite of software for analyzing MS2 raw data. CORE includes routines that apply advanced and regularly updated algorithms for peptide and site assignments developed in the Gygi lab at Harvard University. 2) Implemented new processes for displaying MS spectra derived from experiments performed at CST. This will enable us to serve not only individual spectra for individual sites from within the UI, but also to include spectra in bulk processing via the API to be developed in the coming year. Implementation of this feature involved developing a Java parser of the spectral data, and implementation of ‘lorikeet’, a relatively recent versatile JQuery plugin to view MS/MS spectra annotated with fragment ions. 3) Developed processes that support importing, storing, and serving TMT data in PSP. This involved analysis of the CORE data structures, modifying the PSP Oracle DB structure, and programming the transfer and storage of TMT data. We are in the process of beta testing this process with the perturbagen lung cancer cell line data. 4) Struts and JSP migration. The architecture of the application was designed in 2006 and uses Struts 1. In order to support future growth, and to accommodate interactions via the API, it is essential to migrate to Struts 2.  80% of this migration has been completed. All Struts 1 action classes have been migrated to Struts 2 classes. The migration and implementation will require five more weeks: two weeks to complete the JSP migration and testing, two weeks to merge with the existing code base, and one week to complete testing. 5) Curation of MS2 experiments. Supplementary datasets from approximately 12 cancer or perturbagen MS2 publications, encompassing over 10,000 peptides and 2,000 new sites were curated into PSP. Additionally, we have begun the process of curating the CST cancer cell line & perturbagen TMT data into PSP. Perturbagens include Gleevec, Iressa, crizotinib, and geldanomycin.'
        //         },
        //         {
        //             title: 'Network Analysis of Multi-layered PMTs Collected from 31 NSCLC Cell-Lines',
        //             text: 'Using enrichment analysis we obtained kinase signatures for each lung cancer cell line.  We selected the top up- and down-regulated phosphosites for each cell line, defined as the top 10% of up- or down-regulated phosphosites, and performed enrichment analysis for kinases using our kinase-substrate library at the phospho-site level. Significantly enriched kinases, with a Benjamini-Hochberg corrected p-value of less than 0.05, were discovered for each cell line. We summarized our enrichment results in an interactive web-based kinase enrichment connectivity map. The enrichment map has kinases as rows and cell lines as columns. Each tile represents an enriched kinase in a NSCLC cell line and the opacity of the tile is proportional to the Benjamini-Hochberg corrected p-value. Some kinases are enriched based on up- and down-regulated phosphosites in a single cell line and in this case the tile is split diagonally, with the red (up) triangle on the top and the blue (down) triangle on the bottom. Our enrichment results reveal kinase signatures of NSCLC cell lines and point to potential new driver kinases in NSCLC cell lines. Our results also agree with previous knowledge about kinase mutations/fusion/copy-number-variation. For instance, three cell lines that are known to have activating EGFR mutations: H1650, HCC827, and H1975, all show enrichment for up-regulated phosphosites that are substrates of EGFR. Furthermore, these three cell lines have the highest enrichment for EGFR of all 31 cell lines. The cell lines H3122 and H2228 have activating fusions of ALK, and these cell lines are the only two that are enriched for ALK. Finally, the cell line H1703, which has aPDGFRA amplification, is enriched for PDGFRA and the cell line HCC78, which has an activating ROS1 fusion, is exclusively enriched for ROS1. These results indicate that our phosphoproteomics data and enrichment method are able to accurately recover known biological information on these cell lines and that we can be confident of the predictions made by our results.',
        //             image: DIR + 'fig3.png',
        //             caption: 'Fig. 3 expression map visualizes NSCLC cell lines and z-score normalized expression of kinases from the CCLE. A red tile indicates up-regulated expression of this gene relative to the other NSCLC cell lines and blue indicates down-regulated. The cell lines and kinases have been clustered.'
        //         }
        //     ]
        // },
        // {
        //     name: 'Ka Yee Yeung – Institute of Technology, University of Washington',
        //     projects: [
        //         {
        //             title: 'Exploration of LINCS data',
        //             text: 'We have extended our in-house utilities by developing a browser-based interface to extract slices of the L1000 data to facilitate downstream analyses. This interface is written in php, runs on all operating systems and mobile devices. The goal is to enhance the data mining effort among Computer Science students without background in biology or bioinformatics. We also have started a project to compute prior probabilities of regulatory relationships using external data sources (in addition to LINCS data) so as to guide the search of candidate regulators in our regression-based network inference methods.'
        //         },
        //         {
        //             title: 'Artifacts of L1000 data',
        //             text: 'We study the effect of various experimental design variables on the statistical properties of the L1000 level 3 data. We observed that different bead batches often exhibit different data distributions. Since each bead measures the expression levels of two genes in the L1000 Luminex platform, we observed that the L1000 deconvolution procedure occasionally results in the expression levels of the two genes to be switched and assigned to the wrong gene. We are currently investigating a model-based clustering method utilizing flipping of clusters to detect and correct these errors. This will hopefully improve the quality of benchmarks and subsequent analyses.'
        //         },
        //         {
        //             title: 'Improve scalability of network inference algorithms',
        //             text: 'We have previously developed probabilistic regression-based algorithms [Yeung et al. PNAS 2011, Lo et al. BMC Systems Biology 2012, Young et al. BMC Systems Biology 2014] to infer gene networks from gene expression data. In order to apply our network inference methods to LINCS data consisting of millions of experiments, we have improved the scalability of our current implementation. The major improvement comes from the use of more scalable and efficient matrix decomposition algorithms. Combined with the use of faster FORTRAN linear algebra libraries, conversion of R routines to C++, more efficient data structures, optimized hash functions, we achieve a 100 fold improvement in speed. The algorithm has also been parallelized to use multiple cores and processors for additional acceleration and scalability. In another project, we are developing a graph theory algorithm to remove redundant edges after our regression-based network is computed.'
        //         }
        //     ]
        // }
    ];
}]);
