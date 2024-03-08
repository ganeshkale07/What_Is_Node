let greet = require('./greet.json');
//automatically converted into javascript object

let greeter = function (){
    return console.log(greet.MR);
}

module.exports = greeter;