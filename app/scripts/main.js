// // init controller
// $(function() {
//  //    var controller = new ScrollMagic.Controller();

// 	// // create a scene
// 	// var scene = new ScrollMagic.Scene({
// 	//         duration: 100,  // the scene should last for a scroll distance of 100px
// 	//         offset: 50      // start this scene after scrolling for 50px
// 	//     })
// 	//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
// 	//     .addTo(controller); // assign the scene to the controller


// 	// controller.addscene(scene);


// 	// var blockTween = new TweenMax.to('#block', 1.5, {
// 	//     backgroundColor: 'red'
// 	// });

// 	// var containerScene = new ScrollMagic.Scene({
// 	//     triggerElement: '#container'
// 	// })
// 	// .setTween(blockTween)
// 	// .addIndicators()
// 	// .addTo(controller);

//     // $('#fullpage').fullpage();
// });


$(function() {



    // init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);
});