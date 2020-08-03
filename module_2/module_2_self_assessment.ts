/* tsc --target ES2018 --removeComments --outFile module_2_self_assessment.js module_2_self_assessment.ts */

enum numberList {
  "One" = 1,
  "Two" = 2,
  "Three" = 3,
  "Four" = 4,
  "Five" = 5,
  "Six" = 6,
  "Seven" = 7,
  "Eight" = 8,
  "Nine" = 9,
  "Ten" = 10,
  "Eleven" = 11,
  "Twelve" = 12,
}

interface IDieTemplate {
  result: Element,
  sides: number,
}

interface IRollableDie {
  roll: Function,
}

function rng (min: number, max: number, inclusive: boolean = false): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  const res = (inclusive)
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : Math.floor(Math.random() * (max - min)) + min

  return res
}

class DieTemplate implements IDieTemplate {
  result: Element = document.createElement("span")
  sides: number

  constructor (elem: Element, elemStyles: object, sides: number) {
    this.sides = sides

    ;(elem as HTMLElement).style.cssText = `
      position: relative;
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;`

    for (const [ key, value ] of Object.entries(elemStyles)) {
      ;(elem as HTMLElement).style[key] = value
    }

    const dieType = document.createElement("span")
    dieType.innerText = `${ this.sides }-sided`
    dieType.style.cssText = `
      position: absolute;
      left: 2px;
      top: 2px;
      font-size: 10px;
      text-decoration: underline;`

    ;(elem as HTMLElement).appendChild(dieType)
    ;(elem as HTMLElement).appendChild(this.result)
    ;(this.result as HTMLElement).innerText = "-"
  }

}

class RollableDie extends DieTemplate implements IRollableDie {
  constructor (elem: Element, elemStyles: object, sides: number) {
    super(elem, elemStyles, sides)
  }

  roll (): void {
    const res = rng(1, this.sides, true)
    ;(this.result as HTMLElement).innerText = `${ numberList[res] }`
  }
}

const button: Element = document.createElement("button")
;(button as HTMLElement).textContent = "Roll dice"
;(button as HTMLElement).style.cssText = `
  display: block;
  margin-bottom: 10px;`
document.body.appendChild(button)
;(button as HTMLElement).onclick = (event) => {
  diceList.forEach((value) => {
    value.roll()
  })
}

const dieStyles = {
  width: "100px",
  height: "100px",
  backgroundColor: "white",
  color: "red",
  border: "2px solid black",
  marginRight: "10px",
}
const diceSides: number[] = [ 4, 6, 8, 10, 12 ]
const diceList = diceSides.map((value) => {
  const elem = document.createElement("div")
  const die = new RollableDie(elem, dieStyles, value)
  document.body.appendChild(elem)

  return die
})
