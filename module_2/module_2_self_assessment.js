var numberList;
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
function rng(min, max, inclusive = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const res = (inclusive)
        ? Math.floor(Math.random() * (max - min + 1)) + min
        : Math.floor(Math.random() * (max - min)) + min;
    return res;
}
class DieTemplate {
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
        for (const [key, value] of Object.entries(elemStyles)) {
            ;
            elem.style[key] = value;
        }
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
}
class RollableDie extends DieTemplate {
    constructor(elem, elemStyles, sides) {
        super(elem, elemStyles, sides);
    }
    roll() {
        const res = rng(1, this.sides, true);
        this.result.innerText = `${numberList[res]}`;
    }
}
const button = document.createElement("button");
button.textContent = "Roll dice";
button.style.cssText = `
  display: block;
  margin-bottom: 10px;`;
document.body.appendChild(button);
button.onclick = (event) => {
    diceList.forEach((value) => {
        value.roll();
    });
};
const dieStyles = {
    width: "100px",
    height: "100px",
    backgroundColor: "white",
    color: "red",
    border: "2px solid black",
    marginRight: "10px",
};
const diceSides = [4, 6, 8, 10, 12];
const diceList = diceSides.map((value) => {
    const elem = document.createElement("div");
    const die = new RollableDie(elem, dieStyles, value);
    document.body.appendChild(elem);
    return die;
});
