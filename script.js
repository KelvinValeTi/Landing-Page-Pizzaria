const btnSand = document.getElementById('btn-menu-sand');
const menu = document.getElementById('ul-menu');
const menuItem = document.getElementsByClassName('nav-link');

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

/*
function fechaMenu(){
    if(cont==true){
        menu.style.display ='none';
        cont = false;  
    }
}*/



