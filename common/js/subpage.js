const pageHeader = new Header();
const pageFooter = new Footer();

const subPage = (function () {
    const saDefaultMargin = 300;
    let saTriggerMargin = 0;
    let saTriggerHeight = 0;
    var saElementList;

    // Scroll Animation (sa, 스크롤 애니메이션)
    const saFunc = function () {
        for (const element of saElementList) {
            if (!element.classList.contains('show')) {
                if (element.dataset.saMargin) {
                    saTriggerMargin = parseInt(element.dataset.saMargin);
                } else {
                    saTriggerMargin = saDefaultMargin;
                }

                if (element.dataset.saTrigger) {
                    saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
                } else {
                    saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
                }

                if (window.innerHeight > saTriggerHeight) {
                    let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
                    setTimeout(function () {
                        element.classList.add('show');
                    }, delay);
                }
            }
        }
    }

    return {
        scrollEvt: function() {
            saElementList = document.querySelectorAll('.sa');
            window.addEventListener('scroll', saFunc);
        }
    }
})();

window.addEventListener('load', function () {
    subPage.scrollEvt();

    pageHeader.mouseEvt();
    pageFooter.clickEvt();
})

// // Main JAVA Script

// if (matchMedia("screen and (min-width: 982px)").matches) {

//     // subpage menu click event
//     var openSubMenu = false;
//     function csrOpen() {
//         if (openSubMenu) {
//             document.getElementsByClassName('subpg_menu')[0].style = "height: 16px; overflow: hidden; transition: all 0.5s;";
//             document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(0deg);";
//             openSubMenu = false;
//         }
//         else {
//             document.getElementsByClassName('subpg_menu')[0].style = "height: 300px; overflow:none; transition: all 0.5s;";
//             document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(180deg);";
//             openSubMenu = true;
//         }
//     }
// }


// // SNS link click event(완성)
// var openSnsLink = false;
// function snsOpen() {
//     if (openSnsLink) {
//         document.getElementsByClassName('subpg_shr')[0].style = "height: 22px; overflow: hidden; transition: all 0.5s;";
//         openSnsLink = false;
//     }
//     else {
//         document.getElementsByClassName('subpg_shr')[0].style = "height: 350px; overflow:none; transition: all 0.5s;";
//         openSnsLink = true;
//     }
// }