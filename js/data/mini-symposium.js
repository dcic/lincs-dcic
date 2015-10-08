var mod = angular.module("miniSymposiumMod", []);

mod.controller("miniSymposiumCtrl", ["$scope", function($scope) {
    $scope.events = [
        {
            time: '2:30 – 3:30 p.m.',
            title: 'Open Resources for Drug Discovery and Target Prioritization',
            speaker: 'John Overington, PhD, EMBL-EBI'
        },
        {
            time: '3:30 – 4:30 p.m.',
            title: 'Drugs, Targets, Diseases: How Informatics Can Change Therapeutics',
            speaker: 'Tudor Oprea, MD, PhD, University of New Mexico School of Medicine'
        },
        {
            time: '4:30 – 4:50 p.m.',
            title: 'New NIH Efforts on Biomedical Data: Recent, Past and Current Efforts (BD2K & Commons) and an Idiosyncratic Look to the Future',
            speaker: 'Ajay Pillai, PhD, National Human Genome Research Institute (NHGRI), NIH'
        },
        {
            time: '4:50 – 5:10 p.m.',
            title: 'Meta-Analysis of Ebola Infection Gene Expression Signatures to Prioritize Disease Mechanisms and Drug Treatments',
            speaker: 'Andrew Rouillard, PhD, Ma’ayan Laboratory, Icahn School of Medicine at Mount Sinai'
        },
        {
            time: '5:10 – 5:30 PM',
            title: 'Connecting the Immune-Pharmacology Universe to Better Understand Health and Disease',
            speaker: 'Brian Kidd, PhD, Dudley Laboratory, Icahn School of Medicine at Mount Sinai'
        }
    ];
}]);
