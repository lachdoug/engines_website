$(document).ready(function() {
	set_up_index_content();
	$('#page_loading_spinner').remove();
	$('#fullpage').show();
	$('#modals').show(); // modals and fullpage are set to display:none for loading, otherwise ugly stuff flashes-up on screen just before fullpage kicks in
});

var set_up_index_content = function() {
	$('#phone1').css('opacity', '0');

	$('#nav_menu_button_open').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('#nav_menu').fadeIn();
	});

	$('#nav_menu_button_close').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('#nav_menu').fadeOut();
	});

	$('.modal_button').click(function(){
		var modal_id = $(this).data('modal');
		var modal = $('#' + modal_id);
		$(modal).show();
		$('#' + modal_id + ' .close').click(function() {
			$(modal).hide();
		});
		$(document).click(function(event) {
			if ($(event.target).hasClass('modal')) {
				$(modal).hide();
			};
  	});
		// $('.modal-content').click(function(event) {
		// 	event.stopPropagation();
		// });
	});


	// // Init modals
	// 	// Get the modal
	// 	var modal = document.getElementById('studio_screenshot1_modal');
	//
	// 	// Get the button that opens the modal
	// 	var btn = document.getElementById("studio_screenshot1_modal_open_button");
	//
	// 	// Get the <span> element that closes the modal
	// 	var span = document.getElementsByClassName("close")[0];
	//
	// 	// When the user clicks on the button, open the modal
	// 	btn.onclick = function() {
	// 	    modal.style.display = "block";
	// 	}
	//
	// 	// When the user clicks on <span> (x), close the modal
	// 	span.onclick = function() {
	// 	    modal.style.display = "none";
	// 	}
	//
	// 	// When the user clicks anywhere outside of the modal, close it
	// 	window.onclick = function(event) {
	// 	    if (event.target == modal) {
	// 	        modal.style.display = "none";
	// 	    }
	// 	}

	// Init carousel for user stories
	$('.user_stories_carousel').slick({
		swipeToSlide: true,
		arrows: false,
		dots: true
	});
	$('.user_stories_carousel_arrow_right').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.user_stories_carousel').slick('slickNext');
	});
	$('.user_stories_carousel_arrow_left').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.user_stories_carousel').slick('slickPrev');
	});

	// Init carousel for mgmt screenshots
	$('.mgmt_screenshots_carousel').slick({
		swipeToSlide: true,
		arrows: false,
		dots: false
	});
	$('.mgmt_screenshots_carousel_arrow_right').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.mgmt_screenshots_carousel').slick('slickNext');
	});
	$('.mgmt_screenshots_carousel_arrow_left').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.mgmt_screenshots_carousel').slick('slickPrev');
	});

	// Init carousel for mgmt screenshots
	$('.studio_screenshots_carousel').slick({
		swipeToSlide: true,
		arrows: false,
		dots: false
	});
	$('.studio_screenshots_carousel_arrow_right').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.studio_screenshots_carousel').slick('slickNext');
	});
	$('.studio_screenshots_carousel_arrow_left').on('touchstart mousedown', function(event) {
		event.preventDefault();
		$('.studio_screenshots_carousel').slick('slickPrev');
	});

	// Init carousel for apps
	$('.apps_carousel').slick({

autoplaySpeed: 0, cssEase: 'linear',

 speed: 250,

		prevArrow: ".apps_carousel_arrow_left",
    nextArrow: ".apps_carousel_arrow_right",

		// appendArrows:

		infinite: false,
		slidesToScroll: 1,
		swipeToSlide: true,
		centerPadding: '60px',
	  slidesToShow: 5,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ],
		// arrows: false,
		dots: false
	});
	$('.apps_carousel_arrow_right').on('touchstart mousedown', function (event) {
		event.preventDefault();
		$('.apps_carousel').slick('slickNext');
		$('.apps_carousel').slick('slickSetOption', 'autoplay', true, true);
	});
	$('.apps_carousel_arrow_right').on('touchend mouseup', function (event) {
		$('.apps_carousel').slick('slickSetOption', 'autoplay', false, true);
	});
	$('.apps_carousel_arrow_left').on('touchstart mousedown', function (event) {
		event.preventDefault();
		$('.apps_carousel').slick('slickPrev');
		$('.apps_carousel').slick('slickSetOption', 'slidesToScroll', -1, true);
		$('.apps_carousel').slick('slickSetOption', 'autoplay', true, true);
	});
	$('.apps_carousel_arrow_left').on('touchend mouseup', function (event) {
		$('.apps_carousel').slick('slickSetOption', 'autoplay', false, true);
		$('.apps_carousel').slick('slickSetOption', 'slidesToScroll', 1, true);
	});


	// Init fullPage
	$('#fullpage').fullpage({
		//Navigation
		// menu: '#menu',
		// lockAnchors: false,
		// anchors:['welcome', 'about1', 'about2', 'pricing', 'library', 'user_stories', 'install', 'technical', 'contact', 'developers', 'blueprints', 'studio'],
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

		normalScrollElements: '.modal',

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
			// Hide the nav menu
			$('#nav_menu').fadeOut();
			$('.nav_menu_link').blur();

			// Hide phone when leaving first page
			if ( index == 1 ) {
				$('#phone1').animate(
					{ opacity: 0 }, 250, function() {
						// Animation complete.
					}
				)
			};

			// Hide blob when leaving contact page
			if ( index == 13 ) {
				$('#wobbly_blob').hide();
			};

		},
		afterLoad: function(anchorLink, index){

			// Set active link in nav menu
			$('.nav_menu_link').removeClass('active');
			$('.nav_menu_link').eq(index - 1).addClass('active');

			// Show phone when loading home page
			if ( index == 1 ) {
				setTimeout(function(){
					$('#phone1').animate(
						{ opacity: 1 }, 500, function() {
							// Animation complete.
			  		}
					)
				},0)
	 		};

			// Show blob when loading contact page
			if ( index == 13 ) {
				$('#wobbly_blob').fadeIn();
	 		};



		},
		// afterRender: function(){},
		// afterResize: function(){},
		// afterResponsive: function(isResponsive){},
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		// onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

  // Redraw carousels after fullPage renderer
	$('.user_stories_carousel').slick('setPosition');
	$('.mgmt_screenshots_carousel').slick('setPosition');
	$('.apps_carousel').slick('setPosition');

};
