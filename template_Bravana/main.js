$(function () {
    //  first owl carousel begin
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // my controls begin Plugin Customize
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    //  portfolio section hover begin
    $('.list-group .list-group-item').hover(function () {
        $(this).find("img").css("transform", "translateY(-20%)");
        $(this).find(".info").css("transform", "translateY(0%)");
    }, function () {
        $(this).find("img").css("transform", "translateY(0)");
        $(this).find(".info").css("transform", "translateY(100%)");
    })
    // portfolio section hover end
    // scrool begin
    //  my varuiables begin
    let  first = document.getElementById("first");
    let  second = document.getElementById("second");
    let  third = document.getElementById("third");
    let  fourth = document.getElementById("fourth");

    k = 0;
    // my variables end
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').css("display", "block");
        } else {
            $('#scroll').css("display", "none");
        }
        // begin
        if (window.pageYOffset > 1000) {
            var x = setInterval(function funksiya() {
                if (k < 2571) {
                    first.innerHTML = k;
                    k = k + 1;
                    if (k < 1365) {
                        second.innerHTML = k;
                        k = k + 1;
                        if (k < 190) {
                            k = k + 1;
                            third.innerHTML = k;
                            if (k < 130) {
                                fourth.innerHTML = k;

                            }
                        }
                    }
                }
            }, 25)
        }
        // end
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // scrool end

    // panel bottom widget begin
    let count = 1;
    $(".panel-heading ").on("click", function () {
        count++;
        if (count % 2 == 0) {
            $("#contact-widget-bottom").css("bottom", "0");
            $(".fa-caret-down").css("display", "block");
            $(".fa-caret-up").css("display", "none");
        }
        else {
            $("#contact-widget-bottom").css("bottom", "-455px");
            $(".fa-caret-down").css("display", "none");
            $(".fa-caret-up").css("display", "block");
        }
    })
    // widget bottom end
    // page2 Owl carousel begin

    // page2 owl carousel end
    // blog page active ul begin
    $(".blogMainWrapper .page-content .container .row .col-md-9 div.margin-top-50 ul.pagination li").on("click", function () {
        $(".blogMainWrapper .page-content .container .row .col-md-9 div.margin-top-50 ul.pagination li").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    })
    // active end
    // colorChanger begin
    let colorCounter = 1;
    $(".changeColor div.spinner").on("click", function () {
        colorCounter++;
        if (colorCounter % 2 == 0) {
            $(".changeColor").css("left", "0");
        }
        else {
            $(".changeColor").css("left", "-122px");
        }
    })

    $(".changeColor ul.colorList li a").on("click", function () {
        let choosenClass = $(this).attr("class");
        $(".no-padding-top .icon-info-fullwidth .icon-info .title:after").css("backgroundColor", choosenClass);
        $("section.about .container .row .col-md-6 .icon-info-big i").css("color", choosenClass);
        $("section.about .container .row .col-md-6 a.btn-primary").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,


        });
        // qaldi
        $("section.about .container .row .col-md-6 a.btn-primary:hover").css("Color", "white");
        // qaldi
        $(".servicesSec .container .icon-info-group .col-md-4 .icon-info-left i").css("color", choosenClass);
        $(".portfolioSec .container ul li .portfolio-simple .info a").css("background-color", choosenClass);
        $(".callToAction .ctaBackImage .container p a").css("background-color", choosenClass);
        $("footer .container .row .col-md-4 p a").css("color", choosenClass);
        $("footer .container .row .col-md-4 address p i").css("color", choosenClass);
        $("footer .container .row .col-md-4 .newsletter-form .input-group span button").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $("section.about .container .row .col-md-6 .lead a").css("color", choosenClass);
        $("section.about .container .row .col-md-6 .leadContent a").css("color", choosenClass);
        // qaldi
        $(".no-padding-top .icon-info-fullwidth .icon-info .title:after").css("background-color", choosenClass);
        // qaldi
        $("#contact-widget-bottom .panel-heading").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $("#contact-widget-bottom .panel-body form button").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $(".changeColor div.spinner i").css("color", choosenClass);
        // index shop begin
        $(".mainWrapper section.newArrivals .container ul li .product-item .product-info .bottom .btn-addtocart").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
            "color": "white"
        });
        $("span.label-info").css("color", choosenClass);
        $(".mainWrapper section.shopCategory .container ul.list-unstyled li.category-box .overlay-info .btn").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
            "color": "white"
        });
        $(".mainWrapper section.customerServices .cta-big .container .main .search-form .input-group span button").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $(".mainWrapper section.customerServices .cta-big .container .icon-info-group .col-md-4 .icon-info-center a").css({
            "color": choosenClass,
        });
        $(".mainWrapper .has-border-top .container .row .col-md-8 .row .col-md-6 address a").css("color", choosenClass);
        $(".mainWrapper .has-border-top .container .row .col-md-8 .row .col-md-6 form .input-group span button").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        // index shop end
        // page profile begin
        $(".mainWrapper .page-header .container ol li a").css("color", choosenClass);
        $(".mainWrapper .mainContent .row .col-md-8 .profile-info-right ul li a.active").css("background-color", choosenClass);
        $(".mainWrapper .mainContent .row .col-md-4 .profile-info-left .action-buttons .row .col-xs-6 .btn-success").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $(".mainWrapper .mainContent .row .col-md-8 .profile-info-right .tab-content .tab-pane .activity-item .media-body p a").css("color", choosenClass);
        // page profile color end
        // blog begin color
        $(".blogMainWrapper .page-header .container ol.breadcrumb li a").css("color", choosenClass);
        $(".blogMainWrapper .page-content .container .row .col-md-9 .entry-post-fullwidth div.entry-content div.excerpt p.read-more a").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $(".blogMainWrapper .page-content .container .row .col-md-9 div.margin-top-50 ul.pagination li.active a").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        $(".blogMainWrapper .page-content .container .row .col-md-3 div.sidebar div.widget form div.input-group span.input-group-btn button").css({
            "backgroundColor": choosenClass,
            "border-color ": choosenClass,
        });
        // blog end
    })

    // colorChanger end
})


