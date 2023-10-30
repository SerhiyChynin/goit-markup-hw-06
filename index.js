const mob_menu = document.querySelector('.mob-menu'); 

document.querySelector(".burger-btn-open").addEventListener('touchstart', () => {
    mob_menu.classList.add('is-open');
});
document.querySelector(".modal-btn-close").addEventListener('touchstart', () => {
    mob_menu.classList.remove('is-open');
});