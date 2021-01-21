const names = ['tott', 'totey', 'toet', 'toee'];
const srcs = ['./images/tote.png','./images/tote.png','./images/tote.png','./images/tote.png'];;
class Item {
    constructor(name, img, a){
        this.name = name;
        this.img = img;
        this.a = a;
    }
}
var items = [];
var menu = document.getElementById('menu');
function intializeImgs(){
    for(i=0; i<names.length; i++){
        items.push(new Item(names[i], document.createElement('img'), document.createElement('a')));
        items[i].img.setAttribute('src', srcs[i]);
        items[i].img.setAttribute('class', 'menuimg');
                items[i].img.setAttribute('id', i);
        items[i].a.setAttribute('class','menuitem');
        items[i].a.textContent = items[i].name;   
    }
}
function addImgs(){
    for(i=names.length-1; i>=0; i--){
        menu.appendChild(items[i].a);
        items[i].a.appendChild(items[i].img);
    }
}
function mouse(){
    $('.menuitem').hover(function(e){
        if (e.target.className == 'menuitem'){
        }
    }, function(e){

    });
}

intializeImgs();
addImgs(); 
mouse();