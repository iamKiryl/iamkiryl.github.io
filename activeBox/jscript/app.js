$(function(){
	
	
	/*Fixed header*/
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();//Метов который показывает высоту
	let scrollPos  = $(window).scrollTop();;
	let nav = $('#nav');
	let navToggle = $('#navToggle');
	
	
	checkScroll(scrollPos, introH);
	
	$(window).on('scroll resize', function(){// внутри этой функции можно прописывать события, которые будут проиходить во время скролла страницы
		scrollPos = $(this).scrollTop();
		scrollPos = $(window).scrollTop();
		checkScroll(scrollPos, introH);
	});
	
	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH){
			header.addClass('fixed');
		}else {
			header.removeClass('fixed');
		}
		
	}
	
	
	
	
	/*Smooth scroll*/	
	
	$('[data-scroll]').on('click', function(event){
		event.preventDefault();
		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		
		nav.removeClass('show');
		
		console.log(elementId);
		
		$('html, body').animate({
			scrollTop: elementOffset-60
		}, 700);
	});
	
	/*Nav Toggle*/
	
	
	navToggle.on('click', function(event){
		event.preventDefault();
		
		nav.toggleClass("show");
	});
	
	/*Reviews: https://kenwheeler.github.io/slick/*/
	
	let slider = $('#reviewsSlider');
	
	
	
	
	slider.slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});
		
	
	
	
	
	
	
	
	
	
});
