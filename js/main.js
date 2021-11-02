$(document).ready(function () {


	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('header').addClass('fixed-header');

		}
		else {
			$('header').removeClass('fixed-header');

		}
	});

	let scrollTop = $(".scroll-top");

	$(window).scroll(function () {
		let topPos = $(this).scrollTop();
		if (topPos > 100) {
			$(scrollTop).css("opacity", "1");

		} else {
			$(scrollTop).css("opacity", "0");
		}

	});


	$(scrollTop).click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);


	});



	$(".burger").click(function () {
		$(".burger-meny").toggleClass('active');
		$("body").toggleClass('fixed')
	});

	$('.header-nav').on('click', 'a', function (event) {

		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);
	});


	$(".header-nav ul li a").click(function () {
		$(".header-nav ul li a").removeClass("active");
		$(this).addClass("active")
	})
	$(".header-nav ul li a").click(function () {
		$(".header-nav ul li a").removeClass("active");
		$(this).addClass("active");
		$(".burger-meny").toggleClass('active');
		$("body").removeClass('fixed')
	})


	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 2000,
		nextArrow: '<img src="images/slider/next.jpg" class="next" alt="">',
		prevArrow: '<img src="images/slider/next copy.jpg" class="prev" alt="">',
	});

	$(".work-tabs ul li").off('click').on("click", function (e) {
		e.preventDefault();
		$(".work-tabs ul li ").removeClass("active").eq($(this).index()).addClass("active");
		$(".work-content ").removeClass("active").eq($(this).index()).addClass("active")

	});






})