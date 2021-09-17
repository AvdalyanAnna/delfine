$(function () {
    $('.hamburger').on('click', () => {
        $('.hamburger button').toggleClass('animate')
        $('.nav').toggleClass('active')
        $('#fp-nav ').toggleClass('active-fz')
    })

    if ($('div').is('#map')) {
        ymaps.ready(init_map_center);
    }

    function init_map_center() {
        var myMap = new ymaps.Map("map", {
            center: [55.791059392084655, 37.633846758299825],
            zoom: 10,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([55.791059392084655, 37.633846758299825], {},
            {
                iconLayout: 'default#image',
                iconImageHref: '/images/icon.png',
                iconImageSize: [30, 27],
                iconImageOffset: [-16.5, -46]
            });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('click', function () {
            myMap.behaviors.enable('scrollZoom');
        })
    }

    if ($('div').is('.accordion-head')) {
        $('.accordion-head').on('click', function () {
            $(this).parent().toggleClass('accordion-active')
        })
    }

    if ($('div').is('.preloader')) {
        setTimeout(() => {
            $('.preloader').css('transform', 'translateY(-100%)')
        }, 1000);
    }

    /*      Counter     */
    if ($('div').is('.counterUp')) {
        $('.counterUp').rCounter();
    }


    var flag = false;
    $(window).on('resize scroll', () => {
        onScroll();
    })

    function onScroll() {
        if ($(window).width() > 1601) {
            if(!flag){
                if ($('body').is('.home')) {
                    $('.main-content').scroll3D();
                    flag = true;
                }
            }
        } else {
            if ($('body').is('.home')) {
                $('.main-content').scroll3D('destroy');
            }
            if ($('.section_one').outerHeight() > window.scrollY) {
                $('.header').removeClass('header-active')
                $('.nav').removeClass('nav-active')
            } else {
                $('.header').addClass('header-active')
                $('.nav').addClass('nav-active')
            }

            var scrollPos = $(document).scrollTop();

            if ($(".an_experience-list").offset().top - $(window).height() <= scrollPos) {
                $('.an_experience-list').addClass('animated')
            }else{
                $('.an_experience-list').removeClass('animated')
            }
        }
    }
});
