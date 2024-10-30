const menu = document.querySelector('.header__menu');

document.querySelector('.menu__btn').addEventListener('click', () => {
    if(!menu.classList.contains('header__menu--active')){
        menu.classList.add('header__menu--active');
    }else {
        menu.classList.remove('header__menu--active');
    }
})