const jointGro = (function() {

    //  t: current time
    //  b: beginning value
    //  c: change in value
    function easeOutQuart(t, b, c) {
        return c * (1 - (--t)*t*t*t) + b;
    }

    const tl = function(element, duration, vars) {
        var from = Number((element.style.objectPosition.split(' ')[1]).split('%')[0]);
        var to = Number((vars.split(' ')[1]).split('%')[0]);
        var start = null;

        var step = function(timestamp) {
            if (!start) start = timestamp;

            var progress = timestamp - start;
            var p = easeOutQuart(progress/duration, from, to-from);
            element.style.objectPosition = '50% ' + p + '%';
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    return {
        scrollEvent: function() {
            var heroImg = document.getElementById('hero-img');

            window.addEventListener('scroll', function() {
                var scrT = document.documentElement.scrollTop;
                var duration = 2000; // 10ms

                if (scrT == 0) {
                    tl(heroImg, duration, "50% 0%");
                }
                else if (scrT < 200) {
                    tl(heroImg, duration, "50% 20%");
                }
                else if (scrT < 400) {
                    tl(heroImg, duration, "50% 40%");
                }
                else if (scrT < 600) {
                    tl(heroImg, duration, "50% 60%");
                }
                else if (scrT < 800) {
                    tl(heroImg, duration, "50% 80%");
                }
                else if (scrT < 1000) {
                    tl(heroImg, duration, "50% 100%");
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