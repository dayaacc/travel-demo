
$(function(){

	$('.btn02').click(function(){
		if($(this).html()=="批量管理"){
			$('.filter_tab').css('display', 'none');
			$('.cart_main_top').css('display', 'none');
			$('.delall').css('display', 'block');
			$('.icon-checkbox').css('display','block');
		}else if($(this).html()=="取消管理"){
			$('.filter_tab').css('display', 'block');
			$('.cart_main_top').css('display', 'block');
			$('.delall').css('display', 'none');
			$('.icon-checkbox').css('display','none');
		}
	});

})
//sanji caidan 
$(function(){
	console.log('ok')
	var a=0;
	$('.dingdan>span').click(function(){
		a++;
		if(a%2==1){
			$('.sec-left1').slideDown();
		}else{
			$('.sec-left1').slideUp();
		}
		
	})
	var b=0;
	$('.gengduo').click(function(){
		b++;
		if(b%2==1){
			$('.sec-left2').slideDown();
		}else{
			$('.sec-left2').slideUp();
		}
		
	})
})
