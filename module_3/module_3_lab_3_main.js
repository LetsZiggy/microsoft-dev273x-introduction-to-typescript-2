define(["require", "exports", "./module_3_lab_3_sub.js"], function (require, exports, module_3_lab_3_sub_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function callArrayUtil(util, array1, array2 = null) {
        document.getElementById("output").innerHTML = module_3_lab_3_sub_js_1.default[util](array1, array2).toString();
    }
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    for (const prop of module_3_lab_3_sub_js_1.default.methods) {
        document.getElementById(prop).onclick = function () {
            callArrayUtil(prop, array1, array2);
        };
    }
    document.getElementById("output").innerHTML = "-";
});
