$(document).ready(function(){
  $('.single-item').slick({
	  adaptiveHeight: true,
	  autoplay: true,
	  dots: true,
	  fade: true,
	  arrows:false
  });
  $('.multiple-items').slick({
	 infinite: true,
	 slidesToShow: 3,
	 slidesToScroll: 3,
	 $prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
     $nextArrow : '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	 
                
  });

  $("#bzoom").zoom({
	zoom_area_width: 200,
    autoplay_interval :3000,
    small_thumbs : 3,
    autoplay : false
  });
   var options = {  
    zoomType: 'standard',
    preloadImages: true,  
    alwaysOn: true,  
    zoomWidth: 150,  
    zoomHeight: 150,  
    xOffset: 90,  
    yOffset: 30,  
    position: 'left'  
    //...MORE OPTIONS
  };

});
