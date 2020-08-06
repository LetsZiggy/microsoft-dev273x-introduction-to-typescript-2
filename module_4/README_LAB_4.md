### To Use Async/Await

Now that we have learned the basics of using Promises to communicate with APIs, we are going to introduce you to a newer method of constructing the same kind of request known as Async/Await. This syntax enables you to write your code in a manner that looks like synchronous code, but still maintains its asynchronous functionality.

In this exercise, we will refactor our getAvatar function to use Async/Await.

1. Copy your advancedTypeScriptLab_promise folder and name the copy advancedTypeScriptLab_async. Open up your advancedTypeScriptLab.ts file in your advancedTypeScriptLab_async folder in Visual Studio Code.

2. The first component in Async/Await is to declare an asynchronous method. To do this, use the async keyword in front of your function declaration.

```js
async function getAvatar_Async (elem: HTMLElement) {
}
```

This lets TypeScript know to look for await keywords inside of your function, and to declare the values asynchronously.

3. Now we are going to call UINames with fetch like we did in the previous exercise, but this time we are going to assign it's value to a variable asynchronously using the await keyword.

```js
async function getAvatar_Async (elem: HTMLElement) {
    let uiName = await fetch('https://uinames.com/api/');
}
```

4. Next, we are going to use the .json() value from our uiName asynchronous variable with another await keyword.

```js
async function getAvatar_Async (elem: HTMLElement) {
    let uiName = await fetch('https://uinames.com/api/');
    let avatarName = await uiName.json();
}
```

5. Finally, in order to run all of the rest of the code from the method, instead of wrapping it inside of a .then() function, we simply need to place the code below the asynchronously declared variables, and use them as though they were declared synchronously.

```js
async function getAvatar_Async (elem: HTMLElement) {
    let uiName = await fetch('https://uinames.com/api/');
    let avatarName = await uiName.json();
    alert('Hi! My name is ' + avatarName.name);
    let avatar = 'https://robohash.org/set_set3/'+ avatarName.name +'?size=60x60' 
    elem.style.backgroundImage = 'url("' + avatar + '")';
    document.body.appendChild(elem);
}
```

The end result is the same - TypeScript will compile this to use Promises just like the previous lesson - but the composition is significantly simpler and easier to read.

6. Replace your method in your iterator like you did in the previous exercise.

```js
for (let elem of standardElements) {
    elem.style.width = "60px"
    elem.style.height = "60px"
    elem.style.margin = "5px"
    let elemClass = new movingElement(elem);
    
    getAvatar_Async(elemClass.element);
}
```

7. Save your file and compile with CTRL+Shift+B, then view the result by opening index.html in your advancedTypeScriptLab_async folder in a browser. The end result should be exactly the same as the previous exercise, but this time you ran it through a function created in a totally different way!

And that's how you use Async/Await in your application to create asynchronous code that looks almost identical to synchronous code, making it easy and highly readable.
