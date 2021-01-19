const names = ['tott', 'totey', 'toet', 'toee'];
const srcs = ['./images/tote.png','./images/tote.png','./images/tote.png','./images/tote.png'];;
class Item {
    constructor(name, element, text){
        this.name = name;
        this.element = element;
        this.text = text;
    }
}
var items = [];
var menu = document.getElementById('menu');
function intializeImgs(){
    for(i=0; i<names.length; i++){
        items.push(new Item(names[i], document.createElement('img')));
        items[i].text = document.createElement('p');
        items[i].text.textContent = items[i].name;
        console.log(items[i].name);
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
    for(i=0; i<names.length-1; i++){
        items[i].element.onmouseover = function(){
            console.log(i);
            items[i].element.appendChild(items[i].text);
        }
    }
}

intializeImgs();
addImgs(); 
mouse();