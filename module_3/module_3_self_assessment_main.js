System.register(["lodash", "./module_3_self_assessment_sub.js"], function (exports_1, context_1) {
    "use strict";
    var _, module_3_self_assessment_sub_js_1, numberList, button, dieStyles, diceSides, diceList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
                _ = _1;
            },
            function (module_3_self_assessment_sub_js_1_1) {
                module_3_self_assessment_sub_js_1 = module_3_self_assessment_sub_js_1_1;
            }
        ],
        execute: function () {
            (function (numberList) {
                numberList[numberList["One"] = 1] = "One";
                numberList[numberList["Two"] = 2] = "Two";
                numberList[numberList["Three"] = 3] = "Three";
                numberList[numberList["Four"] = 4] = "Four";
                numberList[numberList["Five"] = 5] = "Five";
                numberList[numberList["Six"] = 6] = "Six";
                numberList[numberList["Seven"] = 7] = "Seven";
                numberList[numberList["Eight"] = 8] = "Eight";
                numberList[numberList["Nine"] = 9] = "Nine";
                numberList[numberList["Ten"] = 10] = "Ten";
                numberList[numberList["Eleven"] = 11] = "Eleven";
                numberList[numberList["Twelve"] = 12] = "Twelve";
            })(numberList || (numberList = {}));
            button = document.createElement("button");
            button.textContent = "Roll dice";
            button.style.cssText = `
  display: block;
  margin-bottom: 10px;`;
            document.body.appendChild(button);
            button.onclick = (event) => {
                _.forEach(diceList, function (value) {
                    const res = value.roll();
                    value.result.innerText = `${numberList[res]}`;
                });
            };
            dieStyles = {
                width: "100px",
                height: "100px",
                backgroundColor: "white",
                color: "red",
                border: "2px solid black",
                marginRight: "10px",
            };
            diceSides = [4, 6, 8, 10, 12];
            diceList = _.map(diceSides, function (value) {
                const elem = document.createElement("div");
                const die = new module_3_self_assessment_sub_js_1.default(elem, dieStyles, value);
                document.body.appendChild(elem);
                return die;
            });
        }
    };
});
