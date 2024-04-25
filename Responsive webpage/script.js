const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPoup=document.querySelector('btnlogin-popus')
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPoup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});