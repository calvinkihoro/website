$('.team-articles').hover(
	function(){
		$('.team-img').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			$('.team-img').removeClass('animated flipInX');
		});
	}
);

