const names = ['tote', 'totey', 'toet'];
const srcs = ['./images/tote.png','./images/tote.png','./images/tote.png'];;
class Item {
    constructor(name, element, src){
        this.name = name;
        this.element = element;
        this.src = src;
    }
    name(x){
        return names[x];
    }
    srcs(x){
        return srcs[x];
    }
}
var items = [];
var menu = document.getElementById('menu');
function intializeImgs(){
    for(i=0; i<names.length; i++){
        items.push(new Item(names[i], document.createElement('img')));
        items[i].element.setAttribute('src', srcs[i]);    
    }
}
function addImgs(){
    for(i=names.length-1; i>=0; i--){
        menu.appendChild(items[i].element);
        items[i].element.setAttribute('class', 'menuitem');
    }
}
function mouse(){
    for(i=0; i<names.length; i++){
        items[i].element.onmouseover = function(){
            console.log('dafdg');
        }
    }
}

intializeImgs();
addImgs();