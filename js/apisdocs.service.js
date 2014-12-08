var apisdocs = angular.module("LINCSDCIC.apisdocs", []);

apisdocs.service("apisdocs", [ "$scope", function( $scope ) {
	var service = {
		links: [
			{
				title: "Data standards",
				link: "http://www.lincsproject.org/data/data-standards/",
				target: "_blank"
			},
			{
				title: "Enrichr API",
				link: "http://amp.pharm.mssm.edu/Enrichr/#help",
				target: "_blank"
			},
			{
				title: "lincscloud API",
				link: "http://api.lincscloud.org/",
				target: "_blank"
			},
			{
				title: "HMS LINCS API"
				link: "https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit",
				target: "_blank"
			}
		]
	}

	return service;
}]);