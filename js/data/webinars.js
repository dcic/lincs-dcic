var mod = angular.module("webinarsMod", []);

mod.controller("webinarsCtrl", ["$scope", "$sce", function($scope, $sce) {
    $scope.upcomingWebinars = [
    ];

    $scope.pastWebinars = [
      {
       date: '25 April 2017 | 3:00 PM ET',
       topic: 'Combining Forward and Reverse Engineering to Understand Complex Fractional Killing',
       presenters: 'Tongli Zhang PhD, University of Cincinnati',
       synopsis: 'Chemotherapy drugs applied to tumor cells with the same or similar genotypes kill only a percentage of the treated cells. Such fractional killing contributes to drug resistance of cancer. Recent observations indicate that timing of p53 activation decides cellular fate, the cells who activated p53 early undergo apoptosis the cells who activate p53 late survive. The determining role of p53 activation dynamics makes fractional killing a complex dynamical challenge. In order to grasp the essential dynamics of this process, we have constructed a representative model by integrating the control of apoptosis with the relevant signaling pathways. The model successfully recaptured many observed properties of fractional killing, furthermore, analysis of the model suggested that the cell fate is a function of the bifurcation geometry and the cellular trajectories. Hence, the cell fate can be altered in three possible ways: alteration of bifurcation geometry, alteration of cell trajectories or alteration of both. These predicted categories can explain the existing strategies known to combat fractional killing and allow us to design novel strategies. Meanwhile, we also describe our current effort in further extending this model for designing possible strategies that combat fractional killing.',
      },
      {
       date: '18 April 2017 | 3:00 PM ET',
       topic: 'Pharos – A Torch to Use in Your Journey In the Dark Genome',
       presenters: 'Rajarshi Guha PhD, NIH National Center for Advancing Translational Sciences',
       synopsis: $sce.trustAsHtml('It is well known that a relatively small set of protein targets receive the bulk of research attention and thus funding. However, there are potential (druggable) opportunities in the remaining under-studied and un-studied proteins. To address this the NIH initiated the "<a href="http://www.targetcentral.ws/index" target="_blank">Illuminating the Druggable Genome</a>" program to characterize the dark regions of the druggable genome. As part of this program, a Knowledge Management Center (KMC) was created to aggregate and integrate heterogeneous data sources and data types creating a centralized location for information about all protein targets identified as part of the druggable genome. Since then the KMC has expanded to consider the entire human proteome. In this presentation, we describe Pharos, the user interface for the KMC knowledgebase. We provide an overview of the data sources and types made available via Pharos and then describe the architecture of the system and its integration with KMC & external resources. In particular we highlight the rich search facilities that enable a user to drill down to relevant subsets of data but also support the notion of "serendipitous search".  Given the heterogeneous set of data types available for individual targets, it is useful to quantify how much and what types of data is available for a target. We describe the development of knowledge profiles and a Knowledge Availability Score (KAS), both derived from the Harmonizome, which is a resource that has characterized data availability across different data sources and types in a uniform manner. We then highlight how the KAS is concordant with knowledge trends characterized by traditional metrics such as publications and grants.  We discuss the use of the KAS in the Pharos interface and an example of prioritizing understudied targets by computing the similarity of their knowledge availability profiles with that of well-studied targets.'),
       isHtml: true,
       link: 'https://www.youtube.com/watch?v=pTJ9USQAZtg'
      },
      {
       date: '13 April 2017 | 1:00 PM ET',
       topic: 'Enhancing and Mining the Gene Expression Omnibus and DataMed with Chrome Extensions',
       presenters: 'Avi Ma’ayan PhD, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
       synopsis: $sce.trustAsHtml('In the past two years we have developed four Chrome extensions that enhance the functionality of the Gene Expression Omnibus (GEO) and DataMed. The Chrome extensions are named: <a href="http://amp.pharm.mssm.edu/g2e/" target="_blank">GEO2Enrichr</a>, <a href="https://chrome.google.com/webstore/detail/archs4/ognafeffndmmiliegaamoockceneedea" target="_blank">ARCHS4</a>, <a href="https://chrome.google.com/webstore/detail/cite-d-lite/ipiffhgeigmiffclkpkgdaklbdgdegkk?hl=en" target="_blank">Cite-D-Lite</a>, and Datasets2Tools. GEO2Enrichr enables users to select control and perturbation samples from GEO dataset landing pages, and then to compute differential expression between the samples. The resultant signatures are visualized with interactive PCA and heatmaps, and piped to downstream analysis tools such as <a href="http://amp.pharm.mssm.edu/Enrichr/" target="_blank">Enrichr</a> and <a href="http://amp.pharm.mssm.edu/L1000CDS2/#/index" target="_blank">L1000CDS2</a>. ARCHS4 provides access to processed RNA-seq data from all mice and human studies directly from GEO landing pages. The Cite-D-Lite extension adds buttons to export data citations to popular reference management software; whereas Datasets2Tools provides links from dataset landing pages to other pages that provide web-based interactive analysis of each dataset. In my presentation, I will demo these extensions and discuss how together these tools can enable the discovery of new knowledge. <a href="https://biocaddie.org/events/webinars" target="_blank">How To Connect</a>'),
       isHtml: true,
       link: 'https://www.youtube.com/watch?v=R1CN3ULeeco&t=876s'
      },
      {
       date: '04 April 2017 | 3:00 PM ET',
       topic: 'Illuminating the Druggable Genome: Cure or no Cure?',
       presenters: 'Tudor Oprea MD, PhD University of New Mexico',
       synopsis: "We discuss the human proteome in light of the therapeutic Target Development Levels (TDLs). Four TDLs are defined: Tclin – “clinical”, efficacy targets for known drugs (3% of the proteome); Tchem – “chemical”, proteins for which interactions with small molecules above class-specific cut-offs are known; Tbio – “biological”, proteins for which functional or disease aspects are knonw; Tdark – “ignorome”, proteins that are poorly described based on fractional publication counts (from JensenLab.org), NCBI GeneRIFs and commercially available antibodies (from antibodypedia.com). More about Tclin, Tdark etc. in this Nature Reviews Drug Discovery poster: http://www.nature.com/nrd/posters/druggablegenome/index.html. The second part of my presentation will put the IDG aspects in the light of potential partnership with the pharmaceutical industry, starting from the following: 1) Diseases are concepts, they do not exist outside patients. 2) Successful launch implies good choice of chemical and target. Targets are the weak link. 3) it is time for pharma to declare the Target Selection process as Precompetitive Knowledge. 4) It's neither Affinity, nor Binding mode. It's what happens in patients 5) Pharma and academia should work jointly to select the optimal Disease-Target-Drug tuple.",
       link: 'https://www.youtube.com/watch?v=7QI6kHureyw&t=1602s'
      },
      {
       date: '21 March 2017 | 3:00 PM ET',
       topic: 'Identifying New Antiepileptic Drugs Through Genomics-Based Drug Repurposing',
       presenters: 'Nasir Mirza, PhD, University of Liverpool',
       synopsis: 'Currently available antiepileptic drugs (AEDs) fail to control seizures in 30% of patients. Genomics-based drug repurposing (GBR) offers the potential of savings in the time and cost of developing new AEDs. We used published data and software to identify the transcriptomic signature of chronic temporal lobe epilepsy and the drugs that reverse it. After filtering out compounds based on exclusion criteria, such as toxicity, 36 drugs were retained. 11 of the 36 drugs identified (>30%) have published evidence of antiepileptic efficacy (for example, curcumin) or antiepileptogenic affect (for example, atorvastatin) in recognised rodent models or patients. By objectively annotating all compounds in the LINCS database as either having published evidence of antiepileptic efficacy or lacking such evidence, we demonstrated that our set of repurposable drugs is ~6-fold more enriched with drugs having published evidence of antiepileptic efficacy in animal models than expected by chance (p-value <0.006). Further, we showed that another of our GBR-identified drugs, the commonly-used well-tolerated antihyperglycemic sitagliptin, produces a dose-dependent reduction in seizures in a mouse model of pharmacoresistant epilepsy. In conclusion, GBR successfully identifies compounds with antiepileptic efficacy in animal models and, hence, it is an appealing methodology for the discovery of potential AEDs.',
       link: 'https://www.youtube.com/watch?v=EHwpFbLkUUw'
      },
      {
       date: '20 December 2016 | 3:00 PM ET',
       topic: 'Cell Line Ontology-based Standardization, Integration and Analysis of LINCS Cell Lines',
       presenters: 'Yongqun "Oliver" He DVM, PhD, University of Michigan Medical School (DCIC External Data Science Research Project)',
       synopsis: 'A biomedical ontology is a human- and computer-interpretable set of terms and relations that represent entities in a specific biomedical domain and how they relate to each other. Ontologies have played a critical role in biomedical data, metadata, and knowledge standardization, exchange, integration, as well as inferring new knowledge. Cell lines have been widely used in biomedical research. As a member of the Open Biological/Biomedical Ontologies (OBO) Foundry library ontologies, the community-based Cell Line Ontology (CLO) covers the domain of cell lines. Co-developed by many ontology development groups and societies, CLO has established consensus definitions of cell line-specific terms such as ‘cell line’, ‘cell line cell’, and ‘cell line culturing’. A community-agreed CLO cell line design pattern has also been established and used for CLO to represent nearly 40,000 cell lines from various resources such as ATCC, HyperCLDB, Coriell Cell lines, and Japan Riken cell lines. CLO has also been used in different applications, for example, in the modeling of cell line cell-vaccine/pathogen interactions. Cell lines are crucial to study molecular signatures and pathways, and are widely used in the NIH Library of Integrated Network-based Cellular Signatures (LINCS) project. To better serve the LINCS research community, we generated a CLO subset/view (LINCS-CLOview) of LINCS cell lines. The LINCS-CLOview includes 1,097 LINCS cell lines. For each cell line, the CLO subset includes its cell type, original tissue/organ/organism information, and associated disease, and how these entities are related. In total, 121 diseases, including three benign neoplasms (e.g., breast fibrocystic disease associated with MCF10A and MCF 10F cell lines) and 118 various types of cancers, were found and laid out using the hierarchical structure of the Disease Ontology (DOID). These LINCS cell lines are also associated with various human or mouse tissue and organ types, represented by 131 UBERON ontology terms. Forty-three cell types, represented by the Cell Type Ontology (CL), are associated with LINCS cell lines. The information in the CLO LINCS subset can be easily queries using SPARQL scripts, and it can also be used to enhance the performance of website queries of cell line related information. Next stage of CLO-related research will also be discussed. For example, we are currently developing a CLO branch to represent various stem cell lines.  CLO can also be further developed to model and analyze the data and knowledge of cell line gene transfection, cell signature markers, drug-induced molecular interaction pathways, and other cell line phenotypes. Overall, CLO can be used as an ontological basis and extendable platform to support integrative and systematic cell line cell-based research.',
       link: 'https://www.youtube.com/watch?v=mKQNUyHDeG8&t=18s&index=1&list=PL0Bwuj8819U-G9Ob0jIGHp5AtwpCghLV5'
      },
  	  {
        date: '6 December 2016',
        topic: 'Dynamic Logic-Based Models Integrating Cardiac Signaling Networks and Cellular Phenotypes',
        presenters: 'Jeff Saucerman PhD, University of Virginia (DCIC External Data Science Research Project)',
        synopsis: 'The goal of LINCS is to acquire and analyze cell signatures to obtain a network-based understanding of how cells respond to perturbations. While it is necessary to first characterize correlative molecular/cellular signatures, the next phase of developing network-based understanding will require the development of causal computational models that mechanistically predict and explain these signatures. Here, I will introduce our approaches for developing dynamic logic-based network models. I will focus on network reconstructions of cardiac myocyte and fibroblast signaling networks, which provide new insights into how these networks respond to perturbations. These predictions have been extensively validated by both literature data and new experiments. Finally, I will introduce Netflux, our user-friendly software that enables rapid development of logic-based network models by biologists and students.',
        link: 'https://www.youtube.com/watch?v=IpIM8hqU_1M'
  	  },
  	 {
        date: '22 November 2016',
        topic: 'Docker Pipelines for RNASeq Alignment and Analyses',
        presenters: 'Ling-Hong Hung PhD, University of Washington (DCIC External Data Science Research Project)',
        synopsis: 'Background: Docker (https://www.docker.com) is an application that packages binary executables and scripts into modules (containers) with their software dependencies. Containers can be freely mixed and matched to form workflows that give identical results on any platform which supports Docker. The ease of deployment and the high degree of reproducibility of software containers make them ideal instruments for disseminating complex bioinformatics workflows especially on the cloud. Recently, the Haussler group at University of California at Santa Cruz has processed 20,000 RNA-seq datasets including almost all the datasets from TCGA and TARGET, in just 4 days at a cost of $1 per dataset. Results: We will present our work using Docker software containers for reproducibly deploying bioinformatics workflows.  Docker tool development and its application to RNA-Seq will be discussed. One of the limitations of container tools is that it is designed for computer professionals and not for the biomedical community.  In particular, Docker is a command line tool.  Our recent work, GUIdock-VNC, allows the deployment of Docker containers from a graphical desktop inside a browser.  In other words, a non-programmer can then construct, save, and execute Docker bioinformatics workflows using a browser to access the containerized application.  As a case study, we are collaborating with DToxS-LINCS at Mount Sinai to containerize their RNA-Seq analyses workflows.  We have created containers based on DToxS standard operating procedures to reproduce the results of their analyses.  We observed that software versioning and systems configurations have an impact on the analyses results, and that software containers can reliably reproduce analyses results.  In addition, with Docker, we can portably replace Python scripts in the original pipeline with different implementations.  The resulting workflow can easily be run on any platform and on a commercial or private cloud. Re-analyses of the data using the Dockerized workflows with different parameters give rise to very different differentially expressed gene lists. Due to the uniform environment provided by Docker we can be assured that these differences are actually due to the parameter changes.',
        link: 'https://www.youtube.com/watch?v=QBKCocvAba0&t=544s'
      },
      {
        date: '8 November 2016',
        topic: 'Integration of Phosphorylation Knowledge Networks with LINCS Omics Data for Cancer Drug Analysis',
        presenters: 'Karen Ross PhD and Cathy Wu PhD, University of Delaware (DCIC External Data Science Research Project)',
        synopsis: 'Perturbations in kinase activity are recognized as key drivers of disease and kinase inhibitors are being intensively investigated as therapeutic agents. Understanding how these drugs alter cellular phosphorylation dynamics is essential to their effective clinical use. In this study, we have integrated literature-based phosphorylation networks with phosphoproteomic signatures and drug-target data to interpret cellular responses to the cyclin-dependent kinase (CDK) inhibitor, dinaciclib. To study changes in phosphorylation induced by dinaciclib, we took advantage of data from the P100 project available through the LINCS web portal. In the P100 study, phosphorylation sites were divided into 55 clusters based on their coordinated behavior across a range of test conditions. One or two representative phosphosites for each cluster were then assayed in the presence of a variety of perturbagens. Using iPTMnet (http://proteininformationresource.org/iPTMnet), a resource that combines rich PTM information from text mining and high-quality curated databases and ontologies for PTM network analysis and disease discovery, we constructed a kinase-site knowledge network for the sites assigned to clusters in the P100 study. We then overlaid this network with P100 data from dinaciclib-treated cells. Finally, we integrated information on kinase inhibition by dinaciclib from KINOMEscan datasets available on the LINCS web portal. Networks were visualized using Cytoscape and Panoromics, a newly developed tool designed for visualizing changes in networks across multiple experimental conditions. This study demonstrated the value of integration of literature-based phosphorylation networks with LINCS omics data.  We found that the relationship between kinase inhibition in dinaciclib and substrate phosphorylation differed among kinases. Qualitatively, phosphorylation patterns were similar in MCF7 cells across time points and in MCF7 vs. NPC cells; however, we observed differences at the quantitative level. We plan to extend this approach to study other kinase inhibitors to increase our understanding of the cellular response to this important class of drugs.',
        link: 'https://www.youtube.com/watch?v=mv-Z2ntBx_A'
      },
  	  {
        date: '4 October 2016',
        topic: 'Unravelling Hairballs: Biological Pathways from Protein Modification Cluster Networks',
        presenters: 'Mark Grimes PhD, University of Montana (DCIC External Data Science Research Project)',
        synopsis: 'We developed a cluster-filtered edges approach to elucidate pathways based on post-translational modification data derived from mass spectrometry in lung cancer cell lines. We hypothesize that clustering of protein modifications under different conditions reveals patterns specific to the system, and that clusters identified by statistical relationships that contain proteins known to interact with one another are likely to represent functional signaling pathways. Mass spectrometry data, being full of holes (missing values), requires special considerations for embedding statistical relationships into reduced-dimension data structures for clustering. We surmounted the hole-y data problem by calculating statistical relationships using pairwise-complete observations, penalizing incomplete observations in dissimilarity representations, and embedding these relationships using t-distributed stochastic neighbor embedding combined with penalized matrix decomposition. We then filtered protein-protein interaction (PPI) networks by excluding all edges save those between proteins whose modifications co-clustered, and used shortest paths in cluster filtered networks to examine specific pathways. We focused on those affected by kinase inhibitors and geldanamycin, whose mechanism of action is not well understood. Receptor tyrosine kinase signaling pathways in lung cancer cell lines are receptor specific and implicate distinct responses. Signaling pathways converged on network hubs that are hypothesized to be signal- integrating proteins. Different post-translational modifications, especially phosphorylation and acetylation, appear to play dueling or antagonistic roles for signal transduction proteins. Geldanamycin affects acetyltransferases, which disrupts regulation of the cytoskeleton and endocytosis to affect specific pathways.',
        link: 'https://www.youtube.com/watch?v=rZF9ejdRiNU'
      },
      {
        date: '21 September 2016',
        topic: 'Updates on Bioassay Ontology, Drug Target Ontology and LINCS',
        presenters: 'Stephan Schurer PhD, University of Miami, BD2K-LINCS DCIC',
        synopsis: 'In the "Human vs Machine-Enanced Scientific Discovery" Town Hall Webinar, Stephan Schurer presented updates on Bioassay Ontology (BAO), Drug Target Ontology (DTO), and LINCS that allow data in the biomedical drug discovery space to be meaningfully organized.',
        link: 'https://www.collaborativedrug.com/buzz/2016/09/27/human-vs-machine-enhanced-scientific-discovery-cdd-webinar-video/'
      },
      {
        date: '12 August 2016',
        topic: 'BD2K-LINCS DCIC Summer Research Projects',
        presenters: 'BD2K-LINCS DCIC Summer Fellows',
        synopsis: 'On the final day of the ten-week research training program, the 2016 BD2K-LINCS DCIC Summer Fellows presented their projects at the ISMMS SURP poster session as well as during a LINCS webinar.',
      },
      {
        date: '28 June 2016',
        topic: 'Systematic Validation of Multiscale Gene Networks using the LINCS Gene Perturbation Data',
        presenters: 'Bin Zhang PhD, Icahn School of Medicine at Mount Sinai',
        synopsis: 'Increasingly available large-scale Omics data has made it possible to construct predictive molecular networks for systematically uncovering novel pathways and targets in biological systems and complex human diseases. However, systematic validation of the predicted network structures and their functions remains a major bottleneck in network biology. In this talk, I will first introduce multiscale network modeling approaches to analyze large Omics data and then highlight how to systematically validate cancer gene networks using the gene perturbation data in LINCS.',
        link:'https://www.youtube.com/watch?v=TnZ8V0rHsTQ'
      },
      {
        date: '24 May 2016',
        topic: 'Detection and Removal of Spatial Bias in Multi-well Assays',
        presenters: 'Alexander Lachmann PhD, Icahn School of Medicine at Mount Sinai',
        synopsis: 'Multiplex readout assays are now increasingly being performed using microfluidic automation in multiwell format. For instance, the Library of Integrated Network-based Cellular Signatures (LINCS) has produced gene expression measurements for tens of thousands of distinct cell perturbations using a 384-well plate format. This dataset is by far the largest 384-well gene expression measurement assay ever performed. We investigated the gene expression profiles of a million samples from the LINCS dataset and found that the vast majority (96%) of the tested plates were affected by a significant 2D spatial bias.',
        link:'https://www.youtube.com/watch?v=kUkS9mQYU5M'
      },
      {
        date: '1 March 2016',
        topic: 'Mutations and Drugs Portal (MDP): A Database Linking Drug Response Data and Genomic Information',
        presenters: 'Silvio Bicciato PhD, University of Modena and Reggio Emilia',
        synopsis:'Genetic alterations arising in cancer cells often generate cancer-specific dependencies that can be exploited as targets of targeted therapies. Indeed, several evidences demonstrate that the integration of large-scale genomic and pharmacological data from cancer cell lines is a successful approach to discover genetic markers of drug sensitivity and to re-purpose known drugs and compounds to new indications in oncology. However, the lack of direct connections between genomic and pharmacological information still makes inherently difficult to query pharmacogenomics databases and extract novel connections. In an attempt to overcome this limit, we designed Mutations and Drug Portal (MDP), a web accessible database that combines the cell-based NCI60 pharmacological screening with genomic data extracted from the Cancer Cell Line Encyclopedia (CCLE). MDP currently contains drug sensitivity data for more than 50,800 compounds, describing response to drugs across 115 cancer cell lines. To identify genomic features associated to drug response, drug sensitivity data are integrated with information on somatic mutations and transcriptional data of cancer cell lines. MDP can be queried for drugs active in cancer cell lines carrying mutations or transcriptional alterations in specific cancer genes and signaling pathways or for genetic and transcriptional profiles associated to sensitivity or resistance to a given compound. Results are returned using graphical and interactive representations. As proof of performance, MDP identified both known and novel pharmacogenomics associations and unveiled an unpredicted combination of two FDA-approved compounds, namely statins and Dasatinib, as an effective strategy to potently inhibit YAP/TAZ in cancer cells. In this web-seminar, I will illustrate MDP architecture and content and its web interface. I will also provide a demonstration on how MDP can be queried for drugs active in cancer cell lines carrying mutations in specific cancer genes or for genetic markers. associated to sensitivity or resistance to a given compound. Finally, I will discuss possible connections between MDP and the data and tools of the L1000 LINCS project.',
        link:'https://www.youtube.com/watch?v=MwrN3hbTnVc'
      },
      {
        date: '10 November 2015',
        topic: 'Combining Phenotypic and Biochemical Screening to Identify Drug Targets',
        presenters: 'Hassan Al-Ali PhD, University of Miami Miller School of Medicine',
        synopsis:'Despite explosive growth in biological data, drug discovery success rates have not increased, and may be decreasing. Comprehensive systems biology models should ultimately enable exact predictions of drug targets, or combinations of targets, that need to be engaged in order to effectively induce therapeutic responses. Given the robustness of biological networks, engaging multiple targets may be a critical requirement for successful therapies. Indeed, approved drugs are constantly being revealed to exert their effects through targets in addition to those previously recognized. While systems biology approaches are improving steadily, their ability to accurately predict effective targets remains a work in progress. To bypass the need for complete network understanding, we used information theory and machine learning to parse and relate data from cellular and biochemical assays. This enabled us to quickly identify drug targets (proteins that should be engaged to produce therapeutic effect) as well as anti-targets (proteins that must not be engaged to avoid counteracting therapeutic effects). Consequently, we were able to identify compounds with beneficial poly-pharmacology; i.e., compounds that engage several targets and do not engage anti-targets. This poly-pharmacology correlated with high efficacy in cell-based models and also in vivo. Thus the approach can help bridge the gap between classical drug discovery and systems biology, accelerate the discovery of new and effective drugs, and assist in the re-positioning of pre-approved drugs.',
        link:'https://www.youtube.com/watch?v=Yg3g895lSBM'
      },
      {
        date: '3 November 2015',
        topic: 'Imputing New LINCS L1000 Drug Signatures',
        presenters: 'Rachel Hodos, Icahn School of Medicine at Mount Sinai',
        synopsis:'',
        link:'https://www.youtube.com/watch?v=jS-6fSYErKA'
      },
      {
        date: '8 September 2015',
        topic: 'Using Machine Learning to Identify Aberrant Pathway Activity',
        presenters: 'Stephen Piccolo PhD, Brigham Young University',
        synopsis:'Although in some cases individual genes or proteins may operate in isolation to influence a biological phenomenon, genes and proteins typically operate in the context of biological pathways. Researchers have access to curated pathway databases, which help to characterize which genes and proteins play a role in a given pathway. Molecular-level data can be mapped to these curated databases to gain a better understanding of the role that the pathways play in a given phenomenon of interest. However, most such methods can only be applied to a single type of molecular data (typically, gene-expression profiles), and few methods explicitly account for interdependencies among variables. We developed a method, Gene Set Omic Analysis, which uses machine-learning algorithms to identify patterns that differ between two sets of biological samples and ranks pathways accordingly to the robustness of these patterns. This method can be applied to any type of omic data that can be mapped to curated pathway databases. This includes gene-expression data, copy-number variations, DNA variants, DNA methylation profiles, etc. It can also be applied to multiple types of omic data simultaneously. In the second part of my talk, I will explain an alternative approach, which uses machine learning to identify patterns in perturbational data and derives predictions of pathway activity for individual samples.',
        link:'https://www.youtube.com/watch?v=baJOSU6Yino'
      },
      {
        date: '25 August 2015',
        topic: 'Drug Repositioning by Integrating Target Information Through a Heterogeneous Network Model',
        presenters: 'Jing Li PhD, Case Western Reserve University',
        synopsis:'The emergence of network medicine not only offers more opportunities for better and more complete understanding of the molecular complexities of diseases, but also serves as a promising tool for identifying new drug targets and establishing new relationships among diseases that enable drug repositioning. Computational approaches for drug repositioning by integrating information from multiple sources and multiple levels have the potential to provide great insights to the complex relationships among drugs, targets, disease genes and diseases at a system level. In this talk, I will present a computational framework based on a heterogeneous network model for drug repositioning by using existing omics data about diseases, drugs and drug targets. The novelty of the framework lies in the fact that the strength between a disease-drug pair is calculated through an iterative algorithm on the heterogeneous graph that also incorporates drug-target information. Comprehensive experimental results show that the approach significantly outperforms several recent approaches. Case studies further illustrate its practical usefulness.',
        link: 'https://www.youtube.com/watch?v=4fL8c9EtNsE'
      },
      {
        date: '11 August 2015',
        topic: 'Biomedical Data Integration Toward Quality Healthcare Delivery',
        presenters: 'Qian Zhu PhD, University of Maryland Baltimore County',
        synopsis:'Traditionally, scientists spend a great deal of time on sifting through large amounts of raw data to find useful information for their research. With the recent advance in computational technologies, computational approaches are being increasingly applied in biomedical, even clinical domain to support biomedical related research and clinical decision making, further improve the quality and efficacy of healthcare. In my talk, I will present the effort made by my group on developing computational medical and clinical applications based on integrative biomedical and clinical data. Specifically, I will primarily describe our effort made on 1) drug discovery and 2) precision medicine.',
        link: 'https://www.youtube.com/watch?v=U81g3BQhAe0'
      },
      {
        date: '23 June 2015',
        topic: 'The Construction of a Cluster Stack Based on Open Source Technologies',
        presenters: 'Matthew Jones, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
        synopsis: 'Deploying applications and services across multiple computers can quickly become a complex operation. In addition, running distributed computing frameworks such as MPI, Hadoop or Spark on those same computers makes it even more challenging. To solve this problem we have combined a number of technologies to produce an operational cluster stack. Our stack is based on the Mesosphere Datacenter Operating System and provides a unified interface for interacting with many machines. In this webinar, we presented a stack built on Apache Mesos that uses Marathon for deploying web apps and other long running services; Docker for packaging dependencies and environments; Hadoop HDFS for storage; Spark for distributed data processing; Cassandra as a big data database; and Chronos for scheduled repetitive jobs. This webinar covered an overview of these technologies, why they are needed, and a brief demonstration on how to use them.',
        link: 'https://www.youtube.com/watch?v=QJPirW-JjQ4'
      },
      {
        date: '16 June 2015',
        topic: 'L1K++: A Fast Pipeline that Increases the Accuracy of L1000 Gene Expression Data',
        presenters: 'Ling-Hong Hung PhD, University of Washington',
        synopsis:'We have developed an alternative data processing pipeline called L1K++ for LINCS L1000 gene expression.  Our key idea in L1K++ is to combine the data from replicates before deconvoluting the two gene expression signals. This increases the accuracy of this step, and of all downstream inferences. Quantile normalization before deconvolution makes this possible. The gene expression signals are then robustly separated by fitting a gaussian mixture model. The pipeline is implemented entirely in C++ and uses linear and constant time algorithms. As a result, it is more than 1000x faster than current pipelines and can generate a complete set of Level 3 data from raw Level 1 data in a matter of hours. We expect that the L1K++ pipeline will result in the generation of more accurate drug signatures and gene networks.',
        link:'https://www.youtube.com/watch?v=jcpEagg1iaQ'
      },
      {
        date: '9 June 2015',
        topic: 'Drug Toxicity Signature Generation Center',
        presenters: 'Eric Sobie PhD, Icahn School of Medicine at Mount Sinai, DToxS',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=85xfd9YS3vQ'
      },
      {
        date: '26 May 2015',
        topic: 'Integrative Analysis of Proteomics Data of Multi-Layered Post Translational Modifications Collected from Human Lung Cancer Cell Lines',
        presenters: 'Peter Hornbeck PhD, Klarisa Rikova, Mark Grimes PhD (Cell Signaling Technology Inc.) and Neil Clark PhD, Nicolas Fernandez PhD (Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC)',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=HQxincOIqNM'
      },
      {
        date: '5 May 2015',
        topic: 'Assessing the Global Dimensionality of LINCS Signatures',
        presenters: 'Neil Clark PhD, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
        synopsis: 'With the advent of Big Data, the scalability of statistical methods has come to the forefront. By reducing large high-dimensional data sets to their intrinsic dimension many practical problems of data storage and handling, and computational expense of large-scale analysis are greatly alleviated. An example of one approach to this is to find a regularized, low-rank approximation to the data matrix; we show, as an example, that such a representation leads to faster computation time and higher accuracy when building a logistic regression classifier to predict the perturbing drug in L1000 LINCS data. This suggests that the low-rank approximation leads to cleaner perturbation signatures.  We provide further examples using LINCS Post Translational modification data from Cell Signaling. Furthermore, we describe a sample-size scaling approach to estimating the intrinsic dimensionality of high-dimensional data, and demonstrate the principal with an example from TCGA breast cancer gene expression profiles. This approach would not only allow optimal dimensionality reduction, but could also be used to extrapolate the sample size required to explore the space of perturbations.',
        link: 'https://www.youtube.com/watch?v=8s3HYdVlEoM'
      },
      {
        date: '21 April 2015',
        topic: 'Target Predictions using LINCS Perturbation Data',
        presenters: 'Yan Xia, Carnegie Mellon University',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=afz36W6G7iE'
      },
      {
        date: '14 April 2015',
        topic: 'Prediction of Adverse Events for LINCS Drugs using L1000 Gene Expression Data, Cell Morphology Profiles and Chemical Structure Features',
        presenters: 'Zichen Wang, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
        synopsis: $sce.trustAsHtml('<strong>Synopsis:</strong> Adverse-events are unintended and undesirable therapeutic response to drugs. Adverse-events are a major public health concern as well as a significant barrier in the drug development process. Failure to detect adverse-events for drugs before they are marketed can lead to substantial patient morbidity. Many efforts have been made to predict adverse-events using chemical and biological features of drugs, whereas the integration of features from chemical and biological origin has proven to improve adverse-events predictability. However, until recently, biological features about the properties of drugs are often limited to the known therapeutic targets of the drugs, or data from specific low-content assays. In contrast, for this study, we used gene expression responses and cell-morphology profiles measured in cell lines upon drug treatment. To predict adverse event we utilized the LINCS L1000 dataset and the Molecular Libraries Probe Production Centers Network (MLPCN) dataset as features to predict side adverse events. Additionally, we extracted features from the chemical structure of the drugs and combined these features with the expression and imaging features to better predict adverse events. First, we converted the LINCS L1000 gene expression profiles of drug treatments to Characteristic Directions in gene expression space to train a k-Nearest Neighbor classifier to predict adverse events. This method alone is already highly predictive (AUROC=0.892). We then combined the matrix derived from processing the gene expression L1000 data, with cell-morphology profiling data, and features extracted from the chemical structure of the drugs to train a multi-label classifier to predict drug adverse events. We found that combining multiple features using ensemble methods is able to achieve even better predictability. The predictive model was applied to all (~20,000) LINCS small molecule compounds profiled in by both L1000 LINCS and MLPCN projects and the results are delivered in an interactive freely available web-site at: <a href="http://www.maayanlab.net/SEP-L1000" target="_blank">http://www.maayanlab.net/SEP-L1000</a>.'),
        link: 'https://www.youtube.com/watch?v=EHUAU05O0kQ',
        isHtml: true
      },
      {
        date: '10 March 2015',
        topic: 'Transcriptional Landscape of Drug Response Guides the Design of Specific and Potent Drug Combinations',
        presenters: 'Marc Hafner PhD, Harvard Medical School, HMS LINCS',
        synopsis: 'Characterizing the molecular effects of targeted therapies is an important step towards understanding and predicting drug efficacy in cancer. In this work, we used the L1000 assay to measure the transcriptional response of six breast cancer cell lines to more than 100 different targeted drugs. We focused on inhibitors targeting the most important signaling kinases such as PI3K, AKT or MAPK, as well as receptor tyrosine kinases (RTKs) and cyclin-dependent kinases (CDKs). With two time points and six doses, the dataset contains more than 8000 unique perturbations.',
        link: 'https://www.youtube.com/watch?v=kdKk3jHUR9c'
      },
      {
        date: '24 February 2015',
        topic: 'Leveraging Experimental Models to Advance our Understanding of Cancer',
        presenters: 'Laura Heiser PhD, Oregon Health and Science University, MEP LINCS',
        synopsis: 'We and others have suggested the use of in vitro cell line panels to study the biological underpinnings of cancer and to test hypotheses that arise from studies of primary data. Specifically, we have used a collection of ~70 well characterized breast cancer cell lines to assess gene function and to identify mechanisms of response and resistance to therapeutic compounds. This set of molecular profiling data constitutes one of the most complete "omics" resources available in the public domain and includes assessments of gene expression, copy number, mutations, protein abundance, and response to therapy. Comparison of the genomic and epigenomic features of the cell lines with those measured for primary tumors by The Cancer Genome Atlas (TCGA) and others showed that the cell lines mirror many aspects of "omic" diversity in primary tumors. Cell line and tumor similarities include: (a) recurrent copy number changes and mutations (b) basal, claudin-low and luminal breast cancer subtypes, and (c) pathway activity. Analysis of correlations between drug sensitivity to 77 therapeutic compounds revealed that approximately 30% are associated with subtype or genome copy number aberration. Finally, we have used various statistical and machine learning approaches to identify integrated predictive signatures of sensitivity for ~50% of compounds in our cell line panel. These data and observations were the basis for a community-wide effort to identify biomarkers of drug sensitivity in the NCI-DREAM Drug Sensitivity Challenge that culminated in the robust identification of a novel machine learning algorithm for predicting drug response from molecular profiling data. This body of work has demonstrated the utility of in vitro model systems, identified biomarkers of drug sensitivity for clinically relevant compounds, and identified concrete approaches and considerations for advancing work in this domain.',
        link: 'https://www.youtube.com/watch?v=9KM7inVCLoc'
      },
      {
        date: '17 February 2015',
        topic: 'Discussion of Causes for Some Artifacts Observed in L1000 Data',
        presenters: 'William Chad Young, University of Washington',
        synopsis: 'Chad Young examines the relationships between Level 3 expression level measurements for pairs of genes probed by the "same color" beads. He shows that in some situations the deconvolution algorithm produces misleading expression levels, In some situations, plate-level normalization helps in some it does not. Possibility that observed patterns represent underlying biology was suggested by audience and discussed, as well as alternative strategies for systematically identifying artifacts and benchmarking of such alternative strategies.',
        link: 'https://www.youtube.com/watch?v=d-E_siojRg4'
      },
      {
        date: '16 December 2014',
        topic: 'Large-scale Integration of Small Molecule-induced Reponses in Diverse LINCS Datasets',
        presenters: 'Dusica Vidovic PhD, University of Miami, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=TKPSqRrtd6I'
      },
      {
        date: '9 December 2014',
        topic: 'Analysis of Lung Cancers Across Multiple Signaling Spaces to Identify New Disease Drivers and Network Connectivity',
        presenters: 'Peter Hornbeck PhD, Cell Signaling Technology Inc.',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=mgud2LcCdVY'
      },
      {
        date: '2 December 2014',
        topic: 'Explaining Artifacts in Level 3 L1000 Data | Benchmarking Perturbation Signatures',
        presenters: 'Mario Medvedovic PhD, University of Cincinnati, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=eEIXm5rpo-E'
      },
      {
        date: '18 Nov 2014',
        topic: 'Creating Signatures from the ENCODE Data',
        presenters: 'Yan Kou, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=HjDakxNoFCE'
      },
      {
        date: '18 Nov 2014',
        topic: 'Issues in Level 3 L1000 Data',
        presenters: 'William Chad Young, University of Washington',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=-tActS2zkEU'
      },
      {
        date: '28 October 2014',
        topic: 'LINCS L1000 Analysis with the Characteristic Direction Method',
        presenters: 'Qiaonan Duan, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=6rkqn6sqmBI'
      },
      {
        date: '21 October 2014',
        topic: 'L1000 Indexing Process',
        presenters: 'Amar Koleti, University of Miami, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=ncaSK0y36ck'
      },
      {
        date: '14 October 2014',
        topic: 'L1000 Data Access and Processing',
        presenters: 'Mario Medvedovic PhD, University of Cincinnati, BD2K-LINCS DCIC',
        synopsis: '',
        link: 'https://www.youtube.com/watch?v=3ww9Bnhv1c4'
      }
    ];
  }
]);
