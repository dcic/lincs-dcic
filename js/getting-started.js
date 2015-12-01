var mod = angular.module("gettingStartedMod", []);

mod.controller("gettingStartedCtrl", ["$scope", function($scope) {

    var started = false,
        selected = [],
        $p = $('.middle p');

    $('.start p').click(function() {
        if (started) {
            started = false;
            selected[0] = undefined;
            $('.end .row').fadeOut();
            $('.middle').fadeOut(function() {
                $p.css({
                    opacity: 1,
                    'box-shadow': '0 2px 5px 0 rgba(0, 0, 0, 0.26)'
                });
            });
            $('.content .row').hide();
        } else {
            started = true;
            $('.middle').fadeIn();
        }
    });

    $('.middle .section').click(function() {
        var class_ = '.' + $(this).parent().attr('data-selector');
        $p.css({
            opacity: 1,
            'box-shadow': '0 2px 5px 0 rgba(0, 0, 0, 0.26)'
        }).not(this)
            .css({
                opacity: .3,
                'box-shadow': 'none'
            });

        if (selected[0] !== class_) {
            $('.end .row').hide();
            selected[0] = class_;
            $('.end').find(class_).fadeIn();
            $('.content .row').hide();
        }
    });

    $('.end p').click(function() {
        $('.content .row').hide();
        var class_ = '.' + $(this).parent().attr('data-selector');
        console.log(class_);
        console.log($('.content').find(class_));
        $('.content').find(class_).fadeIn();
    });
}]);