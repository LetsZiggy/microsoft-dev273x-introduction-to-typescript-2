### To Reference Namespaces Across Multiple Files

In our previous exercise, we created a basic namespace ArrayUtilities to hold some functions. Sometimes you want to be able to add data to a namespace across multiple files. TypeScript affords you this flexibility by allowing you to reference files for the compiler to find when compiling namespaces, and compiling them together into a single file. This can help you keep code isolated within specific functional files while maintaining the continuity of having a single namespace overarching all of the files.

Let's go ahead and break our ArrayUtilities namespace across multiple files and see what happens.

1. Make a copy of your namespacesLab folder from within your namespacesAndModulesLabs folder. Name that folder extendedNamespacesLab.

2. Rename namespacesLab.ts to extendedNamespacesLab.ts, and then open that file in Visual Studio Code.

3. Make a new file in Visual Studio code and copy the contents of extendedNamespacesLab.ts into it. Save it as extendedNamespacesLab_part2.ts.

```js
namespace ArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    } 
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
    export function firstItemOfArray(array: Array<number>) {
        return array.slice(0).shift();
    }
    export function concatenateArray(array1: Array<number>, array2: Array<number>) {
        return array1.concat(array2);
    }

}
```

4. Note that in either file Visual Studio code is letting you know that you have duplicated methods across these two files, resulting in some errors. Let's go ahead and delete two of them from extendedNamespacesLab.ts

```js
namespace ArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    } 
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
}
```

5. And remove the other 2 from extendedNamespacesLab_part2.ts

```js
namespace ArrayUtilities {
    export function firstItemOfArray(array: Array<number>) {
        return array.slice(0).shift();
    }
    export function concatenateArray(array1: Array<number>, array2: Array<number>) {
        return array1.concat(array2);
    }
}
```

So now we have two separate files adding different methods to the same namespace. In order to tie them together, we need to tell the Typescript compiler to look for the second file when compiling the first.

6. To do that, we use an XML tag at the top of the document called a Reference tag. The path is relative to where the document is in the file system.

```js
/// <reference path="extendedNamespacesLab_part2.ts" />

namespace ArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    } 
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
}
```

Now TypeScript will find the extendedNamespacesLab_part2.ts file when it is ready to compile extendedNamespacesLab.ts.

7. Let's go ahead and compile the TypeScript. In order to get both files, we have to use the --outfile option in tsc. Open your terminal or command prompt and type tsc --outfile extendedNamespacesLab.js extendedNamespacesLab.ts.

8. Open up your copy of index.html that is in your folder, and change the script tag that references namespacesLab.js to reference extendedNamespacesLab.js.

9. That's it! Open your index.html file in your browser - if you did everything correctly, nothing should be any different from the previous exercise, and all of the buttons should create the same output that they did in exercise 1.

You have now completed the Namespaces lab in this module. Our next lab will focus on Modules, or what was formerly known as external modules.
