window.onload = function() {

    $('.section').mouseover(function() {
        $(this).find('ul').removeClass('hidden');
    });

    $('.section').mouseout(function() {
        $(this).find('ul').addClass('hidden');
    });
};