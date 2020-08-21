$('.owl-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:false,  
  autoWidth:false,  
  autoPlay: true,
  responsiveClass:true,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  },  
}) 

$('.last-slider.owl-carousel').css("min-width", "50%");
$('.last-slider.owl-carousel').css("max-width", "100%");
$('.s4').css("margin-top", "4%");


