var mod = angular.module("seminarSeriesMod", []);

mod.controller("seminarSeriesCtrl", ["$scope", "$sce", function($scope, $sce) {
    $scope.seminars = [
        {
            date: 'February 23, 2017',
            time: '11:00 am',
            location: 'Hess Center for Science and Medicine Building, 2nd Floor Seminar Room B, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="https://www.dbmi.columbia.edu/people/adler-perotte/" target="_blank">Adler Perotte, MD</a>'),
            speakerTitle: 'Assistant Professor, Department of Biomedical Informatics, Columbia University',
            title: $sce.trustAsHtml('<a href="http://events.mountsinaihealth.org/event/mount_sinai_center_for_bioinformatics_seminar_mining_electronic_medical_records_for_new_medical_insights?utm_campaign=widget&utm_medium=widget&utm_source=Mount+Sinai+Health+System" target="_blank">Survival Analysis with EHR Data</a>')
        },
        {
            date: 'December 21, 2016',
            time: '11:00 a.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('Ariel Israel, MD'),
            speakerTitle: 'Visiting Scholar, Clalit Health Services, Department of Family Medicine, Jerusalem, Israel Sheba Medical Center, Heart Institute, Tel Hashomer, Israel',
            title: $sce.trustAsHtml('Mining Electronic Medical Records for New Medical Insights')
        },
        {
            date: 'May 18, 2016',
            time: '4:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('St Patrick Reid, PhD'),
            speakerTitle: 'Research Scientist, Department of Molecular and Translational Sciences Division, U.S. Army Medical Research Institute of Infectious Diseases (USAAMRIID)',
            title: $sce.trustAsHtml('Elucidating Pathogen-Host Interactions in Emerging Highly Pathogenic Viruses')
        },
	{
            date: 'May 17, 2016',
            time: '4:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="http://www.phys.psu.edu/people/rza1" target="_blank">Reka Albert, PhD</a>'),
            speakerTitle: 'Distinguished Professor, Departments of Physics and Biology, Pennsylvania State University',
            title: $sce.trustAsHtml('Model-Based Control of Disease-Related Signal Transduction Networks')
        },
	{
            date: 'July 9, 2015',
            time: '3:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('Sima Lev, PhD'),
            speakerTitle: 'Associate Professor, Department of Molecular Cell Biology, Weizmann Institute of Science',
            title: $sce.trustAsHtml('Epithelial-mesenchymal Transition (EMT) in Breast Cancer Metastasis')
        },
        {
            date: 'February 27, 2015',
            time: '11:00 a.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="http://pathology.unm.edu/faculty/faculty/lsklar.html" target="_blank">Larry Sklar, PhD</a>'),
            speakerTitle: 'Professor, Department of Pathology, University of New Mexico School of Medicine',
            title: $sce.trustAsHtml('From High Throughput Flow Cytometry to Small Molecule Discovery and Translational Medicine')
        },
        {
            date: 'January 14, 2015',
            time: '4:00 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="https://genetics.rutgers.edu/faculty/faculty-list/userprofile/matise" target="_blank">Tara C. Matise, PhD</a>'),
            speakerTitle: 'Associate Professor, Department of Genetics, Rutgers University',
            title: $sce.trustAsHtml('The PAGE Study and Coordinating Center (Population Architecture using Genomics and Epidemiology)')
        },
        {
            date: 'December 5, 2014',
            time: '12:30 p.m.',
            location: 'Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="http://bms.ucsf.edu/directory/faculty/steve-finkbeiner-md-phd" target="_blank">Steven Finkbeiner, MD, PhD</a>'),
            speakerTitle: 'Professor, Departments of Neurology and Physiology, University of California, San Francisco',
            title: $sce.trustAsHtml('Reverse Engineering a more Reliable Translational Pipeline with Patient-Derived iPSC Models of Neurodegenerative Disease, Robotic Longitudinal Single Cell Analysis and Deep Learning')
        }
    ];
}]);
