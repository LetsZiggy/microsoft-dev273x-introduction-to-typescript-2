/* tsc --target ES2018 --sourceMap --removeComments --experimentalDecorators --module system --outDir . module_4_self_assessment_main.ts */

import * as _ from "lodash"

import RollableDie from "./module_4_self_assessment_sub.js"

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
  width: 115px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #4CAF50;
  box-sizing: border-box;
  border: none;
  font-size: 1.15rem;
  color: #FFF;
  text-align: center;
  text-decoration: none;`
document.body.appendChild(button)
;(button as HTMLElement).onclick = async (event) => {
  button.setAttribute("disabled", "true")
  ;(button as HTMLElement).textContent = "Rolling"
  ;(button as HTMLElement).style.opacity = "0.5"

  await _.forEach(diceList, async function (die) {
    const res = await die.roll()
    ;(die.result as HTMLElement).innerText = `${ numberList[res] }`
  })

  button.setAttribute("disabled", "false")
  ;(button as HTMLElement).textContent = "Roll dice"
  ;(button as HTMLElement).style.opacity = "1"
}

const dieStyles = {
  width: "115px",
  height: "115px",
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
