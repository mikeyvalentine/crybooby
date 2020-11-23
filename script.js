const radio = document.getElementById('rad');
const menu = document.getElementById('menu');

radio.addEventListener('click', function(){
    if(menu.style.visibility == 'hidden') {
        menu.style.visibility = 'visible';
    }
    else{
        menu.style.visibility = 'hidden';
    }
})