// preloader
$(window).on('load', function(){
    $('.spinner_hol').fadeIn('fast');
    $('.spinner svg').css('visibility', 'visible');

    function animate() {
        TweenMax.set('.house-icon-line', {drawSVG: 0});
        TweenMax.to('.house-icon-line', 3, {drawSVG: true});
        TweenMax.to('.house-icon-line', 3, {drawSVG: '100% 100%', delay: 3});
    }

    animate();
    setTimeout(function(){
        $('.spinner_hol').fadeOut('slow', function(){
            $('.spinner svg').css('visibility', 'hidden');
            
        });
    }, 2000);
});

$(function() {
    // ios8 test
    var isIOS8 = function() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
    }

    if( isIOS8() == true ){
        $('.spinner_hol').css('display', 'none');
    }
});

$(function() {
  
    $('#fullpage').fullpage({

        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['Home', 'Our-History', '2016', '2015', '2014', '2013', '2012', '2011', '2008', '2004', 'Vision', 'Benefits', 'Products', 'Contact-Us'],
        navigation: true, //needed for navigation on timeline
        navigationPosition: 'left',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        // sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],

        // paddingTop: '3em',
        // paddingBottom: '10px',
        fixedElements: '.nav-wrapper, .menu, .form-contact, .arrow-mobile, .video-overlay, .modal, .spinner_hol',
        responsiveWidth: 768,
        responsiveHeight: 0,
        responsiveSlides: null,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: 'slider-2',

        //events
        onLeave: function(index, nextIndex, direction){

            if(index == 2 && nextIndex == 1 ){
               
                $('video').get(1).play();
                $('#fp-nav').css('display', 'none');
                $('.timeline-dates').css('opacity', '0');  
                $('.logo-wrapper').css('display', 'block');

            }

            if(index == 10 && nextIndex == 11 ){
               
                $('#fp-nav').css('display', 'none'); 
                $('.timeline-dates').css('opacity', '0'); 
            }
            if(index == 12 && nextIndex == 11 ){
                setTimeout(function(){
                    $('.slide-12-video').css('display', 'none'); 
                }, 550);
            }
            if(index == 12 && nextIndex == 13 ){
                $('.img-block').css('background-image', 'url(../images/pace-loop.jpg)')
                $('.slide-12-video').css('display', 'none'); 
            }
            if(index == 11 && nextIndex == 12 ){
                $('.slide-12-video').css('display', 'block'); 
                $('video').get(0).play();
            }
            if(index == 13 && nextIndex == 12 ){
                setTimeout(function(){
                    $('.slide-12-video').css('display', 'block'); 
                    $('video').get(0).play();
                }, 300);
            }
            
        },
        
     

        afterLoad: function(anchorLink, index){

            if(index == 1 ){
                $('video').get(1).play();

            }else{
                $('.logo-wrapper').css('display', 'none');                
            }
            if(index == 1 || index >= 11){
                $('#fp-nav').css('display', 'none'); 
                $('.timeline-dates').css('opacity', '0');            
            }else{
                $('#fp-nav').css('display', 'block');
                $('.timeline-dates').css('opacity', '1');
            }
            if(index == 2){
                $('.img-block').css( 'background-image', 'url(./images/timeline/today.jpg)' ),
                $('#sec-2 .svg-container').addClass('active'),
                $('.timeline-dates .first').addClass('active');
                $('.logo-wrapper').css('display', 'none');
            }else{
                $('.timeline-dates .first').removeClass('active');
            }
            if(index == 3){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2016.jpg)' ),
                $('#sec-3 .svg-container').addClass('active');
                $('.timeline-dates .second').addClass('active');
            }else{
                $('#sec-3 .svg-container').removeClass('active'),
                $('.timeline-dates .second').removeClass('active');
            }
            if(index == 4){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2015.jpg)' ),
                $('#sec-4 .svg-container').addClass('active'),
                $('.timeline-dates .third').addClass('active');
            }else{
                $('#sec-4 .svg-container').removeClass('active'),
                $('.timeline-dates .third').removeClass('active');
            }
            if(index == 5){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2014.jpg)' ),
                $('#sec-5 .svg-container').addClass('active'),
                $('.timeline-dates .fourth').addClass('active');
            }else{
                $('#sec-5 .svg-container').removeClass('active'),
                $('.timeline-dates .fourth').removeClass('active');
            }
            if(index == 6){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2013.jpg)' ),
                $('#sec-6 .svg-container').addClass('active'),
                $('.timeline-dates .fifth').addClass('active');
            }else{
                $('#sec-6 .svg-container').removeClass('active'),
                $('.timeline-dates .fifth').removeClass('active');
            }
            if(index == 7){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2012.jpg)' ),
                $('#sec-7 .svg-container').addClass('active'),
                $('.timeline-dates .sixth').addClass('active');
            }else{
                $('#sec-7 .svg-container').removeClass('active'),
                $('.timeline-dates .sixth').removeClass('active');
            }
            if(index == 8){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2011.jpg)' ),
                $('#sec-8 .svg-container').addClass('active'),
                $('.timeline-dates .seventh').addClass('active');
            }else{
                $('#sec-8 .svg-container').removeClass('active'),
                $('.timeline-dates .seventh').removeClass('active');
            }
            if(index == 9){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2008.jpg)' ),
                $('#sec-9 .svg-container').addClass('active'),
                $('.timeline-dates .eigth').addClass('active');
            }else{
                $('#sec-8 .svg-container').removeClass('active'),
                $('.timeline-dates .eigth').removeClass('active');
            }
            if(index == 10){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2004.jpg)' ),
                $('#sec-10 .svg-container').addClass('active'),
                $('.timeline-dates .ninth').addClass('active');
            }else{
                $('#sec-10 .svg-container').removeClass('active'),
                $('.timeline-dates .ninth').removeClass('active');
            }
            if(index == 11){
                // $('.img-block').css( 'background-image', 'url(./images/screenshots/pace-loop.png)' );
                $('.slide-12-video').css('display', 'none');
            }
            if(index == 12 ){
                $('.slide-12-video').css('display', 'block');
                $('video').get(0).play();
            }else{
                 $('video').get(0).pause();
            }
            if(index == 1 || index == 9 || index ==  11 || index == 12){
                $('nav .nav-title a').css('text-shadow', 'none');
            }else{
                $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
            }
                     
        },
       
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
        afterRender: function () {
            $('#nav-icon').click(function(){
                $(this).toggleClass('open'),
                $('.menu').toggleClass('active'),
                $('.nav-local').toggleClass('active');
            });

            $('video').get(1).play();
            $('video').get(2).pause();

            // $('#sec-11 .play, #sec-11 .video-overlay').click(function(){
            //     $('#video-sec-11').toggleClass('active');

            // });
           
            $('#sec-12 .play, #video-sec-12 .close-video').click(function(){
                $('#video-sec-12').toggleClass('active');
                $('video').get(2).play();
                if(!$('#video-sec-12').hasClass('active')){
                    $('video').get(2).pause();
                }
            });

            // Product modals
            // flexkey
            $('.dot-flexkey, .modal-flexkey .close-modal, .product-flexkey').click(function(){
                $('.modal-flexkey').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');   
            });
            $('.modal-flexkey .next').click(function(){
                $('.modal-fha').addClass('active'),
                $('.modal-flexkey').removeClass('active');
            });
             $('.modal-flexkey .prev').click(function(){
                $('.modal-jumbo').addClass('active'),
                $('.modal-flexkey').removeClass('active');
            });
            // fha
            $('.dot-fha, .modal-fha .close-modal, .product-fha').click(function(){
                $('.modal-fha').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');
            });
            $('.modal-fha .next').click(function(){
                $('.modal-va').addClass('active'),
                $('.modal-fha').removeClass('active');
            });
            $('.modal-fha .prev').click(function(){
                $('.modal-flexkey').addClass('active'),
                $('.modal-fha').removeClass('active');
            });
            // va
            $('.dot-va, .modal-va .close-modal, .product-va').click(function(){
                $('.modal-va').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');
            });
            $('.modal-va .next').click(function(){
                $('.modal-conv').addClass('active'),
                $('.modal-va').removeClass('active');
            });
            $('.modal-va .prev').click(function(){
                $('.modal-fha').addClass('active'),
                $('.modal-va').removeClass('active');
            });
            // conv
            $('.dot-conv, .modal-conv .close-modal, .product-conv').click(function(){
                $('.modal-conv').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');
            });$('.modal-conv .next').click(function(){
                $('.modal-usda').addClass('active'),
                $('.modal-conv').removeClass('active');
            });
            $('.modal-conv .prev').click(function(){
                $('.modal-va').addClass('active'),
                $('.modal-conv').removeClass('active');
            });
            // usda
            $('.dot-usda, .modal-usda .close-modal, .product-usda').click(function(){
                $('.modal-usda').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');
            });
            $('.modal-usda .next').click(function(){
                $('.modal-jumbo').addClass('active'),
                $('.modal-usda').removeClass('active');
            });
            $('.modal-usda .prev').click(function(){
                $('.modal-conv').addClass('active'),
                $('.modal-usda').removeClass('active');
            });
            // jumbo
            $('.dot-jumbo, .modal-jumbo .close-modal, .product-jumbo').click(function(){
                $('.modal-jumbo').toggleClass('active');
                $('.nav-local, #nav-icon, .nav-wrapper').toggleClass('hide-up');
            });
            $('.modal-jumbo .next').click(function(){
                $('.modal-flexkey').addClass('active'),
                $('.modal-jumbo').removeClass('active');
            });
            $('.modal-jumbo .prev').click(function(){
                $('.modal-usda').addClass('active'),
                $('.modal-jumbo').removeClass('active');
            });
        
            $('#contact-button').click(function(){
                $('.form-contact').addClass('active');
            });
            $('.form-contact .close').click(function(){
                $('.form-contact').removeClass('active');
            });

        }
    	// scrollOverflow: true,
    	// normalScrollElements: '.history-block'
    });

   

   
});
