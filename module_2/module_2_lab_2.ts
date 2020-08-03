/* tsc --target ES2018 --removeComments --outFile module_2_lab.js module_2_lab_2.ts */

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

  changeColour (colour: string): boolean {
    (this.div as HTMLElement).style.backgroundColor = colour
    return true
  }
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
  ;(element.div as HTMLElement).style.width = squareSize
  ;(element.div as HTMLElement).style.height = squareSize

  const colourChange = new ColourChange(element.div)

  element.button.textContent = "Change Colour"
  ;(element.button as HTMLElement).onclick = (event) => {
    colourChange.changeColour(Colours[index])
  }

  document.body.appendChild(element.button)
  document.body.appendChild(element.div)
})
