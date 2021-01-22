const names = ['tott', 'totey', 'toet', 'toee'];
const srcs = ['./images/tote.png','./images/tote.png','./images/tote.png','./images/tote.png'];;
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
        items[parseInt(e.target.id) + "<br>"].a.style.visibility = 'none';
        console.log(e.target.id);
    }, function(e){

    });
}

intializeImgs();
addImgs(); 
mouse();