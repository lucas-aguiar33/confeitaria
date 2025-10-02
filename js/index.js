const btnSideMenu = document.querySelector("#btn-side-menu");
const sideMenu = document.querySelector(".side-menu");
const btnCloseMenu = document.querySelector("#btn-close-side-menu");

btnSideMenu.addEventListener("click", ()=>{
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    
})

btnCloseMenu.addEventListener('click',()=>{
    sideMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
})
