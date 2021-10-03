const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.navigation-menu');

// console.log(hamburguer);
// console.log(menu);

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
    // alert("click");
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer ){
        menu.classList.toggle("spread");
    }
    // console.log(e.target);
});