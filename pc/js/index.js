//日期插件
$(function(){
    laydate({
        elem: '#rz_time', 
        event: 'focus', 
        format: 'YYYY-MM-DD', 
        festival: true, 
    });
    laydate({
        elem: '#tf_time', 
        event: 'focus', 
        format: 'YYYY-MM-DD', 
        festival: true, 
    });
    $('#rz_time').focus(function(){
        laydate.skin('dahong');
    });
    //lunbo
    //lun bo 
    var i=0;
    var run = null;
    var a = document.querySelector('.language_cnt a');
    var sp = document.querySelector('.language_cnt span');
    var sel =document.querySelector('.service_tel');
    var sp2 =document.querySelector('.service_tel span');
    function play(){
        $('.swiper-slide').eq(i).show();
        $('.swiper-slide').eq(i).siblings().hide();
        $('.small_s a').eq(i).removeClass('small_b').addClass('small_a');
        $('.small_s a').eq(i).siblings().removeClass('small_a').addClass('small_b');
    };
    function autoplay(){
        i++;
        if(i>4){
            i=0;
        }
        play();
    }
    run = setInterval(autoplay,2000);

    $('.small_s a').hover(function() {
        clearInterval(run);
        var index = $(this).index();

            i=index;
            
            play();
    }, function() {
        run = setInterval(autoplay,2000);
    });
})
