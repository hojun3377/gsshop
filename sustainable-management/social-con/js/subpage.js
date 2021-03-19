var onresize = function() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    if(width <= 981){
        // Mobile에서 Header 고정(아래로 스크롤하면 사라지고 위로 스크롤하면 다시 보이게 조정/ 라이브러리 사용)
        var lastScrollTop = 0;
        var delta = 5;
        var fixBox = document.querySelector('.m_menu_scroll');
        var fixBoxHeight = fixBox.offsetHeight;
        var didScroll;
        //스크롤 이벤트 
        window.onscroll = function(e) {
            didScroll = true;
        };

        //0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
        setInterval(function(){
            if(didScroll){
                hasScrolled();
                didScroll = false;
            }
        }, 150);

        function hasScrolled(){
            var nowScrollTop = window.scrollY;

            if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
                return;
            }
            if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
                //Scroll down
                fixBox.classList.remove('show');
            }else{
                if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
                    //Scroll up
                    fixBox.classList.add('show');
                }
            }

            // 가장 위로 올라가면 안보이게 조정(수정필요)
            if (window.pageYOffset < 1) { 
                document.getElementsByClassName('m_menu_scroll')[0].style = "opacity:0";
            }
            else {
                document.getElementsByClassName('m_menu_scroll')[0].style = "opacity:1";
            }
            
            lastScrollTop = nowScrollTop;
        }
    }
};