$(function(){
	$(window).scroll(function() {
		if($(window).scrollTop() >= 100){
			$('.label').fadeIn(300);
		}else{
			$('.label').fadeOut(300);
		}
	});
});






