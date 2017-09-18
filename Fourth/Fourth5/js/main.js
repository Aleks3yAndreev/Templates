window.onload = function() {
    var menuToggle = document.querySelector('.content .data .menuToggle');
    var menu = document.querySelector('.content .data .content-menu');
    menuToggle.onclick = function() {
        if(menu.style.display != '') {
            menu.style.display = '';
        } else {
            menu.style.display = 'block';
        }
    };
};

