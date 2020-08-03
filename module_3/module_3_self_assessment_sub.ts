/* tsc --target ES2018 --removeComments --module system --outDir . module_3_self_assessment_sub.ts */

import * as _ from "lodash"

declare namespace chance {
  export interface Base {
    integer: Function
  }
}

declare const chance: chance.Base

interface IDieTemplate {
  result: Element,
  sides: number,
}

interface IRollableDie {
  roll: Function,
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

    _.forEach(elemStyles, function (value, key) {
      ;(elem as HTMLElement).style[key] = value
    })

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

  roll (): number {
    return (chance.integer({ min: 1, max: this.sides }))
  }
}

export default RollableDie
