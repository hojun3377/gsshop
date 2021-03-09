const jointGro = (function() {

    //  t: current time
    //  b: beginning value
    //  c: change in value
    function easeOutQuart(t, b, c) {
        return c * (1 - (1-t)*(1-t)*(1-t)*(1-t)) + b;
    }

    const tl = function(element, duration, vars) {
        var from = Number((element.style.objectPosition.split(' ')[1]).split('%')[0]);
        var to = Number((vars.split(' ')[1]).split('%')[0]);
        var fps = 60;
        var start = new Date().getTime();

        var timer = setInterval(function() {
            time = new Date().getTime() - start;
            var p = easeOutQuart(time/1000, from, to-from);
            element.style.objectPosition = '50% ' + p + '%';
            if (time >= duration) {
                clearInterval(timer);
            }
        }, 1000/fps);
    }

    return {
        scrollEvent: function() {
            var heroImg = document.getElementById('hero-img');

            window.addEventListener('scroll', function() {
                var scrT = document.documentElement.scrollTop;
                var duration = 2000; // 2s

                if (scrT == 0) {
                    // tl(heroImg, duration, "50% 0%");
                    heroImg.style.objectPosition = "50% 0%";
                }
                else if (scrT < 200) {
                    // tl(heroImg, duration, "50% 20%");
                    heroImg.style.objectPosition = "50% 20%";
                }
                else if (scrT < 400) {
                    // tl(heroImg, duration, "50% 40%");
                    heroImg.style.objectPosition = "50% 40%";
                }
                else if (scrT < 600) {
                    // tl(heroImg, duration, "50% 60%");
                    heroImg.style.objectPosition = "50% 60%";
                }
                else if (scrT < 800) {
                    // tl(heroImg, duration, "50% 80%");
                    heroImg.style.objectPosition = "50% 80%";
                }
                else if (scrT < 1000) {
                    // tl(heroImg, duration, "50% 100%");
                    heroImg.style.objectPosition = "50% 100%";
                }
                else {
                    // 
                }
            });
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {

});

window.addEventListener('load', function() {
    jointGro.scrollEvent();
})