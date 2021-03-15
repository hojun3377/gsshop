const mainPage = (function() {

    var getIndex = function(element) {
        for(var i = 0; i < element.parentNode.children.length; i++) {
          if (element.parentNode.children[i] === element) {
              return i;
          }
        }
    }

    return {
        heroTxtHover: function() {
            var heroVideo = document.getElementById('hero-video');
            var heroTxtBoxA = document.getElementsByClassName('hero-txt-box')[0];
            var i = 0;

            while(heroTxtBoxA.children[i] != heroTxtBoxA.lastElementChild) {
                var el = heroTxtBoxA.children[i];

                el.addEventListener('mouseover', function() {
                    var index = getIndex(this);
                    var bgBoxImg = document.getElementsByClassName('bg-box')[0].children[index];
                    var heroTxtsTxt = document.getElementsByClassName('hero-txts')[0].children[index];

                    switch(index) {
                        case 0:
                            this.parentNode.children[1].className += 'effect';
                            this.parentNode.children[2].className += 'effect';
                            break;
                        case 1:
                            this.parentNode.children[0].className += 'effect';
                            this.parentNode.children[2].className += 'effect';
                            break;
                        case 2:
                            this.parentNode.children[0].className += 'effect';
                            this.parentNode.children[1].className += 'effect';
                            break;
                        default:
                            //error
                    }
                    
                    bgBoxImg.style.opacity = 1;
                    heroVideo.pause();
                    heroTxtsTxt.style.display = "block";
                });

                el.addEventListener('mouseout', function() {
                    var index = getIndex(this);
                    var bgBoxImg = document.getElementsByClassName('bg-box')[0].children[index];
                    var heroTxtsTxt = document.getElementsByClassName('hero-txts')[0].children[index];

                    switch(index) {
                        case 0:
                            this.parentNode.children[1].classList.remove('effect');
                            this.parentNode.children[2].classList.remove('effect');
                            break;
                        case 1:
                            this.parentNode.children[0].classList.remove('effect');
                            this.parentNode.children[2].classList.remove('effect');
                            break;
                        case 2:
                            this.parentNode.children[0].classList.remove('effect');
                            this.parentNode.children[1].classList.remove('effect');
                            break;
                        default:
                            //error
                    }

                    heroVideo.play();
                    bgBoxImg.style.opacity = 0;
                    heroTxtsTxt.style.display = "none";
                });
                i++;
            }
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {

});

window.addEventListener('load', function() {
    mainPage.heroTxtHover();
})