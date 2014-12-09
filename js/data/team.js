var mod = angular.module("teamMod", []);

mod.factory("team", function() {
	return {
		pis: [
			{
				name: 'Avi Ma\'ayan',
				position: 'Associate Professor',
				email: 'avi dot maayan at mssm dot edu',
				portrait: 'avi.jpg',
				logo: 'mssm.jpg'
			},
			{
				name: 'Mario Medvedovic',
				position: 'Associate Professor',
				email: 'mario dot medvedovic at uc dot edu',
				portrait: 'mario.jpg',
				logo: 'university-of-cincinnati.jpg'
			},
			{
				name: 'Stephan Schurer',
				position: 'Associate Professor',
				email: 'sschurer at med dot miami dot edu',
				portrait: 'stephan.jpg',
				logo: 'university-of-miami.jpg'
			},
		],
		webDevelopment: [
			{
				name: "Amar Koleti",
				affiliation: "UM",
				email: "akoleti at miami dot edu"
			},
			{
				name: "Caty Chung",
				affiliation: "UM",
				email: "c dot chung at med dot miami dot edu"
			},
			{
				name: "Gregory Gundersen",
				affiliation: "ISMMS",
				email: "gregory dot gundersen at mssm.edu"
			},
			{
				name: "Qiaonan Duan",
				affiliation: "ISMMS",
				email: "qiaonan dot duan at mssm dot edu"
			},
			{
				name: "Matthew Jones",
				affiliation: "ISMMS",
				email: "matthew dot jones at mssm dot edu"
			}
		],
		dataIntegration: [
			{
				name: "Christopher Mader",
				affiliation: "UM",
				email: "cmader at miami dot edu"
			},
			{
				name: "Yan Kou",
				affiliation: "ISMMS",
				email: "yan dot kou at mssm dot edu"
			},
			{
				name: "Nicolas Fernandez",
				affiliation: "ISMMS",
				email: "nicolas dot fernandez at mssm dot edu"
			},
			{
				name: "Zichen Wang",
				affiliation: "ISMMS",
				email: "zichen dot wang at mssm dot edu"
			},
			{
				name: "Andrew Rouillard",
				affiliation: "ISMMS",
				email: "andrew dot rouillard at mssm dot edu"
			},
			{
				name: "Deepthi Puram",
				affiliation: "UM",
				email: "d dot puram at miami dot edu"
			},
		]
	};
});