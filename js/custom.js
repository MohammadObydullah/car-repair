$(function(){
  

$('.back-top').click(function(){
 $('html,body').animate({scrollTop:0},1000);
});
 
 $(window).scroll(function(){
  var scroll=$(this).scrollTop();
  if(scroll>250){
  	$('.back-top').fadeIn();
  }
  else{
  	$('.back-top').fadeOut();
  }

 });






$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
});






 $('.shp-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    
  ]

});
	

	
  // service venobox part start
	 
 $(document).ready(function(){
    $('.venobox').venobox(); 
  });



  //counterup part start

  $('.counter').counterUp({
             delay: 10,
             time: 1000
     });



  // test slider part start

  $('.test-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },

    ]
});



  // team slider part start

  $('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },
        {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },


  ]
});




   // blog slider part start

  $('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  speed:1500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },


    ]
});


   // partner slider part start

  $('.partner-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  speed:1500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      }
    },

    ]
});




// wow js
new WOW().init();



// project part start
 
  var containerEl = document.querySelector('.pro-main');

   var mixer = mixitup(containerEl);		
  






});



