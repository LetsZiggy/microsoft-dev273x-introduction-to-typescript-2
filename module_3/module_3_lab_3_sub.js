define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ArrayUtilities {
        constructor() {
            this.methods = ["reverseArray", "lastItemOfArray", "firstItemOfArray", "concatenateArray"];
        }
        reverseArray(array) {
            return array.slice(0).reverse();
        }
        lastItemOfArray(array) {
            return array.slice(0).pop();
        }
        firstItemOfArray(array) {
            return array.slice(0).shift();
        }
        concatenateArray(array1, array2) {
            return array1.concat(array2);
        }
    }
    exports.default = new ArrayUtilities;
});
