// navmenu
window.addEventListener('scroll', function () {
	var headerInner = document.querySelector('.headerInner');
	headerInner.classList.toggle('sticky', window.scrollY > 0);
})


// <!-- script for dropdown menu -->
var dropdown = document.querySelector(".dropdown__menu");
var button = document.querySelector(".menu");

function menu() {
	if (dropdown.style.display === "grid") {
		dropdown.style.display = "none";
		button.innerHTML = "menu";
	} else {
		dropdown.style.display = "grid";
		button.innerHTML = "close";
	}
}

addEventListener("resize", function () {
	if (window.innerWidth > 600) {
		dropdown.style.display = "none";
		button.innerHTML = "menu";
	}
})


var mySwiperAutoUsa = new Swiper('.auto_from_usa-swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
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
	slidesPerView: 5,
	speed: 900,
	spaceBetween: 20,
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