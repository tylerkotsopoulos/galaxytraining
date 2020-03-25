var galaxy = galaxy || {};
$(function() {
    galaxy.init();
});

galaxy.init = function(){
	// galaxy.fullpage();
	galaxy.navigation();
	// galaxy.midnight();
	galaxy.smoothScroll();
	galaxy.parallax();
	// galaxy.par();
	// galaxy.lightbox();
	//galaxy.initMap();
	// galaxy.header();
	galaxy.mobileMenu();
  galaxy.copyrightDate();
}

galaxy.copyrightDate = function() {
  const today = new Date()
  const year = today.getFullYear()
  $('.copyright-year').html(year)
}

galaxy.midnight = function(){
	$('.fixednav').midnight();
}

galaxy.navigation = function(){
	// $('.dot').click(function(){
	//    $(".dot.current").removeClass("current");
	//    $(this).addClass("current");
	// });
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
}

galaxy.par = function(){
	 window.onscroll = function(){
     document.body.style.msPerspectiveOrigin =
     document.body.style.mozPerspectiveOrigin =
     document.body.style.webkitPerspectiveOrigin =
     window.scrollX + "px " +
     window.scrollY + "px";
   }
}

galaxy.mobileMenu = function(){
	var $hamburger = $(".hamburger");
	 $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    e.preventDefault();
	    if ($('.header-mobile').toggleClass('active')) {
	    }
	 });

	var link = $('.header-mobile .navigation-link'),
		social = $('.header-mobile .hero-social__icon');
	$(link).click(function(e){
		// e.preventDefault();
		$('.header-mobile').removeClass('active');
		$hamburger.removeClass('is-active');
		// alert('works');
	});
	$(social).click(function(e){
		$('.header-mobile').removeClass('active');
	});
}

galaxy.parallax = function(){
	var parallax = document.querySelectorAll('.parallax-section'),
		speed = 0.5;
	window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){
			var windowYOffset = window.pageYOffset,
				elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
			el.style.backgroundPosition = elBackgrounPos;
		});
	};
}

galaxy.smoothScroll = function(){
	smoothScroll.init({
	    speed: 500,
	    easing: 'easeInOutCubic',
	    offset: 60
	});
}

galaxy.lightbox = function(){
	lightbox.option({
	   'resizeDuration': 600,
	   'wrapAround': true
	})
}

galaxy.fullpage = function(){
	$('#fullpage').fullpage({
		anchors: ['1', '2', '3', '4', '5'],
		// lockAnchors: false,
		autoScrolling: false,
        fitToSection: false,
		navigation: true,
		showActiveTooltip: false,
	    slidesNavigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'What We Do', 'Head Trainer', 'Gallery', 'Contact Us'],
		css3: true,
		fixedElements: '.header'
	});
}

galaxy.header = function(){
	// var flag = $('#header-fade').offset().top;
	$(document).scroll(function(){
		if($(this).scrollTop() > 65){
			$('.header').addClass('bg--shaded-transparent');
		}else{
			$('.header').removeClass('bg--shaded-transparent');
		}
	});
}

galaxy.map = function(){
	var location = {lat: 43.83115, lng: -79.0834645};
	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 15,
	    center: location
	});
	var marker = new google.maps.Marker({
	    position: location,
	    map: map
	});
	marker.addListener('click', function() {
	    console.log('clicked!');
	    var url = 'https://web.archive.org/web/20180827152549/https://goo.gl/maps/pj92wMxraBE2';
	    window.open(url, '_blank');
	});
}
/*
     FILE ARCHIVED ON 15:25:49 Aug 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:06:51 Mar 24, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.012
  PetaboxLoader3.resolve: 242.126 (3)
  exclusion.robots.policy: 0.161
  captures_list: 258.339
  RedisCDXSource: 0.569
  LoadShardBlock: 240.078 (3)
  exclusion.robots: 0.172
  load_resource: 535.966
  PetaboxLoader3.datanode: 530.124 (5)
  CDXLines.iter: 14.344 (3)
*/
