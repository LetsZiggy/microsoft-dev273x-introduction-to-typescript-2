### To Create an Overloaded Method

TypeScript gives you the ability to do something that Javascript does not - create overloaded methods. An overloaded method is a method that has the same name as another, but because it provides a different call signature is treated as a different function. When you have a derived method of a class this gives you the special opportunity to create an overloaded method within the subclass.

In this task, we are going to create an overloaded method for changeColor in our numericColor class, and modify the existing changeColor method in the colorChange class to be compatible with the overloaded method. The end result will be that you can call changeColor with a different parameter and the subclass' version of the method will return the value. We will then use the Subclass' version of changeColor to have our squares turn a random color whenever the Change Color button is pressed.

1. Open up your exercise_3.ts file.

2. In your numericColor class, let's go ahead and declare the changeColor method.

```js
class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
    changeColor () {
    }
}
```

3. Instead of passing a string into our method, we are going to be passing in a number that's going to end up referencing the Colors enum. We also want to make this function typed as a boolean and return true within the function, and add the body of the method which will modify this.div to pick up a color from the Colors enum based on the number passed into it.

```js
class numericColor extends colorChange {
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
    changeColor (color: number) : boolean{
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}
```

You can see now that Visual Studio Code has flagged an error for the numericColor class at this point. Hover over it and you should see the following:

```shell
[ts]
Class 'numericColor' incorrectly extends base class 'colorChange'.
  Types of property 'changeColor' are incompatible.
    Type '(color: number) => boolean' is not assignable to type '(color: string) => boolean'.
      Types of parameters 'color' and 'color' are incompatible.
        Type 'string' is not assignable to type 'number'.
```

This is telling us that the call signature for the new method doesn't match the call signature within the method within the colorChange class. To fix this, we are going to need to modify that function.

4. In order to make the main function able to properly handle the overloaded function, we are going to need to modify it to accept both types. In order to do this, we are going to use an advanced TypeScript concept called a Union Type. Union Types allow a type to function as more than one type. In this instance, we are going to be using the union type number | string. You will learn Union Types in greater detail in the 3rd module of this course.

```js
class colorChange {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor(color: number | string) : boolean {
         if (typeof(color) === "number") {
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}
```

5. When you call an overloaded method in a subclass, it fires both the subclass version of the method and the parent class version of the method simultaneously. In order to properly have only the subclass handle the overloaded method's functionality, we need to short-circuit the parent class' method by checking the type when the function executes and returning true if the parameter specified is a number.

```js
class colorChange {
    div: Element;
    constructor(div: Element){
        this.div = div;
    }
    changeColor(color: number | string) : boolean {
         if (typeof(color) === "number") {
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}
```

6. Now, let's go ahead and change the class instantiation in our elementSets.map code block to reference the subclass instead of the parent class.

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new numericColor(elem.div);
```

7. We are going to need a function to return a random number. Instead of writing it by hand, this is the getRandomIntInclusive() from Mozilla Developer Network's page on Math.random(), modified for TypeScript. Go ahead and insert it above the elementSets.map function call.

```js
let getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

8. Finally, we are going to change the onclick function to use the getRandomIntInclusive function and pass a random number to numericColor.changeColor

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new numericColor(elem.div);

    elem.button.textContent = "Change Color";

    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})
```

9. That's it! If you followed the steps correctly, your code should now look like this:

![lab3complete_code](https://courses.edx.org/assets/courseware/v1/96664a19b4263686a8b96ece00c95ac3/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/functionoverload.png)

If you see something different, go back and check your work against the steps in the lab.

10. Follow the steps you learned in Lab 1 to compile exercise_3.ts.

11. Open your testing.html and change the code to the following:

```html
<html>
    <body>
        <script src="./exercise_3.js"></script>
    </body>
</html>
```

12. Go ahead and open it in a browser. You should see 4 Change Color boxes below 4 white squares. Click the buttons and watch the colors change, notice that they change randomly each time you press the button. It should look something like this, though the colors won't necessarily match up:

![lab3complete_result](https://courses.edx.org/assets/courseware/v1/d08ccdd7b6eee072851ff2fbc03a734b/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab3_complete_result.png)

This completes the Module 2 Lab. In the self-assessment, you will have an opportunity to take these skills and apply them on your own.
