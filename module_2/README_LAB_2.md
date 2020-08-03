### To Use Arrays

This section of the lab deals with Arrays. JavaScript programmers are inherently familiar with Arrays - the type of object that stores a list of values or other objects. TypeScript requires a little bit more attention when working with Arrays, because not only does the Array variable need to be typed as an Array, its contents need to be typed to the types that the Array will contain.

Since in the last exercise we built out our interface for our elements, our enum to hold our color list, and in the previous exercise we created a class to keep separate instances of the colorChange function, we're going to tie it all together with an Array to create 4 separate squares, each with its own button, that will turn each box a different color.

1. Open up your exercise_2.ts file.

2. Right below the ElementSet interface declaration, lets make a type for the array using that interface.

```js
let elementSets : Array<ElementSet> = [];
```

This is letting TypeScript know that the Array elementSets will be containing objects conforming to the types listed in the ElementSet interface.

3. Remember the Elements variable we created earlier? We are going to take some of the code from that and create a loop instead to push items into the elementSets array. Turn that variable into the following:

```js
for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}
```

Note that even the index variable in the loop needs to be typed. This time we typed it on the fly instead of creating a definition at the top of the file.

4. Now that we have an array of 4 elementSets we are going to use the map() function to iterate over each of them and create our elements. First, below the closing bracket for the for loop, create a map() function off of elementSets:

```js
elementSets.map( (elem, index) => {
})
```

5. Next we are going to use the elem parameter from the function to create an instance of the colorChange class from exercise 1. This will set the this.div parameter to the element we are passing in from the array for that instance of the class.

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
})
```

6. Now, let's go ahead and assign the width and height to the divs, and the text Change Color to the button.

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
})
```

7. At this point we need to bind an onclick function to the button to call the changeColor function within the colorChange class. We are going to reference the Colors Enum we created earlier using the index parameter from the map callback function.

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
})
```

8. Lastly, let's go ahead and append those elements to the document.body.

```js
elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
    (elem.div as HTMLElement).style.width = squareSize;
    (elem.div as HTMLElement).style.height = squareSize;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})
```

9. If you still have them in your document, get rid of the following lines of code, since they are no longer needed.

```js
let color: string = "green";
let button: Element = document.createElement('button');
let div: Element = document.createElement('div');
button.textContent = "Change Color";
let colorChange: Function = (elem: Element, color: string): boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}
(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;
(button as HTMLElement).onclick = (event) => {
    colorChange(div, color);
}
document.body.appendChild(button);
document.body.appendChild(div);
```

10. That's it! If you followed the steps correctly, your code should now look like this:

![lab2complete_code](https://courses.edx.org/assets/courseware/v1/03b3e7cdb43c411ae14bee0ae43e1440/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab2_complete_code.png)

11. Follow the steps you learned in Lab 1 to compile exercise_2.ts.

12. Open your index.html and change the code to the following:

```html
<html>
    <body>
        <script src="./exercise_2.js"></script>
    </body>
</html>
```

13. Go ahead and open it in a browser. You should see 4 Change Color boxes below 4 white squares. Click the buttons and watch the colors change. When all four have changed, it should look like this:

![lab2complete_result](https://courses.edx.org/assets/courseware/v1/201405041ea6446418055ba6917f841e/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/lab2_complete_result.png)

That's it! You've now learned how to use Classes, Enums, Interfaces, and Arrays in TypeScript. In our next lab, we will learn how to use Union Types, Subclasses by creating something unheard of in JavaScript - an overloaded function.
