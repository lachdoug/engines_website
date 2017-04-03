var reset_all_items = function(){
	$('#phone1').css('opacity', '0');
};

$(document).ready(function() {
	reset_all_items();
});

// Init carousel for user stories
$(document).ready(function() {
	$('.user_stories_carousel').slick({
		arrows: false,
		dots: true
	});
	$('.user_stories_carousel_arrow_right').on('click', function () {
		$('.user_stories_carousel').slick('slickNext');
	});
	$('.user_stories_carousel_arrow_left').on('click', function () {
		$('.user_stories_carousel').slick('slickPrev');
	});
});

// Init carousel for mgmt screenshots
$(document).ready(function() {
	$('.mgmt_screenshots_carousel').slick({
		arrows: false,
		dots: false
	});
	$('.mgmt_screenshots_carousel_arrow_right').on('click', function () {
		$('.mgmt_screenshots_carousel').slick('slickNext');
	});
	$('.mgmt_screenshots_carousel_arrow_left').on('click', function () {
		$('.mgmt_screenshots_carousel').slick('slickPrev');
	});
});

// Init fullPage
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		// menu: '#menu',
		// lockAnchors: false,
		anchors:['welcome', 'about1', 'about2', 'pricing', 'library', 'install', 'user_stories', 'technical', 'contact', 'developers', 'blueprints', 'studio'],
		navigation: true,
		navigationPosition: 'left',
		// navigationTooltips: ['welcome', 'install', 'about', 'library'],
		// showActiveTooltip: true,
		// slidesNavigation: true,
		// slidesNavPosition: 'bottom',

		//Scrolling
		// css3: true,
		// scrollingSpeed: 700,
		// autoScrolling: true,
		// fitToSection: false,
		// fitToSectionDelay: 1000,
		// scrollBar: false,
		// easing: 'easeInOutCubic',
		// easingcss3: 'ease',
		// loopBottom: false,
		// loopTop: false,
		// loopHorizontal: true,
		// continuousVertical: false,
		// continuousHorizontal: false,
		// scrollHorizontally: false,
		// interlockedSlides: false,
		// dragAndMove: false,
		// offsetSections: false,
		// resetSliders: false,
		// fadingEffect: false,
		// normalScrollElements: '#element1, .element2',
		scrollOverflow: true,
		// scrollOverflowReset: false,
		// scrollOverflowOptions: null,
		// touchSensitivity: 15,
		// normalScrollElementTouchThreshold: 5,
		// bigSectionsDestination: null,

		//Accessibility
		// keyboardScrolling: true,
		// animateAnchor: true,
		// recordHistory: true,

		//Design
		// controlArrows: true,
		// verticalCentered: true,
		sectionsColor : ['#fff', '#48d', '#fff', '#48d', '#fff', '#48d', '#fff', '#48d', '#fff', '#48d', '#fff', '#48d', '#fff', '#48d'],
		// paddingTop: '3em',
		// paddingBottom: '10px',
		// fixedElements: '#grad1',
		// responsiveWidth: 0,
		// responsiveHeight: 0,
		// responsiveSlides: false,
		// parallax: false,
		// parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		// sectionSelector: '.section',
		// slideSelector: '.slide',
		//
		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			if ( index == 1 ) {
				$('#phone1').animate(
					{ opacity: 0 }, 250, function() {
						// Animation complete.
					}
				)
			};
		},
		afterLoad: function(anchorLink, index){
			if ( index == 1 ) {
				setTimeout(function(){
					$('#phone1').animate(
						{ opacity: 1 }, 250, function() {
							// Animation complete.
			  		}
					)
				},500)
	 		};
		},
		// afterRender: function(){},
		// afterResize: function(){},
		// afterResponsive: function(isResponsive){},
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		// onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
