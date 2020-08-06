var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class GenericClass {
    setVal(val) {
        this.val = val;
    }
    getVal() {
        return this.val;
    }
}
const element1 = new GenericClass();
const element2 = new GenericClass();
const element3 = new GenericClass();
element1.setVal(document.createElement("div"));
element2.setVal(document.createElement("div"));
element3.setVal(document.createElement("div"));
const elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
];
function isHTMLELement(x) {
    return (x.style === undefined);
}
function convertElement(elem) {
    if (!isHTMLELement(elem)) {
        return elem;
    }
    return elem;
}
function standardiseElements(elemArray) {
    const res = elemArray
        .map((value) => convertElement(value));
    return res;
}
const standardElements = standardiseElements(elementArray);
class Rotater {
    rotate(elem) {
        elem.style.transform = "rotate(-315deg)";
    }
    rotateBack(elem) {
        elem.style.transform = "";
    }
}
class Mover {
    move(elem) {
        elem.style.transform = "translateX(50px)";
    }
    moveBack(elem) {
        elem.style.transform = "";
    }
}
function animated(constructor) {
    constructor.prototype.animated = true;
    return (constructor);
}
let MovingElement = class MovingElement {
    constructor(elem) {
        elem.onmousedown = () => {
            this.move(elem);
        };
        elem.onmouseup = () => {
            this.moveBack(elem);
        };
        elem.onmouseover = () => {
            this.rotate(elem);
        };
        elem.onmouseout = () => {
            this.rotateBack(elem);
        };
        if (this.animated) {
            elem.style.transition = "transform 0.5s ease";
        }
        this.element = elem;
    }
};
MovingElement = __decorate([
    animated
], MovingElement);
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object
            .getOwnPropertyNames(baseClass.prototype)
            .forEach((name) => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
applyMixins(MovingElement, [Rotater, Mover]);
function getAvatar(elem, index) {
    const urls = ["pZOwZYs5XQI", "XpbNDNJtcm0", "SoI8wxVaAPI", "f0vQ-o8XVjM", "2sZwYCvwGqI", "cGS5ywfD2Fs"];
    const upper = (index + 1) * 2;
    const lower = upper - 1;
    const rng = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    const url = urls[(rng - 1)];
    const avatar = `https://source.unsplash.com/${url}/100x100`;
    elem.style.backgroundImage = `url("${avatar}")`;
    document.body.appendChild(elem);
}
for (const [index, elem] of standardElements.entries()) {
    elem.style.width = "100px";
    elem.style.height = "100px";
    elem.style.background = "#CCC";
    elem.style.margin = "20px";
    const elemClass = new MovingElement(elem);
    getAvatar(elemClass.element, index);
}
//# sourceMappingURL=module_4_lab_advanced.js.map