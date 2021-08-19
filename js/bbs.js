$(function(){
    var current=1;
    var $body=$(".bbs");
    var $btnZoomIn = $(".button-zoomin");
    var $btnZoomOut = $(".button-zoomout");

    $btnZoomIn.on("click",function(){
        current += 0.1; zoom();
    });
    $btnZoomOut.on("click",function(){
        current -= 0.1; zoom();
    });

    function zoom(){
        if(current>1.4){
            alert('더이상 화면을 확대할 수 없습니다.');
            return false;
        }
        if(current<0.8){
            alert('더이상 화면을 축소할 수 없습니다.');
            return false;
        }
        $body.css({
            zoom:current,
            '-moz-fransform': 'scale('+current+')'
        });
    }
});