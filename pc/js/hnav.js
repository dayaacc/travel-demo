$(function(){

	$('.all1').hover(function() {
		var index = $(this).index()/2-1;
		$('.nav_xx ul').eq(index).css('display', 'block');
	}, function() {
		$('.nav_xx ul').css('display', 'none');
	});
});