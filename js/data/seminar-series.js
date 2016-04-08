var mod = angular.module("seminarSeriesMod", []);

mod.controller("seminarSeriesCtrl", ["$scope", "$sce", function($scope, $sce) {

    $scope.seminars = [
        {
            date: 'May 18, 2016',
            time: '4:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: 'St Patrick Reid, PhD',
            speakerTitle: 'Research Scientist, Department of of Molecular and Translational Sciences Division, U.S. Army Medical Research Institute of Infectious Diseases (USAAMRIID)',
            title: 'Elucidating Pathogen-Host Interactions in Emerging Highly Pathogenic Viruses'
        },
	{
            date: 'July 9, 2015',
            time: '3:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: 'Sima Lev, PhD',
            speakerTitle: 'Associate Professor, Department of Molecular Cell Biology, Weizmann Institute of Science',
            title: 'Epithelial-mesenchymal Transition (EMT) in Breast Cancer Metastasis'
        },
        {
            date: 'February 27, 2015',
            time: '11:00 a.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: 'Larry Sklar, PhD',
            speakerTitle: 'Professor, Department of Pathology, University of New Mexico School of Medicine',
            title: 'From High Throughput Flow Cytometry to Small Molecule Discovery and Translational Medicine'
        },
        {
            date: 'January 14, 2015',
            time: '4:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: 'Tara C. Matise, PhD',
            speakerTitle: 'Associate Professor, Department of Genetics, Rutgers University',
            title: 'The PAGE Study and Coordinating Center (Population Architecture using Genomics and Epidemiology)'
        },
        {
            date: 'December 5, 2014',
            time: '12:30 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: 'Steven Finkbeiner, MD, PhD',
            speakerTitle: 'Professor, Departments of Neurology and Physiology, University of California, San Francisco',
            title: 'Reverse Engineering a more Reliable Translational Pipeline with Patient-Derived iPSC Models of Neurodegenerative Disease, Robotic Longitudinal Single Cell Analysis and Deep Learning'
        }
    ];
}]);













