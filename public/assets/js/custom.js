
done = false;
function counter(){
	var val = document.querySelector(".count");
	var val1 = document.querySelector(".count1");
	var val2 = document.querySelector(".count2");
	
	if(done == false){

		var init = 100;
		var init1 = 50;
		var init2 = 10000;

		val.innerHTML = 0;
		val1.innerHTML = 0;
		val2.innerHTML = 9000;
		
	setInterval(() => {
		if(val.innerHTML < init){
			val.innerHTML++;
		}
		if(val1.innerHTML < init1){
			val1.innerHTML++;
		}
	}, 50);

	setInterval(() => {
		if(val2.innerHTML < init2){
			val2.innerHTML++;
		}
	}, 1);
	
	done = true;
	}

}

(function ($) {

	"use strict";

	$(function () {
		$("#tabs").tabs();
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});


	$('.schedule-filter li').on('click', function () {
		var tsfilter = $(this).data('tsfilter');
		$('.schedule-filter li').removeClass('active');
		$(this).addClass('active');
		if (tsfilter == 'all') {
			$('.schedule-table').removeClass('filtering');
			$('.ts-item').removeClass('show');
		} else {
			$('.schedule-table').addClass('filtering');
		}
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show');
			}
		});
	});


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		//smoothscroll
		$('.scroll-to-section a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash,
				menu = target;
			var target = $(this.hash);
			$('html, body').stop().animate({
				scrollTop: (target.offset().top) + 1
			}, 500, 'swing', function () {
				window.location.hash = target[0].id;
				$(document).on("scroll", onScroll);
			});
		});
		//smoothscroll
		$('.scroll-to-section1 a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			var target = this.hash,
				menu = target;
			var target = $(this.hash);
			$('html, body').stop().animate({
				scrollTop: (target.offset().top) + 1
			}, 500, 'swing', function () {
				window.location.hash = target[0].id;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);