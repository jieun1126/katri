$(function(){
    // swipe
    window.mySwipe = $('#mySwipe').Swipe({
        startSlide:0,                           // 초기 첫 배너 노출
        auto:5000,                               // 0.3초 후에 이동
        stopPropagation:true,                   // 하위 요소에 이벤트 전달 차단
        disableScroll:true,                     // 슬라이드 배너에 스크롤바 생성 차단
        callback:function(index,element){},     // 이벤트 완료시 콜백함수 실행
        transitionEnd:function(index,element){} // 화면 전환시 익명함수 실행
    }).data('Swipe');

    $("h2").on("click",function(){
        $(this).addClass('on')
        .siblings('h2').removeClass("on")
    });
    var cNum = 0;

	jQuery("div.box h2").each(function(q){
		jQuery(this).click(function(){
			if(q != cNum) {
				jQuery("div.box h2").eq(cNum).find("img").attr("src", jQuery("div.box h2").eq(cNum).find("img").attr("src").replace("_over.gif", ".gif"));
				cNum = q;
				jQuery("div.box h2").eq(cNum).find("img").attr("src", jQuery("div.box h2").eq(cNum).find("img").attr("src").replace(".gif", "_over.gif"));
			}
		})
	})
});