var lbl;
$(document).ready(function(){
    lbl = $('#slider-menu li.desc h2');

    $('#slider-text h2').each(function(index, element){ $(element).addClass('slide-' + (index + 1)); });

    $('#slider-menu li a').each(function(index, element){ $(element).attr('rel', (index + 1)); });

    $('#slider-menu li a').hover(function(){
        var clicked = $(this);
        var relspot = clicked.attr('rel');
        selectItem(relspot);
    });

    function selectItem(num) {
        var relpos = 22 + (num * 37) + 1;

        lbl.animate({ opacity: 0.1 }, { queue: false });

        $('#slider-menu li.desc').animate({
            top: relpos
        },{
            queue: false,
            complete: function(index, element) {
                $('#slider-menu li.desc h2 > span')
                    .text($('#slider-text .slide-' + num).text());
                lbl.animate({ opacity:1 }, { queue:false });
            }
        });
    }
    selectItem(2);
});

$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'sliceDown',
        directionNav: false
    });
});