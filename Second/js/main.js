window.onload = function() {
    var menu = document.querySelector('.page-header .navigation-bar .menu');
    var menuToggle = document.querySelector('.page-header .navigation-bar .menuToggle');
    menuToggle.onclick = function() {
        if(menu.style.display != '') {
            menu.style.display = '';
        } else {
            menu.style.display = 'block';
        }
    };
};
