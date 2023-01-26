for (const subnavmenu of document.querySelectorAll('.subnav')) {
    subnavmenu.addEventListener('click', function() {
        const headerHeight = document.querySelector('.header').offsetHeight
        const menuItemHeight = this.querySelector('.top-menu__item').offsetHeight

        this.querySelector('.top-menu__item').classList.toggle('active')
        this.querySelector('.subnav-menu').style.top = menuItemHeight + (headerHeight - menuItemHeight)/2 - 3 + 'px';
        this.querySelector('.subnav-menu').classList.toggle('open');
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.subnav')) {
        if (!select.contains(e.target)) {
            select.querySelector('.top-menu__item').classList.remove('active');
            select.querySelector('.subnav-menu').classList.remove('open');
        }
    }
});