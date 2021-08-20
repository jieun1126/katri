// topMenu
window.onload=function(){
    var seq = 0;
    var nav = document.getElementById("gnb")
    nav.menu=new Array(); // 배열객체는 여러개의 데이터 저장 가능!
    nav.current = null; // 지정된 데이터 삭제
    nav.menuseq = 0;
    
    var navLen = nav.childNodes.length; // 데이터 갯수 반환
    var allA = nav.getElementsByTagName("li")

    for(k=0; k<allA.length; k++){
        allA.item(k).onmouseover = allA.item(k).onfocus = function(){
            nav.isOver = true;

        }
        // onblur = 포커스가 이동했을때
        allA.item(k).onmouseout = allA.item(k).onblur = function(){
            nav.isOver = false;
            //setTimeout : 일정한 간격으로 스크립트 실행문을 한번만 실행
            setTimeout(function(){
                if(nav.isOver == false){
                if(nav.menu[seq])
                    nav.menu[seq].onmouseover(); // 마우스 올렸을때
                    else if(nav.current){
                        var menuImg = nav.current.childNodes.item(0);
                        menuImg.src=menuImg.src.replace("_over.gif",".gif")
                    }
                    if(nav.current.submenu)
                    nav.current.submenu.style.display = "none";
            }

            },500)
        }
    }
    for (i=0; i<navLen; i++){
        var navItem = nav.childNodes.item(i);
        if (navItem.tagName != "LI")//tagName 뒤에는 대문자
        continue;
        /* continue;
         반복문에서만 사용 가능
        실행명령 조건식에서 조건검사 실행문을 무시하고 조건검사 실행*/
        var navAnchor = navItem.getElementsByTagName("a").item(0);
        navAnchor.submenu = navItem.getElementsByTagName("ul").item(0);
        navAnchor.onmouseover = navAnchor.onfocus = function(){
            if(nav.current){
                menuImg= nav.current.childNodes.item(0);
                menuImg.src = menuImg.src.replace("_over.gif",".gif")

            if (nav.current.submenu)
            nav.current.submenu.style.display = "none";
            nav.current = null;
                   }
if(nav.current !=this){
    menuImg = this.childNodes.item(0);
    menuImg.src = menuImg.src.replace(".gif","_over.gif")
    if(this.submenu)
    this.submenu.style.display = "block"
    nav.current = this;
}
nav.isOver = true;
    };
    nav.menuseq++;
    nav.menu[nav.menuseq] = navAnchor;
    }
    if (nav.menu[seq])
    nav.menu[seq].onmouseover();
};