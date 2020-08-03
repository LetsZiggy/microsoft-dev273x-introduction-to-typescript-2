System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var _, DieTemplate, RollableDie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
                _ = _1;
            }
        ],
        execute: function () {
            DieTemplate = class DieTemplate {
                constructor(elem, elemStyles, sides) {
                    this.result = document.createElement("span");
                    this.sides = sides;
                    elem.style.cssText = `
      position: relative;
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;`;
                    _.forEach(elemStyles, function (value, key) {
                        ;
                        elem.style[key] = value;
                    });
                    const dieType = document.createElement("span");
                    dieType.innerText = `${this.sides}-sided`;
                    dieType.style.cssText = `
      position: absolute;
      left: 2px;
      top: 2px;
      font-size: 10px;
      text-decoration: underline;`;
                    elem.appendChild(dieType);
                    elem.appendChild(this.result);
                    this.result.innerText = "-";
                }
            };
            RollableDie = class RollableDie extends DieTemplate {
                constructor(elem, elemStyles, sides) {
                    super(elem, elemStyles, sides);
                }
                roll() {
                    return (chance.integer({ min: 1, max: this.sides }));
                }
            };
            exports_1("default", RollableDie);
        }
    };
});
