const box = document.querySelector(".box"); 
const loginlink = document.querySelector(".login-link"); 
const registerlink = document.querySelector(".register-link"); 
const btnPopup = document.querySelector(".btnlogin-popup"); 
const iconClose = document.querySelector(".icone-close"); 


registerlink.addEventListener('click', ()=> {
    box.classList.add("active");
}); 

loginlink.addEventListener('click', ()=> {
    box.classList.remove("active");
});

btnPopup.addEventListener('click', ()=> {
    box.classList.add("active-popup");
}); 

iconClose.addEventListener('click', ()=> {
    box.classList.remove("active-popup");
}); 
