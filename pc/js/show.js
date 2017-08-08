$(function(){
	
	//百度地图
	var map = new BMap.Map("box");   

    var point = new BMap.Point(109.5225,18.254);   

    map.centerAndZoom(point, 15); 

    var option = {
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
    }; 
    map.addControl(new BMap.NavigationControl(option));

    var opts = {
        offset: new BMap.Size(0, 50)
    }
    map.addControl(new BMap.ScaleControl(opts));
    map.addControl(new BMap.MapTypeControl());

    var myIcon = new BMap.Icon("http://pic.c-ctrip.com/VacationOnlinePic/taocan/detail/pop_bg_sce.png", new BMap.Size(33, 43), {});
    var marker = new BMap.Marker(point, {
        icon: myIcon
    });  
    map.addOverlay(marker);
    //lunbo
})