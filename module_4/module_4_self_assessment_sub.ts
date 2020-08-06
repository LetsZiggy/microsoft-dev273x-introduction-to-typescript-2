/* tsc --target ES2018 --sourceMap --removeComments --experimentalDecorators --module system --outDir . module_4_self_assessment_sub.ts */

import * as _ from "lodash"

declare namespace chance {
  export interface Base {
    integer: Function
  }
}

declare const chance: chance.Base

interface IDieTemplate {
  elem: HTMLElement,
  result: HTMLElement,
  sides: number,
}

interface IRollableDie {
  sides: number,
  getNumber: Function
  roll: () => Promise<number>,
}

interface IrngAPI {
  data: number[],
  success: boolean,
  [prop: string]: any,
}

function applyMixins (derivedClass: any, baseClasses: any[]) {
  baseClasses.forEach((baseClass) => {
    Object
      .getOwnPropertyNames(baseClass.prototype)
      .forEach((name) => {
        derivedClass.prototype[name] = baseClass.prototype[name]
      })
  })
}

function isHTMLELement (x: any): x is HTMLElement {
  return(x.style === undefined)
}

function convertElement (elem: Element|HTMLElement): HTMLElement {
  return((!isHTMLELement(elem))
    ? (elem as HTMLElement)
    : elem
  )
}

class DieTemplate implements IDieTemplate {
  elem: HTMLElement
  result: HTMLElement
  sides: number

  init (elem: Element|HTMLElement, elemStyles: object, sides: number) {
    this.elem = convertElement(elem)
    this.result = document.createElement("span")
    this.sides = sides

    this.elem.style.cssText = `
      position: relative;
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      box-sizing: border-box;`

    _.forEach(elemStyles, (value, key) => {
      this.elem.style[key] = value
    })

    const dieType = document.createElement("span")
    dieType.innerText = `${ this.sides }-sided`
    dieType.style.cssText = `
      position: absolute;
      left: 2px;
      top: 2px;
      box-sizing: border-box;
      font-size: 10px;
      text-decoration: underline;`

    elem.appendChild(dieType)
    elem.appendChild(this.result)
    this.result.innerText = "-"
  }
}

function rng<T extends { new (...args: any[]): {} }> (constructor: T) {
  constructor.prototype.getNumber = async () => {
    const response = await fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8")
    const json = await response.json()

    return json
  }

  return(constructor)
}

@rng
class DieRoller implements IRollableDie {
  sides: number
  getNumber: () => Promise<IrngAPI>

  async roll () {
    const json = await this.getNumber()

    if (!json.success) {
      return (chance.integer({ min: 1, max: this.sides }))
    }

    const divisor = Math.ceil(256 / this.sides)
    let number = json.data[0] + 1
    let res = 0

    while (number > 0) {
      number = number - divisor
      res++
    }

    return res
  }
}

class RollableDie implements DieTemplate, DieRoller {
  elem: HTMLElement
  result: HTMLElement
  sides: number
  init: (elem: Element|HTMLElement, elemStyles: object, sides: number) => void
  getNumber: () => Promise<IrngAPI>
  roll: () => Promise<number>

  constructor (elem: Element|HTMLElement, elemStyles: object, sides: number) {
    this.init(elem, elemStyles, sides)
  }
}

applyMixins(RollableDie, [ DieTemplate, DieRoller ])

export default RollableDie
