var mod = angular.module("teamMod", []);

mod.controller("teamCtrl", ["$scope", function($scope) {

	var ISMMS = "Icahn School of Medicine at Mount Sinai",
		UC = "University of Cincinnati",
		UM = "University of Miami";

    $scope.principalInvestigators = [
        {
            name: 'Avi Ma\'ayan PhD',
            position: 'Associate Professor',
            affiliation: ISMMS,
            email: 'avi.maayan {at} mssm.edu',
            portrait: 'avi.jpg',
            logo: 'mssm.jpg',
            website: 'http://icahn.mssm.edu/research/labs/maayan-laboratory'
        },
        {
            name: 'Mario Medvedovic PhD',
            position: 'Associate Professor',
            affiliation: UC,
            email: 'mario.medvedovic {at} uc.edu',
            portrait: 'mario.jpg',
            logo: 'university-of-cincinnati.jpg',
            website: 'http://www.eh3.uc.edu/'
        },
        {
            name: 'Stephan Schurer PhD',
            position: 'Associate Professor',
            affiliation: UM,
            email: 'sschurer {at} med.miami.edu',
            portrait: 'stephan.jpg',
            logo: 'university-of-miami.jpg',
            website: 'http://ccs.miami.edu/?p=1103'
        }
    ];

	$scope.groups = [
        {
	        name: "Icahn School of Medicine at Mount Sinai",
	        members: [
                {
                    firstName: "Gregory",
                    lastName: "Gundersen",
                    affiliation: ISMMS,
                    email: "gregory.gundersen {at} mssm.edu"
                },
                {
                    firstName: "Qiaonan",
                    lastName: "Duan",
                    affiliation: ISMMS,
                    email: "qiaonan.duan {at} mssm.edu"
                },
                {
                    firstName: "Matthew",
                    lastName: "Jones",
                    affiliation: ISMMS,
                    email: "matthew.jones {at} mssm.edu"
                },
                {
                    firstName: "Yan",
                    lastName: "Kou",
                    affiliation: ISMMS,
                    email: "yan.kou {at} mssm.edu"
                },
                {
                    firstName: "Nicolas",
                    lastName: "Fernandez",
                    affiliation: ISMMS,
                    email: "nicolas.fernandez {at} mssm.edu"
                },
                {
                    firstName: "Zichen",
                    lastName: "Wang",
                    affiliation: ISMMS,
                    email: "zichen.wang {at} mssm.edu"
                },
                {
                    firstName: "Andrew",
                    lastName: "Rouillard",
                    affiliation: ISMMS,
                    email: "andrew.rouillard {at} mssm.edu"
                },
                {
                    firstName: "Neil",
                    lastName: "Clark",
                    affiliation: ISMMS,
                    email: "neil.clark {at} mssm.edu"
                },
                {
                    firstName: "Sherry",
                    lastName: "Jenkins",
                    affiliation: ISMMS,
                    email: "sherry.jenkins {at} mssm.edu"
                }
            ]
        },
        {
            name: "University of Cincinnati",
            members: [
                {
                    firstName: "Jarek",
                    lastName: "Meller ",
                    affiliation: "University of Cincinnati",
                    email: "jmeller {at} cchmc.org"
                },
                {
                    name: "Michal",
                    lastName: "Kouril",
                    affiliation: "University of Cincinnati",
                    email: "michal.kouril {at} cchmc.org"
                }
            ]
        },
        {
            name: "University of Miami",
            members: [
                {
                    firstName: "Christopher",
                    lastName: "Mader",
                    affiliation: UM,
                    email: "cmader {at} miami.edu"
                },
                {
                    firstName: "Amar",
                    lastName: "Koleti",
                    affiliation: UM,
                    email: "akoleti {at} miami.edu"
                },
                {
                    firstName: "Caty",
                    lastName: "Chung",
                    affiliation: UM,
                    email: "c.chung {at} med.miami.edu"
                },
                {
                    firstName: "Deepthi",
                    lastName: "Puram",
                    affiliation: UM,
                    email: "d.puram {at} miami.edu"
                },
                {
                    firstName: "Dusica",
                    lastName: "Vidovic",
                    affiliation: UM,
                    email: "dvidovic {at} med.miami.edu"
                }
            ]
        },
        {
            name: "Investigators of External Data Science Research Projects",
            members: [
                {
                    firstName: "Kayee",
                    lastName: "Yeung",
                    affiliation: "University of Washington",
                    email: "kayee {at} u.washington.edu"
                },
                {
                    firstName: "Ziv",
                    lastName: "Bar-Joseph",
                    affiliation: "Carnegie-Mellon University",
                    email: "zivbj {at} cs.cmu.edu"
                },
                {
                    firstName: "Peter",
                    lastName: "Hornbeck",
                    affiliation: "Cell Signaling Inc.",
                    email: "phornbeck {at} cellsignal.com"
                }
            ]
        }
    ];
}]);
