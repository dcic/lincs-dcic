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
            url: "http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/hms-lincs",
            target: "_blank"
        },
        {
            title: "LINCS Center for Transcriptomics",
            url: "http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics",
            target: "_blank"
        },
        {
            title: "LINCS Proteomic Characterization Center for Signaling and Epigenetics",
            url: "http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/lincs-pccse",
            target: "_blank"
        },
        {
            title: "Microenvironment Perturbagen LINCS Center",
            url: "http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/mep-lincs",
            target: "_blank"
        },
        {
            title: "NeuroLINCS Center",
            url: "http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/neurolincs",
            target: "_blank"
        }
    ];
}]);
