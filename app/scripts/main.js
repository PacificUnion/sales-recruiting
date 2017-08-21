
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


var bgVideoOptions = {
    version: 'v1',
    autoPlay: true,
    controlsVisibleOnLoad: false,
    fullscreenButton: false,
    playbar: false,
    playButton: false,
    volumeControl: false,
    volume: 0,
    settingsControl: false,
    endVideoBehavior: 'loop',
    pauseButton: false,
    playbackRateControl: false,
    smallPlayButton: false,
    qualityMax: 720,
    plugin: {
       cropFill: {
            src: '//fast.wistia.com/labs/crop-fill/plugin.js'
        }
    }
}

window._wq = window._wq || [];

_wq.push({ 
    id: 'uwzjg67gxa', //PACE-2017-Loop
    onReady: function(video1) {
        video1.play();
    },
    options: bgVideoOptions
});

_wq.push({ 
    id: '14b6d6ydce', //Overview-loop
    onReady: function(video) {
        video.play();
    },
    options: bgVideoOptions
});


$(function() {
  
    $('#fullpage').fullpage({

        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['Home','Vision', 'Our-History', '2004', '2008', '2011', '2012', '2013', '2014', '2015', '2016', 'Benefits', 'Products', 'Contact-Us'],
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
        fixedElements: '.nav-wrapper, .menu, .form-contact, .arrow-mobile, .video-overlay, .modal, .spinner_hol, #skip-timeline',
        responsiveWidth: 768,
        responsiveHeight: 0,
        responsiveSlides: null,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: 'slider-2',

        //events
        onLeave: function(index, nextIndex, direction){

            if(index == 3 && nextIndex == 1 ){
                // $('video').get(1).play();
                $('#fp-nav').css('display', 'none');
                $('.timeline-dates').css('opacity', '0');  
                $('.logo-wrapper').css('display', 'block');
                $('#skip-timeline').css('display', 'none');
            }
            if(index == 3 && nextIndex == 4 ){
                $('#sec-2 .house-icon').css('opacity', '0');
            }else{
                $('#sec-2 .house-icon').css('opacity', '1');
            }
            if(index == 10 && nextIndex == 11 ){
               
                $('#fp-nav').css('display', 'none'); 
                $('.timeline-dates').css('display', 'none');
                $('#skip-timeline').css('display', 'none');
            }
            if(index == 12 && nextIndex == 11 ){
                setTimeout(function(){
                    $('.slide-12-video').css('display', 'none'); 
                    // $('video').get(0).pause();
                }, 550);
            }
            if(index == 12 && nextIndex == 13 ){
                $('.img-block').css('background-image', 'url(../images/pace-loop.jpg)')
                $('.slide-12-video').css('display', 'none'); 
                // $('video').get(0).pause();
            }
            if(index == 11 && nextIndex == 12 ){
                $('.slide-12-video').css('display', 'block'); 
                // $('video').get(0).play();
            }
            if(index == 13 && nextIndex == 12 ){
                setTimeout(function(){
                    $('.slide-12-video').css('display', 'block'); 
                    // $('video').get(0).play();
                }, 300);
            }
            
        },
        
     

        afterLoad: function(anchorLink, index){

            if(index == 1 ){
                _wq.push({ 
                    id: '14b6d6ydce', //Overview-loop
                    onReady: function(video) {
                        video.play();
                    }
                });
                $('#skip-timeline').css('display', 'none');
                $('.logo-wrapper').css('display', 'block');
            }else{
                $('.logo-wrapper').css('display', 'none');                
            }
            if(index == 2){
                $('.local a[href="#Vision"]').addClass('active');
                $('#skip-timeline').css('display', 'none');
            }else{
                $('.local a[href="#Vision"]').removeClass('active');
            }
            if( index <= 2 || index >= 12){
                $('#fp-nav').css('display', 'none'); 
                $('.timeline-dates').css('display', 'none');
                $('#skip-timeline').css('display', 'none');        
            }else{
                $('#fp-nav').css('display', 'block');
                $('.timeline-dates').css('display', 'block');
                $('#skip-timeline').css('display', 'block');
            }
            if(index == 3){
                $('.local a[href="#Our-History"]').addClass('active');
                $('.img-block').css( 'background-image', 'url(./images/timeline/today.jpg)' ),
                $('#sec-10 .svg-container').addClass('active'),
                $('.logo-wrapper').css('display', 'none');
                $('.timeline-dates .first').addClass('active');
            }else{
                $('.local a[href="#Our-History"]').removeClass('active');
                $('#sec-10 .svg-container').removeClass('active'),
                $('.timeline-dates .first').removeClass('active');
            }    
            if(index == 4){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2004.jpg)' ),
                $('#sec-9 .svg-container').addClass('active');
                $('.timeline-dates .second').addClass('active');
            }else{
                $('#sec-9 .svg-container').removeClass('active'),
                $('.timeline-dates .second').removeClass('active');
            }
            if(index == 5){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2008.jpg)' ),
                $('#sec-8 .svg-container').addClass('active'),
                $('.timeline-dates .third').addClass('active');
            }else{
                $('#sec-8 .svg-container').removeClass('active'),
                $('.timeline-dates .third').removeClass('active');
            }
            if(index == 6){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2011.jpg)' ),
                $('#sec-7 .svg-container').addClass('active'),
                $('.timeline-dates .fourth').addClass('active');
            }else{
                $('#sec-7 .svg-container').removeClass('active'),
                $('.timeline-dates .fourth').removeClass('active');
            }
            if(index == 7){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2012.jpg)' ),
                $('#sec-6 .svg-container').addClass('active'),
                $('.timeline-dates .fifth').addClass('active');
            }else{
                $('#sec-6 .svg-container').removeClass('active'),
                $('.timeline-dates .fifth').removeClass('active');
            }
            if(index == 8){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2013.jpg)' ),
                $('#sec-5 .svg-container').addClass('active'),
                $('.timeline-dates .sixth').addClass('active');
            }else{
                $('#sec-5 .svg-container').removeClass('active'),
                $('.timeline-dates .sixth').removeClass('active');
            }
            if(index == 9){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2014.jpg)' ),
                $('#sec-4 .svg-container').addClass('active'),
                $('.timeline-dates .seventh').addClass('active');
            }else{
                $('#sec-4 .svg-container').removeClass('active'),
                $('.timeline-dates .seventh').removeClass('active');
            }
            if(index == 10){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2015.jpg)' ),
                $('#sec-3 .svg-container').addClass('active'),
                $('.timeline-dates .eigth').addClass('active');
            }else{
                $('#sec-3 .svg-container').removeClass('active'),
                $('.timeline-dates .eigth').removeClass('active');
            }
            if(index == 11){
                $('.img-block').css( 'background-image', 'url(./images/timeline/2016.jpg)' ),
                $('#sec-2 .svg-container').addClass('active'),
                $('.timeline-dates .ninth').addClass('active');
                $('.slide-12-video').css('display', 'none');
            }else{
                $('.timeline-dates .ninth').removeClass('active');
            }

            if(index == 12 ){
                $('.local a[href="#Benefits"]').addClass('active');
                $('.slide-12-video').css('display', 'block');
                _wq.push({ 
                    id: 'uwzjg67gxa', //PACE-2017-Loop
                    onReady: function(video1) {
                        video1.play();
                    }
                });

            }else{
                $('.local a[href="#Benefits"]').removeClass('active');
                 // $('video').get(0).pause();
            }
            if(index == 13){
                $('.local a[href="#Products"]').addClass('active');
            }else{
                $('.local a[href="#Products"]').removeClass('active');
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
           
            $('#sec-12 .play, #video-sec-12 .close-video').click(function(){
                $('#video-sec-12').toggleClass('active');
                if(!$('#video-sec-12').hasClass('active')){
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
        
            $('#contact-button, .nav-contact').click(function(){
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
