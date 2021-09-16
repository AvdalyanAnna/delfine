'use strict';

(function ($) {

    var $window = $(window),
        winHeight = $window.height(),
        deg = 0,
        inScroll = false,
        _this = $('.nav__menu-1');

    $window.on('resize', function () {
        return winHeight = $window.height();
    });

    function setLayout($this) {
        var sides = $this.children();
        _this.append('<nav class="s3d__navigation"><ul class="s3d__navigation-list"></ul></nav>');

        sides.each(function (i) {
            var linkText = $(this).find('h1').text();

            if (i > 0) {
                $(this).css({
                    'transform': 'rotateX(' + -90 * i + 'deg)',
                    '-webkit-transform': 'rotateX(' + -90 * i + 'deg)'
                });
            }

            _this.find('.s3d__navigation-list')
                .append('<li class="s3d__navigation-item"><a href="#" class="s3d__navigation-link">' + linkText + '</a></li>');
        });
        $this.append('<div class="s3d__content"></div>');

        $this.find('.s3d__content').append(sides);

        sides.addClass('s3d__side');
    }

    function set3D($this) {
        var container = $this.find('.s3d__content'),
            sides = container.find('.s3d__side');

        $this.css({
            'perspective': winHeight,
            '-webkit-perspective': winHeight
        });

        container.add(sides).css({
            'transform-origin': '50% 50% ' + (-winHeight / 2) + 'px',
            '-webkit-transform-origin': '50% 50% ' + (-winHeight / 2) + 'px'
        });
    }

    function setActiveElem(_this) {
        _this.find('.s3d__side').first().addClass('active');
        _this.find('.s3d__navigation-item').first().addClass('active');
    }

    var methods = {
        init: function () {
            return this.each(function () {
                var $this = $(this);

                $this.addClass('s3d');

                // Вёрстка
                setLayout($this);

                // Перспектива
                set3D($this);

                // Активные элементы
                setActiveElem(_this);

                // Адаптация
                $window.on('resize', function () {
                    set3D($this);
                });

                // Скролл
                $('body').on('mousewheel', function (e) {

                    var container = $this.find('.s3d__content'),
                        sides = container.find('.s3d__side'),
                        activeSide = sides.filter('.active'),
                        navItem = _this.find('.s3d__navigation-item'),
                        posActive;

                    if (!inScroll) {
                        inScroll = true;

                        if (e.deltaY === 1) {

                            if (activeSide.prev().length) {
                                deg -= 90;
                            }

                        } else if (e.deltaY === -1) {

                            if (activeSide.next().length) {
                                deg += 90;
                            }
                        }
                    }

                    posActive = deg / 90;

                    if (posActive === 0) {
                        $('.header').removeClass('header-active')
                        $('.nav').removeClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    } else if(posActive === 2){
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.counterUp').rCounter();
                        $('.an_experience-list').addClass('animated')
                    } else {
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    }

                    sides.eq(posActive).addClass('active').siblings().removeClass('active');

                    container.css({
                        'transform': 'rotateX(' + deg + 'deg)',
                        '-webkit-transform': 'rotateX(' + deg + 'deg)'
                    });

                    setTimeout(function () {
                        inScroll = false;
                    }, 1000);

                    navItem.eq(posActive).addClass('active').siblings().removeClass('active');
                });

                $(document).on("click", ".scroll", function (e) {
                    var container = $this.find('.s3d__content'),
                        sides = container.find('.s3d__side'),
                        activeSide = sides.filter('.active'),
                        navItem = _this.find('.s3d__navigation-item'),
                        posActive;

                    if (activeSide.next().length) {
                        deg += 90;
                    }

                    posActive = deg / 90;

                    if (posActive === 0) {
                        $('.header').removeClass('header-active')
                        $('.nav').removeClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    } else if(posActive === 2){
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.counterUp').rCounter();
                        $('.an_experience-list').addClass('animated')
                    } else {
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    }

                    sides.eq(posActive).addClass('active').siblings().removeClass('active');

                    container.css({
                        'transform': 'rotateX(' + deg + 'deg)',
                        '-webkit-transform': 'rotateX(' + deg + 'deg)'
                    });

                    setTimeout(function () {
                        inScroll = false;
                    }, 1000);

                    navItem.eq(posActive).addClass('active').siblings().removeClass('active');
                })

                // Клик по меню
                $(document).on('click', '.s3d__navigation-link', function (e) {
                    e.preventDefault();
                    var $this = $(this),
                        navItem = $this.closest('.s3d__navigation-item'),
                        posItem = navItem.index(),
                        container = $('.s3d').find('.s3d__content'),
                        sides = container.find('.s3d__side');

                    deg = 90 * posItem;

                    if (posItem === 0) {
                        $('.header').removeClass('header-active')
                        $('.nav').removeClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    } else if(posItem === 2){
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.an_experience-list').addClass('animated')
                        $('.counterUp').rCounter();
                    } else {
                        $('.header').addClass('header-active')
                        $('.nav').addClass('nav-active')
                        $('.an_experience-list').removeClass('animated')
                    }

                    navItem.addClass('active').siblings().removeClass('active');

                    sides.eq(posItem).addClass('active').siblings().removeClass('active');

                    container.css({
                        'transform': 'rotateX(' + deg + 'deg)',
                        '-webkit-transform': 'rotateX(' + deg + 'deg)'
                    });

                    return deg;
                });
            });
        },
        destroy: function () {
            return this.each(function () {
                $('body').off('mousewheel');
                $(document).off('click', '.s3d__navigation-link');
            });
        }
    };

    $.fn.scroll3D = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.scroll3D');
        }
    };
})(jQuery);