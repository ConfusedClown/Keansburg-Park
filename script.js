const wrappers = document.querySelector('.wrappers');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-Popup');

const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrappers.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrappers.classList.remove('active');
}); 


btnPopup.addEventListener('click', ()=> {
    wrappers.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrappers.classList.remove('active-popup');
});