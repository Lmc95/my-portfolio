const menu = document.querySelector('.header__menu');
const icoMenu = document.querySelector('.menu__btn i');

const optionMenu = document.querySelectorAll('.header__menu-item a');


const openMenu = () => {
    menu.classList.add('header__menu--active');
    icoMenu.classList.remove('fa-bars');
    icoMenu.classList.add('fa-xmark');
    document.body.style.overflow = 'hidden';
}
const closeMenu = () => {
    menu.classList.remove('header__menu--active');
    icoMenu.classList.add('fa-bars');
    icoMenu.classList.remove('fa-xmark');
    document.body.style.overflow = 'auto';
}

document.querySelector('.menu__btn').addEventListener('click', () => {
    if (!menu.classList.contains('header__menu--active')) {
        openMenu();
    } else {
        closeMenu();
    }
})

optionMenu.forEach(item => {
    item.addEventListener('click', () => {
        if (icoMenu.classList.contains('fa-xmark')) {
            console.log('click')
            closeMenu();
        }
    })
})