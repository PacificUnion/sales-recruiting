

$(function() {

  
    $('#fullpage').fullpage({

        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        navigation: true,
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
        normalScrollElements: '#element1, .element2',
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
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],

        // paddingTop: '3em',
        // paddingBottom: '10px',
        fixedElements: '#header, .footer, #navigation',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){

            // if(index == '1' && nextIndex == '2' ){
            //      $('.img-block').css('z-index', '-2');

            //      console.log(index + ' ' + nextIndex);
            // }

            if(index == '2' && nextIndex == '1' ){
               
                $('video').get(0).play();
                 console.log(index + ' ' + nextIndex);
            }
           

        },
        // $.preloadImages = function() {
        //     for (var i = 0; i < arguments.length; i++) {
        //         $("<img />").attr("src", arguments[i]);
        //     }
        // }
        // $.preloadImages("img/yellowstone-thermal.jpg","img/yosemite-rock.jpg","img/big-bend.jpg","img/canyonlands.jpg","img/grand-canyon-2.jpg","img/grand-teton.jpg","img/great-sand-dunes.jpg","img/hawaii-volcano.jpg","img/redwood-path.jpg","img/roosevelt-sitting.jpg","img/smoky-mountains.jpg");
        afterLoad: function(anchorLink, index){
            if(index == '1'){
               
              $('#fp-nav').css('display', 'none');
               
            }else{
                 $('#fp-nav').css('display', 'block');
            }

            if(index == 2){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/500/800)" ),
                $('#sec-2 .svg-container').addClass('active');
            }else{
                $('#sec-2 .svg-container').removeClass('active');
            }
            if(index == 3){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/700/900)" ),
                $('#sec-3 .svg-container').addClass('active');
            }else{
                $('#sec-3 .svg-container').removeClass('active');
            }
            if(index == 4){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/600/900)" ),
                $('#sec-4 .svg-container').addClass('active');
            }else{
                $('#sec-4 .svg-container').removeClass('active');
            }
            if(index == 5){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/700/950)" ),
                $('#sec-5 .svg-container').addClass('active');
            }else{
                $('#sec-5 .svg-container').removeClass('active');
            }
            if(index == 6){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/800/1000)" ),
                $('#sec-6 .svg-container').addClass('active');
            }else{
                $('#sec-6 .svg-container').removeClass('active');
            }
            if(index == 7){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/700/1000)" ),
                $('#sec-7 .svg-container').addClass('active');
            }else{
                $('#sec-7 .svg-container').removeClass('active');
            }
            if(index == 8){
                $(".img-block").css( "background-image", "url(http://fillmurray.com/850/1000)" ),
                $('#sec-8 .svg-container').addClass('active');
            }else{
                $('#sec-8 .svg-container').removeClass('active');
            }
        },
       
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
        afterRender: function () {

            //playing the video
            $('video').get(0).play();
        }
  
  
    	// scrollOverflow: true,
    	// normalScrollElements: '.history-block'
    });

   

   
});

