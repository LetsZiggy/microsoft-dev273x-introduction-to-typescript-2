/* tsc --target ES2018 --removeComments --module system --outDir . module_3_lab_3_main.ts */
/* tsc --target ES2018 --removeComments --module amd --outDir . module_3_lab_3_main.ts */

import ArrayUtilities from "./module_3_lab_3_sub.js"

function callArrayUtil (util, array1, array2 = null) {
  document.getElementById("output").innerHTML = ArrayUtilities[util](array1, array2).toString()
}

const array1 = [ 1, 2, 3, 4, 5 ]
const array2 = [ 6, 7, 8, 9, 10 ]

for (const prop of ArrayUtilities.methods) {
  document.getElementById(prop).onclick = function () {
    callArrayUtil(prop, array1, array2)
  }
}

document.getElementById("output").innerHTML = "-"
