const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const menuUl = document.querySelector('.menu ul');
const closeMenu = document.querySelector('.close-menu');
const backgroundMenu = document.querySelector('.background-menu');
const loginIcon = document.querySelector('.login');
const loginPage = document.querySelector('.login-page');
const closeLogin = document.querySelector('.close-login');
const btnRegister = document.querySelector('.btnRegister');
const registerPage = document.querySelector('.register-page');
const closeRegisterIcon = document.querySelector('.close-register');
const btnCloseRegister = document.querySelector('.btn-close-register')


menuIcon.addEventListener('click', function() {
    menuUl.style.left = '0';
    overlay.style.display = 'block';
    closeMenu.style.display = 'block';
    backgroundMenu.style.display = 'block';
})

overlay.addEventListener('click', function() {
    menuUl.style.left = '-200px';
    overlay.style.display = 'none';
    backgroundMenu.style.display = 'none';
    closeMenu.style.display = 'none';
})

closeMenu.addEventListener('click', function() {
    menuUl.style.left = '-200px';
    overlay.style.display = 'none';
    backgroundMenu.style.display = 'none';
    closeMenu.style.display = 'none';
})

loginIcon.addEventListener('click', function() {
    loginPage.classList.add('show1', "light1");
    // loginPage.style.left = '-350px';
})

closeLogin.addEventListener('click', function() {
    loginPage.classList.remove('show1', "light1");
})

btnRegister.addEventListener('click', function() {
    registerPage.classList.add('show2', "light2");
})

closeRegisterIcon.addEventListener('click', function() {
    registerPage.classList.remove('show2', "light2");
    loginPage.classList.add('show1', "light1");
})

btnCloseRegister.addEventListener('click', function() {
    registerPage.classList.remove('show2', "light2");
    loginPage.classList.add('show1', "light1");
})
