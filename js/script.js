$(document).ready(function(){
	$(".button-collapse").sideNav();
	
	$("nav li.dropdown").click(function(){
		$("ul", this).slideToggle(600);
	});
	// More Menu Option
	$(".app_info").click(function(){
		$(".more_menu").fadeToggle(500);
	});
	$(".content, .button-collapse").click(function(){
		$(".more_menu").fadeOut(500);
	});
	
	$('.modal-trigger').leanModal();
});