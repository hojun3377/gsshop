// Header JAVA Script

// max-width: 982px까지의 GNB Event
    
    if (matchMedia("screen and (min-width: 981px)").matches) {
        // Header Mouseover
        function gnbSubMenuOpen() {
            document.getElementsByClassName('wrap')[0].style = 
            "height: 360px; transition: all 0.5s";
        }
        function gnbSubMenuClose() {
            document.getElementsByClassName('wrap')[0].style = 
            "height: 0px; transition: all 0.5s;";
        }
    
        // nav에 mouse over했을 때 border-bottom 생성
        function borderBottom(target) {
            document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(191, 215, 21);";
        }
        function borderBottomNone(target) {
            document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(255, 255, 255);";
        }
    
        // Header 고정
        function scrollEvent() {
            if (window.pageYOffset > 10) { 
                document.getElementsByClassName('wrap')[0].style = "height: 90px; position:fixed;";
            }
            else {
                document.getElementsByClassName('wrap')[0].style = "height: 0px; position:fixed;";
            }
        }
    }

    // 페이지 영문으로 바꿀때 click event
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

    // Mobile에서의 GNB Open event(자연스럽게 움직이기위한 조정 필요)
    function mobileMenuOpen() {
        document.getElementsByClassName('m_gnb_menu')[0].style = "position: static;";
    }
    // Mobile에서의 GNB Close event(자연스럽게 움직이기위한 조정 필요)
    function mobileMenuClose() {
        document.getElementsByClassName('m_gnb_menu')[0].style = "position: absolute;";
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
                openState[target] = false}
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


    // SNS link click event
    var openSnsLink = false;
    function snsOpen() {
        if (openSnsLink) {
            document.getElementsByClassName('subpg_shr')[0].style = "max-height: 22px; overflow: hidden; transition: all 0.5s;";
            openSnsLink = false;
        }
        else {
            document.getElementsByClassName('subpg_shr')[0].style = "max-height: 350px; overflow: visible; transition: all 0.5s;";
            openSnsLink = true;
        }
    }

















