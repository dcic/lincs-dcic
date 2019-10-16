var mod = angular.module("teamMod", []);

mod.controller("teamCtrl", ["$scope", function($scope) {

	var ISMMS = "Icahn School of Medicine at Mount Sinai",
		UC = "University of Cincinnati",
		UM = "University of Miami";

    $scope.principalInvestigators = [
        {
            name: 'Avi Ma\'ayan PhD',
            position: 'Professor and Director',
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
            position: 'Professor',
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
                    firstName: "Alexandra",
                    lastName: "Keenan",
                    affiliation: ISMMS,
                    email: "alexandra.keenan {at} icahn.mssm.edu"
                },
                {
                    firstName: "Kathleen",
                    lastName: "Jagodnik",
                    affiliation: ISMMS,
                    email: "kathleen.jagodnik {at} mssm.edu"
                },
                {
                    firstName: "Adil",
                    lastName: "Sabir",
                    affiliation: ISMMS,
                    email: "adil.sabir {at} mssm.edu"
                },
                {
                    firstName: "Sherry",
                    lastName: "Jenkins",
                    affiliation: ISMMS,
                    email: "sherry.jenkins {at} mssm.edu"
                },
                {
                    firstName: "Maxim",
                    lastName: "Kuleshov",
                    affiliation: ISMMS,
                    email: "maxim.kuleshov {at} mssm.edu"
                },
                {
                    firstName: "Alon",
                    lastName: "Bartal",
                    affiliation: ISMMS,
                    email: "alon.bartal {at} mssm.edu"
                },
		{
                    firstName: "Alexander",
                    lastName: "Lachmann",
                    affiliation: ISMMS,
                    email: "alexander.lachmann {at} mssm.edu"
                },
		{
                    firstName: "Eryk",
                    lastName: "Kropiwnicki",
                    affiliation: ISMMS,
                    email: "eryk.kropiwnicku {at} icahn.mssm.edu"
                },
		{
                    firstName: "Shirley",
                    lastName: "Xu",
                    affiliation: ISMMS,
                    email: "shirley.xu {at} mssm.edu"
                },
		{
                    firstName: "Daniel",
                    lastName: "Clarke",
                    affiliation: ISMMS,
                    email: "daniel.clarke {at} mssm.edu"
                },
		{
                    firstName: "Qi",
                    lastName: "Zeng",
                    affiliation: ISMMS,
                    email: "qi.zeng {at} icahn.mssm.edu"
                },
		{
                    firstName: "Megan",
                    lastName: "Wojciechowicz",
                    affiliation: ISMMS,
                    email: "megan.wojciechowicz {at} icahn.mssm.edu"
                },
	        {
                    firstName: "John Erol",
                    lastName: "Evangelista",
                    affiliation: ISMMS,
                    email: "johnerol.evangelista {at} mssm.edu"
                },
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
                    firstName: "Behrouz",
                    lastName: "Shamsaei",
                    affiliation: "University of Cincinnati",
                    email: "shamsabz {at} ucmail.uc.edu"
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
        //{
            //name: "Investigators of External Data Science Research Projects",
           // members: [
               // {
                   // firstName: "Cathy",
                   // lastName: "Wu",
                   // affiliation: "University of Delaware",
                   // email: "wuc {at} udel.edu"
               // },
                //{
                    //firstName: "Mark",
                   // lastName: "Grimes",
                    //affiliation: "University of Montana",
                    //email: "Mark.Grimes {at} mso.umt.edu"
                //},
               // {
                    //firstName: "Oliver",
                   // lastName: "He",
                    //affiliation: "University of Michigan",
                   // email: "yongqunh {at} med.umich.edu"
               // },
               // {
                   // firstName: "Jeffrey",
                   // lastName: "Saucerman",
                   // affiliation: "University of Virginia",
                    //email: "jjs3g {at} virginia.edu"
                //},
                //{
                   // firstName: "Kayee",
                   // lastName: "Yeung-Rhee",
                    //affiliation: "University of Washington",
                   // email: "kayee {at} uw.edu"
               // },
                // {
                //     firstName: "Kayee",
                //     lastName: "Yeung",
                //     affiliation: "University of Washington",
                //     email: "kayee {at} u.washington.edu"
                // },
                // {
                //     firstName: "Ziv",
                //     lastName: "Bar-Joseph",
                //     affiliation: "Carnegie-Mellon University",
                //     email: "zivbj {at} cs.cmu.edu"
                // },
                // {
                //     firstName: "Peter",
                //     lastName: "Hornbeck",
                //     affiliation: "Cell Signaling Inc.",
                //     email: "phornbeck {at} cellsignal.com"
                // }
           // ]
       // }
    ];
}]);
