### To Assert Types

In this portion of the lab, you will learn how to convert a variable from one type to another in TypeScript without declaring a new variable or changing the original type declaration. This is called type assertion and it tells TypeScript - essentially : "Trust me, I know what I'm talking about, this variable is this particular type". When you use type assertion, TypeScript will attempt to convert the variable from the type originally defined to the type that you are asserting. It will throw an error if it cannot do this (A simple example would be that you cannot convert a number to a string). This is especially useful if you have a type that's close to the type that you are already using, but too specific to be used in the generic type declaration.

In the last lab, we left you with this error in the function we built:

![error2](https://courses.edx.org/assets/courseware/v1/c6a56def5aa2c0b1b6583f78efe8b27c/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab1_step2_error2.png)

In this lab, we are going to correct that error with Type assertion.
To Declare Functions

1. Open up basicTypesLab.ts.

2. Locate the function that you had written in the previous lab:

```js
let colorChange: Function = (elem: Element, color: string) : boolean => {
    elem.style.backgroundColor = color;
    return true;
}
```

As you can see from the error being displayed, the style property does not exist on the Element type. This is because Element is a subset of properties from a different type, HTMLElement that can allow you to define elements in a more lightweight way without including the entire prototype of an HTML object.

3. Since Element is a subset of HTMLElement, we can go ahead and assert the elem variable's type as HTMLElement to get access to the style property. There are two ways of accomplishing this:

```js
let colorChange: Function = (elem: Element, color: string) : boolean => {
    (<HTMLElement>elem).style.backgroundColor = color;
    return true;
}
```

Or:

```js
let colorChange: Function = (elem: Element, color: string) : boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}
```

4. You can see now that the error has gone away. We can use this same rule outside of the colorChange function to give the div variable we defined in the first lab a height and width based on the squareSize string variable we declared in the first exercise.

```js
(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;
```

5. Finally, we can use this same type assertion to bind to the onclick property of the button element to call our colorChange function when clicked.

```js
(button as HTMLElement).onclick = (event) => {
    colorChange(div, color);
}
```

6. Let's go ahead and compile the final result of our code so we can test it in the browser. Save your basicTypesLab.ts file then go to your basicTypesLab folder in a Command Prompt window and type:

tsc basicTypesLab.ts

There should be no errors, and an basicTypesLab.js file will be present in your directory. This is the compiled version of your TypeScript file, ready to be run in a browser. If you do see errors when running this, double-check that you have followed the steps in these labs correctly, and that you have followed the proper Installation Procedures for TypeScript from Module 1.

That's it! Go ahead and open your index.html file in a browser, and press the Change Color button. You should see the following:

![lab1complete](https://courses.edx.org/assets/courseware/v1/a08cdbbf91531ee52a0df8af2bcf81e1/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab1_final_result.png)

And your code should look something like this:

![lab1completecode](https://courses.edx.org/assets/courseware/v1/cea20ee1b5b3e1ae3f5c6b35080faea7/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab1_complete_code.png)

Go ahead and play with your code, you can change the color and the size of the square and see how it looks like. Remember you need to save and compile your .ts file everytime you make a change to generate a new .ts file with the updated code to see it running.

This concludes the introductory lab to Types in TypeScript. In our next lab, we will learn how to use Classes to add portability to our logic.
