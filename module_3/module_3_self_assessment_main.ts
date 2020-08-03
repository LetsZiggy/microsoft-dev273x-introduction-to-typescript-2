/* tsc --target ES2018 --removeComments --module system --outDir . module_3_self_assessment_main.ts */

import * as _ from "lodash"

import RollableDie from "./module_3_self_assessment_sub.js"

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

const button: Element = document.createElement("button")
;(button as HTMLElement).textContent = "Roll dice"
;(button as HTMLElement).style.cssText = `
  display: block;
  margin-bottom: 10px;`
document.body.appendChild(button)
;(button as HTMLElement).onclick = (event) => {
  _.forEach(diceList, function (value) {
    const res = value.roll()
    ;(value.result as HTMLElement).innerText = `${ numberList[res] }`
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
const diceList = _.map(diceSides, function (value) {
  const elem = document.createElement("div")
  const die = new RollableDie(elem, dieStyles, value)
  document.body.appendChild(elem)

  return die
})
