$(document).ready(function(){
		$(".wrap .humb").click(function(){
		$(".nav").toggleClass("active");
	});
		$(".wrap .humb").click(function(){
		$(".wrap .humb").toggleClass("rotate");
	});
});


$('.slick').slick();


$(document).ready(function(){
		$(".buy1").hover(function(){
		$(".price .basic").toggleClass("hover");
	});
		$(".buy2").hover(function(){
		$(".price .pro").toggleClass("hover");
	});
		$(".buy3").hover(function(){
		$(".price .premium").toggleClass("hover");
	});
	
});