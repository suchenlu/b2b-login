$(function(){
	$('.login').click(function(e) {
		$('.up').fadeIn();
	});
	$('.up .close').click(function(e) {
		$('.up').fadeOut();
	});
});
$(function(){
	$(".up .close").hover(function(){
		$(".up .close_01").show();
	},function(){
		$(".up .close_01").hide();
	});
})
