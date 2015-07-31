var mod = angular.module("indexMod", []);

mod.controller("indexCtrl", ["$scope", "$sce", function($scope, $sce) {

    $scope.overviewText = $sce.trustAsHtml("The BD2K-LINCS DCIC is comprised of four major components: Integrated Knowledge Environment (IKE), Data Science Research (DSR), Community Training and Outreach (CTO) and Consortium Coordination and Administration (CCA). The Center is constructing a high-capacity scalable integrated knowledge environment enabling federated access, intuitive querying and integrative analysis and visualization across all LINCS resources and many additional external data types from other relevant resources. The Center’s data science research projects are aimed at addressing various data integration and intracellular molecular regulatory network challenges. The Center aims to develop: 1) methods to connect cellular and organismal phenotypes with molecular cellular signatures, and 2) novel data visualization methods for dynamically interacting with large-genomics and proteomics datasets.");

    twitterFetcher.fetch({
        id: '540278089990029312',
        domId: 'twitter-fetcher',
        maxTweets: 1,
        enableLinks: true,
        showUser: false,
        showTime: false,
        showRetweet: false,
        showInteraction: false
    });

    $scope.overviewList = [
        {
            title: "Integrated Knowledge Environment",
            link: ""
        },
        {
            title: "Data Science Research",
            link: ""},
        {
            title: "Training and Outreach",
            link: ""
        }
    ];

    $scope.researchList = [
        {
            title: "Analyze Data",
            link: "#/resources"
        },
        {
            title: "Engage In Data Science Research Webinars",
            link: "#/webinars"
        },
        {
            title: "Collaborate with the BD2K-LINCS DCIC",
            link: "#/edsr"
        },
        {
            title: "Meet Our Team",
            link: "#/about"
        }
    ];

    $(".rollover").hover(function(evt) {
        var $el = $(evt.originalEvent.target);
        $el.closest(".rollover").find(".overlay").toggleClass("hidden");
    });
}]);
