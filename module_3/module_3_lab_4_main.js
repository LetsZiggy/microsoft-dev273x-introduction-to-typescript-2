System.register(["./module_3_lab_4_sub.js"], function (exports_1, context_1) {
    "use strict";
    var module_3_lab_4_sub_js_1, array1, array2;
    var __moduleName = context_1 && context_1.id;
    function callArrayUtil(util, array1, array2 = null) {
        document.getElementById("output").innerHTML = module_3_lab_4_sub_js_1.default[util](array1, array2).toString();
    }
    return {
        setters: [
            function (module_3_lab_4_sub_js_1_1) {
                module_3_lab_4_sub_js_1 = module_3_lab_4_sub_js_1_1;
            }
        ],
        execute: function () {
            array1 = [1, 2, 3, 4, 5];
            array2 = [6, 7, 8, 9, 10];
            $.each(module_3_lab_4_sub_js_1.default.methods, function (index, prop) {
                document.getElementById(prop).onclick = function () {
                    callArrayUtil(prop, array1, array2);
                };
            });
            document.getElementById("output").innerHTML = "-";
        }
    };
});
