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
})