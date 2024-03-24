let moment = require('moment');
let http = require('http');

//npm registry refers to where all packages seats at
//npm program or code which is responsible for package management system - which you typically install with node

//By default require function look for
//modules in specified path ./ ../ 
//node core modules - fs,http
//node_modules folder

//--save - dependencies
//--save-dev  - dev dependencies

console.log(moment().format("[Today is] dddd"));
console.log(moment().toObject());

http.createServer((req,res) => {
    res.end("Hi");
}).listen(1337, 'localhost');
