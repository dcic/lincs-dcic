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
            name: 'Oliver He – Department of Microbiology and Immunology, and Center for Computational Medicine and Bioinformatics, University of Michigan',
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
                    title: 'Collect and ontologically represent and analyze cell responses induced by drug perturbations, exampled by the treatment of neuropathy-inducing chemical drugs',
                    text: 'Generate top level ontology models and metadata standards to represent cell line responses induced by chemical drugs. Case study will focus on neuropathy-inducing chemical drugs, which have been collected and represented in the Ontology of Drug Neuropathy Adverse Events (ODNAE). Collect drug/cell-related data (e.g., cellular targets of drugs, drug-gene-cell-phenotype links) from LINCS and other resources and ontologically represent the data based on established ontology models.'
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
            name: 'Jeffrey Saucerman – Department of Biomedical Engineering, University of Virginia',
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
                    title: 'Generalize our model-driven approach by developing predictive network models based on signatures generated at other LINCS Centers',
                    text: 'Focus on paired –omic and imaging data generated at HMS LINCS (drug response of breast cancer cell lines) and MEP LINCS Centers (response of breast, prostate and pancreatic cancer cell lines to microenvironment patterning). These new application areas will allow us to identify challenges in network model-based data integration across multiple biological systems.'
                }
            ]
        },
        {
            name: 'Cathy Wu – Department of Bioinformatics & Computational Biology, University of Delaware',
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
    ];
}]);
