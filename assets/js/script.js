
$(document).ready(function(){
  // Nav Toggle
  $('#toggleNav-icon').click(function(){
    $(this).toggleClass('open');
    $('.menu').slideToggle();
  });
  // owl.carousel
  $('.main_slider').owlCarousel({
    loop:true,
    nav:true,
    margin:40,
    center:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    responsive:{
      0:{
        items:1
      },
      575:{
        items:2
      },
      991:{
        items:3
      }
    }
  });

  AOS.init();
  
});
