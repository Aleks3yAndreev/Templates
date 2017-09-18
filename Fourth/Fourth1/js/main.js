window.onload = function() {
    var menuToggle = document.querySelector('.offer .toggle .menuToggle');
    var menu = document.querySelector('.offer .toggle .offer-menu');
    menuToggle.onclick = function() {
        if(menu.style.display != '') {
            menu.style.display = '';
        } else {
            menu.style.display = 'block';
        }
    };
};

