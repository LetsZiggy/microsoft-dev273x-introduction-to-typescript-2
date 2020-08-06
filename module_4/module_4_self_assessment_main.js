System.register(["lodash", "./module_4_self_assessment_sub.js"], function (exports_1, context_1) {
    "use strict";
    var _, module_4_self_assessment_sub_js_1, numberList, button, dieStyles, diceSides, diceList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
                _ = _1;
            },
            function (module_4_self_assessment_sub_js_1_1) {
                module_4_self_assessment_sub_js_1 = module_4_self_assessment_sub_js_1_1;
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
  width: 115px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #4CAF50;
  box-sizing: border-box;
  border: none;
  font-size: 1.15rem;
  color: #FFF;
  text-align: center;
  text-decoration: none;`;
            document.body.appendChild(button);
            button.onclick = async (event) => {
                button.setAttribute("disabled", "true");
                button.textContent = "Rolling";
                button.style.opacity = "0.5";
                await _.forEach(diceList, async function (die) {
                    const res = await die.roll();
                    die.result.innerText = `${numberList[res]}`;
                });
                button.setAttribute("disabled", "false");
                button.textContent = "Roll dice";
                button.style.opacity = "1";
            };
            dieStyles = {
                width: "115px",
                height: "115px",
                backgroundColor: "white",
                color: "red",
                border: "2px solid black",
                marginRight: "10px",
            };
            diceSides = [4, 6, 8, 10, 12];
            diceList = _.map(diceSides, function (value) {
                const elem = document.createElement("div");
                const die = new module_4_self_assessment_sub_js_1.default(elem, dieStyles, value);
                document.body.appendChild(elem);
                return die;
            });
        }
    };
});
//# sourceMappingURL=module_4_self_assessment_main.js.map