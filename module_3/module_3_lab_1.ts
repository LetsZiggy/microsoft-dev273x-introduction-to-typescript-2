/* tsc --target ES2018 --removeComments --outFile module_3_lab_namespace.js module_3_lab_1.ts */

namespace ArrayUtilities {
  export function reverseArray (array: number[]) {
    return array.slice(0).reverse()
  }

  export function lastItemOfArray (array: number[]) {
    return array.slice(0).pop()
  }

  export function firstItemOfArray (array: number[]) {
    return array.slice(0).shift()
  }

  export function concatenateArray (array1: number[], array2: number[]) {
    return array1.concat(array2)
  }
}
