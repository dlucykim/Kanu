AOS.init();

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 400) {
		$("nav").addClass("nav-scroll");
	} else {
		$("nav").removeClass("nav-scroll");
    
    }
});



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect:'fade',
    loop: true,
    speed:1500,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});







