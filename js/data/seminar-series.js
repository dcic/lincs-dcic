var mod = angular.module("seminarSeriesMod", []);

mod.controller("seminarSeriesCtrl", ["$scope", "$sce", function($scope, $sce) {
    $scope.seminars = [
	 {
            date: 'March 19, 2019',
            time: '2:00 p.m.',
            location: 'Annenberg Building, 19th Floor, Conference Room 19-79, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="https://jensenlab.org/people/larsjuhljensen/" target="_blank">Lars Juhl Jensen, PhD</a>'),
            speakerTitle: 'Professor, Novo Nordisk Foundation Center for Protein Research, University of Copenhagen',
            title: $sce.trustAsHtml('Network Analysis and Visualization with STRING and Cytoscape')
        },
	{
            date: 'September 20, 2018',
            time: '11:00 a.m.',
            location: 'Hess Center for Science and Medicine Building, 2nd Floor, Seminar Room B, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="https://jensenlab.org/people/larsjuhljensen/" target="_blank">Aravind Subramanian, PhD</a>'),
            speakerTitle: 'Director, Connectivity Map Team',
            title: $sce.trustAsHtml('Integrated Connectivity Map')
        },   
	 {
            date: 'December 14, 2017',
            time: '11:00 a.m.',
            location: 'Hess Center for Science and Medicine Building, 2nd Floor, Seminar Room B, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="https://medicine.osu.edu/bmi/people/lang_li/Pages/index.aspx" target="_blank">Lang Li, PhD</a>'),
            speakerTitle: 'Professor and Chair, Department of Biomedical Informatics, The Ohio State University, College of Medicine',
            title: $sce.trustAsHtml('Translational Drug Interaction Research')
        },   
	 {
            date: 'November 16, 2017',
            time: '11:00 a.m.',
            location: 'Hess Center for Science and Medicine Building, 2nd Floor, Seminar Room B, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('<a href="http://masonlab.net/" target="_blank">Christopher E. Mason, PhD'),
            speakerTitle: 'Associate Professor, Department of Physiology and Biophysics, Weill Cornell Medical College',
            title: $sce.trustAsHtml('Genome, Epigenome, and Metagenome Diagnostics on Earth and in Space')
        },
        {
            date: 'May 4, 2017',
            time: '11:00 a.m.',
            location: 'Hess Center for Science and Medicine Building, 2nd Floor, Seminar Room B, Icahn School of Medicine at Mount Sinai',
            speakerName: $sce.trustAsHtml('Irene Morganstern, PhD'),
            speakerTitle: 'Principal Scientist, Department of Behavioral Pharmacology, PsychoGenics, Inc',
            title: $sce.trustAsHtml('Novel Approaches to Drug Discovery for Central Nervous System Disorders')
        },
        {
            date: 'February 23, 2017',
            time: '11:00 a.m.',
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
            speakerName: $sce.trustAsHtml('<a href="http://www.unmc.edu/pathology/faculty/bios/reid.html" target="_blank">St Patrick Reid, PhD</a>'),
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
            speakerName: $sce.trustAsHtml('<a href="http://www.weizmann.ac.il/mcb/Lev/" target="_blank">Sima Lev, PhD</a>'),
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
