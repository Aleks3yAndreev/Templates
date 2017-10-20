function slider() {
    var btnPrev = document.querySelector('.content .content-wrapper .slider .buttons .prev'),
        btnNext = document.querySelector('.content .content-wrapper .slider .buttons .next'),
        images = document.querySelectorAll('.content .content-wrapper .slider .photo .img'),
        i = 0,
        len = images.length;
    btnNext.onclick = function() {
        images[i].classList.remove('showed');
        i++;
        if(i >= len) {
            i = 0;
        }
        images[i].classList.add('showed');
        clearInterval(timer);
        changeImage();
    };
    btnPrev.onclick = function() {
        images[i].classList.remove('showed');
        i--;
        if(i < 0) {
            i = len - 1;
        }
        images[i].classList.add('showed');
        clearInterval(timer);
        changeImage();
    };
    var timer;
    function changeImage() {
        timer = setInterval(function() {
            images[i].classList.remove('showed');
            i++;
            if(i >= len) {
                i = 0;
            }
            images[i].classList.add('showed');
        }, 5000);
    }
    changeImage();
}