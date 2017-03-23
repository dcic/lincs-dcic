var mod = angular.module("publicationsMod", []);

mod.controller("publicationsCtrl", ["$scope", function ($scope) {
    $scope.publications = [
      {
           title: "Systemic QSAR and phenotypic virtual screening: chasing butterflies in drug discovery",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28274840",
           authors: "Cruz-Monteagudo M, Schürer S, Tejera E, Pérez-Castillo Y, Medina-Franco JL, Sánchez-Rodríguez A, Borges F",
           citation: "Drug Discovery Today. 2017 Mar 6. pii: S1359-6446(17)30107-1.",
           ids: "PMID: 28274840",
           year: 2017
       },
      {
           title: "Differential cytokine contributions of perivascular haematopoietic stem cell niches",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28218906",
           authors: "Asada N, Kunisaki Y, Pierce H, Wang Z, Fernandez NF, Birbrair A, Ma'ayan A, Frenette PS",
           citation: "Nature Cell Biology. 2017 Mar;19(3):214-223.",
           ids: "PMID: 28218906",
           year: 2017
       },
      {
           title: "Systematic analyses of drugs and disease indications in RepurposeDB reveal pharmacological, biological and epidemiological factors influencing drug repositioning.",
           url: "https://www.ncbi.nlm.nih.gov/pubmed/28200013",
           authors: "Shameer K, Glicksberg BS, Hodos R, Johnson KW, Badgeley MA, Readhead B, Tomlinson MS, O'Connor T, Miotto R, Kidd BA, Chen R, Ma'ayan A, Dudley JT",
           citation: "Briefings in Bioinformatics. 2017 Feb 15. doi: 10.1093/bib/bbw136.",
           ids: "PMID: 28200013",
           year: 2017
       },
	     {
            title: "GEN3VA: aggregation and analysis of gene expression signatures from related studies",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27846806",
            authors: "Gundersen GW, Jagodnik KM, Woodland H, Fernandez NF, Sani K, Dohlman AB, Ung PM, Monteiro CD, Schlessinger A, Ma'ayan A.",
            citation: "BMC Bioinformatics 2016 Nov 15;17(1):461.",
            ids: "PMID: 27846806",
            year: 2016
        },
        {
            title: "Extraction and analysis of signatures from the Gene Expression Omnibus by the crowd",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/27667448",
            authors: "Wang Z, Monteiro CD, Jagodnik KM, Fernandez NF, Gundersen GW, Rouillard AD, Jenkins SL, Feldmann AS, Hu KS, McDermott MG, Duan Q, Clark NR, Jones MR, Kou Y, Goff T, Woodland H, Amaral FM, Szeto GL, Fuchs O, Schussler-Fiorenza Rose SM, Sharma S, Schwartz U, Bausela XB, Szymkiewicz M, Maroulis V, Salykin A, Barra CM, Kruth CD, Bongio NJ, Mathur V, Todoric RD, Rubin UE, Malatras A, Fulp CT, Galindo JA, Motiejunaite R, Juschke C, Dishuck PC, Lahl K, Jafari M, Aibar S, Zaravinos A, Steenhuizen LH, Allison LR, Gamallo P, de Andres Segura F, Dae Devlin T, Perez-Garcia V, Ma'ayan A.",
            citation: "Nature Communications 2016 Sep 26;7:12846.",
            ids: "PMID: 27667448",
            year: 2016
        },
	{
            title: "L1000CDS2: LINCS L1000 characteristic direction signatures search engine",
            url: "http://www.nature.com/articles/npjsba201615",
            authors: "Duan Q, Reid SP, Clark NR, Wang Z, Fernandez NF, Rouillard AD, Readhead B, Tritsch SR, Hodos R, Hafner M, Niepel M, Sorger PK, Dudley JT, Bavari S, Panchal RG, Ma'ayan A.",
            citation: "npj Systems Biology and Applications 2, 16015.",
            ids: "",
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
