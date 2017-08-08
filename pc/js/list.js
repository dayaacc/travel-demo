$(function(){

	var i=0;
	var run = null;
	function play(){
		$('.slider').eq(i).show();
		$('.slider').eq(i).siblings().hide();
		$('.small_s a').eq(i).removeClass('small_b').addClass('small_a');
		$('.small_s a').eq(i).siblings().removeClass('small_a').addClass('small_b');
	};
	function autoplay(){
		i++;
		if(i>6){
			i=0;
		}
		play();
	}
	run = setInterval(autoplay,2000);

	$('.small_s').hover(function() {
		console.log(123);
		clearInterval(run);
	}, function() {
		run = setInterval(autoplay,2000);
	});

	$('.small_s a').click(function(){

		var index = $(this).index();

			i=index;
			
			play();
	});
})