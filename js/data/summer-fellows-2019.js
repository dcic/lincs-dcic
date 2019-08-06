var mod = angular.module("summerFellows2019Mod", []);



mod.controller("summerFellows2019Ctrl", ["$scope", "$sce", function($scope, $sce) {



    var SUMMER_RESEARCH_LINK = "/summer-research-app",

        DIR = "/images/summer-fellows/2019/",
	
        FDU = "Fairleigh Dickinson University",

	CORNELL = "Cornell University",

	YALE = "Yale University",

	COOPER = "The Cooper Union",

	INDIANA = "Indiana University Bloomington",

	GEORGIA = "Georgia Institute of Technology",
	
	JHU = "The Johns Hopkins University",

	AMHERST = "Amherst College",

	HARVARD = "Harvard University",

	ISMMS = "Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB_LINK = "http://labs.icahn.mssm.edu/maayanlab/";


	


    $scope.fellows = [
      {
        
	name: "Zaire Bryant",
        
	image: DIR + "zaire.jpg",
        
	school: FDU,
        
	project: "Global Analysis of Gene Sets and Signatures Associated with Senescence",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },
	    
      {
        
	name: "Elizabeth Jung",
        
	image: DIR + "elizabeth.jpg",
        
	school: CORNELL,
        
	project: "Assessing and Improving the FAIRness of Common Fund Programs' Digital Resources",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Alessandra LaRocco",
        
	image: DIR + "allie.jpg",
        
	school: YALE,
        
	project: "Predicting Novel Targets and Drugs to Induce Autophagy",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Samuel Maltz",
        
	image: DIR + "sam.jpg",
        
	school: COOPER,
        
	project: "Gene Expression Imputations with the Latent Space of RNA-seq Data from ARCHS4",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Damon Pham",
        
	image: DIR + "damon.jpg",
        
	school: INDIANA,
        
	project: "Gene Set Enrichment Analysis with Deep Learning",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Kaeli Rizzo",
        
	image: DIR + "kaeli.jpg",
        
	school: GEORGIA,
        
	project: "Predicting the Function and Disease Associations of Under-Studied GPCRs, Ion Channels, and Protein Kinases",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Allison Seiden",
        
	image: DIR + "allison.jpg",
        
	school: JHU,
        
	project: "Analysis of Gene Sets Extracted from a GWAS of the UK Biobank",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK,
	
      },

      {
        
	name: "Ingrid Shu",
        
	image: DIR + "ingrid.jpg",
        
	school: AMHERST,
        
	project: "KEA3: Kinase Enrichment Analysis 2019 Update",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "David Szanto",
        
	image: DIR + "david.jpg",
        
	school: HARVARD,
        
	project: "Web and Mobile App for Predicting Physiological Age from Lab Tests and Vital Signs",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },

      {
        
	name: "Andrew Warburton",
        
	image: DIR + "andrew.jpg",
        
	school: ISMMS,
        
	project: "Collections of Disease and Drug Centric Signatures and Gene Sets",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },
	    
      {
        
	name: "Justin Williams",
        
	image: DIR + "justin.jpg",
        
	school: CORNELL,
        
	project: "Drug Repurposing Strategies for Alzheimer's Disease",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK

      },
      	    
      {
        
	name: "Inko Bovenzi",
        
	image: DIR + "inko.jpg",
        
	school: "Hunter College High School",
        
	project: "Crossing Gene Sets Across Libraries to Discover Novel Pathways",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK,

        highSchooler: true
	

      },
      {
        
	name: "Emma Yang",
        
	image: DIR + "emma.jpg",
        
	school: "Brearley School",
        
	project: "Connecting Researchers based on the Genes and Diseases They Study",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK,

        highSchooler: true
	

      },

      {
        
	name: "Abigail Zhou",
        
	image: DIR + "abigail.jpg",
        
	school: "Hunter College High School",
        
	project: "Quantifying the Overlap Among Disease Associated Gene Sets Created from Multiple Sources ",
        
	labName: MAAYAN_LAB,
        
	labLink: MAAYAN_LAB_LINK,

        highSchooler: true
	

      }




    ];

}]);
