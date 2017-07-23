$('.footer-icons').hover(
	function(){
		$(this).addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			$(this).removeClass('animated rotateIn');
		});
	}
);

