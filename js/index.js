const btnSideMenu = document.querySelector("#btn-side-menu");
const sideMenu = document.querySelector(".side-menu");
const btnCloseMenu = document.querySelector("#btn-close-side-menu");

btnSideMenu.addEventListener("click", ()=>{
    sideMenu.classList.add('active');
})

btnCloseMenu.addEventListener('click',()=>{
    sideMenu.classList.remove('active');
})
