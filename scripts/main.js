$(document).ready(function () {


    // SLIDERS

    $('.slider-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $('.popup-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });



    //SCROLL

    $('.navigation ul li a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 700);
        }
        return false;
    });



    // POPUP

    $('.btn-menu').on('click', function(event){
        event.preventDefault();
        $('.wrapper-popup').fadeIn(400,
            function(){
                $('.popup')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });

    $('.popup-close, .wrapper-popup').on('click', function(){
        $('.popup')
            .animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.wrapper-popup').fadeOut(400);
                }
            );
    });





});
