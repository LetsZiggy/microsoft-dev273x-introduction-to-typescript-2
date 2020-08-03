### To Use Ambient Namespaces

Sometimes you may want to work with a library that is not well supported by the TypeScript community, and potentially is loaded via a script tag instead of a module. To do this, we have to employ the use of ambient namespaces in order to maintain our type checking capabilities while using that library.

Ambient namespaces are essentially namespaces for objects that don't exist yet. They give us the ability to set up types to work with in advance of a global variable being set by an external script.

In this exercise, we are going to modify the for...in loop in our main.ts file to use the equivalent function $.each() provided by zepto.js, a jQuery alternative that does not have good TypeScript support built in.

1. First, open up the index.html file in our externalModulesLab folder in Visual Studio Code. Then let's set up the script tag for the library in our index.html. As we did in the previous lab, we are going to use the CDNJS copy of zepto.js.

```html
<html>
    <body>
    <button id="reverseArray">Reverse Array</button>
    <button id="lastItemOfArray">Last Item of Array</button>
    <button id="firstItemOfArray">First Item of Array</button>
    <button id="concatenateArray" >Concatenate Array</button>
    <div id="output" style="width:100%;">
    
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.12/system.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.js"></script>
    <script>
        SystemJS.config({
            map: {
                'lodash': './node_modules/lodash/lodash.js'
            }
        });
        SystemJS.import('main.js')
    </script>
    </body>
</html>
```

2. Next, go ahead and open your main.ts file in Visual Studio Code.

3. First, let's try to change the for...in function to Zepto's $.each().

```js
import ArrayUtilities from './arrayUtils.js'
let array1 = [
    1,
    2,
    3,
    4,
    5
];
let array2 = [
    6,
    7,
    8,
    9,
    10
];
function callArrayUtil(util, array, array2 = null) {
    document.getElementById('output').innerHTML = ArrayUtilities[util](array, array2).toString()
}
$.each(ArrayUtilities, function(property, index) {
    document.getElementById(property).onclick = function() {
        callArrayUtil(property, array1, array2)
    }
})
document.getElementById("output").innerHTML = array1.toString();
```

As you can see, TypeScript is throwing an error on the $ variable, stating that it is not defined. In order to properly define this, we need to use an ambient namespace.

4. First, we are going to declare an ambient namespace for the zepto library at the top of our file.

```js
import ArrayUtilities from './arrayUtils.js'

declare namespace zepto {
    
}
```

The declare keyword is what establishes a namespace as being ambient.

5. Next, we are going to add an interface to describe the shape of the variable that the Zepto library returns. Normally we would want to create as exhaustive of a type schema as we could, but in this case we are only going to describe the function we intend to use.

```js
import ArrayUtilities from './arrayUtils.js'

declare namespace zepto {
    export interface Base {
        each: Function
    }
}
```

6. Finally, we need to declare an ambient $ var to bind to the namespace. Declaring ambient variables uses the same declare keyword that declaring an ambient namespace does.

```js
import ArrayUtilities from './arrayUtils.js'

declare namespace zepto {
    export interface Base {
        each: Function
    }
}
declare var $: zepto.Base;
```

You can see that we have assigned the interface described in zepto.Base to the function.

7. Now that the error has gone away, go ahead and compile your TypeScript by opening up your command prompt or terminal, going to your externalModulesLab folder, and typing tsc main.ts. Once that has completed, type node server.js, then navigate to localhost:3000 in a browser. Once again - if all has gone well, it should look exactly the same, and function the same as before.

You have now integrated external libraries into your TypeScript modules in both the best and worst case scenarios. This completes the lab section of this module. In the self-assessment, you will take these skills and apply them to the dice rolling application you built in Module 2.
