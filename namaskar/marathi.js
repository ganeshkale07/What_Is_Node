let greet = require('./greet.json');
//automatically converted into javascript object

let greeter = function (){
     console.log(greet.MR);
}

module.exports = greeter;