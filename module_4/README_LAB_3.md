### To Set Visual Studio Code Default Build

Visual Studio Code has a handy feature where you can bind a default task to the CTRL+Shift+B hotkey. When you are using TypeScript, you can bind this hotkey to the compile function to make compiling your files quick and easy.

In this exercise, we will setup the default build task.

1. Open up your advancedTypeScriptLab_animated folder in Visual Studio Code.

2. Press CTRL+SHIFT+P to open the Command Pallette, then type in "Configure Task Runner". Click on "Tasks: Configure Task Runner".Depending on the version of VS Code you are using, you might get a different menu, look for something that suggests configuring the build tasks, e.g. you may find "Configure Default Build Task" as the menu item in your VS Code.

![taskrunner](https://courses.edx.org/assets/courseware/v1/a15eed07b90f396c16ce1608bb41a86d/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/taskrunner.png)

3. Select "TypeScript - tsconfig.json" from the list. This will create a .vscode folder within your folder, as well as a tasks.json.

![taskrunner2](https://courses.edx.org/assets/courseware/v1/2af4d55c99b9c12009f5c105cd252a12/asset-v1:Microsoft+DEV273x+1T2019a+type@asset+block/taskrunner2.png)

4. Now you can press CTRL+SHIFT+B to run your compile task.

5. Open up your index.html file and you will see that since we added the experimentalDecorators flag to our tsconfig.json, the squares on your screen are now animated when they rotate and move!

You have now set up a default build for Visual Studio Code. For our final lab of this module, we will be using Promises and the Async Await syntax to work with API calls in TypeScript.
