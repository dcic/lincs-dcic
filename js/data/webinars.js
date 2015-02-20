var mod = angular.module("webinarsMod", []);

mod.controller("webinarsCtrl", ["$scope", function($scope) {
    $scope.upcomingWebinars = [
        {
            date: '24 February 2015 at 3:00PM EST',
            topic: '',
            presenters: 'Laura Heiser, OHSU'
        },
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
