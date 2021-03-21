// Footer JAVA Script

function Footer() {
    return {
        clickEvt: function() {
            var familySiteBtn = document.getElementsByClassName('familysite')[0].firstElementChild;
            var familysiteRiseup = document.getElementsByClassName('familysite_riseup')[0];
            var closeBtn = document.getElementsByClassName('close_btn')[0];

            familySiteBtn.addEventListener('click', () => {
                familysiteRiseup.style.height = '283px';
            })

            closeBtn.addEventListener('click', () => {
                familysiteRiseup.style.height = '0px';
            })
        }
    }
}