
////////////
// Swiper#1
////////////
if(document.querySelector('.main-block__swiper')) {
    new Swiper ('.main-block__swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    
        spaceBetween: 30,
    
        loop: true,
    
        autoplay: {
            delay: 10000,
            stopOnLastSlide: true,
            disableOnInteraction: false
        },
    
        speed: 1000,
    
        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.swiper-control__fraction-all');
                allSlides.innerHTML = swiper.slides.length;
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.swiper-control__fraction-current');
                currentSlide.innerHTML = swiper.realIndex + 1;
            },
        },
        parallax: true,
    });
}
////////////
// Swiper#1
////////////

////////////
// Swiper#2
////////////
if (document.querySelector('.product-imgs__thumbs')) {
    const thumbsSwiper = new Swiper('.product-imgs__thumbs', {
        slidesPerView: 4,
        spaceBetween: 16,
        speed:1000,
        slideToClickedSlide: true,
    });
        new Swiper('.product-imgs__main', {
            autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
            thumbs: {
				swiper: thumbsSwiper
			},
            spaceBetween: 30,
            speed:1000,
        });
}
///////////
// Swiper#2
////////////