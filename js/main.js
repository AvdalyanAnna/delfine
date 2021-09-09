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


                //using index
                // if (index == 2) {
                //     /* animate skill bars */
                //     $(".skillbar").each(function () {
                //         $(this)
                //             .find(".skillbar-bar")
                //             .animate(
                //                 {
                //                     width: $(this).attr("data-percent")
                //                 },
                //                 2500
                //             );
                //     });
                // }
            }
        });

        // move section down one
        $(document).on("click", ".scroll", () => {
            $.fn.fullpage.moveSectionDown();
        });

    }



    // if ($('div').is('.video-list')) {
    //     $('.btn-play').on('click', function (e) {
    //         e.preventDefault();
    //         let iframe = $(this).parent().children('iframe')
    //
    //         let symbol = iframe[0].src.includes("autoplay=0") > -1
    //             ? iframe[0].src.slice(0, -1) + "1"
    //             : false;
    //
    //         let video = iframe[0].src = symbol;
    //
    //         console.log(video)
    //     })
    // }
    //

    //
    // // fullpage.js link navigation
    // $(document).on("click", "#skills", function () {
    //     $.fn.fullpage.moveTo(2);
    // });
    //
    // $(document).on("click", "#projects", function () {
    //     $.fn.fullpage.moveTo(3);
    // });
    //
    // $(document).on("click", "#contact", function () {
    //     $.fn.fullpage.moveTo(4);
    // });

});
