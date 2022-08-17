//variaveis
const btnSand = document.getElementById('btn-menu-sand');
const menu = document.getElementById('ul-menu');

const quemSomos = document.getElementById('quem-somos'); 
const cardapio = document.getElementById('cardapio'); 
const depoimentos = document.getElementById('depoimentos'); 
const nossasRedes = document.getElementById('nossas-redes');

let cont = false; // false se o menu NÃO estiver visível e true caso esteja

//ao clicar no menu sanduiche
btnSand.addEventListener("click", function(){ 
    if(cont==false){
        menu.style.display ='block';
        cont = true;
    }else{ 
        menu.style.display ='none';
        cont= false;  
    }
});

//Se o menu estiver aberto, ele fecha caso algum elemento fora do menu seja clicado.
menu.addEventListener("click", fechaMenu);
quemSomos.addEventListener("click", fechaMenu);
cardapio.addEventListener("click", fechaMenu);
depoimentos.addEventListener("click", fechaMenu);
nossasRedes.addEventListener("click", fechaMenu);

//fecha o menu, caso esteja aberto.
function fechaMenu(){
    if(cont == true){
        menu.style.display ='none';
        cont = false;  
    }
}



