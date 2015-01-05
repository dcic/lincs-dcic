var mod = angular.module("carouselMod", []);

mod.factory("carousel", function() {
	return {
		images: [
            {
                'src': 'http://icahn.mssm.edu/static_files/MSMC/Site%20Components/Carousels/2011%20landing%20carousel/Rebranding%20Carousel%20items/MS&FPA_USNews_Ranking_Revised.jpg'
            },
            {
                'src': 'http://icahn.mssm.edu/static_files/MSSM/Site%20Components/Carousels/2011%20Landing/Rebranding%20Carousel%20items/Icahn_Web_Banner_Schadt.jpg'
            }
	    ]
    };
});
