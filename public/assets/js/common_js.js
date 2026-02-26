$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $("#to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('#to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });


     /* ==  float_box_container button  == */
    $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function(){
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function(){
        $(this).parent().fadeOut();
    })

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
        });
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // ---------- to top -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });
        
});



// ------------ Preloader -----------
$( function() {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Set initial states explicitly
    gsap.set("header, .header", { opacity: 0, visibility: "visible", y: 200 });
    gsap.set(".tc-header-style1, .tc-navbar-style1", { opacity: 0, visibility: "visible" });

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 0.5,
        duration: 0.5,
        y: -100,
        opacity: 0,
        ease: "power2.in",
    });
    tl.to(svg, {
        duration: 0.4,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.4,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        duration: 0.6,
        y: -1500,
        ease: "power3.inOut",
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
        onComplete: function() {
            $('body').addClass('loaded');
        }
    });
    tl.to(
        "header , .header",
        {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: "power3.out",
        },
        "-=0.4"
    );
    tl.from(
        "header .container , .header .container",
        {
            duration: 0.8,
            y: 40,
            opacity: 0,
            ease: "power2.out",
            delay: 0.1,
        },
        "-=1.0"
    );
    tl.set("header, .header", { clearProps: "all" });
});


$(window).on("load", function () {

    // ------------ Preloader -----------
    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
        
        // Refresh ScrollTrigger after preloader
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 1500);

});


// ----------- side menu -----------
$(document).ready(function () {
    $(".side_menu_btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    $(".side_menu_style4 .clss").on("click", function () {
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    // ----------- RTL/LTR Content Switching -----------
    function updateContentVisibility() {
        const isRTL = $('html').attr('dir') === 'rtl';
        
        if (isRTL) {
            $('.ltr-content').hide();
            $('.rtl-content').show();
        } else {
            $('.ltr-content').show();
            $('.rtl-content').hide();
        }
    }

    // Initial check
    updateContentVisibility();

    // Watch for direction changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                updateContentVisibility();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir']
    });
});


// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1,
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });

    // Handle anchor links with ScrollSmoother
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                smoother.scrollTo(target, true, "top top");
            }
        });
    });

    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
                // toggleActions: 'play none play reset'
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

    // GSAP ScrollTrigger animations for .wow elements (replaces WOW.js for ScrollSmoother compatibility)
    gsap.utils.toArray('.wow').forEach((element) => {
        const delay = parseFloat(element.getAttribute('data-wow-delay')) || 0;
        const duration = element.classList.contains('slow') ? 1.5 : 1;
        
        // Default animation: fade in with slight upward movement
        let fromProps = { 
            opacity: 0,
            y: 30
        };
        
        // Customize based on animation class
        if (element.classList.contains('fadeInLeft')) {
            fromProps = { opacity: 0, x: -30 };
        } else if (element.classList.contains('fadeInRight')) {
            fromProps = { opacity: 0, x: 30 };
        } else if (element.classList.contains('fadeIn')) {
            fromProps = { opacity: 0 };
        } else if (element.classList.contains('zoomIn')) {
            fromProps = { opacity: 0, scale: 0.95 };
        }
        
        gsap.from(element, {
            ...fromProps,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
});





