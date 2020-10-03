$(document).ready(function () {
	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('.header-bg')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('.header-bg').getAttribute('src') + ')';
			}
		}
	}

	ibg();

	// navmenu
	window.addEventListener('scroll', function () {
		var headerInner = document.querySelector('.headerInner');
		headerInner.classList.toggle('sticky', window.scrollY > 0);
	})

	/* burgermenu */
	const menu = document.querySelector('.dropdown__menu'),
		menuItems = document.querySelectorAll('.dropdown__menu__link'),
		hamburger = document.querySelector('.navbar__burger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active')
		menu.classList.toggle('active')
	});
	menuItems.forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.toggle('active')
			menu.classList.toggle('active')
		})
	});


	var mySwiperAutoUsa = new Swiper('.auto_from_usa-swiper', {
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,

			},
			769: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1170: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
		loop: true,
		speed: 900,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})


	var mySwiperInNum = new Swiper('.container_detroit-in-num', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		speed: 900,
		spaceBetween: 1,
		autoplay: {
			delay: 10000,
		},
		// If we need pagination
		pagination: {
			el: '.pagination_detroit-in-num',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.button-next-in-num',
			prevEl: '.button-prev-in-num',
		},

	})

	// /* <!-- window 5 --> */
	var mySwiperMachineBrands = new Swiper('.machine-brands__items_slider', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 3,
				spaceBetween: 20,

			},
			769: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			1170: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
		speed: 900,
		autoplay: {
			delay: 3000,
		}


	})

	// /* <!-- window 7 --> */

	// $(".tab_item").not(":first").hide();
	// $(".wrapper .tab").click(function () {
	// 	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".tab_item").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").hover(function () {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	// window 8
	var mySwiperReviews = new Swiper('.container_reviews', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		speed: 900,
		spaceBetween: 1,
		autoplay: {
			delay: 10000,
		},
		// If we need pagination
		pagination: {
			el: '.pagination_reviews',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.button-next-reviews',
			prevEl: '.button-prev-reviews',
		},

	})
	/* <!-- аккардеон --> */

	// document.querySelectorAll('.accordeon-item__trigger').forEach((item) =>
	// 	item.addEventListener('click', () => {
	// 		const parent = item.parentNode;

	// 		if (parent.classList.contains('accordeon-item--active')) {
	// 			parent.classList.remove('accordeon-item--active');
	// 		} else {
	// 			document.querySelectorAll('.accordeon-item')
	// 				.forEach((child) => child.classList.remove('accordeon-item--active'))
	// 			parent.classList.toggle('accordeon-item--active');
	// 		}
	// 	})
	// )


	// Animations

	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);

		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-off')) {
						animItem.classList.remove('_active');

					}
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);

	}



	// modal

	// header btns
	$('#nav-offer-btn, .consult-btn').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	// slider-offer-btn
	$('.offers-card-btn').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.prices-card-title').eq(i).text());
			$('.overlay, #order').fadeIn('slow')
		})
	});

	// mailer
	$('form').submit(function (e) {
		e.preventDefault();/* отключаем перезагрузку страницы */
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

});