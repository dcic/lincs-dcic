var mod = angular.module("teamMod", []);

mod.factory("team", function() {

	var ISMMS = "Icahn School of Medicine at Mount Sinai",
		UM = "University of Miami",
		UC = "University of Cincinnati",
		NIH = "National Institute of Health";

	return {
		pis: [
			{
				name: 'Avi Ma\'ayan',
				position: 'Associate Professor',
				email: 'avi.maayan {at} mssm.edu',
				portrait: 'avi.jpg',
				logo: 'mssm.jpg',
				website: 'http://icahn.mssm.edu/research/labs/maayan-laboratory'
			},
			{
				name: 'Mario Medvedovic',
				position: 'Associate Professor',
				email: 'mario.medvedovic {at} uc.edu',
				portrait: 'mario.jpg',
				logo: 'university-of-cincinnati.jpg',
				website: 'http://www.eh3.uc.edu/'
			},
			{
				name: 'Stephan Schurer',
				position: 'Associate Professor',
				email: 'sschurer {at} med.miami.edu',
				portrait: 'stephan.jpg',
				logo: 'university-of-miami.jpg',
				website: 'http://ccs.miami.edu/?p=1103'
			}
		],
		webDevelopment: [
			{
				name: "Amar Koleti",
				affiliation: UM,
				email: "akoleti {at} miami.edu"
			},
			{
				name: "Caty Chung",
				affiliation: UM,
				email: "c.chung {at} med.miami.edu"
			},
			{
				name: "Gregory Gundersen",
				affiliation: ISMMS,
				email: "gregory.gundersen {at} mssm.edu"
			},
			{
				name: "Qiaonan Duan",
				affiliation: ISMMS,
				email: "qiaonan.duan {at} mssm.edu"
			},
			{
				name: "Matthew Jones",
				affiliation: ISMMS,
				email: "matthew.jones {at} mssm.edu"
			}
		],
		dataIntegration: [
			{
				name: "Christopher Mader",
				affiliation: UM,
				email: "cmader {at} miami.edu"
			},
			{
				name: "Yan Kou",
				affiliation: ISMMS,
				email: "yan.kou {at} mssm.edu"
			},
			{
				name: "Nicolas Fernandez",
				affiliation: ISMMS,
				email: "nicolas.fernandez {at} mssm.edu"
			},
			{
				name: "Zichen Wang",
				affiliation: ISMMS,
				email: "zichen.wang {at} mssm.edu"
			},
			{
				name: "Andrew Rouillard",
				affiliation: ISMMS,
				email: "andrew.rouillard {at} mssm.edu"
			},
			{
				name: "Deepthi Puram",
				affiliation: UM,
				email: "d.puram {at} miami.edu"
			},
			{
				name: "Neil Clark",
				affiliation: ISMMS,
				email: "neil.clark {at} mssm.edu"
			}
		],
		dataScience: [
			{
				name: "Kayee Yeung",
				affiliation: "University of Washington",
				email: "kayee {at} u.washington.edu"
			},
			{
				name: "Ziv Bar-Joseph",
				affiliation: "Carnegie-Mellon University",
				email: "zivbj {at} cs.cmu.edu"
			},
			{
				name: "Peter Hornbeck",
				affiliation: "Cell Signaling Inc.",
				email: "phornbeck {at} cellsignal.com"
			}
		],
		outreach: [
			{
				name: "Dusica Vidovic",
				affiliation: UM,
				email: "dvidovic {at} med.miami.edu"
			},
			{
				name: "Jarek Meller ",
				affiliation: "Cincinnati Children's Hospital Medical Center",
				email: "jmeller {at} cchmc.org"
			},
			{
				name: "John Reichard",
				affiliation: "Toxicology Excellence for Risk Assessment (TERA)",
				email: "jmeller {at} cchmc.org"
			},
			{
				name: "Sherry Jenkins",
				affiliation: ISMMS,
				email: "sherry.jenkins {at} mssm.edu"
			}
		],
		nih: [
			{
				name: "Ajay Pillai",
				affiliation: NIH,
				email: "ajay.pillai3 {at} nih.gov"
			},
			{
				name: "Albert Lee",
				affiliation: NIH,
				email: "alee {at} nhlbi.nih.gov"
			},
		]
	};
});