### To Use Advanced Types and Iterators

The two primary advanced types used in TypeScript are Union Types and Intersection Types. These types essentially allow you to combine more than one type to create a dynamic type. Union types are an "Either Or" type, in which variables called with either type from the compound type are acceptable. Intersection types, on the other hand, are an "And" type, wherein all types provided must match for the type to check successfully.

Certain types in TypeScript are considered Iterators, most notably Array, String, and Object. In TypeScript, certain operations are only allowed on Iterable variable types, such as pop(), shift(), or the for...in and for...of syntax.

In this task, we will be using the for...of syntax to iterate over our array, and we will use a Union Type to create a function to convert all values in our array to <HTMLElement> type values, using the type guard that we build in the previous exercise.

1. Open up your advancedTypeScriptLab.ts file in Visual Studio Code.

2. First we are going to build out our convertElement function.

```js
function convertElement(elem : Element | HTMLElement): HTMLElement {
}
```

Note that we are accepting a Union Type for our parameter call signature for this function. This means that either an Element or an HTMLElement typed variable (and only those types) can be passed to this function. It is only returning the HTMLElement type.

3. Next, let's use our type guard to make an if statement.

```js
function convertElement(elem : Element | HTMLElement): HTMLElement {
    if (!isHTMLElement(elem)) {
        return <HTMLElement>elem;
    }
    else {
        return elem;
    }
}
```

It will run the isHTMLElement function with our elem param, and if it does not match the type,it returns the element converted to HTMLElement with a type assertion. If it matches, it leaves it alone and returns it as-is.

4. Now, let's build out a standardizeElements function to handle the whole array.

```js
function standardizeElements(elemArray: Array<any>) : Array<HTMLElement> {
}
```

This function is accepting an array with any contents and returning an array with only HTMLElement typed elements.

5. Within that function, we are going to use the for...of syntax to loop through the items and pass them to convertElement, then return the array after we are done.

```js
function standardizeElements(elemArray: Array<any>) : Array<HTMLElement> {
   for (let elem of elemArray) {
       convertElement(elem)
   }
   return elemArray;
}
```
The for...of syntax is exclusive to Typescript, and is a distinct differentiation from the for...in syntax. Whereas in the for...in syntax, the first parameter is a variable that will be assigned the index or key within the array for each iterated property, the for...of syntax assigns the value of each position to the variable instead.

6. Finally, let's call standardizeElements with our non-standard array full of mixed types.

```js
let standardElements = standardizeElements(elementArray);
```

If you hover over this variable, Visual Studio Code lets you know that it is now a HTMLElement[] array.

7. Now that you have completed all of these tasks, your code should look like this:

```js
class genericClass<T> {
    val : T;
    setVal(val : T) {
        this.val = val;
    }
    getVal() : T {
        return this.val;
    }
}
let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>()
let element3 = new genericClass<Element>();
element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));
let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
]
function isHTMLElement(x: any): x is HTMLElement {
    return x.style !== undefined;
}
function convertElement(elem : Element | HTMLElement): HTMLElement {
    if (!isHTMLElement(elem)) {
        return <HTMLElement>elem;
    }
    else {
        return elem;
    }
}
function standardizeElements(elemArray: Array<any>) : Array<HTMLElement> {
    for (let elem of elemArray) {
        convertElement(elem)
    }
    return elemArray;
}
let standardElements = standardizeElements(elementArray);
```

So that's how you can use advanced types to make dynamic decisions about types in your application without having to resort to using <any>, and how you can use TypeScript's built in Iterator support to write cleaner loops on your Arrays, Strings, or Objects.

In our next lab, we are going to build a dynamic class out of reusable components using Mixins to apply some properties and methods to our elements that we created in this lab.
