window.onload = function() {
    var menuToggle = document.querySelector('.page-header .wrapper .menuToggle');
    var menu = document.querySelector('.page-header .wrapper .menu');
    menuToggle.onclick = function() {
        if(menu.style.display != '') {
            menu.style.display = '';
        } else {
            menu.style.display = 'block';
        }
    };
    var socialsToggle = document.querySelector('.page-footer .navToggle');
    var footerMenu = document.querySelector('.page-footer .footer-menu');
    socialsToggle.onclick = function() {
        if(footerMenu.style.display != '') {
            footerMenu.style.display = '';
        } else {
            footerMenu.style.display = 'block';
        }
    };
};
