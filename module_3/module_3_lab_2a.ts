/* tsc --target ES2018 --removeComments --outFile module_3_lab_namespace.js module_3_lab_2a.ts */

/// <reference path="module_3_lab_2b.ts"/>

namespace ArrayUtilities {
  export function reverseArray (array: number[]) {
    return array.slice(0).reverse()
  }

  export function lastItemOfArray (array: number[]) {
    return array.slice(0).pop()
  }
}
