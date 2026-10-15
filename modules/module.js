/* Modules
Reusable block of code that can be organised in a separate file and used in another file whenever needed.
Instead of writing all your code in one large file, you can divide it into smaller files, with each file handling a specific task.

Advantages of modules:
- Code reusability
- Better organisation
- Easier debugging and maintenance
- Less duplication of code

Types of Modules:
1. Built-in modules
2. User-defined modules
3. Third-party modules
*/

// 1. User-defined modules
const data=require('./info')
// require - import a module
// ./ - current folder
// info - name of the file from where the data is exported

// import specific data only
const{names}=require('./info');
const{names,marks}=require ('./info')

// import all values
console.log(data);

// import specific module
console.log(data.marks);

// direct import / destructuring
const {names,marks}=require('./info');
console.log(names)

// 2. Bult-in modules
const os=require('os');
console.log(os);
console.log(os.homedir());