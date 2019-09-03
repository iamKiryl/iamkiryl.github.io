$(function (){
	let header = $('#header');
	let introH = $('#header').innerHeight();
	let scrollOffset = $(window).scrollTop();
	
	
	/* Fixed header*/
	checkScroll();
	$(window).on('scroll', function(){
		scrollOffset = $(this).scrollTop();
		checkScroll();
	});
	
	function checkScroll() {
		
		if ( scrollOffset > introH ){
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	};
	
	/*Smooth scroll*/
	$("[data-scroll]").on('click', function(event){
		event.preventDefault();
		let blickId = $(this).data('scroll');
		let blockOffset = $(blickId).offset().top;
		
		console.log(blockOffset);
		
		
		
		//$('#nav a').removeClass('active');
		//$(this).addClass('active')
		
		
		$('html, body').animate({
			scrollTop: blockOffset
		}, 700);
	});
	
	/*Menu nav toggle*/
	
	 $('#nav_toggle').on('click', function(event){
		 event.preventDefault();
		 $(this).toggleClass('active');
		 $('#nav').toggleClass('active');
	 })
	
	/*Collapse*/
	 
	 $('[data-collapse]').on('click', function(event){
		 event.preventDefault();
		 let collapseId = $(this).data('collapse');
		 //$(this).toggleClass('active');
		 $(collapseId).slideToggle();
	 })
	 
	 
	 /*Slider*/
	 
	 $('[data-slider]').slick({
		 infinite: true,
		 fade: false,
		 slidesToShow: 1,
		 slidesToScroll:1
	 });
	 
	 
	 
	 
	 
	 
	 
	 
	 
});