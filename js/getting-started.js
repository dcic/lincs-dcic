// Concierge module
var mod = angular.module("gettingStartedMod", ["lincsCentersMod"]);

mod.controller("gettingStartedCtrl", ["$scope", function($scope) {
    var started = false,
        selected = [],
        $p = $('.middle p');

    $('.start p').click(function() {
        if (started) {
            started = false;
            selected[0] = undefined;
            $('.end .row').fadeOut();
            $('.middle').fadeOut(function() {
                $p.css({
                    opacity: 1,
                    'box-shadow': '0 2px 5px 0 rgba(0, 0, 0, 0.26)'
                });
            });
            $('.content > .row').hide();
        } else {
            started = true;
            $('.middle').fadeIn();
        }
    });

    $('.middle .section').click(function() {
        var class_ = '.' + $(this).parent().attr('data-selector');
        $p.css({
            opacity: 1,
            'box-shadow': '0 2px 5px 0 rgba(0, 0, 0, 0.26)'
        }).not(this)
            .css({
                opacity: .3,
                'box-shadow': 'none'
            });

        if (selected[0] !== class_) {
            $('.end .row').hide();
            selected[0] = class_;
            $('.end').find(class_).fadeIn()
            $('.content > .row').hide();
        }
    });

    $('.end p').click(function() {
        $('.content > .row').hide();
        var class_ = '.' + $(this).parent().attr('data-selector');
        // console.log(class_);
        // console.log($('.content').find(class_));
        $('.content').find(class_).fadeIn();
    });
}]);

// Word count service. Uses Porter-Stemming 
mod.factory("countWords", function() {
    return function(str, stop_words) {
        var word_hash = {};
        var words = str.split(/\s*\b\s*/);  // word boundaries and whitespace
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var stem = stemmer(word);
            stem = stem.toLowerCase();
            // var stem = words[i];
            if (stem in word_hash) {
                // increment
                word_hash[stem]++;
            } else if (stop_words.indexOf(word.toLowerCase()) === -1 && word.length > 3) {
                // first occurence, not a stop word
                // word_hash[words[i]] = 1;
                word_hash[stem] = 1;
            }
        }
        return word_hash;
    }
});

// Controller for the Concierge LINCS centers page
var modLincsCenters = angular.module("lincsCentersMod", []);

modLincsCenters.controller("lincsCentersCtrl", ["$scope", "countWords", function($scope, countWords) {
    // Centers data for display as directive: conciergeCenter
    $scope.centers_info = [
        {
            name: "Drug Toxicity Signature Generation Center",
            affiliation: "Icahn School of Medicine at Mount Sinai",
            logoUrl: "images/lincs-centers/dtox_logo2.png",
            tags: ["drug side effects", "cardiomyocytes", "hepatocytes", "neurons"],
            links: {
                website: "http://dtoxs.org/", 
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/dtoxs/"
            },
            description: "The Drug Toxicity Signature Generation Center aims to develop cell signatures that will predict adverse events that might be caused by drugs and will identify other drugs that might lessen these side effects. The center will leverage the U.S. Food and Drug Administration’s (FDA) Adverse Event Reporting System database to identify drugs that produce adverse events in heart, liver and neuronal function, and to search for drugs that may mitigate these events.",
            text: "The Drug Toxicity Signature Generation Center is a NIH-funded Systems Pharmacology research center at the Icahn School of Medicine. The proteomics experiments for the center are conducted at the Center for Advanced Proteomics, Rutgers-New Jersey Medical School. DToxS is part of the LINCS consortium of centers. LINCS (Library of Integrated Network-Based Cellular Signatures) is a program supported by the NIH Common Fund. The goals of the LINCS consortium as stated on the LINCS website at the NIH include the “large-scale production of perturbation-induced molecular and cellular signatures and the development of the informatics and analytical tools that enable utilization by all of the research community \
                The overall goal of the Drug Toxicity Signature Generation Center (DTSGC) is to develop robust cellular signatures for drug-induced toxicity and toxicity mitigation. We build these signatures by exposing cells to drugs in culture, and integrating genomic and proteomic high-throughput measurements in multiple cell types with network analyses and simulations using dynamical models. To anchor the signatures in observable human disease and therapeutics, we will leverage the strategy employed in our study, (Zhao et al Science Translational Medicine 2013) in which we searched the FDA-Adverse Event Reporting System Database (FAERS) and found hundreds of combinations, used in humans, where a second drug mitigates serious toxicity associated with the first drug. We hypothesize that we can use these observations to improve our capability to predict drug-induced toxicity and mitigation by drug pairs.\
                Therapeutically effective drugs often cause serious unintended adverse events that limit or even prohibit their use. A recent example is ponatinib, a new tyrosine kinase inhibitor developed to treat a drug-insensitive form of chronic myeloid leukemia. Although the new drug showed promise, Phase III trials were halted due to the occurrence of multiple toxicities, including cardiotoxicity. Often toxicity arises from the drug working on the intended molecular target (and perhaps other targets) in cells and tissues unassociated with the pathophysiology being treated. Identifying cellular signatures of such unintended toxicity can help accelerate drug development. \
                Several factors make it challenging to predict toxicity prior to clinical studies. First, although drug targets may be present in multiple tissue types, these targets may be connected to different cellular regulatory networks, leading to differential phenotypic responses. Second, even if a signature such as a static change in gene expression is robust across cell types, the physiological consequences, resulting from altered cellular functional dynamics, may be different. Third, the fact that drugs are frequently given in combination makes toxicity prediction even more complicated. A second drug may either exacerbate or mitigate the toxicity due to the first drug when drugs are given in combination, as we and others have shown. \
                The Drug Toxicity Signature Generation Center is a Systems Pharmacology research center at the Icahn School of Medicine. The proteomics experiments for the center are conducted at the Center for Advanced Proteomics, Rutgers-New Jersey Medical School. The overall goal of DToxS is to use genomic and proteomic high-throughput measurements coupled with medium-throughput experimental measurement of protein states as the basis for computational analysis that integrates network analyses with structural constraints and dynamical models in multiple cell types to identify signatures that predict toxicity induced by individual drugs and mitigation of this toxicity by drug combinations. To anchor the signatures in observable human disease and therapeutics, we leverage the strategy employed in our recent study, in which we searched the FDA-Adverse Event Reporting System Database (FAERS) and found nearly thousands of drug combinations used in humans where a second drug mitigates serious toxicity associated with first drug. We hypothesize that we can use these observations to improve our capability to predict toxicity of drugs and mitigation by drug pairs. The Center has three major goals: \
                Experimentally obtain expression patterns of mRNA, proteins and protein states (e.g. phosphorylation) for hundreds of individual drugs and two drug combinations identified in the FAERS whereby the second drug mitigates serious toxicities induced by the first drug and shown in FAERS to cause one of three serious toxicities-cardiotoxicity; hepatic toxicity or peripheral neuropathy. We use primary or established human cell lines and cell types directly differentiated from human induced pluripotent cells (hIPSC) obtained from normal subjects. For each drug combination and the two constituent drugs we obtain mRNA, proteomic data, and dynamic protein state from multiple cell lines. \
                Computationally we utilize the experimental data for multi-tier analyses that combines statistical and network models using the human interactome and Gene Ontology with structural model based filtering and dynamical multi-compartment ODE models to obtain sets of relational signatures for each drug combination. For this we combine the perturbagen induced changes in mRNA levels and protein levels to develop networks that will be constrained by structural modeling to identify new off-targets and dynamical models using the protein state data. From the subnetworks we infer pathways involved in toxicity and its mitigation, and the nodes in these pathways will be quantitatively weighted by global sensitivity analysis of the dynamical models to develop signatures grounded in mechanisms and cellular phenotypes inferred by the MEP and HMS LINCS Centers. This integrative approach generate sets of experimentally-observed (EOS), network-inferred (NIS) and dynamical model weighted (wEOS & wNIS) signatures for both drug combinations and individual drugs at signatures per year from our Center’s experiments. \
                We will extensively share our data and resources. We will provide the raw and processed data with annotations to the BD2K-LINCS Data Coordination and Integration Center for dissemination to the larger community. We will provide our hiPSC-derived cardiomyocytes, hepatocytes and neurons to all other LINCS centers for use in their assay systems and to the biomedical research community. We will develop computational models that integrate our toxicity data with those from other LINCS centers to develop molecular signature based efficacy to toxicity ratios that could be broadly useful in drug development. We will run web-based courses using Coursera for data utilization and development of signature–based research projects and conduct personalized workshops online to enable academic researchers to utilize our signatures to develop research projects that can compete for individual research grant funding. \
                "
        },
        {
            name: "HMS LINCS Center",
            affiliation: "Harvard Medical School",
            logoUrl: "images/lincs-centers/hms_lincs.png",
            tags: ["dose response", "drug sensitivity", "drug resistance", "kinase inhibitors", "epigenome modifiers", "growth factors", "inflammatory cytokines", "cancer", "autoimmune diseases"],
            links: {
                website: "http://lincs.hms.harvard.edu/",
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/hms-lincs-u54/"
            },
            description: "The HMS LINCS Center develops new measurement methods and computer algorithms to detect and analyze perturbations induced by therapeutic drugs in healthy and diseased human cells.",
            text: "The Harvard Medical School (HMS) LINCS Center is funded by NIH grant U54 HL127365 and is part of the NIH Library of Integrated Network-based Cellular Signatures Program (LINCS). The overall goals of this program are to collect and disseminate data and analytical tools needed to understand how human cells respond to perturbation by drugs, the environment, and mutation. Further information about LINCS and other participating Centers is available at the program website. \
                The HMS LINCS Center aims to discover fundamental principals of cellular response to perturbation including the relationship between dose and response, the origin and significance of cell-to-cell variation, and the molecular basis of drug sensitivity and resistance. Data generated at HMS include multiplex biochemical, proteomic, and imaging assays for which dissemination standards are poorly developed; improving these and liberating all data, algorithms, and conclusions from our notebooks and papers is a key goal of the Center. The Center also develops new algorithms for large-scale analysis of complex perturbagen-response datasets, which are available through customized project summary pages. We typically publish at least one biological analysis of each dataset, but these papers describe only one of many uses for the data. We encourage users to explore the primary data based on their own ideas and algorithms. \
                Assays We focus on biochemical and cell-based assays on (i) small molecule kinase inhibitors, a leading class of therapeutic agents for the treatment of cancer, autoimmune diseases, and other diseases; (ii) epigenome modifiers such as bromodomain and HDAC inhibitors; and (iii) naturally occurring ligands such as growth factors and inflammatory cytokines. Overall we are profiling the responses of ~100 cell lines and primary cell types to ~400 perturbagens across dose and time. \
                Goals: The overall goal of the HMS LINCS Center is to delineate the fundamental principles of cellular response to perturbagens – clinical grade kinase inhibitors and components of the cellular microenvironment in particular – at the level of single-cells and cell populations and to make response data routinely available along with web-based browse, query and programmatic tools. The Center develops, tests and applies diverse measurement and computational methods and uses these to create response signatures for normal and diseased human cells exposed to perturbations individually and in combination. We emphasize systematic collection of data not currently available in public databases including live and fixed-cell imaging, biochemical data on signaling proteins and multi-factorial drug-response phenotypes. In pursuit of this goal, we also help to develop metadata standards and informatics systems for these types of data. \
                Approaches: The collection of multiplex perturbagen-response data at HMS involves the use of complementary assays including imaging, flow cytometry, sandwich immunoassays, protein mass spectrometry and mRNA profiling as a means to measure the levels, localization and states of modification of proteins targeted by perturbagens and the networks in which these proteins are embedded. Systematic analysis of this data yields the most fundamental measure of cellular response to perturbation: the dose-response relationship. Construction of perturbagen-response signatures using statistical modeling, network inference and machine learning creates models predictive of responses by genetically diverse cells to specific perturbations. Customized query, browse and explore functions developed in collaboration with the BD2K-LINCS Data Coordination and Integration Center, and grounded in established ontologies and standards, will make it possible to access HMS LINCS data and manipulate it programmatically. \
                Outcomes: The Center’s research will provide a comprehensive picture of the responses of cells and tissues to some of the most important classes of therapeutic molecules (kinase inhibitors and chromatin targeting drugs) and the extent to which these responses vary with changes in the solid-phase and soluble components of the microenvironment. We aim to characterize variation in the biochemistry of cell signaling pathways under basal and perturbed conditions and then explain the origins of this variation in precise molecular terms. By comparing perturbagen-response across tissue types and disease we will not only uncover fundamental properties of cell signaling networks, we will identify opportunities for drug repurposing. We expect repurposing of cancer drugs for cardiovascular and inflammatory diseases to represent a particularly significant opportunity. By directly comparing perturbagen-responses in diseased and normal cells, including cardiomyocytes, hepatocytes, kidney epithelia, neurons, and immune cells we will increase our understanding of toxic responses and develop means for efficiently scoring the potential therapeutic index of new drugs. Finally, by creating predictive models of drug response for different tissue niches we hope to improve our ability to personalize therapies to the needs of individual patients and to increase the durability of existing treatments. \
                " 
        },
        {
            name: "LINCS Center for Transcriptomics",
            affiliation: "Broad Institute",
            logoUrl: "images/lincs-centers/cmap2.jpg",
            tags: ["transcriptomics", "cellular states", "protein function", "CRISPR knock-out", "shRNA knock-down", "ORF overexpression", "small-molecules", "user interfaces"],
            links: {
                website: "http://www.lincscloud.org/",
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-trx/"
            },
            description: "The LINCS Center for Transcriptomics is studying up to 50 cell types perturbed by a large number of chemical compounds and genetic reagents that activate or deactivate genes. Each perturbation will produce about 1,000 gene-expression readouts. By the project’s end, the center expects to have generated more than 1 million profiles of how genes are expressed in different cells.",
            text: "Our goal is to develop comprehensive signatures of cellular states and tools to analyze them in an effort to understand protein function, small-molecule action, physiological states, and disease characteristics. \
                The overarching goal of the Broad Institute’s LINCS program is the development of comprehensive signatures of cellular states that can be used by the entire research community to understand protein function, small-molecule action, physiological states and disease states. Our center will create the world’s most comprehensive resource of perturbational signatures. This will include 1.4 million L1000 genetic (CRISPER knock-out, shRNA knock-down and ORF overexpression) and small-molecule (drug and tool compound) perturbations spanning 50 cell types of varied lineage. We will make it possible for biologists and computational scientists worldwide to interact with the data by creating user-friendly apps that are designed to facilitate biological discovery. \
                "
        },
        {
            name: "LINCS Proteomic Characterization Center for Signaling and Epigenetics",
            affiliation: "Broad Institute",
            logoUrl: "images/lincs-centers/pccse1-300x67.png",
            tags: ["proteomics", "mass spectromertry", "epigenetics", "cellular states", "histone modifications", "pathway perturbations", "cancer cell lines", "neurobiology", "cellular differentiation"],
            links: {
                resource: "https://panoramaweb.org/labkey/project/LINCS/begin.view",
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-prx/"
            },
            description: "The LINCS Proteomic Characterization Center for Signaling and Epigenetics studies cell disruption at the most basic levels: phosphorylation-mediated signaling — that is, how cells communicate internally; and epigenetics, or how cells perpetuate non-genetic information as they grow.",
            text: "The LINCS Proteomic Characterization Center for Signaling and Epigenetics, under the direction of Dr. Jacob D. Jaffe of the Broad Institute, tests the hypothesis that early modulation of signaling events in response to perturbations can establish new cellular states by altering their epigenetic landscapes. Using cutting-edge mass spectrometry-based proteomics assays, the center broadly profiles cellular responses in the spaces of phosphosignaling and histone modifications (epigenetic “marks”) in a highly multiplexed manner. The center focuses on perturbing genes and pathways in foundational biology systems (such as cancer cell lines) and in neurobiological cellular differentiation paradigms (under direction of co-investigator Dr. Li-Huei Tsai of MIT). Next-generation proteomic data acquisition and analysis strategies to support these activities are being developed in the laboratory of Dr. Michael MacCoss of the University of Washington. \
            "
        },
        {
            name: "Microenvironment Perturbagen (MEP) LINCS Center",
            affiliation: "Oregon Health and Science University",
            logoUrl: "images/lincs-centers/ohsu.jpg",
            tags: ["microenvironment", "RNA expression", "protein expression", "cellular imaging", "molecular networks"],
            links: {
                resource: "https://www.synapse.org/#!Synapse:syn2862345/wiki/72486",
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/oregon-u/"
            },
            description: "The MEP LINCS Center studies how both malignant and non-malignant cells are controlled by the microenvironments in which they live. The researchers will provide measurements of the impacts of thousands of different microenvironments on cellular phenotypes, protein make-up and gene expression readouts in cell lines.",
            text: "Our goal in this project is to contribute to further development of the NIH Library of Integrated Network-based cellular signatures (LINCS) program by developing a dataset and computational strategy to elucidate how microenvironment (ME) signals affect cell intrinsic intracellular transcriptional- and protein-defined molecular networks to generate experimentally observable cellular phenotypes. We will infer these regulatory relationships by combining measurements of ME perturbagen-induced changes in multiple cellular phenotypes, RNA expression and regulatory protein expression in a core set of cell lines with measurements of responses of the same lines to chemical and genomic perturbagens made by our team in other projects and by other LINCS sites. Our data will complement existing perturbagen response LINCS data by providing information on ME perturbagen-induced changes and by providing quantitative image based measurements of seven cellular response phenotypes plus associated changes in gene transcription and regulatory protein expression. Integrative analysis of these data will enable us to address four key questions: \
                How are ME peturbagen-induced cellular phenotypes regulated by specific molecular networks? \
                Do subsets of ME-induced perturbations elicit common molecular network changes and phenotypic responses? \
                Do specific molecular network signatures influence multiple cellular phenotypes? \
                Are the ME perturbagen-induced network changes similar to the genetic or chemically induced network changes identified in other LINCS projects? \
            "
        },
        {
            name: "NeuroLINCS Center",
            affiliation: "University of California, Irvine",
            logoUrl: "images/lincs-centers/neurolincs.png",
            tags: ["astrocytes", "oligodendrocytes", "neurodegenerative diseases", "iPSC", "disease modeling", "omics", "statistics"],
            links: {
                website: "http://www.neurolincs.org/",
                description: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/neurolincs/"
            },
            description: "The NeuroLINCS Center concentrates on human brain cells, which are far less understood than other cells in the body. The researchers believe it will be necessary to study these cell types directly to understand the causes of neurological disease and to develop new therapies. By applying LINCS-type perturbations to studying an array of human brain cells, the researchers hope to identify targets for developing drugs against neurodegenerative diseases such as Parkinson’s disease, amyotrophic lateral sclerosis (ALS, also known as Lou Gehrig’s disease), spinal muscular atrophy and Huntington’s disease.",
            text: "The NeuroLINCS Center is an NIH-funded collaborative effort between various research groups with expertise in iPSC technology, disease modeling, OMICS methods, and computational biology. The participating research groups are from the University of California- Irvine, Cedars Sinai, the Gladstone Institute, MIT, and Johns Hopkins University. Together, the NeuroLINCS data and signature generation center studies human brain cells to understand the causes of neurological disease and to develop new therapies. NeuroLINCS is part of the LINCS (Library of Integrated Network-based Cellular Signatures) consortium of centers, which is supported by the NIH Common Fund. \
                Amyotrophic lateral sclerosis (ALS) is a severe neurodegenerative condition characterized by loss of motor neurons in the brain and spinal cord. It is also commonly known as “Lou Gehrig’s Disease” in the USA and “motor neuron disease” in Europe and the rest of the world. ALS presents clinically as muscle wasting with stiffness and spasticity from loss of motor neurons in the spinal cord. New research indicates that a substantial number of ALS patients also have mild to moderate dementia, and pathological studies document neurodegeneration and abnormal astroglial/oligodendroglial functions throughput the brain and spinal cord. \
                ALS is largely sporadic, but several genes, including SOD1, C9orf72 and TDP43 have been identified in a subset of patients. Clinically sporadic and familial ALS appear similar. The C9orf72 mutation is unusual in several regards: it is a hexanucleotide repeat expansion of the first intron of the gene and the expansion may repeat thousands of times; the mutation is found in ~40% of familial ALS – but also in 8-10% of apparent sporadic disease as well. Finally, it is equally common in frontotemporal dementia- both in the familial and sporadic forms. ALS patients with severe frontotemporal dementia most often carry the C9orf72 mutation. Spinal muscular atrophy (SMA) is a recessively inherited pediatric neuromuscular disease characterized by degeneration of spinal motor neurons. \
                Discovering a cure for these fast-progressing diseases has remained elusive as only one FDA approved treatment exists for ALS, a drug called Riluzole, which prolongs a patient’s life modestly by about one year. No treatment exists for SMA. Clearly, more substantive therapeutic options are required to improve the survival and quality of life for these patients. The scientific community agrees that the search for new therapeutics for these debilitating motor neuron diseases requires highly-innovative strategies, including generating and optimizing a large database of patient-specific cellular (neuronal for ALS) data, with the ultimate goal being that these datasets will further encourage and stimulate “out-of-the-box ideas” in the broader neurodegenerative disease research field. \
                The goal of NeuroLINCS will be to utilize high-quality non-integrating induced pluripotent stem cell (iPSC) lines from ALS patients and unaffected normal healthy controls and identify signatures that are specific to motor neuron diseases and may be useful in grouping subset of patients. These cells can be generated from a simple blood draw from the patient – and can then be converted to make any cell type (brain, heart, muscle etc.) similar to those found in the patient’s body, including motor neurons and glial support cells that are either lost or dysfunctional in these patients. The iPS cells capture the patient’s genetic coding material, and retain the ability to be converted into any human cell type, providing an unlimited supply of patient cells that can be studied in the dish. Both SMA and ALS are progressive in nature, selectively affecting motor neurons in children and adults, respectively, often resulting in death. It remains unclear how motor neurons are specifically vulnerable to degeneration in both diseases, and increasing motor neuron survival is one of the best predictors of finding successful therapies. \
                Our initial focus will be to produce diseased motor neurons from patients to better understand why this happens. Using state-of-the-art OMICS methods (epigenomics, transcriptomics, proteomics, and cellomics), we intend to create a wealth of cellular data that is patient-specific in the context of their baseline genetic perturbations and in the presence of other environmental stressors (glutamate and endoplasmic reticulum stress). Ultimately, the analysis of these datasets will lead to the identification of a network of unique signatures relevant to each of these motor neuron diseases. \
            "
        }
    ];
}]);

// the '.' delimiter translates to HTML 
modLincsCenters.directive("center", function() {
    return {
        restrict: "AE",
        scope: {
            data: "="
        },
        controller: ["$scope", "$element", "countWords", function($scope, $element, countWords) {

            var word_cloud_height = 200;

            var search_fields = ["name", "description", "text"];
            // Stop words for the word count (words that are not counted).
            var stop_words = "a,able,about,across,after,all,almost,also,am,among,an,and,any,are,as,at,be,because,been,but,by,can,cannot,could,dear,did,do,does,either,else,ever,every,for,from,get,got,had,has,have,he,her,hers,him,his,how,however,i,if,in,into,is,it,its,just,least,let,like,likely,may,me,might,most,must,my,neither,no,nor,not,of,off,often,on,only,or,other,our,own,rather,said,say,says,she,should,since,so,some,than,that,the,their,them,then,there,these,they,this,tis,to,too,twas,us,wants,was,we,were,what,when,where,which,while,who,whom,why,will,with,would,yet,you,your"
                .split(",");

            $scope.cloud_visible = false;

            $scope.toggleWordCloud = function() {
                if (!$scope.cloud_visible) {
                    // calculate and show word cloud.
                    // Concatenate text into single string.
                    var text = "";
                    for (var j = 0; j < search_fields.length; j++) {
                        text += " " + $scope.data[search_fields[j]];
                    }

                    // Count words
                    var word_count = countWords(text, stop_words);

                    // calculate word positions
                    $scope.calculateWordCloud(word_count)
                    $scope.cloud_visible = true;  // internal flag
                } else {
                    // hide
                    d3.select($element[0]).select(".cloud-div").select("svg").remove();
                    $scope.cloud_visible = false;
                }
            }

            // function which calculates word cloud positions and text sizes
            $scope.calculateWordCloud = function(word_count) {
                // calc maximum word count for scaling
                var max_value = -1;
                for (var word in word_count) {
                    if (word_count[word] > max_value) {
                        // new max
                        max_value = word_count[word];
                    }
                }

                // Get div width
                var div_width = $element[0].querySelector(".cloud-div").clientWidth;

                // D3 visualization: word cloud
                d3.layout.cloud().size([div_width, word_cloud_height])
                    .words(Object.keys(word_count).map(function(key) {
                        return {text: key, count: word_count[key]};
                    }))
                    // .rotate(function() { return ~~(Math.random() * 2) * 90; })
                    .rotate(function() { return 0; })
                    .font("Helvetica")
                    .fontSize(function(d) { return d.count * 48 / max_value; })
                    .on("end", $scope.drawWordCloud)
                    .start();

            }

            // Draw the text speficications to a svg element.
            $scope.drawWordCloud = function(words) {
                var div_width = $element[0].querySelector(".cloud-div").clientWidth;
                // div_width -= 40;  // margin

                d3.select($element[0]).select("div.cloud-div").append("svg")  // gets raw DOM element
                    // svg
                    // .attr("visibility", "collapse")
                    .attr("display", "block")  // block for showing
                    .attr("width", div_width)
                    .attr("height", word_cloud_height)
                    .append("g")
                        .attr("transform", "translate(" + div_width/2 + "," + word_cloud_height/2 + ")")  // position in the middle
                        .selectAll("text")
                        .data(words)
                        .enter().append("text")
                            .style("font-size", function(d) { return d.size + "px"; })
                            .style("font-family", "Helvetica")
                            // .style("fill", function(d, i) { return fill(i); })
                            .style("fill", function(d, i) { return "rgb(100,100,100)"; })
                            .attr("text-anchor", "middle")
                            .attr("transform", function(d) {
                                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                            })
                            .text(function(d) { return d.text; });
            }

        }],
        templateUrl: "view/getting-started/center.html"
    };
});



