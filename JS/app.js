var icon = document.getElementById('icon');
var slide = document.getElementById('slide-items');
var menu = document.getElementById('slide-menu');
var content = document.getElementById('slide-content');
var cont = 0;

function openSlide(){
    if (cont == 0){
        slide.classList.add('items-open');
        menu.classList.add('menu-open');
        content.classList.add('content-open');

        cont = 1;
    }else{
        slide.classList.remove('items-open');
        menu.classList.remove('menu-open');
        content.classList.remove('content-open');        
        cont = 0;
    }
}

icon.addEventListener('click', openSlide, true);