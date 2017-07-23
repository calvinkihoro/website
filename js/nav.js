$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$('#header').css({"background-color":"#fff","transition":"all 0.6s ease"}).bind($('.nav-menu').css('color','#25DBE7'));
		}else{
			$('#header').css('background-color','transparent').bind($('.nav-menu').css('color','#fff'));
		}
	});
});