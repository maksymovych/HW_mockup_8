const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	//direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	grabCursor: true,

	autoHeight: true,

	spaseBetween: 50,

	/*autoplay: {
		delay: 5000,
		disableOnInteraction: true,

	},*/

	speed: 800,

});