var mod = angular.module("teamMod", []);

mod.controller("teamCtrl", ["$scope", function($scope) {

	var ISMMS = "Icahn School of Medicine at Mount Sinai",
		UC = "University of Cincinnati",
		UM = "University of Miami";

    $scope.principalInvestigators = [
        {
            name: 'Avi Ma\'ayan PhD',
            position: 'Professor',
            affiliation: ISMMS,
            email: 'avi.maayan {at} mssm.edu',
            portrait: 'avi.jpg',
            logo: 'mssm.jpg',
            website: 'http://icahn.mssm.edu/research/labs/maayan-laboratory'
        },
        {
            name: 'Mario Medvedovic PhD',
            position: 'Professor',
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
                    firstName: "Sherry",
                    lastName: "Jenkins",
                    affiliation: ISMMS,
                    email: "sherry.jenkins {at} mssm.edu"
                },
                {
                    firstName: "Simon",
                    lastName: "Koplev",
                    affiliation: ISMMS,
                    email: "simon.koplev {at} mssm.edu"
                },
                {
                    firstName: "Maxim",
                    lastName: "Kuleshov",
                    affiliation: ISMMS,
                    email: "maxim.kuleshov {at} mssm.edu"
                },
                {
                    firstName: "Anders",
                    lastName: "Dohlman",
                    affiliation: ISMMS,
                    email: "anders.dohlman {at} mssm.edu"
                },
		{
                    firstName: "Alex",
                    lastName: "Lachmann",
                    affiliation: ISMMS,
                    email: "alexander.lachmann {at} mssm.edu"
                },
		{
                    firstName: "Troy",
                    lastName: "Goff",
                    affiliation: ISMMS,
                    email: "troy.goff {at} mssm.edu"
                },
		{
                    firstName: "Caroline",
                    lastName: "Monteiro",
                    affiliation: ISMMS,
                    email: "caroline.monteiro {at} mssm.edu"
                }

            ]
        },
        {
            name: "University of Cincinnati",
            members: [
                {
                    firstName: "Jarek",
                    lastName: "Meller",
                    affiliation: "University of Cincinnati",
                    email: "mellerj {at} ucmail.uc.edu"
                },
                {
                    firstName: "Michal",
                    lastName: "Kouril",
                    affiliation: "University of Cincinnati",
                    email: "michal.kouril {at} cchmc.org"
                },
		{
                    firstName: "Matthew",
                    lastName: "Weirauch",
                    affiliation: "University of Cincinnati",
                    email: "matthew.weirauch {at} cchmc.org"
                },
		{
                    firstName: "Juozas",
                    lastName: "Vasiliauskas",
                    affiliation: "University of Cincinnati",
                    email: "vasilijs {at} ucmail.uc.edu"
                },
		{
                    firstName: "Wen",
                    lastName: "Niu",
                    affiliation: "University of Cincinnati",
                    email: "niuw {at} ucmail.uc.edu"
                },
		{
                    firstName: "Marcin",
                    lastName: "Pilarczyk",
                    affiliation: "University of Cincinnati",
                    email: "pilarcmn {at} ucmail.uc.edu"
                },
		{
                    firstName: "Szymon",
                    lastName: "Chojnacki",
                    affiliation: "University of Cincinnati",
                    email: "chojnasm {at} ucmail.uc.edu"
                },
		{
                    firstName: "Mehdi",
                    lastName: "Najafabadi",
                    affiliation: "University of Cincinnati",
                    email: "fazelnmi {at} ucmail.uc.edu"
                },
		{
                    firstName: "Naim",
                    lastName: "Mahi",
                    affiliation: "University of Cincinnati",
                    email: "mahina {at} ucmail.uc.edu"
                },
		{
                    firstName: "John",
                    lastName: "Reichard",
                    affiliation: "University of Cincinnati",
                    email: "reichajf {at} ucmail.uc.edu"
                },
		{
                    firstName: "Nicholas",
                    lastName: "Clark",
                    affiliation: "University of Cincinnati",
                    email: "clarkno {at} ucmail.uc.edu"
                },
		{
                    firstName: "Prudhvi",
                    lastName: "Shedimbi",
                    affiliation: "University of Cincinnati",
                    email: "shedimpro {at} ucmail.uc.edu"
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
                },
                {
                    firstName: "Vasileios",
                    lastName: "Stathias",
                    affiliation: UM,
                    email: "v.stathias {at} med.miami.edu"
                },
                {
                    firstName: "Bryce",
                    lastName: "Allen",
                    affiliation: UM,
                    email: "b.allen10 {at} med.miami.edu"
                },
                {
                    firstName: "Hande",
                    lastName: "Kucuk",
                    affiliation: UM,
                    email: "h.bakir {at} umiami.edu"
                },
                {
                    firstName: "Saurabh",
                    lastName: "Mehta",
                    affiliation: UM,
                    email: "saurabh.dtu {at} gmail.com"
                },
                {
                    firstName: "Qiong",
                    lastName: "Cheng",
                    affiliation: UM,
                    email: "qxc30 {at} med.miami.edu"
                },
                {
                    firstName: "Vance",
                    lastName: "Lemmon",
                    affiliation: UM,
                    email: "vlemmon {at} miami.edu"
                },
                {
                    firstName: "Ubbo",
                    lastName: "Visser",
                    affiliation: UM,
                    email: "visser {at} cs.miami.edu"
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
