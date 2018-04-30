var mod = angular.module("workshopsEtcMod", []);

mod.controller("workshopsEtcCtrl", ["$scope", "$sce", function($scope, $sce) {

    $scope.workshops = [
	{
            title: 'Visualizing High-Dimensional Biological Data with Clustergrammer-Widget in Jupyter Notebooks',
            description: $sce.trustAsHtml('Session at <a href="https://conferences.oreilly.com/jupyter/jup-ny/public/schedule/detail/68058 target="_blank">jupytercon</a> on  how <a href="https://www.ncbi.nlm.nih.gov/pubmed/28994825 target="_blank">Clustergrammer</a>-Widget enables users to easily visualize high-dimensional data (e.g. a Pandas DataFrame) within a Jupyter notebook as an interactive hierarchically clustered heatmap.'),
            details: 'August 23, 2018, New York, NY'
        },
	{
            title: 'Clustergrammer: Interactive Heatmap Visualizations Built using D3.js',
            description: $sce.trustAsHtml('Nicolas Fernandez PhD, a postdoc in the Ma\'ayan Laboratory held this workshop session at the <a href="http://dataviz.camp/" target="_blank">Data Visualization Camp</a>.'),
            details: 'July 9, 2016, New York, NY'
        },
	{
            title: 'Clustergrammer: A Web-Based Visualization Tool for Making and Sharing Interactive Clustered Heatmaps',
            description: $sce.trustAsHtml('Nicolas Fernandez PhD, a postdoc in the Ma\'ayan Laboratory held this workshop at the <a href="http://www.meetup.com/NYC-D3-JS/events/228735523/" target="_blank">NYC D3.js Meetup</a>.'),
            details: 'February 22, 2016, New York, NY'
        },
	{
            title: 'UHack',
            description: $sce.trustAsHtml('Members of the BD2K-LINCS DCIC at the Unversity of Miami sponsored and participated in the 24 hour <a href="http://coe.miami.edu/uhack2016/" target="_blank">hackathon</a> at the University of Miami.'),
            details: 'February 20-21, 2016, Miami, FL'
        },
	{
            title: 'SAMSI Innovation Workshop: Interdisciplinary Approaches to Biomedical Data Science Challenges',
            description: $sce.trustAsHtml('Stephan Schurer PhD, served as a mentor in this workshop to guide scientists in the formation of interdisciplinary projects aimed at developing models, methods, and approaches to overcome biomedical data science challenges. During the course of the workshop, participants were exposed to LINCS resources.'),
            details: 'July 20-24, 2015, Research Triangle Park, NC'
        },
        {
            title: 'NIAAA Workshop: Genomic and Computational Approaches for Biomarker and Drug Discovery',
            description: $sce.trustAsHtml('<p>Session Leader: Avi Ma’ayan PhD</p><p>The purpose of this <a href="https://www.youtube.com/watch?v=eAIKbz4AWXY&list=PL0Bwuj8819U8vZYpXObOMtmpOZmujLOXb&index=1" target="_blank">workshop</a> was to bring together (Library of Integrated Network-based Cellular Signatures) LINCS scientists and scientists from the alcohol research community to explore how LINCS resources can facilitate identification of druggable targets and novel and/or repurposed compounds for the treatment of alcohol dependence.</p>'),
            details: 'June 19, 2015, San Antonio, TX'
        }
    ];

    $scope.symposia = [
	 {
            title: 'BD2K-LINCS Data Science Symposium 2018 - Studying Systems Biology by Cellular Perturbations',
            description: $sce.trustAsHtml('The BD2K-LINCS Data Coordination and Integration Center (DCIC) hosted the third annual <a href="/2018-data-science-symposium" target="_blank">BD2K-LINCS Data Science Symposium (DSS 2018)</a>. The general theme of the symposium was was the study of complex biological systems using large-scale cellular perturbation profiling and applications in drug development, translational biomedicine and environmental health.'),
            details: 'January 31 - February 2, 2018, Miami, FL'
        },
        {
            title: 'BD2K-LINCS Data Science Symposium 2017 - Systems Biology of Cellular Perturbations',
            description: $sce.trustAsHtml('The BD2K-LINCS Data Coordination and Integration Center (DCIC) hosted the second annual <a href="/2017-data-science-symposium" target="_blank">BD2K-LINCS Data Science Symposium (DSS 2017)</a>. The general theme of the symposium was the systems biology of perturbation signatures and applications in drug development, translational biomedicine and environmental health.'),
            details: 'May 16-18, 2017, Cincinnati, OH'
        },
        {
            title: '2016 BD2K All Hands Grantee Meeting and Open Data Science Symposium',
            description: $sce.trustAsHtml('The BD2K-LINCS DCIC participated in the <a href="/2016-bd2k-meeting" target="_blank">BD2K 2016 All Hands Meeting</a> which brought together researchers, educators, developers, and trainees from all of the BD2K initiative grants.'),
            details: 'November 29 – December 1, 2016, Rockville, MD'
        },
        {
            title: 'LINCS Outreach Meeting',
            description: $sce.trustAsHtml('Members of the BD2K-LINCS DCIC delivered <a href="https://www.youtube.com/watch?v=U28Poi-oerI&list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i&index=5" target="_blank">talks</a> and held a breakout session on data analysis, visualization and integration and presented posters at the LINCS Outreach Meeting at the University of California, Irvine.'),
            details: 'March 10-11, 2016, Irvine, CA'
        },
	      {
            title: 'Systems Biology Data Science Symposium',
            description: $sce.trustAsHtml('This first <a href="/2016-data-science-symposium" target="_blank">Systems Biology Data Science Symposium</a> at the University of Miami brought together the BD2K-LINCS DCIC, local researchers, and outside experts who apply or develop computational systems biology resources.'),
            details: 'January 19-20, 2016, Coral Gables, FL'
        },
        {
            title: 'BD2K All Hands Grantee Meeting',
            description: $sce.trustAsHtml('The BD2K-LINCS DCIC participated in the BD2K 2015 All Hands Meeting which brought together researchers, educators, developers, and trainees from all of the BD2K initiative grants.'),
            details: 'November 12-13, 2015, Bethesda, MD'
        },
        {
            title: 'Big Data Symposium: Convergence of Science, Technology and Data Sciences – Impact on Pharma',
            description: $sce.trustAsHtml('In the Impact on Big Data on Drug Discovery session, Avi Ma’ayan PhD presented, "GEO2Enrichr, Enrichr and L1000CDS2: BD2K-LINCS DCIC Software Tools for Drug Discovery and Repurposing".'),
            details: 'June 29-30, 2015, Cambridge, MA'
        },
        {
            title: 'Society of Toxicology’s Annual Meeting',
            description: $sce.trustAsHtml('The BD2K-LINCS DCIC held an outreach session, "Turning Big Data to Knowledge - An Introduction to the BD2K and LINCS Projects" at the <a href="http://www.toxicology.org/pubs/docs/Prog/2015Program.pdf" target="_blank" target="_blank">SOT Annual Meeting</a>. Poster session: Big Data to Knowledge (BD2K) - A Graphical Approach for Data Coordination and Integration presented by John Reichard PhD, Mario Medvedovic PhD, Siva Sivaganesan PhD.'),
            details: 'March 23, 2015, San Diego, CA'
        },
        {
            title: 'BD2K-LINCS Data Coordination and Integration Center’s Mini-Symposium: Big Data Applications for Drug and Target Discovery',
            description: $sce.trustAsHtml('This <a href="static/big_data_symposium.pdf" target="_blank">mini-symposium</a> held at the Icahn School of Medicine at Mount Sinai was an introduction to big data resources for target prioritization, development of novel therapeutics, and drug repurposing opportunities.'),
            details: 'January 7, 2015, New York, NY'
        }
    ];

    $scope.conferences = [
        {
            title: 'Molecular Medicine Tri-Conference',
            description: $sce.trustAsHtml('Avi Ma\'ayan PhD presented "L1000CDS2: LINCS L1000 Characteristic Direction Signature Search Engine Predicts Kenpaullone as a Potential Therapeutic for Ebola" as part of the <a href="http://www.triconference.com/Bioinformatics-Big-Data/#Day2" target="_blank">Bioinformatics for Big Data</a> session in the Informatics channel.'),
            details: 'March 8, 2016, San Francisco, CA'
        },
	{
            title: 'Molecular Medicine Tri-Conference',
            description: $sce.trustAsHtml('Stephan Schurer PhD presented "Rational Data-Driven Development of Novel Poly-Pharmacology Small Molecules" as part of the <a href="http://www.triconference.com/Integrated-Pharma-Informatics/" target="_blank">Integrated Informatics Driving Translational Research and Precision Medicine</a> session in the Informatics channel.'),
            details: 'March 8, 2016, San Francisco, CA'
        },
	{
            title: 'AACR Special Conference on Computational and Systems Biology of Cancer',
            description: $sce.trustAsHtml('Avi Ma\'ayan PhD presented "Lean Data Integration Strategy in Cancer Systems Biology and Systems Pharmacology" as part of the <a href="http://www.aacr.org/Meetings/Pages/Program-Detail.aspx?EventItemID=29&DetailItemID=180&Day=02102015#.VcpaLXFVhBc" target="_blank">Modeling and Interrogating Cancer Regulatory Network</a> session.'),
            details: 'February 10, 2015, San Francisco, CA'
        }
    ];

    $scope.seminars = [
     {
            title: 'BD2K-LINCS DCIC Summer Fellow Presentation Session',
            description: $sce.trustAsHtml('Session for the <a href="/summer-fellows-2017" target="_blank">2017 BD2K-LINCS DCIC Summer Fellows</a> to present their projects.'),
            details: 'August 10, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
            title: 'BD2K-LINCS DCIC Summer Seminar Series',
            description: $sce.trustAsHtml('Alexandra Keenan MS (MD PhD candidate, Ma\'ayan Lab) presented <a href="https://events.mountsinaihealth.org/event/bd2k-lincs_dcic_summer_seminar_series_an_overview_of_the_lincs_program" target="_blank">"An Overview of the LINCS Program"</a>.'),
            details: 'August 2, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
            title: 'BD2K-LINCS DCIC Summer Seminar Series',
            description: $sce.trustAsHtml('Denis Torre (Bioinformatician, Ma\'ayan Lab) presented <a href="https://events.mountsinaihealth.org/event/bd2k-lincs_dcic_summer_seminar_series_an_introduction_to_experimental_and_computational_methods_for_rna-sequencing_part_ii" target="_blank">"Building RNA-seq Analysis Pipelines with Jupyter"</a>.'),
            details: 'July 18, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
            title: 'BD2K-LINCS DCIC Summer Seminar Series',
            description: $sce.trustAsHtml('Denis Torre (Bioinformatician, Ma\'ayan Lab) presented <a href="https://events.mountsinaihealth.org/event/bd2k-lincs_dcic_summer_seminar_series_an_introduction_to_experimental_and_computational_methods_for_rna-sequencing" target="_blank">"An Introduction to Experimental and Computational Methods for RNA-Sequencing"</a>.'),
            details: 'July 11, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
            title: 'BD2K-LINCS DCIC Summer Seminar Series',
            description: $sce.trustAsHtml('Kathleen Jagodnik PhD (Postdoctoral Fellow, Ma\'ayan Lab) presented <a href="https://events.mountsinaihealth.org/event/bd2k-lincs_dcic_summer_seminar_series_complexity_in_theory_and_practice_in_data_mining_and_network_analysis" target="_blank">"Complexity in Theory and Practice in Data Mining and Network Analysis"</a>.'),
            details: 'June 27, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
            title: 'BD2K-LINCS DCIC Summer Seminar Series',
            description: $sce.trustAsHtml('Avi Ma\'ayan PhD presented "Collecting and Exploring Gene Signatures".'),
            details: 'June 6, 2017, Icahn School of Medicine at Mount Sinai, NY'
     },
     {
          title: 'Mapping the Transcriptome to the Phenome',
          description: $sce.trustAsHtml('Avi Ma\’ayan PhD presented in the 16th Annual Symposium of NYU Biology\'s Center for Genomics & Systems Biology.'),
          details: 'June 2, 2017, New York University, NY'
      },
      {
          title: 'Global Analysis and Visualization of Thousands of Expression Signatures for Drug and Target Discovery',
          description: $sce.trustAsHtml('Avi Ma\’ayan PhD presented in <a href="http://www.hansmann-lab.com/cbsb17/index.shtml" target="_blank">Computational Biophysics to Systems Biology (CBSB2017)</a>.'),
          details: 'May 18, 2017, University of Cincinnati, OH'
      },
      {
          title: 'Novel Therapeutic Combinations and Targeted Poly-pharmacology in Glioblastoma',
          description: $sce.trustAsHtml('Stephan Schurer PhD presented in <a href="http://www.hansmann-lab.com/cbsb17/index.shtml" target="_blank">Computational Biophysics to Systems Biology (CBSB2017)</a>.'),
          details: 'May 18, 2017, University of Cincinnati, OH'
      },
      {
          title: 'Web-based Heatmap Visualization and Analysis Tool for High-Dimensional Biological Data',
          description: $sce.trustAsHtml('Nicolas Fernandez PhD presented in the Department of Pharmacological Science’s Works in Progress Seminar Series.'),
          details: 'March 2, 2017, Icahn School of Medicine at Mount Sinai, NY'
      },
      {
          title: 'Scalable Reanalysis of RNA-seq Data Using Cloud Computing',
          description: $sce.trustAsHtml('Alex Lachmann PhD presented in the Department of Pharmacological Science’s Works in Progress Seminar Series.'),
          details: 'November 10, 2016, Icahn School of Medicine at Mount Sinai, NY'
      },
      {
          title: 'Predicting Adverse Cardiovascular Events of Tyrosine Kinase Inhibitors from Molecular Features',
          description: $sce.trustAsHtml('Anders Dohlman presented in the Department of Pharmacological Science’s Works in Progress Seminar Series.'),
          details: 'October 27, 2016, Icahn School of Medicine at Mount Sinai, NY'
      },
	     {
            title: 'Webinar and Poster Session for the BD2K-LINCS DCIC Summer Research Training Program',
            description: $sce.trustAsHtml('The <a href="/summer-fellows-2016" target="_blank">2016 BD2K-LINCS DCIC Summer Fellows</a> presented their projects at the ISMMS SURP poster session as well as during a LINCS webinar.'),
            details: 'August 12, 2016, Icahn School of Medicine at Mount Sinai, NY'
        },
        {
            title: 'Side Effect Prediction using L1000 Data and Other Drug Attributes',
            description: $sce.trustAsHtml('Zichen Wang presented in the Icahn Institute for Genomics and Multiscale Biology’s Works in Progress Seminar Series.'),
            details: 'February 25, 2016, Icahn School of Medicine at Mount Sinai, NY'
        },
        {
            title: 'Extraction and Analysis of Mammalian Gene Expression Signatures from Geo by the Crowd',
            description: $sce.trustAsHtml('Zichen Wang presented in the Icahn Institute for Genomics and Multiscale Biology’s Works in Progress Seminar Series.'),
            details: 'January 27, 2016, Icahn School of Medicine at Mount Sinai, NY'
        },
	       {
            title: 'Data Integration for Systems Pharmacology',
            description: $sce.trustAsHtml('Avi Ma\'ayan PhD was an invited speaker for the Department of Medicine\'s Research Seminar Series at Stony Brook School of Medicine.'),
            details: 'January 12, 2016, Stony Brook, NY'
        },
	      {
            title: 'Community Science Project to Link Drugs, Targets and Diseases from Expression Signatures',
            description: $sce.trustAsHtml('Avi Ma’ayan PhD was an invited speaker for the Computational Biology Seminar Series at IBM T.J. Watson Research Center.'),
            details: 'March 4, 2015, Yorktown Heights, NY'
        },
        {
            title: 'Enrichr and GEO2Enrichr: Tools to Extract and Analyze Signatures',
            description: $sce.trustAsHtml('Gregory Gundersen and Matthew Jones from the Ma’ayan Laboratory at Icahn School of Medicine at Mount Sinai, presented in the Department of Pharmacology’s seminar series.'),
            details: 'January 15, 2015, New York, NY'
        },
        {
            title: 'Meta-analysis of Microarray Studies Profiling EBOV to Identify Molecular Mechanisms and suggest Potential Therapeutics',
            description: $sce.trustAsHtml('Avi Ma’ayan PhD was an invited speaker at the United States Army Medical Research Institute of Infectious Diseases.'),
            details: 'December 14, 2014, Frederick, MD'
        }
    ];
}]);
