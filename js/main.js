$(document).ready(function(){

var site_title = "Купить FizzySlim, инструкция, цена. EcoSlim- купить в аптеке"



    $('body, html').on('click', '.burger', function () {
        $('.main_nav').toggle();
        return false;
    });

    $('.countdown').countdown({
        date: 24 * 60 * 60 * 1000 + new Date().valueOf(),
        render: function(data) {
            var el = $(this.el);
            var new_hours = this.leadingZeros(data.hours, 2);
            var new_min = this.leadingZeros(data.min, 2);
            var new_sec = this.leadingZeros(data.sec, 2);
            el.empty()
                .append("<div><span>" + new_hours[0] + "</span><span>" + new_hours[1] + "</span></div>")
                .append("<div><span>" + new_min[0] + "</span><span>" + new_min[1] + "</span></div>")
                .append("<div><span>" + new_sec[0] + "</span><span>" + new_sec[1] + "</span></div>");
        }
    });
$('.toform').click(function () {
                $("html, body").animate({scrollTop: $("form").offset().top - 300}, 1000);
                return false;
            });


$(function() {
    if (window.innerWidth > 1131) {
    $('.bx-slider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 10
    });
    }
    else {
        $('.bx-slider').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 360,
            slideMargin: 10
        });
    }
});
});


 

