const btnMenu = document.querySelector("#btn-menu");
const menuHamburguer = document.querySelector(".menu-hamburguer");
const menuLateral = document.querySelector(".menu-lateral");
const btnFecharMenu = document.querySelector("#btn-close-menu");

btnMenu.addEventListener("click", ()=>{
    menuLateral.classList.add('active');
})

btnFecharMenu.addEventListener('click',()=>{
    menuLateral.classList.remove('active');
})
