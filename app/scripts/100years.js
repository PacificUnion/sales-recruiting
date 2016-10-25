$(document).ready(function() {
        $( document ).ready(function() {
            $('#sectionintro .svg-container').addClass('active');
            $('#sectionintro .intro.first').addClass('active');

        });
        $.preloadImages = function() {
          for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
          }
        }
        $.preloadImages("img/yellowstone-thermal.jpg","img/yosemite-rock.jpg","img/big-bend.jpg","img/canyonlands.jpg","img/grand-canyon-2.jpg","img/grand-teton.jpg","img/great-sand-dunes.jpg","img/hawaii-volcano.jpg","img/redwood-path.jpg","img/roosevelt-sitting.jpg","img/smoky-mountains.jpg");
        $('#fullpage').fullpage({
            autoScrolling: false,
            afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index

            if(index == 1){
                $( "body" ).find('#right-content').css( "background-image", "url(img/double-arch.jpg)" ),
                $('#right-content .info.default').addClass('active');
            }
            else{
                $('#right-content .info.default').removeClass('active');
            }

            /* 1st Slide */

            if(index == 2){
                $( "body" ).find('#right-content').css( "background-image", "url(img/yellowstone-thermal.jpg)" ),
                $('#section0 .svg-container').addClass('active'),
                $('#section0 .date').addClass('active');
                $('.year.first').addClass('active');
                $('#right-content .info.first').addClass('active');
            }
            else{
                $('.year.first').removeClass('active');
                $('#right-content .info.first').removeClass('active');
            }


            /* 2nd Slide */

            if(index == 3){
                $( "body" ).find('#right-content').css( "background-image", "url(img/yosemite-rock.jpg)" ),
                $('#section1 .svg-container').addClass('active');
            }
            if(index == 3){
                $('.year.second').addClass('active');
            }
            else{
                $('.year.second').removeClass('active');
            }
            if(index == 3){
                $('#right-content .info.second').addClass('active');
            }
            else{
                $('#right-content .info.second').removeClass('active');
            }

            /* 3rd Slide */

            if(index == 4){
                $( "body" ).find('#right-content').css( "background-image", "url(img/glacier-lake.jpg)" );
            }
            if(index == 4){
                $('#section2 .svg-container').addClass('active');
            }
            if(index == 4){
                $('.year.third').addClass('active');
            }
            else{
                $('.year.third').removeClass('active');
            }
            if(index == 4){
                $('#right-content .info.third').addClass('active');
            }
            else{
                $('#right-content .info.third').removeClass('active');
            }


            /* 4th Slide */

            if(index == 5){
                $( "body" ).find('#right-content').css( "background-image", "url(img/roosevelt-sitting.jpg)" );
                $('#section3 .svg-container').addClass('active');
                $('#section3 .date').addClass('active');
                $('.year.fourth').addClass('active');
            }
            else{
                $('.year.fourth').removeClass('active');
            }
            if(index == 5){
                $('#right-content .info.fourth').addClass('active');
            }
            else{
                $('#right-content .info.fourth').removeClass('active');
            }


            /* 5th Slide */

            if(index == 6){
                $( "body" ).find('#right-content').css( "background-image", "url(img/grand-canyon-2.jpg)" );
            }
            if(index == 6){
                $('#section4 .svg-container').addClass('active');
            }
            if(index == 6){
                $('.year.fifth').addClass('active');
            }
            else{
                $('.year.fifth').removeClass('active');
            }
            if(index == 6){
                $('#right-content .info.fifth').addClass('active');
            }
            else{
                $('#right-content .info.fifth').removeClass('active');
            }

            /* 6th Slide */

            if(index == 7){
                $( "body" ).find('#right-content').css( "background-image", "url(img/grand-teton.jpg)" );
            }
            if(index == 7){
                $('#section5 .svg-container').addClass('active');
            }
            if(index == 7){
                $('.year.sixth').addClass('active');
            }
            else{
                $('.year.sixth').removeClass('active');
            }
            if(index == 7){
                $('#right-content .info.sixth').addClass('active');
            }
            else{
                $('#right-content .info.sixth').removeClass('active');
            }

            /* 7th Slide */

            if(index == 8){
                $('#section6 .svg-container').addClass('active');
            }
            if(index == 8){
                $('#section6 .date').addClass('active');
            }
            if(index == 8){
                $('.year.seventh').addClass('active');
            }
            else{
                $('.year.seventh').removeClass('active');
            }

            /* 8th Slide */

            if(index == 9){
                $( "body" ).find('#right-content').css( "background-image", "url(img/smoky-mountains.jpg)" );
            }
            if(index == 9){
                $('#section7 .svg-container').addClass('active');
            }
            if(index == 9){
                $('.year.eighth').addClass('active');
            }
            else{
                $('.year.eighth').removeClass('active');
            }
            if(index == 9){
                $('#right-content .info.seventh').addClass('active');
            }
            else{
                $('#right-content .info.seventh').removeClass('active');
            }

            /* 9th Slide */

            if(index == 10){
                $('#section8 .svg-container').addClass('active');
            }
            if(index == 10){
                $('#section8 .date').addClass('active');
            }
            if(index == 10){
                $('.year.ninth').addClass('active');
            }
            else{
                $('.year.ninth').removeClass('active');
            }

            /* 10th Slide */

            if(index == 11){
                $( "body" ).find('#right-content').css( "background-image", "url(img/big-bend.jpg)" );
            }
            if(index == 11){
                $('#section9 .svg-container').addClass('active');
            }
            if(index == 11){
                $('.year.tenth').addClass('active');
            }
            else{
                $('.year.tenth').removeClass('active');
            }
            if(index == 11){
                $('#right-content .info.eighth').addClass('active');
            }
            else{
                $('#right-content .info.eighth').removeClass('active');
            }

            /* 11th Slide */

            if(index == 12){
                $( "body" ).find('#right-content').css( "background-image", "url(img/big-bend.jpg)" );
            }
            if(index == 12){
                $('#section10 .svg-container').addClass('active');
            }
            if(index == 12){
                $('#section10 .date').addClass('active');
            }
            if(index == 12){
                $('.year.eleventh').addClass('active');
            }
            else{
                $('.year.eleventh').removeClass('active');
            }

            /* 12th Slide */

            if(index == 13){
                $( "body" ).find('#right-content').css( "background-image", "url(img/canyonlands.jpg)" ),
                $('#section11 .svg-container').addClass('active');
            }
            if(index == 13){
                $('.year.twelfth').addClass('active');
            }
            else{
                $('.year.twelfth').removeClass('active');
            }
            if(index == 13){
                $('#right-content .info.ninth').addClass('active');
            }
            else{
                $('#right-content .info.ninth').removeClass('active');
            }

            /* 13th Slide */

            if(index == 14){
                $('#section12 .svg-container').addClass('active'),
                $('#section12 .date').addClass('active');
                $('.year.thirteenth').addClass('active');
            }
            else{
                $('.year.thirteenth').removeClass('active');
            }

            /* 14th Slide */

            if(index == 15){
                $( "body" ).find('#right-content').css( "background-image", "url(img/redwood-path.jpg)" ),
                $('#section13 .svg-container').addClass('active');
                $('.year.fourteenth').addClass('active');
            }
            else{
                $('.year.fourteenth').removeClass('active');
            }
            if(index == 15){
                $('#right-content .info.tenth').addClass('active');
            }
            else{
                $('#right-content .info.tenth').removeClass('active');
            }

            /* 15th Slide */

            if(index == 16){
                $('#section14 .svg-container').addClass('active');
            }
            if(index == 16){
                $('#section14 .date').addClass('active');
            }
            if(index == 16){
                $('.year.fifteenth').addClass('active');
            }
            else{
                $('.year.fifteenth').removeClass('active');
            }

            /* 16th Slide */

            if(index == 17){
                $('#section15 .svg-container').addClass('active');
                $( "body" ).find('#right-content').css( "background-image", "url(img/channel-islands.jpg)" );
            }
            if(index == 17){
                $('.year.sixteenth').addClass('active');
            }
            else{
                $('.year.sixteenth').removeClass('active');
            }
            if(index == 17){
                $('#right-content .info.thirteenth').addClass('active');
            }
            else{
                $('#right-content .info.thirteenth').removeClass('active');
            }

            /* 17th Slide */

            if(index == 18){
                $('#section16 .svg-container').addClass('active');
                $( "body" ).find('#right-content').css( "background-image", "url(img/great-sand-dunes.jpg)" );
            }
            if(index == 18){
                $('.year.seventeenth').addClass('active');
            }
            else{
                $('.year.seventeenth').removeClass('active');
            }
            if(index == 18){
                $('#right-content .info.twelfth').addClass('active');
            }
            else{
                $('#right-content .info.twelfth').removeClass('active');
            }


            /* 18th Slide */

            if(index == 19){
                $('#section17 .svg-container').addClass('active');
                $('#section17 .84').addClass('active');
                $( "body" ).find('#right-content').css( "background-image", "url(img/badlands.jpg)" );
            }
            if(index == 19){
                $('.year.eighteenth').addClass('active');
            }
            else{
                $('.year.eighteenth').removeClass('active');
            }
            if(index == 19){
                $('#right-content .info.fourteenth').addClass('active');
            }
            else{
                $('#right-content .info.fourteenth').removeClass('active');
            }
        }
    });
});