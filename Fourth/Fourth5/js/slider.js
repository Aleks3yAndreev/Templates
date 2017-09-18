window.onload = function() {
    var btnPrev = document.querySelector('.content .slider .prev'),
        btnNext = document.querySelector('.content .slider .next'),
        images = document.querySelectorAll('.content .slider .photo .img'),
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
};