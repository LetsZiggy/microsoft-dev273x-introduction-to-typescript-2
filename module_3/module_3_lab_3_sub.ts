/* tsc --target ES2018 --removeComments --module system --outDir . module_3_lab_3_sub.ts */
/* tsc --target ES2018 --removeComments --module amd --outDir . module_3_lab_3_sub.ts */

class ArrayUtilities {
  methods: string[] = [ "reverseArray", "lastItemOfArray", "firstItemOfArray", "concatenateArray" ]

  reverseArray (array: number[]) {
    return array.slice(0).reverse()
  }

  lastItemOfArray (array: number[]) {
    return array.slice(0).pop()
  }

  firstItemOfArray (array: number[]) {
    return array.slice(0).shift()
  }

  concatenateArray (array1: number[], array2: null|number[]) {
    return array1.concat(array2)
  }
}

export default new ArrayUtilities
