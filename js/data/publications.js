var mod = angular.module("publicationsMod", []);

mod.controller("publicationsCtrl", ["$scope", function ($scope) {
    $scope.publications = [
	  {
	  title: "GPR84: an immune response dial?",
          url: "https://www.nature.com/articles/d41573-020-00029-9",
          authors: "Wojciechowicz ML, Ma'ayan A.",
          citation: "Nature Reviews Drug Discovery 2020 Feb 20.",
          ids: "doi: 10.1038/d41573-020-00029-9",
          year: 2020
          },
	  {
	  title: "Dermal sheath contraction powers stem cell niche relocation during hair cycle regression",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31857493",
          authors: "Heitman N, Sennett R, Mok KW, Saxena N, Srivastava D, Martino P, Grisanti L, Wang Z, Ma'ayan A, Rompolas P, Rendl M.",
          citation: "Science 2020 Jan 10;367(6474):161-166.",
          ids: "PMID: 31857493",
          year: 2020
          },
	  {
	  title: "FAIRshake: Toolkit to evaluate the FAIRness of research digital resources",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31677972",
          authors: "Clarke DJB, Wang L, Jones A, Wojciechowicz ML, Torre D, Jagodnik KM, Jenkins SL, McQuilton P, Flamholz Z, Silverstein MC, Schilder BM, Robasky K, Castillo C, Idaszak R, Ahalt SC, Williams J, Schurer S, Cooper DJ, de Miranda Azevedo R, Klenk JA, Haendel MA, Nedzel J, Avillach P, Shimoyama ME, Harris RM, Gamble M, Poten R, Charbonneau AL, Larkin J, Brown CT, Bonazzi VR, Dumontier MJ, Sansone SA, Ma'ayan A.",
          citation: "Cell Systems 2019 Nov 27;9(5):417-421.",
          ids: "PMID: 31677972",
          year: 2019
          }, 
	  {
	  title: "LINCS Data Portal 2.0: next generation access point for perturbation-response signatures",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31701147",
          authors: "Stathias V, Turner J, Koleti A, Vidovic D, Cooper D, Fazel-Najafabadi M, Pilarczyk M, Terryn R, Chung C, Umeano A, Clarke DJB, Lachmann A, Evangelista JE, Ma'ayan A, Medvedovic M, Schurer SC.",
          citation: "Nucleic Acids Research 2019 Nov 8 pii: gkz1023.",
          ids: "PMID: 31701147",
          year: 2019
          },
	  {
	  title: "Connecting omics signatures of diseases, drugs, and mechanisms of actions with iLINCS",
          url: "https://www.biorxiv.org/content/10.1101/826271v1",
          authors: "Pilarczyk M, Najafabadi MF, Kouril M, Vasiliauskas J, Niu W, Shamsaei B, Mahi N, Zhang L, Clark N, Ren Y, White S, Karim R, Xu H, Biesiada J, Bennet MF, Davidson S, Reichard JF, Stathias V, Koleti A, Vidovic D, Clark DJB, Schurer S, Ma’ayan A, Meller J, Medvedovic M.",
          citation: "bioRxiv (2019): 826271.",
          ids: "bioRxiv: 826271",
          year: 2019
	  },
	  {
	  title: "The Signaling Pathways Project, an integrated 'omics knowledgebase for mammalian cellular signaling pathways",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31672983",
          authors: "Ochsner SA, Abraham D, Martin K, Ding W, McOwiti A, Kankanamge W, Wang Z, Andreano K, Hamilton RA, Chen Y, Hamilton A, Gantner ML, Dehart M, Qu S, Hilsenbeck SG, Becnel LB, Bridges D, Ma'ayan A, Huss JM, Stossi F, Foulds CE, Kralli A, McDonnell DP, McKenna NJ.",
          citation: "Scientific Data 2019 Oct 31;6(1):252.",
          ids: "PMID: 31672983",
          year: 2019
          },  
	  {
	  title: "Habenular TCF7L2 links nicotine addiction to diabetes",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31619789",
          authors: "Fernandez DM, Rahman AH, Fernandez NF, Chudnovskiy A, Amir ED, Amadori L, Khan NS, Wong CK, Shamailova R, Hill CA, Wang Z, Remark R, Li JR, Pina C, Faries C, Awad AJ, Moss N, Bjorkegren JLM, Kim-Schulze S, Gnjatic S, Ma'ayan A, Mocco J, Faries P, Merad M, Giannarelli C.",
          citation: "Nature 2019 Oct;574(7778):372-377.",
          ids: "PMID: 31619789",
          year: 2019
          }, 
	  {
	  title: "Single-cell immune landscape of human atherosclerotic plaques",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31591603",
          authors: "Fernandez DM, Rahman AH, Fernandez NF, Chudnovskiy A, Amir ED, Amadori L, Khan NS, Wong CK, Shamailova R, Hill CA, Wang Z, Remark R, Li JR, Pina C, Faries C, Awad AJ, Moss N, Bjorkegren JLM, Kim-Schulze S, Gnjatic S, Ma'ayan A, Mocco J, Faries P, Merad M, Giannarelli C.",
          citation: "Nature Medicine 2019 Oct;25(10):1576-1588.",
          ids: "PMID: 31591603",
          year: 2019
          }, 
	  {
	  title: "Building containerized workflows using the BioDepot-workflow-builder",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31521606",
          authors: "Hung LH, Hu J, Meiss T, Ingersoll A, Lloyd W, Kristiyanto D, Xiong Y, Sobie E, Yeung KY.",
          citation: "Cell Systems 2019 Sep 6. pii: S2405-4712(19)30276-5.",
          ids: "PMID: 31521606",
          year: 2019
          },   
	  {
	  title: "Connectivity mapping: methods and applications",
          url: "https://www.annualreviews.org/doi/full/10.1146/annurev-biodatasci-072018-021211",
          authors: "Keenan AB, Wojciechowicz ML, Wang Z, Jagodnik KM, Jenkins SL, Lachmann A, Ma'ayan A.",
          citation: "Annual Review of Biomedical Data Science 2019 Jul 2:1, 69-92.",
          ids: "10.1146/annurev-biodatasci-072018-021211",
          year: 2019
          }, 
	  {
	  title: "A multi-center study on the reproducibility of drug-response assays in mammalian cell lines",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31302153",
          authors: "Niepel M, Hafner M, Mills CE, Subramanian K, Williams EH, Chung M, Gaudio B, Barrette AM, Stern AD, Hu B, Korkola JE; LINCS Consortium, Gray JW, Birtwistle MR, Heiser LM, Sorger PK.",
          citation: "Cell Systems 2019 Jul 24;9(1):35-48.e5.",
          ids: "PMID: 31302153 | PMCID: PMC6700527",
          year: 2019
          }, 
	   {
	  title: "PKMYT1 is a computationally predicted target for kidney cancer",
          url: "https://www.biorxiv.org/content/10.1101/677245v1?versioned=true",
          authors: "Torre D, Fernandez N, Ma'ayan A.",
          citation: "bioRxiv (2019): 677245.",
          ids: "bioRxiv: 677245",
          year: 2019
	  },  
	  {
          title: "ChEA3: transcription factor enrichment analysis by orthogonal omics integration",
          url: "https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkz446/5494769",
          authors: "Keenan AB, Torre D, Lachmann A, Leong AK, Wojciechowicz ML, Utti V, Jagodnik KM, Kropiwnicki E, Wang Z, Ma'ayan A.",
          citation: "Nucleic Acids Research 2019 May 22;pii: gkz446.",
          ids: "PMID: 31114921",
          year: 2019
          }, 
	  {
          title: "Geneshot: search engine for ranking genes from arbitrary text queries",
          url: "https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkz393/5494749",
          authors: "Lachmann A, Schilder BM, Wojciechowicz ML, Torre D, Kuleshov MV, Keenan AB, Ma'ayan A.",
          citation: "Nucleic Acids Research 2019 May 22;pii: gkz393.",
          ids: "PMID: 31114921",
          year: 2019
          },
	  {
          title: "GREIN: An interactive web platform for re-analyzing GEO RNA-seq data",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31110304",
          authors: "Mahi NA, Najafabadi MF, Pilarczyk M, Kouril M, Medvedovic M.",
          citation: "Scientific Reports 2019 May 20;9(1):7580.",
          ids: "PMID: 31110304 | PMCID: 31110304",
          year: 2019
          }, 
	  {
          title: "modEnrichr: a suite of gene set enrichment analysis tools for model organisms",
          url: "https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkz347/5487261",
          authors: "Kuleshov MV, Diaz JEL, Flamholz ZN, Keenan AB, Lachmann A, Wojciechowicz ML, Cagan RL, Ma'ayan A.",
          citation: "Nucleic Acids Research 2019 May 9;pii: gkz347.",
          ids: "PMID: 31069376",
          year: 2019
          }, 
	  {
          title: "Engineering a haematopoietic stem cell niche by revitalizing mesenchymal stromal cells",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30988422",
          authors: "Nakahara F, Borger DK, Wei Q, Pinho S, Maryanovich M, Zahalka AH, Suzuki M, Cruz CD, Wang Z, Xu C, Boulais PE, Ma'ayan A, Greally JM, Frenette PS.",
          citation: "Nature Cell Biology 2019 May;21(5):560-567.",
          ids: "PMID: 30988422 | PMCID: PMC6499646 ",
          year: 2019
          },
	  {
          title: "Cheminformatics tools for analyzing and designing optimized small-molecule collections and libraries",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30956147",
          authors: "Moret N, Clark NA, Hafner M, Wang Y, Lounkine E, Medvedovic M, Wang J, Gray N, Jenkins J, Sorger PK.",
          citation: "Cell Chemical Biology 2019 May;26(5):765-777.",
          ids: "PMID: 30956147 | PMCID: PMC6526536",
          year: 2019
          },
	  {
          title: "OSCI: standardized stem cell ontology representation and use cases for stem cell investigation",
          url: "http://dx.doi.org/10.1186/s12859-019-2723-7",
          authors: "He Y, Duncan W, Cooper DJ, Hansen J, Iyengar R, Ong E, Walker K, Tini O, Smith S, Serra LM, Zheng J, Sarntivijai S, Schurer S, O'Shea KS, Diehl AD.",
          citation: "BMC Bioinformatics 2019 April 25;20(5):2723.",
          ids: "",
          year: 2019
          },
	  {
          title: "Improving the utility of the Tox21 dataset by deep metadata annotations and constructing reusable benchmarked chemical reference signatures",
          url: "https://www.mdpi.com/1420-3049/24/8/1604",
          authors: "Cooper DJ, Schurer S.",
          citation: "Molecules 2019 April 23;24(8)1604.",
          ids: "PMID: 31018579 | PMCID: PMC6515292",
          year: 2019
          },
	  {
          title: "piNET: a versatile web platform for downstream analysis and visualization of proteomics data",
          url: "http://dx.doi.org/10.1101/607432",
          authors: "Shamsaei B, Chojnacki S, Pilarczyk M, Najafabadi M, Chen C, Ross K, Matlock A, Muhlich J, Chutipongtanate S, Vidovic D, Sharma V, Vasiliauskas J, Jaffe J, MacCoss M, Wu C, Pillai A, Ma'ayan A, Schurer S, Medvedovic M, Meller J.",
          citation: "bioRxiv (2019): 607432.",
          ids: "bioRxiv: 607432",
          year: 2019
          },   
	  {
          title: "Drug Gene Budger (DGB): An application for ranking drugs to modulate a specific gene based on transcriptomic signatures",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30169739",
          authors: "Wang Z, He E, Sani K, Jagodnik KM, Silverstein M, Ma'ayan A.",
          citation: "Bioinformatics 2019 Apr 1;35(7):1247-1248.",
          ids: "PMID: 30169739 | PMCID: PMC6449747",
          year: 2019
          },
	  {
          title: "Integration of multiple data sources for gene network inference using genetic perturbation data",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/31009236",
          authors: "Liang X, Young WC, Hung LH, Raftery AE, Yeung KY.",
          citation: "Journal of Computational Biology 2019 Apr.",
          ids: "PMID: 31009236",
          year: 2019
          },
	  {
          title: "Novel curcumin inspired bis-chalcone promotes endoplasmic reticulum stress and glioblastoma neurosphere cell death",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30871215",
          authors: "Sansalone L, Veliz EA, Myrthil NG, Stathias V, Walters W, Torrens II, Schurer SC, Vanni S, Leblanc RM, Graham RM.",
          citation: "Cancers 2019 Mar 13;11(3):pii: E357.",
          ids: "PMID: 30871215 | PMCID: PMC6468769",
          year: 2019
          },
	  {
          title: "How to develop a drug target ontology: KNowledge Acquisition and Representation Methodology (KNARM)",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30848456",
          authors: "Kuçuk McGinty H, Visser U, Schurer S.",
          citation: "Methods in Molecular Biology 2019 Mar 9;1939:49-69.",
          ids: "PMID: 30848456",
          year: 2019
          }, 
	  {
          title: "Mining data and metadata from the gene expression omnibus",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30594974",
          authors: "Wang Z, Lachmann A, Ma'ayan A.",
          citation: "Biophysical Reviews 2019 Feb;11(1):103-110.",
          ids: "PMID: 30594974 | PMCID: PMC6381352",
          year: 2019
          },   
	  {
          title: "Predicting opioid dependence from electronic health records with machine learning",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30728857",
          authors: "Ellis RJ, Wang Z, Genes N, Ma'ayan A.",
          citation: "BioData Mining 2019 Jan 29;12:3.",
          ids: "PMID: 30728857 | PMCID: PMC6352440",
          year: 2019
          },
	  {
          title: "Mechanical regulation of gene expression in cardiac myocytes and fibroblasts",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30683889",
          authors: "Saucerman JJ, Tan PM, Buchholz KS, McCulloch AD, Omens JH.",
          citation: "Nature Reviews. Cardiology Jan 25.",
          ids: "PMID: 30683889",
          year: 2019
          }, 
	  {
          title: "Dermal condensate niche fate specification occurs prior to formation and is placode progenitor dependent",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30595537",
          authors: "Mok KW, Saxena N, Heitman N, Grisanti L, Srivastava D, Muraro MJ, Jacob T, Sennett R, Wang Z, Su Y, Yang LM, Ma'ayan A, Ornitz DM, Kasper M, Rendl M.",
          citation: "Developmental Cell 2019 Jan 7;48(1):32-48.e5.",
          ids: "PMID: 30595537 | PMCID: PMC6370312",
          year: 2019
          }, 
	  {
          title: "Drug and disease signature integration identifies synergistic combinations in glioblastoma",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30552330",
          authors: "Stathias V, Jermakowicz AM, Maloof ME, Forlin M, Walters W, Suter RK, Durante MA, Williams SL, Harbour JW, Volmar CH, Lyons NJ, Wahlestedt C, Graham RM, Ivan ME, Komotar RJ, Sarkaria JN, Subramanian A, Golub TR, Schurer SC, Ayad NG.",
          citation: "Nature Communications 2018 Dec 14;9(1):5315.",
          ids: "PMID: 30552330 | PMCID: PMC6294341",
          year: 2018
          },
	   {
          title: "Temporal proteomic profiling of postnatal human cortical development",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30518843",
          authors: "Breen MS, Ozcan S, Ramsey JM, Wang Z, Ma'ayan A, Rustogi N, Gottschalk MG, Webster MJ, Weickert CS, Buxbaum JD, Bahn S.",
          citation: "Translational Psychiatry 2018 Dec 5;8(1):267.",
          ids: "PMID: 30518843 | PMCID: PMC6281671",
          year: 2018
          }, 
	  {
          title: "Cooperative transcription factor induction mediates hemogenic reprogramming",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30517869",
          authors: "Gomes AM, Kurochkin I, Chang B, Daniel M, Law K, Satija N, Lachmann A, Wang Z, Ferreira L, Ma'ayan A, Chen BK, Papatsenko D, Lemischka IR, Moore KA, Pereira CF.",
          citation: "Cell Reports 2018 Dec 4;25(10):2821-2835.e7.",
          ids: "PMID: 30517869",
          year: 2018
          }, 
	 {
          title: "BioJupies: Automated generation of interactive notebooks for RNA-seq data analysis in the cloud",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30447998",
          authors: "Torre D, Lachmann A, Ma'ayan A.",
          citation: "Cell Systems 2018 Nov 28;7(5):556-561.e3.",
          ids: "PMID: 30447998 | PMCID: PMC6265050",
          year: 2018
          }, 
	  {
          title: "Podocyte-specific induction of Krüppel-like factor 15 restores differentiation markers and attenuates kidney injury in proteinuric kidney disease",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30143559",
          authors: "Guo Y, Pace J, Li Z, Ma'ayan A, Wang Z, Revelo MP, Chen E, Gu X, Attalah A, Yang Y, Estrada C, Yang VW, He JC, Mallipattu SK.",
          citation: "Journal of the American Society of Nephrology 2018 Oct;29(10):2529-2545.",
          ids: "PMID: 30143559 | PMCID: PMC6171275",
          year: 2018
          },
	  {
          title: "Polypharmacology or promiscuity? Structural interactions of resveratrol with its bandwagon of targets",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30405416",
          authors: "Saqib U, Kelley TT, Panguluri SK, Liu D, Savai R, Baig MS, Schurer SC.",
          citation: "Frontiers in Pharmacology 2018 Oct;9:1201.",
          ids: "PMID: 30405416 | PMCID: PMC6207623",
          year: 2018
          }, 
	  {
          title: "SIRT6 haploinsufficiency induces BRAFV600E melanoma cell resistance to MAPK inhibitors via IGF signalling",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30143629",
          authors: "Strub T, Ghiraldini FG, Carcamo S, Li M, Wroblewska A, Singh R, Goldberg MS, Hasson D, Wang Z, Gallagher SJ, Hersey P, Ma'ayan A, Long GV, Scolyer RA, Brown B, Zheng B, Bernstein E.",
          citation: "Nature Communications 2018 Aug 24;9(1):3440.",
          ids: "PMID: 30143629 | PMCID: PMC6109055",
          year: 2018
          },
	  {
          title: "eXpression2Kinases (X2K) Web: linking expression signatures to upstream cell signaling networks",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29800326",
          authors: "Clarke DJB, Kuleshov MV, Schilder BM, Torre D, Duffy ME, Keenan AB, Lachmann A, Feldmann AS, Gundersen GW, Silverstein MC, Wang Z, Ma'ayan A.",
          citation: "Nucleic Acids Research 2018 Jul 2;46(W1):W171-W179.",
          ids: "PMID: 29800326 | PMCID: PMC6030863",
          year: 2018
          },
	  {
          title: "Endothelial cells instruct liver specification of embryonic stem cell-derived endoderm through endothelial VEGFR2 signaling and endoderm epigenetic modifications",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29936335",
          authors: "Han S, Tan C, Ding J, Wang J, Ma'ayan A, Gouon-Evans V.",
          citation: "Stem Cell Research 2018 Jul;30:163-170.",
          ids: "PMID: 29936335",
          year: 2018
          },
	  {
	  title: "Bayesian Additive Regression Trees using Bayesian Model Averaging",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30449953",
          authors: "Hernandez B, Raftery AE, Pennington SR, Parnell AC.",
          citation: "Statistics and Computing 2018 Jul;28(4):869-890.",
          ids: "PMID: 30449953 | PMCID: PMC6238959 ",
          year: 2018
          }, 
	  {
          title: "Sustainable data and metadata management at the BD2K-LINCS Data Coordination and Integration Center",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29917015",
          authors: "Stathias V, Koleti A, Vidovic D, Cooper DJ, Jagodnik KM, Terryn R, Forlin M, Chung C, Torre D, Ayad N, Medvedovic M, Ma'ayan A, Pillai A, Schurer SC.",
          citation: "Scientific Data 2018 Jun 19;5:180117.",
          ids: "PMID: 29917015 | PMCID: PMC6007090",
          year: 2018
         },
	   {
          title: "L1000FWD: Fireworks visualization of drug-induced transcriptomic signatures",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29420694",
          authors: "Wang Z, Lachmann A, Keenan AB, Ma'ayan A.",
          citation: "Bioinformatics 2018 Jun 15;34(12):2150-2152.",
          ids: "PMID: 29420694 | PMCID: PMC6454499 ",
          year: 2018
         }, 
	  {
          title: "CARM1 is essential for myeloid leukemogenesis but dispensable for normal hematopoiesis",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29894694",
          authors: "Greenblatt SM, Man N, Hamard PJ, Asai T, Karl D, Martinez C, Bilbao D, Stathias V, Jermakowicz AM, Duffort S, Tadi M, Blumenthal E, Newman S, Vu L, Xu Y, Liu F, Schurer SC, McCabe MT, Kruger RG, Xu M, Yang FC, Tenen DG, Watts J, Vega F, Nimer SD.",
          citation: "Cancer Cell 2018 Jun 8 11;33(6):1111-1127.e5.",
          ids: "PMID: 29894694 | PMCID: PMC6191185",
          year: 2018
          }, 
	  {
          title: "Integration of protein phosphorylation, acetylation, and methylation data sets to outline lung cancer signaling networks",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29789295",
          authors: "Grimes M, Hall B, Foltz L, Levy T, Rikova K, Gaiser J, Cook W, Smirnova E, Wheeler T, Clark NR, Lachmann A, Zhang B, Hornbeck P, Ma'ayan A, Comb M.",
          citation: "Science Signaling 2018 May 22;11(531) pii: eaaq1087.",
          ids: "PMID: 29800326",
          year: 2018
         }, 
	 {
          title: "Massive mining of publicly available RNA-seq data from human and mouse",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29636450",
          authors: "Lachmann A, Torre D, Keenan AB, Jagodnik KM, Lee HJ, Wang L, Silverstein MC, Ma'ayan A.",
          citation: "Nature Communications 2018 Apr 10;9(1):1366.",
          ids: "PMID: 29636450 | PMCID: PMC5893633",
          year: 2018
         }, 
	 {
          title: "clustvarsel: A package implementing variable selection for Gaussian model-based clustering in R",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/30450020",
          authors: "Scrucca l, Raftery A.",
          citation: "Journal of Statistical Sofwtare 2018 Apr.",
          ids: "PMID: 30450020 | PMCID: PMC6238955",
          year: 2018
         }, 
	 {
          title: "Datasets2Tools, repository and search engine for bioinformatics datasets, tools and canned analyses",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29485625",
          authors: "Torre D, Krawczuk P, Jagodnik KM, Lachmann A, Wang Z, Wang L, Kuleshov MV, Ma'ayan A.",
          citation: "Scientific Data 2018 Feb 27;5:180023.",
          ids: "PMID: 29485625 | PMCID: PMC5827688",
          year: 2018
         }, 
	 {
          title: "The Library of Integrated Network-Based Cellular Signatures NIH program: System-level cataloging of human cells response to perturbations",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29199020",
          authors: "Keenan AB, Jenkins SL, Jagodnik KM, Koplev S, He E, Torre D, Wang Z, Dohlman AB, Silverstein MC, Lachmann A, Kuleshov MV, Ma'ayan A, Stathias V, Terryn R, Cooper D, Forlin M, Koleti A, Vidovic D, Chung C, Schurer SC, Vasiliauskas J, Pilarczyk M, Shamsaei B, Fazel M, Ren Y, Niu W, Clark NA, White S, Mahi N, Zhang L, Kouril M, Reichard JF, Sivaganesan S, Medvedovic M, Meller J, et al.",
          citation: "Cell Systems 2018 Jan 24;6(1):13-24.",
          ids: "PMID: 29199020 | PMCID: PMC5799026",
          year: 2018
         },
	  {
          title: "Data Portal for the Library of Integrated Network-based Cellular Signatures (LINCS) program: integrated access to diverse large-scale cellular perturbation response data",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29140462",
          authors: "Koleti A, Terryn R, Stathias V, Chung C, Cooper DJ, Turner JP, Vidovic D, Forlin M, Kelley TT, D'Urso A, Allen BK, Torre D, Jagodnik KM, Wang L, Jenkins SL, Mader C, Niu W, Fazel M, Mahi N, Pilarczyk M, Clark N, Shamsaei B, Meller J, Vasiliauskas J, Reichard J, Medvedovic M, Ma'ayan A, Pillai A, Schurer SC.",
          citation: "Nucleic Acids Research 2018 Jan 4;46(D1):D558-D566.",
          ids: "PMID: 29140462 | PMCID: PMC5753343",
          year: 2018
         },
	 {
          title: "Integration of pan-cancer transcriptomics with RPPA proteomics reveals mechanisms of epithelial-mesenchymal transition",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29293502",
          authors: "Koplev S, Lin K, Dohlman AB, Ma'ayan A.",
          citation: "PLoS Computational Biology 2018 Jan 2;14(1):e1005911.",
          ids: "PMID: 29293502 | PMCID: PMC5766255",
          year: 2018
          }, 
	  {
          title: "Reproducible Bioconductor workflows using browser-based interactive notebooks and containers",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29092073",
          authors: "Almugbel R, Hung LH, Hu J, Almutairy A, Ortogero N, Tamta Y, Yeung KY.",
          citation: "Journal of the American Medical Informatics Assocation 2018 Jan 1;25(1):4-12.",
          ids: "PMID: 29092073 | PMCID: PMC6381817",
          year: 2018
      },      
	 {
          title: "Cell-specific prediction and application of drug-induced gene expression profiles",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29218867",
          authors: "Hodos R, Zhang P, Lee HC, Duan Q, Wang Z, Clark NR, Ma'ayan A, Wang F, Kidd B, Hu J, Sontag D, Dudley J.",
          citation: "Pacific Symposium on Biocomputing 2018;23:32-43.",
          ids: "PMID: 29218867 | PMCID: PMC5753597",
          year: 2018
      },
          {
          title: "Ontological representation, integration, and analysis of LINCS cell line cells and their cellular responses",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29322930",
          authors: "Ong E, Xie J, Ni Z, Liu Q, Sarntivijai S, Lin Y, Cooper D, Terryn R, Stathias V, Chung C, Schürer S, He Y.",
          citation: "BMC Bioinformatics 2017 Dec 21;18(Suppl 17):556.",
          ids: "PMID: 29322930 | PMCID: PMC5763302",
          year: 2017
          },
      {
          title: "Cells in experimental life sciences - challenges and solution to the rapid evolution of knowledge",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29322916",
          authors: "Sarntivijai S, Diehl AD, He Y.",
          citation: "BMC Bioinformatics 2017 Dec 21;18(Suppl 17):560.",
          ids: "PMID: 29322916 | PMCID: PMC5763506",
          year: 2017
      },
      {
          title: "Comparison, alignment, and synchronization of cell line information between CLO and EFO",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29322915",
          authors: "Ong E, Sarntivijai S, Jupp S, Parkinson H, He Y.",
          citation: "BMC Bioinformatics 2017 Dec 21;18(Suppl 17):557.",
          ids: "PMID: 29322915 | PMCID: PMC5763470",
          year: 2017
      },
      {
          title: "Predicting age by mining electronic medical records with deep learning characterizes differences between chronological and physiological age",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29113935",
          authors: "Wang Z, Li L, Glicksberg BS, Israel A, Dudley JT, Ma'ayan A.",
          citation: "Journal of Biomedical Informatics 2017 Nov 4. pii: S1532-0464(17)30240-X.",
          ids: "PMID: 29113935 | PMCID: PMC5716867",
          year: 2017
      },
      {
          title: "Transcriptomic analysis uncovers novel synergistic mechanisms in combination therapy for lupus nephritis",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29102373",
          authors: "Fu J, Wang Z, Lee K, Wei C, Liu Z, Zhang M, Zhou M, Cai M, Zhang W, Chuang PY, Ma'ayan A, He JC, Liu Z.",
          citation: "Kidney International 2017 Nov 1 pii: S0085-2538(17)30671-3.",
          ids: "PMID: 29102373",
          year: 2017
      },
      {
          title: "Common and cell-type specific responses to anti-cancer drugs revealed by high throughput transcript profiling",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29084964",
          authors: "Niepel M, Hafner M, Duan Q, Wang Z, Paull EO, Chung M, Lu X, Stuart JM, Golub TR, Subramanian A, Ma'ayan A, Sorger PK.",
          citation: "Nature Communications 2017 Oct 30;8(1):1186.",
          ids: "PMID: 29084964 | PMCID: PMC5662764",
          year: 2017
      }, 
       {
          title: "GRcalculator: an online tool for calculating and mining dose-response data",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29065900",
          authors: "Clark NA, Hafner M, Kouril M, Williams EH, Muhlich JL, Pilarczyk M, Niepel M, Sorger PK, Medvedovic M.",
          citation: "BMC Cancer 2017 Oct 24;17(1):698.",
          ids: "PMID: 29065900 | PMCID: PMC5655815",
          year: 2017
      }, 
      {
          title: "Clustergrammer, a web-based heatmap visualization and analysis tool for high-dimensional biological data",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28994825",
          authors: "Fernandez NF, Gundersen GW, Rahman A, Grimes ML, Rikova K, Hornbeck P, Ma'ayan A.",
          citation: "Scientific Data 2017 Oct 10;4:170151.",
          ids: "PMID: 28994825 | PMCID: PMC5634325",
          year: 2017
      }, 
      {
          title: "Reconstructing cancer drug response networks using multitask learning",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29017547",
          authors: "Ruffalo M, Stojanov P, Pillutla VK, Varma R, Bar-Joseph Z.",
          citation: "BMC Systems Biology 2017 Oct 10;11(1):96.",
          ids: "PMID: 29017547 | PMCID: PMC5635550",
          year: 2017
      },     
      {
          title: "Massive mining of publicly available RNA-seq data from human and mouse",
          url: "http://www.biorxiv.org/content/early/2017/09/14/189092",
          authors: "Lachmann A, Torre D, Keenan AB, Jagodnik KM, Lee HJ, Silverstein MC, Wang L, Ma'ayan A.",
          citation: "bioRxiv (2017): 189092.",
          ids: "biorxiv: 189092",
          year: 2017
      }, 
      {
          title: "fastBMA: scalable network inference and transitive reduction",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/29020744",
          authors: "Hung LH, Shi K, Wu M, Young WC, Raftery AE, Yeung KY.",
          citation: "Gigascience 2017 Oct 1;6(10):1-10.",
          ids: "PMID: 29020744 | PMCID: PMC5632288",
          year: 2017
      }, 
      {
          title: "Hot-starting software containers for bioinformatics analyses",
          url: "https://www.biorxiv.org/content/early/2017/10/17/204495",
          authors: "Zhang P, Hung LH, Lloyd WJ, Yeung KY.",
          citation: "bioRxiv (2017): 204495.",
          ids: "biorxiv: 204495",
          year: 2017
      }, 
      {
          title: "Abnormalities of signal transduction networks in chronic schizophrenia",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28900113",
          authors: "McGuire JL, Depasquale EA, Funk AJ, O'Donnovan SM, Hasselfeld K, Marwaha S, Hammond JH, Hartounian V, Meador-Woodruff JH, Meller J, McCullumsmith RE.",
          citation: "NPJ Schizophrenia 2017 Sep 12;3(1):30.",
          ids: "PMID: 28900113 | PMID: PMC5595970",
          year: 2017
      }, 
      {
          title: "Complex systems biology",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28931638",
          authors: "Ma'ayan A.",
          citation: "Journal of the Royal Society, Interface 2017 Sep;14(134) pii: 20170391.",
          ids: "PMID: 28931638 | PMCID: PMC5636275",
          year: 2017
      }, 
      {
          title: "Mechanistic systems modeling to improve understanding and prediction of cardiotoxicity caused by targeted cancer therapeutics",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28951721",
          authors: "Shim JV, Chun B, van Hasselt JGC, Birtwistle MR, Saucerman JJ, Sobie EA.",
          citation: "Frontiers in Physiology 2017 Sep;8:651.",
          ids: "PMID: 28951721 | PMCID: PMC5599787",
          year: 2017
      },
      {
          title: "Identification of a novel class of BRD4 inhibitors by computational screening and binding simulations",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28884163",
          authors: "Allen BK, Mehta S, Ember SWJ, Zhu JY, Schonbrunn E, Ayad NG, Schurer SC",
          citation: "ACS Omega 2017 Aug 31;2(8):4760-4771.",
          ids: "PMID: 28884163 | PMCID: PMC5579542",
          year: 2017
      },  
      {
          title: "Developing a framework for digital objects in the Big Data to Knowledge (BD2K) Commons: Report from the Commons Framework Pilots Workshop",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28501646",
          authors: "Jagodnik KM, Koplev S, Jenkins SL, Ohno-Machado L, Paten B, Schurer SC, Dumontier M, Verborgh R, Bui A, Ping P, McKenna NJ, Madduri R, Pillai A, Ma'ayan A.",
          citation: "Journal of Biomedical Informatics 2017 Jul;71:49-57.",
          ids: "PMID: 28501646 | PMCID: PMC5545976",
          year: 2017
      },
      {
           title: "Systemic QSAR and phenotypic virtual screening: chasing butterflies in drug discovery",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28274840",
           authors: "Cruz-Monteagudo M, Schurer S, Tejera E, Perez-Castillo Y, Medina-Franco JL, Sanchez-Rodriguez A, Borges F.",
           citation: "Drug Discovery Today 2017 Jul;22(7):994-1007.",
           ids: "PMID: 28274840 | PMCID: PMC5487293",
           year: 2017
      },
      {
          title: "Drug target ontology to classify and integrate drug discovery data",
          url: "https://www.biorxiv.org/content/early/2017/07/27/117564",
          authors: "Mehta S, McGinty HK, Turner JP, Vidovic D, Forlin M, Koleti A, Nguyen DT, Jensen LJ, Guha R, Mathias SL, Ursu O, Stathias V, Duan J, Nabizadeh N, Chung C, Mader C, Visser U, Yang JJ, Bologa CG, Oprea T, Schurer SC.",
          citation: "bioRxiv (2017): 117564.",
          ids: "biorxiv: 117564",
          year: 2017
      }, 
      {
          title: "Integration of multiple data sources for gene network inference using genetic perturbation data",
          url: "https://www.biorxiv.org/content/early/2017/07/02/158394",
          authors: "Liang X, Young WC, Hung LH, Raftery AE, Yeung KY",
          citation: "bioRxiv (2017): 158394.",
          ids: "biorxiv: 158394",
          year: 2017
      }, 
      {
          title: "From flamingo dance to (desirable) drug discovery: a nature-inspired approach",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/28624633",
          authors: "Sanchez-Rodriguez A, Perez-Castillo Y, Schurer SC, Nicolotti O, Mangiatordi GF, Borges F, Cordeiro MNDS, Tejera E, Medina-Franco JL, Cruz-Monteagudo M.",
          citation: "Drug Discovery Today 2017 June 15. pii: S1359-6446(17)30290-8.",
          ids: "PMID: 28624633 | PMCID: PMC5650527",
          year: 2017
      },
      {
          title: "Reproducible Bioconductor workflows using browser-based interactive notebooks and containers",
          url: "https://www.biorxiv.org/content/early/2017/06/01/144816",
          authors: "Almugbel R, Hung LH, Hu J, Almutairy AM, Ortogero NE, Tamta Y, Yeung KY.",
          citation: "bioRxiv (2017): 144816.",
          ids: "biorxiv: 144816",
          year: 2017
      }, 
      {
          title: "The SRL peptide of rhesus rotavirus VP4 protein governs cholangiocyte infection and the murine model of biliary atresia",
          url: "https://www.ncbi.nlm.nih.gov/pubmed/27859498",
          authors: "Mohanty SK, Donnelly B, Lobeck I, Walther A, Dupree P, Coots A, Meller J, McNeal M, Sestak K, Tiao G.",
          citation: "Hepatology 2017 Apr;65(4):1278-1292.",
          ids: "PMID: 27859498 | PMCID: PMC5360466 ",
          year: 2017
      },
      {
           title: "Differential cytokine contributions of perivascular haematopoietic stem cell niches",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28218906",
           authors: "Asada N, Kunisaki Y, Pierce H, Wang Z, Fernandez NF, Birbrair A, Ma'ayan A, Frenette PS.",
           citation: "Nature Cell Biology 2017 Mar;19(3):214-223.",
           ids: "PMID: 28218906 | PMCID: PMC5467892",
           year: 2017
       },
       {
           title: "GUIdock-VNC: Using a graphical desktop sharing system to provide a browser-based interface for containerized software",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28327936",
           authors: "Mittal V, Hung LH, Keswani J, Kristiyanto D, Lee SB, Yeung KY.",
           citation: "Giagascience 2017 Feb.",
           ids: "PMID: 28327936 | PMCID: PMC5530313",
           year: 2017
       },
      {
           title: "Systematic analyses of drugs and disease indications in RepurposeDB reveal pharmacological, biological and epidemiological factors influencing drug repositioning",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28200013",
           authors: "Shameer K, Glicksberg BS, Hodos R, Johnson KW, Badgeley MA, Readhead B, Tomlinson MS, O'Connor T, Miotto R, Kidd BA, Chen R, Ma'ayan A, Dudley JT.",
           citation: "Briefings in Bioinformatics 2017 Feb 15.",
           ids: "PMID: 28200013 | PMCID: PMC6192146",
           year: 2017
       },
       {
           title: "Building containerized workflows for RNA-seq data using the BioDepot-workflow-Builder (BwB)",
           url: "http://biorxiv.org/content/early/2017/01/06/099010",
           authors: "Hung LH, Meiss T, Keswani J, Xiong Y, Sobie E, Yeung KY",
           citation: "bioRxiv (2017): 099010.",
           ids: "biorxiv: 099010",
           year: 2017
       },
       {
           title: "Software solutions for reproducible RNA-seq workflows",
           url: "http://biorxiv.org/content/early/2017/01/06/099028",
           authors: "Meiss T, Hung LH, Xiong Y, Sobie E, Yeung KY.",
           citation: "bioRxiv (2017): 099028.",
           ids: "biorxiv: 099028",
           year: 2017
       },
	     {
            title: "GEN3VA: aggregation and analysis of gene expression signatures from related studies",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27846806",
            authors: "Gundersen GW, Jagodnik KM, Woodland H, Fernandez NF, Sani K, Dohlman AB, Ung PM, Monteiro CD, Schlessinger A, Ma'ayan A.",
            citation: "BMC Bioinformatics 2016 Nov 15;17(1):461.",
            ids: "PMID: 27846806 | PMCID: PMC5111283",
            year: 2016
        },
        {
            title: "Extraction and analysis of signatures from the Gene Expression Omnibus by the crowd",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27667448",
            authors: "Wang Z, Monteiro CD, Jagodnik KM, Fernandez NF, Gundersen GW, Rouillard AD, Jenkins SL, Feldmann AS, Hu KS, McDermott MG, Duan Q, Clark NR, Jones MR, Kou Y, Goff T, Woodland H, Amaral FM, Szeto GL, Fuchs O, Schussler-Fiorenza Rose SM, Sharma S, Schwartz U, Bausela XB, Szymkiewicz M, Maroulis V, Salykin A, Barra CM, Kruth CD, Bongio NJ, Mathur V, Todoric RD, Rubin UE, Malatras A, Fulp CT, Galindo JA, Motiejunaite R, Juschke C, Dishuck PC, Lahl K, Jafari M, Aibar S, Zaravinos A, Steenhuizen LH, Allison LR, Gamallo P, de Andres Segura F, Dae Devlin T, Perez-Garcia V, Ma'ayan A.",
            citation: "Nature Communications 2016 Sep 26;7:12846.",
            ids: "PMID: 27667448 | PMCID: PMC5052684",
            year: 2016
        },
	{
            title: "L1000CDS2: LINCS L1000 characteristic direction signatures search engine",
            url: "http://www.nature.com/articles/npjsba201615",
            authors: "Duan Q, Reid SP, Clark NR, Wang Z, Fernandez NF, Rouillard AD, Readhead B, Tritsch SR, Hodos R, Hafner M, Niepel M, Sorger PK, Dudley JT, Bavari S, Panchal RG, Ma'ayan A.",
            citation: "NPJ Systems Biology and Applications 2, 16015.",
            ids: "PMID: 28413689 | PMCID: PMC5389891",
            year: 2016
        },
	 {
            title: "Drug induced adverse events prediction with the LINCS L1000 data",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/27153606",
            authors: "Wang Z, Clark NR, Ma'ayan A.",
            citation: "Bioinformatics 2016 Aug 1;32(15):2338-45.",
            ids: "PMID: 27153606 | PMCID: PMC4965635",
            year: 2016
        },
        {
            title: "mclust 5: Clustering, classification and density estimation using Gaussian finite mixture models",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27818791",
            authors: "Scrucca L, Fop M, Murphy TB, Raftery AE.",
            citation: "The R Journal 2016 Aug;8(1):289-317.",
            ids: "PMID: 27818791 | PMCID: PMC5096736",
            year: 2016
        },
	{
            title: "Enrichr: a comprehensive gene set enrichment analysis web server 2016 update",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/27141961",
            authors: "Kuleshov MV, Jones MR, Rouillard AD, Fernandez NF, Duan Q, Wang Z, Koplev S, Jenkins SL, Jagodnik KM, Lachmann A, McDermott M, Monteiro CD, Gundersen GW, Ma'ayan A.",
            citation: "Nucleic Acids Research 2016 Jul 8;44(W1):W90-7.",
            ids: "PMID: 27141961 | PMCID: PMC4987924",
            year: 2016
        },
        {
            title: "An open RNA-Seq data analysis pipeline tutorial with an example of reprocessing data from a recent Zika virus study",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27583132",
            authors: "Wang Z, Ma'ayan A.",
            citation: "F1000Research 2016 Jul 5;5:1574.",
            ids: "PMID: 27583132 | PMCID: PMC4972086",
            year: 2016
        },
	{
            title: "The harmonizome: a collection of processed datasets gathered to serve and mine knowledge about genes and proteins",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/27374120",
            authors: "Rouillard AD, Gundersen GW, Fernandez NF, Wang Z, Monteiro CD, McDermott MG, Ma'ayan A.",
            citation: "Database (Oxford) 2016 Jul 3 pii: baw100.",
            ids: "PMID: 27374120 | PMCID: PMC4930834",
            year: 2016
        },
	{
            title: "GUIdock: Using Docker containers with a common graphics user interface to address the reproducibility of research",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/27045593",
            authors: "Hung LH, Kristiyanto D, Lee SB, Yeung KY.",
            citation: "PLoS One 2016 Apr 5;11(4):e0152686.",
            ids: "PMID: 27045593 | PMCID: PMC4821530",
            year: 2016
        },
	{
            title: "Signaling networks among stem cell precursors, transit-amplifying progenitors, and their niche in developing hair follicles",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/27009580",
            authors: "Rezza A, Wang Z, Sennett R, Qiao W, Wang D, Heitman N, Mok KW, Clavel C, Yi R, Zandstra P, Ma'ayan A, Rendl M.",
            citation: "Cell Reports 2016 Mar 18;5 pii: S2211-1247(16)30213-3.",
            ids: "PMID: 27009580 | PMCID: PMC4826467",
            year: 2016
        },
        {
            title: "Integrative radiogenomic analysis for multicentric radiophenotype in glioblastoma",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26863628",
            authors: "Kong DS, Kim J, Lee IH, Kim ST, Seol HJ, Lee JI, Park WY, Ryu G, Wang Z, Ma'ayan A, Nam DH.",
            citation: "Oncotarget 2016 Mar 8;7(10):11526-38.",
            ids: "PMID: 26863628 | PMCID: PMC4905491",
            year: 2016
        },
	{
            title: "A posterior probability approach for gene regulatory network inference in genetic perturbation data",
            url: "http://arxiv.org/abs/1603.04835",
            authors: "Young WC, Yeung KY, Raftery AE.",
            citation: "arXiv 2016 Mar;1603.04835.",
            ids: "",
            year: 2016
        },
	{
            title: "In utero exposure of rats to high-fat diets perturbs gene expression profiles and cancer susceptibility of prepubertal mammary glands",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26895667",
            authors: "Govindarajah V, Leung YK, Ying J, Gear R, Bornschein RL, Medvedovic M, Ho SM.",
            citation: "Journal of Nutritional Biochemistry 2016 Mar;29:73-82.",
            ids: "PMID: 26895667 | PMCID: PMC4761409",
            year: 2016
        },
	{
            title: "Regulatory consequences of neuronal ELAV-like protein binding to coding and non-coding RNAs in human brain",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26894958",
            authors: "Scheckel C, Drapeau E, Frias MA, Park CY, Fak J, Zucker-Scharff I, Kou Y, Haroutunian V, Ma'ayan A, Buxbaum JD, Darnell RB.",
            citation: "eLife 2016 Feb 19;5 pii: e10421.",
            ids: "PMID: 26894958 | PMCID: PMC4798961",
            year: 2016
        },
	{
            title: "Model reduction and parameter estimation of non-linear dynamical biochemical reaction networks",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26816394",
            authors: "Sun X, Medvedovic M.",
            citation: "IET Systems Biology 2016 Feb;10(1):10-6.",
            ids: "PMID: 26816394 | PMCID: PMC4786080",
            year: 2016
        },
	{
            title: "Fetal liver hematopoietic stem cell niches associate with portal vessels",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26634440",
            authors: "Khan JA, Mendelson A, Kunisaki Y, Birbrair A, Kou Y, Arnal-Estape A, Pinho S, Ciero P, Nakahara F, Ma'ayan A, Bergman A, Merad M, Frenette PS.",
            citation: "Science 2016 Jan 8;351(6269):176-80.",
            ids: "PMID: 26634440 | PMCID: PMC4706788",
            year: 2016
        },
	{
            title: "Dynamic model averaging in large model spaces using dynamic Occam's window",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26917859",
            authors: "Onorante L, Raftery AE.",
            citation: "European Economic Review 2016 Jan 1;81:2-14.",
            ids: "PMID: 26917859 | PMCID: PMC4762062",
            year: 2016
        },
	{
            title: "Principal Angle Enrichment Analysis (PAEA): Dimensionally reduced multivariate gene set enrichment analysis tool",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26848405",
            authors: "Clark NR, Szymkiewicz M, Wang Z, Monteiro CD, Jones MR, Ma'ayan A.",
            citation: "Proceedings (IEEE Int Conf Bioinformatics Biomed). 2015 Nov;2015:256-262.",
            ids: "PMID: 26848405 | PMCID: PMC4737646",
            year: 2015
        },
        {
            title: "Large-scale computational screening identifies first in class multitarget inhibitor of EGFR kinase and BRD4",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26596901",
            authors: "Allen BK, Mehta S, Ember SW, Schonbrunn E, Ayad N, Schurer SC.",
            citation: "Scientific Reports 2015 Nov 24;5:16924.",
            ids: "PMID: 26596901 | PMCID: PMC4657038",
            year: 2015
        },
        {
            title: "CyNetworkBMA: a Cytoscape app for inferring gene regulatory networks",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26566394",
            authors: "Fronczuk M, Raftery AE, Yeung KY.",
            citation: "Source Code for Biology and Medicine 2015 Nov 11;10:11.",
            ids: "PMID: 26566394 | PMCID: PMC4642660",
            year: 2015
        },
	 {
            title: "A systems approach identifies essential FOXO3 functions at key steps of terminal erythropoiesis",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26452208",
            authors: "Liang R, Camprecios G, Kou Y, McGrath K, Nowak R, Catherman S, Bigarella CL, Rimmele P, Zhang X, Gnanapragasam MN, Bieker JJ, Papatsenko D, Ma'ayan A, Bresnick E, Fowler V, Palis J, Ghaffari S.",
            citation: "PLoS Genetics 2015 Oct 9;11(10):e1005526.",
            ids: "PMID: 26452208 | PMCID: PMC4599908",
            year: 2015
        },
        {
            title: "Morphine regulated synaptic networks revealed by integrated proteomics and network analysis",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26149443",
            authors: "Stockton SD Jr, Gomes I, Liu T, Moraje C, Hipolito L, Jones MR, Ma'ayan A, Moron JA, Li H, Devi LA.",
            citation: "Molecular and Cellular Proteomics 2015 Oct;14(10):2564-76.",
            ids: "PMID: 26149443 | PMCID: PMC4597137",
            year: 2015
        },
        {
            title: "GEO2Enrichr: browser extension and server app to extract gene sets from GEO and analyze them for biological functions",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25971742",
            authors: "Gundersen GW, Jones MR, Rouillard AD, Kou Y, Monteiro CD, Feldmann AS, Hu KS, Ma'ayan A.",
            citation: "Bioinformatics 2015 Sep 15;31(18):3060-2.",
            ids: "PMID: 25971742 | PMCID: PMC4607730",
            year: 2015
        },
        {
            title: "An integrated transcriptome atlas of embryonic hair follicle progenitors, their niche, and the developing skin",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26256211",
            authors: "Sennett R, Wang Z, Rezza A, Grisanti L, Roitershtein N, Sicchio C, Mok KW, Heitman NJ, Clavel C, Ma'ayan A, Rendl M.",
            citation: "Developmental Cell 2015 Sep 14;34(5):577-91.",
            ids: "PMID: 26256211 | PMCID: PMC4573840",
            year: 2015
        },
        {
            title: "Abstraction for data integration: Fusing mammalian molecular, cellular and phenotype big datasets for better knowledge extraction",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26297300",
            authors: "Rouillard AD, Wang Z, Ma'ayan A.",
            citation: "Computational Biology and Chemistry 2015 Aug 18;pii: S1476-9271(15)00083-3.",
            ids: "PMID: 26297300",
            year: 2015
        },
        {
            title: "Dynamics of the discovery process of protein-protein interactions from low content studies",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/26048415",
            authors: "Wang Z, Clark NR, Ma'ayan A.",
            citation: "BMC Systems Biology 2015 Jun;9(1):26.",
            ids: "PMID: 26048415 | PMCID: PMC4456804",
            year: 2015
        },
        {
            title: "cDREM: inferring dynamic combinatorial gene regulation",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25844671",
            authors: "Wise A, Bar-Joseph Z.",
            citation: "Journal of Computational Biology 2015 Apr;22(4):324-33.",
            ids: "PMID: 25844671 | PMCID: PMC4394168",
            year: 2015
        },
        {
            title: "SMARTS: reconstructing disease response networks from multiple individuals using time series gene expression data",
            url: "http://www.ncbi.nlm.nih.gov/pubmed/25480376",
            authors: "Wise A, Bar-Joseph Z.",
            citation: "Bioinformatics 2015 Apr 15;31(8):1250-7.",
            ids: "PMID: 25480376 | PMCID: PMC4393515",
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
            title: "Lean big data integration in systems biology and systems pharmacology",
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
            title: "Metadata standard and data exchange specifications to describe, model, and integrate complex and diverse high-throughput screening data from the Library of Integrated Network-based Cellular Signatures (LINCS)",
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
            citation: "CPT Pharmacometrics and Systems Pharmacology 2013 Mar 27;2:e35.",
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
