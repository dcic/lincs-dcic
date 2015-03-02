var mod = angular.module("webinarsMod", []);

mod.controller("webinarsCtrl", ["$scope", function($scope) {
    $scope.upcomingWebinars = [
        {
            date: '3 March 2015 at 3:00PM EST',
            topic: '',
            presenters: 'Larsson Omberg, Sage Bionetworks'

        },
        {
            date: '10 March 2015 at 3:00PM EST',
            topic: '',
            presenters: 'Marc Hafner, HMS LINCS DSGC'
        }
    ];
    $scope.pastWebinars = [
        {
            date: '24 February 2015',
            topic: 'Leveraging experimental models to advance our understanding of cancer',
            presenters: 'Laura Heiser, Oregon Health and Science University',
            synopsis: 'We and others have suggested the use of in vitro cell line panels to study the biological underpinnings of cancer and to test hypotheses that arise from studies of primary data. Specifically, we have used a collection of ~70 well characterized breast cancer cell lines to assess gene function and to identify mechanisms of response and resistance to therapeutic compounds. This set of molecular profiling data constitutes one of the most complete "omics" resources available in the public domain and includes assessments of gene expression, copy number, mutations, protein abundance, and response to therapy. Comparison of the genomic and epigenomic features of the cell lines with those measured for primary tumors by The Cancer Genome Atlas (TCGA) and others showed that the cell lines mirror many aspects of "omic" diversity in primary tumors. Cell line and tumor similarities include: (a) recurrent copy number changes and mutations (b) basal, claudin-low and luminal breast cancer subtypes, and (c) pathway activity. Analysis of correlations between drug sensitivity to 77 therapeutic compounds revealed that approximately 30% are associated with subtype or genome copy number aberration. Finally, we have used various statistical and machine learning approaches to identify integrated predictive signatures of sensitivity for ~50% of compounds in our cell line panel. These data and observations were the basis for a community-wide effort to identify biomarkers of drug sensitivity in the NCI-DREAM Drug Sensitivity Challenge that culminated in the robust identification of a novel machine learning algorithm for predicting drug response from molecular profiling data. This body of work has demonstrated the utility of in vitro model systems, identified biomarkers of drug sensitivity for clinically relevant compounds, and identified concrete approaches and considerations for advancing work in this domain.',
            link: 'https://www.youtube.com/watch?v=9KM7inVCLoc'
        },
        {
            date: '17 February 2015',
            topic: 'Discussion of causes for some artifacts observed in L1000 data',
            presenters: 'Chad Young, University of Washington',
            synopsis: 'Chad Young examines the relationships between Level 3 expression level measurements for pairs of genes probed by the "same color" beads. He shows that in some situations the deconvolution algorithm produces misleading expression levels, In some situations, plate-level normalization helps in some it does not. Possibility that observed patterns represent underlying biology was suggested by audience and discussed, as well as alternative strategies for systematically identifying artifacts and benchmarking of such alternative strategies.',
            link: 'https://www.youtube.com/watch?v=d-E_siojRg4'
        },
        {
            date: '16 December 2014',
            topic: 'Large-scane integration of small molecule-induced reponses in diverse LINCS datasets',
            presenters: 'Dusica Vidovic, University of Miami',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=TKPSqRrtd6I'
        },
        {
            date: '9 December 2014',
            topic: 'Analysis of Lung Cancers Across Multiple Signaling; Spaces to Identify New Disease Drivers and Network; Connectivity',
            presenters: 'Peter Hornbeck, Cell Signaling Technology Inc.',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=mgud2LcCdVY'
        },
        {
            date: '2 December 2014',
            topic: 'L1000 Assay and Signature Benchmarking',
            presenters: 'Mario Medvedovic, University of Cincinnati',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=eEIXm5rpo-E'
        },
        {
            date: '18 Nov 2014',
            topic: 'Issues in Level 3 L1000 data; Accessing and processing ENCODE data',
            presenters: 'Chad Young, University of Washington; Yan Kou, Icahn School of Medicine at Mount Sinai',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=-tActS2zkEU'
        },
        {
            date: '28 October 2014',
            topic: 'The Characteristic Direction Method to analyze the L1000 Data',
            presenters: 'Qiaonan Duan, Icahn School of Medicine at Mount Sinai',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=-tActS2zkEU'
        },
        {
            date: '21 October 2014',
            topic: 'L1000 Indexing Process',
            presenters: 'Amar Koleti, University of Miami',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=ncaSK0y36ck'
        },
        {
            date: '14 October 2014',
            topic: 'L1000 Data Access and Processing',
            presenters: 'Mario Medvedovic, University of Cincinnati',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=3ww9Bnhv1c4'
        } 
    ];
}]);
