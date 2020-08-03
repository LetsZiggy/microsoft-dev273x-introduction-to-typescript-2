System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var _, ArrayUtilities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
                _ = _1;
            }
        ],
        execute: function () {
            ArrayUtilities = class ArrayUtilities {
                constructor() {
                    this.methods = ["reverseArray", "lastItemOfArray", "firstItemOfArray", "concatenateArray"];
                }
                reverseArray(array) {
                    return _.reverse(array.slice(0));
                }
                lastItemOfArray(array) {
                    return _.last(array.slice(0));
                }
                firstItemOfArray(array) {
                    return _.first(array.slice(0));
                }
                concatenateArray(array1, array2) {
                    return _.concat(array1, array2);
                }
            };
            exports_1("default", new ArrayUtilities);
        }
    };
});
