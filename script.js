const names = ['LA LA on cavnas', 'Goo goo heavy twill', 'hand sewn misty', 'July 2021 Cotton Button Up'];
const srcs = ['./images/shirtfont.png','./images/shirtfont.png','./images/shirtfont.png','./images/shirtfont.png'];
class Item {
    constructor(name, div, img, a){
        this.name = name;
        this.div = div;
        this.img = img;
        this.a = a;
    }
}
var items = [];
var menu = document.getElementById('menu');
function intializeImgs(){
    for(i=0; i<names.length; i++){
        items.push(new Item(names[i], document.createElement('div'), document.createElement('img'), 
        document.createElement('a')));

        items[i].div.setAttribute('class','menuitem');
        items[i].img.setAttribute('class', 'menuimg');
        items[i].img.setAttribute('src', srcs[i]);
        items[i].div.setAttribute('id', i);
        items[i].a.setAttribute('id', i);
        items[i].a.textContent = items[i].name;   
    }
}
function addImgs(){
    for(i=names.length-1; i>=0; i--){
        menu.appendChild(items[i].div);
        items[i].div.appendChild(items[i].a);
        items[i].div.appendChild(items[i].img);
    }
}
function mouse(){
    $('.menuitem').hover(function(e){
        console.log(this.firstChild);
        this.firstChild.style.visibility = 'visible';
        this.firstChild.style.opacity = '1';
    }, function(e){
        this.firstChild.style.visibility = 'hidden';
        this.firstChild.style.opacity = '0';
    });
}

intializeImgs();
addImgs(); 
mouse();