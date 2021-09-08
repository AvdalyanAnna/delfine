
$(function () {
    $('.hamburger').on('click', () => {
        $('.hamburger button').toggleClass('animate')
        $('.nav').toggleClass('active')
        $('body.home').toggleClass('overflow-hidden')
    })

    // initiate full page scroll
    if($('body').is('.home')){
        $("#fullpage").fullpage({
            scrollBar: true,
            responsiveWidth: 768,
            navigation: true,
            // navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
            // anchors: ["home", "about", "portfolio", "contact", "connect"],
            // menu: "#myMenu",
            fitToSection: false,
            afterLoad:  (anchorLink, index) => {
                //using index
                if($('body').hasClass('home')){
                    if (index === 1) {
                        /* add opacity to arrow */
                        $('.header').removeClass('header-active')
                        $('.nav').removeClass('nav-active')
                    } else if (index !== 1) {
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
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
        $(document).on("click", ".scroll",   () => {
            $.fn.fullpage.moveSectionDown();
        });

    }

    if($('div').is('.accordion-head')){
        $('.accordion-head').on('click',function (){
            $(this).parent().toggleClass('accordion-active')
        })
    }




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
