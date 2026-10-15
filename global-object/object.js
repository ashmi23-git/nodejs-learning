/* Global Object
Global object in Node.js is an object that provides variables, functions, and properties 
that can be accessed from different parts of a Node.js application without explicitly importing them 
In Node.js, the global object is called "global" */

// printing the global object and its properties in the console
console.log(global);

// small example (not recommended to create global variables this way)
global.nam="Ashmi"; // global.nam creates a property on global object
console.log(global.nam); // the property can be accessed through global.nam
console.log(nam); // normally this property can be accessed as name

/* Common global object and functions in Node.js:
global - Refers to the global object.
console - Displays messages in the console.
process - Provides information about the running Node.js process.
setTimeout() - Executes a callback after a specified delay.
setInterval() - Repeatedly executes a callback at specified intervals.
__dirname - Gives the directory path of the current file in CommonJS modules.
__filename - Gives the full path of the current file in CommonJS modules.
 */

/* Why do we use global object?
We use the global object to access shared properties and functionality 
without needing to import them into every file. */

// using console, setTimeout(), setInterval() and clearInterval() 
console.log("Console")
setTimeout(()=>{
    console.log("Timeout");
    clearInterval(interval);
}, 5000
);
const interval = setInterval(()=>{
    console.log("Interval")}, 1000
);

// __dirname and __filename
console.log(__dirname);
console.log(__filename);
