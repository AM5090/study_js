'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function(){
    if(this.selector[0] === '.'){
        console.log(this.selector);
        let div = document.createElement('div');
        div.classList.add(this.selector.slice(1));
        document.body.append(div);
        div.textContent = 'Hello';
        div.style.cssText = `height: ${this.height}px; 
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
    }else if(this.selector[0] === '#'){
        console.log(this.selector);
        let p = document.createElement('p');
        p.setAttribute('id', this.selector.slice(1));
        document.body.append(p);
        p.textContent = 'World';
        p.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
    }
};

let obj = new DomElement('.block', '60', '350', 'yellow', '40');
let obj2 = new DomElement('#best', '80', '300', 'red', '50');

obj.createElem();
obj2.createElem();
