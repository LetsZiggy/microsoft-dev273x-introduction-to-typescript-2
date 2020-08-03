var Colours;
(function (Colours) {
    Colours[Colours["Green"] = 0] = "Green";
    Colours[Colours["Red"] = 1] = "Red";
    Colours[Colours["Blue"] = 2] = "Blue";
    Colours[Colours["Orange"] = 3] = "Orange";
})(Colours || (Colours = {}));
class ColourChange {
    constructor(div) {
        this.div = div;
    }
    changeColour(colour) {
        if (typeof colour === "string") {
            ;
            this.div.style.backgroundColor = colour;
        }
        return true;
    }
}
class NumericColour extends ColourChange {
    constructor(div) {
        super(div);
        this.div.style.width = squareSize;
        this.div.style.height = squareSize;
    }
    changeColour(colour) {
        ;
        this.div.style.backgroundColor = Colours[colour];
        return true;
    }
}
NumericColour.Colours = Colours;
const getRandomInt = (min, max, inclusive = false) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const res = (inclusive)
        ? Math.floor(Math.random() * (max - min + 1)) + min
        : Math.floor(Math.random() * (max - min)) + min;
    return res;
};
const squareSizeNum = 100;
const squareSize = `${squareSizeNum}px`;
const elementSet = [];
for (let index = 4; index > 0; index--) {
    elementSet.push({
        div: document.createElement("div"),
        button: document.createElement("button"),
    });
}
elementSet.map((element, index) => {
    const numericColour = new NumericColour(element.div);
    element.button.textContent = "Change Colour";
    element.button.onclick = (event) => {
        numericColour.changeColour(getRandomInt(0, (Object.keys(Colours).length / 2)));
    };
    document.body.appendChild(element.button);
    document.body.appendChild(element.div);
});
