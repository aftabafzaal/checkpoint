
 $(".btn-collapse").on("click", function(){
	jQuery(this).closest(".colapsegroup").children(".collapse").toggleClass("in");
	jQuery(this).toggleClass("collapsed");
 });
		
	/*

function myCollapse(cc) {
	jQuery(this).closest(".colapsegroup").children(".collapse").toggleClass("in");
	jQuery(this).toggleClass("collapsed");
 }
 	    function myCollapse(cc) {
		jQuery(this).closest(".colapsegroup").children(".collapse").collapse('toggle');
		jQuery(this).toggleClass("collapsed");
	 }
	 
	 
	 

	 
setTimeout(function(){ 		
		var swiper1 = new Swiper('.s1', {
					pagination: '.swiper-pagination',
					slidesPerView: '6',
					centeredSlides: false,
					paginationClickable: true,
					nextButton: '.swiper-button-next1',
					prevButton: '.swiper-button-prev1',
					spaceBetween: 8,
					autoplay: 2500,
					autoplayDisableOnInteraction: false,
					breakpoints: {
						1024: {	slidesPerView: 3, spaceBetween: 8 },
						768: { slidesPerView: 3, spaceBetween: 8 },
						640: { slidesPerView: 1, spaceBetween: 8 },
						320: { slidesPerView: 1, spaceBetween: 8 }
				  }
				});
		}, 3000);

		*/
					
					var swiper2 = new Swiper('.s2', {
							pagination: '.swiper-pagination',
							slidesPerView: '4',
							centeredSlides: false,
							paginationClickable: true,
							nextButton: '.swiper-button-next2',
							prevButton: '.swiper-button-prev2',
							spaceBetween: 15,
							autoplay: 2500,
							autoplayDisableOnInteraction: false,
							breakpoints: {
							1024: {	slidesPerView: 3, spaceBetween: 40 },
							768: { slidesPerView: 3, spaceBetween: 30 },
							640: { slidesPerView: 1, spaceBetween: 20 },
							320: { slidesPerView: 1, spaceBetween: 10 }
						}
					});