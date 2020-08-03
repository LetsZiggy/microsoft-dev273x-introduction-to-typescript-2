/* tsc --target ES2018 --removeComments --outFile module_2_lab.js module_2_lab_1.ts */

const colour: string = "green"

const button: Element = document.createElement("button")

const squareSizeNum: number = 100
const squareSize: string = `${ squareSizeNum }px`
const div: Element = document.createElement("div")

button.textContent = "Change Colour"
;(button as HTMLElement).onclick = (event) => {
  colourChange(div, colour)
}

;(div as HTMLElement).style.width = squareSize
;(div as HTMLElement).style.height = squareSize

document.body.appendChild(button)
document.body.appendChild(div)

const colourChange: Function = (element: Element, colour: string): boolean => {
  (element as HTMLElement).style.backgroundColor = colour
  return true
}
