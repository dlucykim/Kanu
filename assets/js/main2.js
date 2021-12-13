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









// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   window.addEventListener('nav',function (){
//       let header = document.querySelector('header');
//        let windowPosition = window.scrollY > 0;
//       header.classList.toggle('scrolling-active');
//   })


// const header=document.querySelector("header");
// const sectionOne = document.querySelector("nav");

// const sectionOneOptions = {
//     rootMargin: "-200px 0px 0px 9px"
// };
// const sectionOneObserver = new IntersectionObserver(function(
//     entries,
//      sectionOneOptions
// ) {
//     entries.forEach(entry => {
//        if (entry.isIntersecting){
//         header.classList.add("nav-scrolled");
//        }else{
//            header.classList.remove("nav-scrolled");
//        }
//     });
//     },
// sectionOneOptions);

// sectionOneObserver.observe (sectionOne);

