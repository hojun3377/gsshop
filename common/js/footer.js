// Footer JAVA Script

function Footer() {
    var _windowW;

    return {
        clickEvt: function() {
            var familySiteBtn = document.getElementsByClassName('familysite')[0].firstElementChild;
            var familysiteRiseup = document.getElementsByClassName('familysite_riseup')[0];
            var closeBtn = document.getElementsByClassName('close_btn')[0];

            familySiteBtn.addEventListener('click', () => {
                _windowW = window.innerWidth;
                if (_windowW < 982 & _windowW > 758)
                    familysiteRiseup.style.height = '227px'
                else
                    familysiteRiseup.style.height = '283px';
            })

            closeBtn.addEventListener('click', () => {
                familysiteRiseup.style.height = '0px';
            })
        }
    }
}