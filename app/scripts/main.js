


$(function() {

  
    $('#fullpage').fullpage({

        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
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
        // sectionsColor : ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){

            if(index == '1' && nextIndex == '2' ){
                 $('.img-block').css('z-index', '-2');

                 console.log(index + ' ' + nextIndex);
            }

            if(index == '2' && nextIndex == '1' ){
               
                $('video').get(0).play();
                 console.log(index + ' ' + nextIndex);
            }
           

        },
        afterLoad: function(anchorLink, index){
            if(index == '2'){
               
                autoScrolling: false;
               
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

