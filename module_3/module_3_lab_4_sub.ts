/* tsc --target ES2018 --removeComments --module system --outDir . module_3_lab_4_sub.ts */

import * as _ from "lodash"

class ArrayUtilities {
  methods: string[] = [ "reverseArray", "lastItemOfArray", "firstItemOfArray", "concatenateArray" ]

  reverseArray (array: number[]) {
    return _.reverse(array.slice(0))
  }

  lastItemOfArray (array: number[]) {
    return _.last(array.slice(0))
  }

  firstItemOfArray (array: number[]) {
    return _.first(array.slice(0))
  }

  concatenateArray (array1: number[], array2: null|number[]) {
    return _.concat(array1, array2)
  }
}

export default new ArrayUtilities
