var mod = angular.module("carouselMod", []);

mod.controller("carouselCtrl", ["$scope", "$http", "$element", function($scope, $http, $element) {

    /* Convert to real jQuery object, not AngularJS's pseudo-jQuery object. */
    $scope.$el = $($element);
    $scope.$img = $scope.$el.find('img').first();
    $scope.$link = $scope.$el.find('a').first();

    var HIGHLIGHT_CLASS = 'carousel-highlight';

    var CAROUSEL_SPEED = 8000;

    /* Global to module so that buttons can override it. */
    var idx;

    var defaultImg = '';

    var images = [
        {
            'src': 'http://icahn.mssm.edu/static_files/MSMC/Site%20Components/Carousels/2011%20landing%20carousel/Rebranding%20Carousel%20items/MS&FPA_USNews_Ranking_Revised.jpg',
            'link': 'http://www.mssm.edu',
            'target': '_blank',
            'id': 'carousel-btn-0'
        },
        {
            'src': 'http://icahn.mssm.edu/static_files/MSSM/Site%20Components/Carousels/2011%20Landing/Rebranding%20Carousel%20items/Icahn_Web_Banner_Schadt.jpg',
            'link': 'http://www.mssm.edu',
            'target': '_blank',
            'id': 'carousel-btn-1'
        },
        {
            'src': 'http://icahn.mssm.edu/static_files/MSSM/Site%20Components/Carousels/2011%20Landing/Rebranding%20Carousel%20items/MSSM_Banner_SinaInnovations_Final.jpg',
            'link': 'http://www.mssm.edu',
            'target': '_blank',
            'id': 'carousel-btn-2'
        }
	];

    $scope.setButtons = function() {
        var self = this;
	    $.each(images, function(i, val) {
	        self.$el.find('#carousel-btns').append(
	            '<a id="' + val.id + '" href="" class="carousel-btn" style="right: ' + (30+i*30) + 'px;"></a>'
	        );
	    });
	};

    $scope.init = function() {
        /* This comes first so that we can highlight the buttons. */
        this.setButtons();

        var self = this,
            /* Since we build the buttons right-to-left, the first button is at the end of the array. */
            firstImgObj = images[images.length-1];

        self.$img.attr('src', firstImgObj.src);
        self.$el.find('#' + firstImgObj.id).addClass(HIGHLIGHT_CLASS);
        self.$link.attr('href', firstImgObj.link);
        self.$link.attr('target', firstImgObj.target);
        
        idx = 1;
        setInterval(function() {
            self.$img.fadeOut(function() {
                var imgObj;
                if (idx < 0) {
                    idx = images.length-1;
                }

                /* Make sure this giant banner is never blank */
                if (!images[idx].src) {
                    self.$link.attr('href', 'http://www.lincs-dcic.org/');
                } else {
                    imgObj = images[idx];
                    self.$el.find('.carousel-btn').removeClass(HIGHLIGHT_CLASS);
                    self.$el.find('#' + imgObj.id).addClass(HIGHLIGHT_CLASS);
                    self.$img.attr('src', imgObj.src).fadeIn();
                    self.$link.attr('href', imgObj.link);
                    self.$link.attr('target', imgObj.target);
                }
                idx--;
            });
        }, CAROUSEL_SPEED);
    };
}]);
