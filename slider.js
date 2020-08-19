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
          items:2
      },
      1000:{
          items:1
      }
  },  
}) 

$('.last-slider.owl-carousel').css("width", "50%");
$('.s4').css("margin-top", "4%");

