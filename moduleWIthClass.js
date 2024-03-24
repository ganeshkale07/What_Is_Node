let events = require('events');

class Greeter extends events{
    constructor(){
            super();
            this.name = "Ram"
    }

    greeting(){
        console.log(`Hello how are you ${this.name}`);
    }
}

module.exports = Greeter;
