const mainPage = (function() {

    var _windowW = window.innerWidth;
    var _windowH = window.innerHeight;

    var getIndex = function(element) {
        for(var i = 0; i < element.parentNode.children.length; i++) {
          if (element.parentNode.children[i] === element) {
              return i;
          }
        }
    }

    var heroTxtsEffectAdd = function(element, index) {
        var heroTxtsTxt = document.getElementsByClassName('hero-txts')[0].children[index];

        switch(index) {
            case 0:
                element.parentNode.children[1].className += 'effect';
                element.parentNode.children[2].className += 'effect';
                break;
            case 1:
                element.parentNode.children[0].className += 'effect';
                element.parentNode.children[2].className += 'effect';
                break;
            case 2:
                element.parentNode.children[0].className += 'effect';
                element.parentNode.children[1].className += 'effect';
                break;
            default:
                //error
        }
        
        heroTxtsTxt.style.display = "block";
    }

    var heroTxtsEffectRemove = function(element, index) {
        var heroTxtsTxt = document.getElementsByClassName('hero-txts')[0].children[index];

        switch(index) {
            case 0:
                element.parentNode.children[1].classList.remove('effect');
                element.parentNode.children[2].classList.remove('effect');
                break;
            case 1:
                element.parentNode.children[0].classList.remove('effect');
                element.parentNode.children[2].classList.remove('effect');
                break;
            case 2:
                element.parentNode.children[0].classList.remove('effect');
                element.parentNode.children[1].classList.remove('effect');
                break;
            default:
                //error
        }
        
        heroTxtsTxt.style.display = "none";
    }

    var heroSizing = function(bgBoxImg, txtBox) {
        _windowW = window.innerWidth;
        _windowH = window.innerHeight;

        if (_windowW > 1024) bgBoxImg.style.opacity = 0;
        else bgBoxImg.style.opacity = 1;

        if (_windowW > 768) txtBox.style.top = Math.floor(_windowH/2 - (txtBox.offsetHeight/2)) + 'px';
        else txtBox.style.top = 120 + 'px';
    }

    return {
        resizeEvt: function() {
            var heroTxtBox = document.getElementsByClassName('hero-txt-box')[0];
            var bgBoxImg = document.getElementsByClassName('bg-box')[0].children[0];

            heroSizing(bgBoxImg, heroTxtBox);
            window.addEventListener('resize', () => {
                heroSizing(bgBoxImg, heroTxtBox);
            });
        },

        heroTxtHover: function() {
            var heroVideo = document.getElementById('hero-video');
            var heroTxtBoxA = document.getElementsByClassName('hero-txt-box')[0];
            var i = 0;

            while(heroTxtBoxA.children[i] != heroTxtBoxA.lastElementChild) {
                var el = heroTxtBoxA.children[i];

                el.addEventListener('mouseover', function() {
                    var index = getIndex(this);
                    var bgBoxImg = document.getElementsByClassName('bg-box')[0].children[index];
                    
                    if(window.innerWidth > 1024) {
                        heroVideo.pause();
                    }
                    else {
                        document.getElementsByClassName('bg-box')[0].children[0].style.opacity = 0;
                    }
                    heroTxtsEffectAdd(this, index);
                    bgBoxImg.style.opacity = 1;
                });

                el.addEventListener('mouseout', function() {
                    var index = getIndex(this);
                    var bgBoxImg = document.getElementsByClassName('bg-box')[0].children[index];

                    bgBoxImg.style.opacity = 0;
                    heroTxtsEffectRemove(this, index);
                    if (window.innerWidth > 1024) {
                        heroVideo.play();
                    }
                    else {
                        document.getElementsByClassName('bg-box')[0].children[0].style.opacity = 1;
                    }
                });

                i++;
            }
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {

});

window.addEventListener('load', function() {
    mainPage.resizeEvt();
    mainPage.heroTxtHover();
})