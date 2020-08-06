System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var _, DieTemplate, DieRoller, RollableDie;
    var __moduleName = context_1 && context_1.id;
    function applyMixins(derivedClass, baseClasses) {
        baseClasses.forEach((baseClass) => {
            Object
                .getOwnPropertyNames(baseClass.prototype)
                .forEach((name) => {
                derivedClass.prototype[name] = baseClass.prototype[name];
            });
        });
    }
    function isHTMLELement(x) {
        return (x.style === undefined);
    }
    function convertElement(elem) {
        return ((!isHTMLELement(elem))
            ? elem
            : elem);
    }
    function rng(constructor) {
        constructor.prototype.getNumber = async () => {
            const response = await fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8");
            const json = await response.json();
            return json;
        };
        return (constructor);
    }
    return {
        setters: [
            function (_1) {
                _ = _1;
            }
        ],
        execute: function () {
            DieTemplate = class DieTemplate {
                init(elem, elemStyles, sides) {
                    this.elem = convertElement(elem);
                    this.result = document.createElement("span");
                    this.sides = sides;
                    this.elem.style.cssText = `
      position: relative;
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      box-sizing: border-box;`;
                    _.forEach(elemStyles, (value, key) => {
                        this.elem.style[key] = value;
                    });
                    const dieType = document.createElement("span");
                    dieType.innerText = `${this.sides}-sided`;
                    dieType.style.cssText = `
      position: absolute;
      left: 2px;
      top: 2px;
      box-sizing: border-box;
      font-size: 10px;
      text-decoration: underline;`;
                    elem.appendChild(dieType);
                    elem.appendChild(this.result);
                    this.result.innerText = "-";
                }
            };
            DieRoller = class DieRoller {
                async roll() {
                    const json = await this.getNumber();
                    if (!json.success) {
                        return (chance.integer({ min: 1, max: this.sides }));
                    }
                    const divisor = Math.ceil(256 / this.sides);
                    let number = json.data[0] + 1;
                    let res = 0;
                    while (number > 0) {
                        number = number - divisor;
                        res++;
                    }
                    return res;
                }
            };
            DieRoller = __decorate([
                rng
            ], DieRoller);
            RollableDie = class RollableDie {
                constructor(elem, elemStyles, sides) {
                    this.init(elem, elemStyles, sides);
                }
            };
            applyMixins(RollableDie, [DieTemplate, DieRoller]);
            exports_1("default", RollableDie);
        }
    };
});
//# sourceMappingURL=module_4_self_assessment_sub.js.map