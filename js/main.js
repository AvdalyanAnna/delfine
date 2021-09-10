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
       var  myMap = new ymaps.Map("map", {
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

    // initiate full page scroll
    if ($('body').is('.home')) {
        $("#fullpage").fullpage({
            scrollBar: true,
            scrollOverflow: true,
            responsiveWidth: 768,
            navigation: true,
            navigationTooltips: ["Главная", "Уникальность", "Опыт", "Преимущества", "Услуги","Контакты"],
            anchors: ["section_one", "uniqueness", "an_experience", "advantages", "services","contact"],
            menu: "#myMenu",
            fitToSection: false,
            afterLoad: (anchorLink, index) => {
                //using index
                if ($('body').hasClass('home')) {
                    if (index === 1) {
                        /* add opacity to arrow */
                        $('.header').removeClass('header-active')
                        $('.nav').removeClass('nav-active')
                        $('#fp-nav ').removeClass('active')
                    } else if (index !== 1) {
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('#fp-nav ').addClass('active')
                    }
                }
            }
        });

        // move section down one
        $(document).on("click", ".scroll", () => {
            $.fn.fullpage.moveSectionDown();
        });

    }

    if ($('div').is('.preloader')) {
        setTimeout(function () {
            $('.preloader').css('transform', 'translateY(-100%)')
        }, 500);
    }

    /*      Counter     */
    $('.counterUp').rCounter();


    // $('.counterUp').counterUp({
    //     delay: 10,
    //     time: 1000,
    //     offset: 70,
    //     beginAt: 100,
    //     formatter: function (n) {
    //         return n.replace(/,/g, '.');
    //     }
    // });



});
