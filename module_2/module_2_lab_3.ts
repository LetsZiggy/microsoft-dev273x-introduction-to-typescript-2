/* tsc --target ES2018 --removeComments --outFile module_2_lab.js module_2_lab_3.ts */

interface ColourChangeInterface {
  div: Element,
  changeColour (colour: string): boolean,
}

// interface ColourChangeConstructor {
//   new (div: Element): ColourChangeInterface
// }

// function createClass(ctor: any, args: any): any {
//   return new ctor(...any)
// }

interface ElementSet {
  div: Element,
  button: Element,
}

enum Colours {
  Green,
  Red,
  Blue,
  Orange,
}

class ColourChange implements ColourChangeInterface {
  div: Element

  constructor (div: Element) {
    this.div = div
  }

  changeColour (colour: string|number): boolean {
    if (typeof colour === "string") {
      ;(this.div as HTMLElement).style.backgroundColor = colour
    }

    return true
  }
}

class NumericColour extends ColourChange {
  static Colours = Colours

  constructor (div: Element) {
    super(div)

    ;(this.div as HTMLElement).style.width = squareSize
    ;(this.div as HTMLElement).style.height = squareSize
  }

  changeColour (colour: number): boolean {
    ;(this.div as HTMLElement).style.backgroundColor = Colours[colour]
    return true
  }
}

const getRandomInt: Function = (min: number, max: number, inclusive: boolean = false): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const res = (inclusive)
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : Math.floor(Math.random() * (max - min)) + min

  return res
}
const squareSizeNum: number = 100
const squareSize: string = `${ squareSizeNum }px`
const elementSet: ElementSet[] = []

for (let index: number = 4; index > 0; index--) {
  elementSet.push({
    div: document.createElement("div"),
    button: document.createElement("button"),
  })
}

elementSet.map((element, index) => {
  const numericColour = new NumericColour(element.div)

  element.button.textContent = "Change Colour"
  ;(element.button as HTMLElement).onclick = (event) => {
    numericColour.changeColour(getRandomInt(0, (Object.keys(Colours).length / 2)))
  }

  document.body.appendChild(element.button)
  document.body.appendChild(element.div)
})
