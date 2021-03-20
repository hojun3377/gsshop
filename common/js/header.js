// Header JAVA Script

    // max-width: 982px까지의 GNB Event

        // Header Mouseover(완성)
        function gnbSubMenuOpen() {
            document.getElementsByClassName('wrap')[0].style = 
            "height: 360px; transition: all 0.5s";
        }
        function gnbSubMenuClose() {
            document.getElementsByClassName('wrap')[0].style = 
            "height: 0px; transition: all 0.5s;";
        }

        // nav에 mouse over했을 때 border-bottom 생성(완성)
        function borderBottom(target) {
            document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(191, 215, 21);";
        }
        function borderBottomNone(target) {
            document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(255, 255, 255);";
        }

        
        // Header 고정(resize event 추가 필요)
        function scrollEvent() {
            if (window.pageYOffset > 20) { 
                document.getElementsByClassName('wrap')[0].style = "height: 91px; position:fixed;";
            }
            else {
                document.getElementsByClassName('wrap')[0].style = "height: 0px; position:fixed;";
            }
        }
        

        // 페이지 영문으로 바꿀때 click event(수정필요)
        var openState = false;
        function languageChange() {
            if (openState) {
                document.getElementsByClassName('language')[0].style = "height: 36px; border-radius: 32px;";
                document.getElementsByClassName('lang_img')[0].style = "transform:rotate(0deg);";
                openState = false;
            }
            else {
                document.getElementsByClassName('language')[0].style = "height: 60px; border-radius: 17px;";
                document.getElementsByClassName('lang_img')[0].style = "transform:rotate(180deg);";
                openState = true;
            }
        }        


    
    // max-width: 981px부터의 GNB Event

        // Mobile에서 Header 고정(아래로 스크롤하면 사라지고 위로 스크롤하면 다시 보이게 조정/ 라이브러리 사용) (완성)
        var onresize = function() {
            var width = document.body.clientWidth;
            var height = document.body.clientHeight;
            if(width <= 981){

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
            else {
                
            }
        };


        // Mobile에서의 GNB Open event(완성)
        function mobileMenuOpen() {
            document.getElementById('m_header').style = "height:100vh; overflow:visible; background-color: rgba(0, 0, 0, 0.4);";
            document.getElementsByClassName('m_gnb_menu')[0].style = "right:0%; height:100vh; animation: r_to_l 0.5s forwards;";
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }

        // Mobile에서의 GNB Close event(완성)
        function mobileMenuClose() {
            document.getElementById('m_header').style = "height:45px; overflow:hidden; transition: all 0s ease-out 0.4s; background-color: rgba(0, 0, 0, 0);";
            document.getElementsByClassName('m_gnb_menu')[0].style = "right:-100%; animation: l_to_r 0.5s forwards;";
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
        }


        // Mobile에서의 nav의 hidden menu open Event

            var openState = [false, false, false, false]; 
            function contentsOpen(target) {

                // 자기 자신 이외의 이벤트는 초기화 
                for (i=0; i<4; i++) {
                    if (i != target) {
                    document.getElementsByClassName('gnb_menu_m')[i].style = "max-height: 63px;";
                    openState[i] = false }
                }

                // 클릭했을 때 이벤트 발생
                if (openState[target]) {
                    document.getElementsByClassName('gnb_menu_m')[target].style = "max-height:63px;";
                    openState[target] = false }
                else {
                    document.getElementsByClassName('gnb_menu_m')[target].style = "max-height:300px;";
                    openState[target] = true }
            }
    
    


// Main JAVA Script

    if (matchMedia("screen and (min-width: 982px)").matches) {

        // subpage menu click event
        var openSubMenu = false;
        function csrOpen() {
            if (openSubMenu) {
                document.getElementsByClassName('subpg_menu')[0].style = "height: 16px; overflow: hidden; transition: all 0.5s;";
                document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(0deg);";
                openSubMenu = false;
            }
            else {
                document.getElementsByClassName('subpg_menu')[0].style = "height: 300px; overflow:none; transition: all 0.5s;";
                document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(180deg);";
                openSubMenu = true;
            }
        }
    }


    // SNS link click event(완성)
    var openSnsLink = false;
    function snsOpen() {
        if (openSnsLink) {
            document.getElementsByClassName('subpg_shr')[0].style = "height: 22px; overflow: hidden; transition: all 0.5s;";
            openSnsLink = false;
        }
        else {
            document.getElementsByClassName('subpg_shr')[0].style = "height: 350px; overflow:none; transition: all 0.5s;";
            openSnsLink = true;
        }
    }




// Footer JAVA Script

    // Family site Pop-Up open & close Event(완성)
    function familySiteOpen() {
        document.getElementsByClassName('familysite_riseup')[0].style = "height: 283px; transition: all .3s;";
    }

    function familySiteClose() {
        document.getElementsByClassName('familysite_riseup')[0].style = "height: 0px; overflow:hidden; transition: all .3s;";
    }


var delay = 300;
var timer = null;

//Javascript
window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        console.log('resize event!');
    }, delay);
});