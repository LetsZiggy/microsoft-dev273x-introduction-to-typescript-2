/* tsc --target ES2018 --removeComments --module system --outDir . module_3_lab_4_main.ts */

import ArrayUtilities from "./module_3_lab_4_sub.js"

declare namespace zepto {
  export interface Base {
    each: Function
  }
}

declare const $: zepto.Base

function callArrayUtil (util, array1, array2 = null) {
  document.getElementById("output").innerHTML = ArrayUtilities[util](array1, array2).toString()
}

const array1 = [ 1, 2, 3, 4, 5 ]
const array2 = [ 6, 7, 8, 9, 10 ]

$.each(ArrayUtilities.methods, function (index, prop) {
  document.getElementById(prop).onclick = function () {
    callArrayUtil(prop, array1, array2)
  }
})

document.getElementById("output").innerHTML = "-"
