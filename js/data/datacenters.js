var mod = angular.module("datacentersMod", []);

mod.controller("datacentersCtrl", ["$scope", function($scope) {
	$scope.entries = [
        {
            title: "Drug Toxicity Signature Generation Center",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/dtoxs/",
            target: "_blank"
        },
	{
            title: "HMS LINCS Center",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/hms-lincs-u54/",
            target: "_blank"
        },
        {
            title: "LINCS Center for Transcriptomics",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-trx/",
            target: "_blank"
        },
        {
            title: "LINCS Proteomic Characterization Center for Signaling and Epigenetics",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-prx/",
            target: "_blank"
        },
        {
            title: "Microenvironment Perturbagen LINCS Center",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/oregon-u/",
            target: "_blank"
        },
        {
            title: "NeuroLINCS Center",
            url: "http://www.lincsproject.org/centers/data-and-signature-generating-centers/neurolincs/",
            target: "_blank"
        }
    ];
}]);
