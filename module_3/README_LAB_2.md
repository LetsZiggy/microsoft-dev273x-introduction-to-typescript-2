### To Use AMD With Require.js

AMD or Asynchronous Module Definition is another popular module format that TypeScript can set as a compile target. As its name suggests, it is asynchronous in nature, so modules created using AMD are loaded separately in parallel as needed instead of all at once. AMD modules are generally not used in bundlers such as Browserify or Webpack, but instead are primarily loaded by a module loader called Require.JS.

In this exercise, we will re-compile our TypeScript files into AMD modules and load them with Require.JS.

1. Copy your modulesLab folder and name the copy modulesLabRequire.

2. Open up your command prompt or terminal, navigate to your modulesLabRequire folder, and type tsc --module amd main.ts. The --module flag tells the compiler to change the compile target. In this case we are telling TypeScript to produce AMD compiled files suitable for use in Require.js. Go ahead and open your arrayUtils.js compiled file so you can see how it differs from the CommonJS module.

```js
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ArrayUtilities = (function () {
        function ArrayUtilities() {
        }
        ArrayUtilities.prototype.reverseArray = function (array) {
            return array.slice(0).reverse();
        };
        ArrayUtilities.prototype.lastItemOfArray = function (array) {
            return array.slice(0).pop();
        };
        ArrayUtilities.prototype.firstItemOfArray = function (array) {
            return array.slice(0).shift();
        };
        ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
            return array1.concat(array2);
        };
        return ArrayUtilities;
    }());
    exports["default"] = new ArrayUtilities;
});
```

3. Next, open up your index.html file from your modulesLabRequire folder in Visual Studio Code.

4. We need to add a script tag in our index.html to load RequireJS. Again, we are going to use the CDNJS copy of the library.

```html
<html>
    <body>
    <button id="reverseArray">Reverse Array</button>
    <button id="lastItemOfArray">Last Item of Array</button>
    <button id="firstItemOfArray">First Item of Array</button>
    <button id="concatenateArray" >Concatenate Array</button>
    <div id="output" style="width:100%;">
    
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.js"></script>
    </body>
</html>
```

5. Next, we need to add a data-main html attribute to the script tag. This tells Require.JS which file is the main module of your application - in this case aptly named main.js.

```html
<html>
    <body>
    <button id="reverseArray">Reverse Array</button>
    <button id="lastItemOfArray">Last Item of Array</button>
    <button id="firstItemOfArray">First Item of Array</button>
    <button id="concatenateArray" >Concatenate Array</button>
    <div id="output" style="width:100%;">
    
    </div>
    <script data-main="/main" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.js"></script>
    </body>
</html>
```

Note: you can safely remove the script tags we added previously for CommonJs.

6. Restart your node server if necessary by closing the existing process either by closing the terminal or pressing CTRL+C (Command + C for Mac Users), then typing node server.js again, making sure you are still in your modulesLabRequire folder. Once you see listening, navigate to localhost:3000 in your browser. You should see the exact same output as the prior labs, if everything was configured properly.

![lab1completeresult](https://courses.edx.org/assets/courseware/v1/83d21319755e9fc22a373160274fc5f2/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab1_complete_result.png)

You have successfully refactored your application to use external modules - the preferred method of application organization in TypeScript. In our next lab, we will learn how to import and deal with external libraries such as Lodash or jQuery.
