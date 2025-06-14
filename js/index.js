const btnMenu = document.querySelector("#btn-menu");
const menuHamburguer = document.querySelector(".menu-hamburguer");

btnMenu.addEventListener("click", ()=>{
    btnMenu.classList.toggle('ativado');

    if(btnMenu.classList == 'ativado'){
        menuHamburguer.style.display='block';
    } else {
        menuHamburguer.style.display = 'none';
    }
})