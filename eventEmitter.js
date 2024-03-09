//Creating own Event Emitter

function MyEventEmitter(){
    this.events = {};
}

//Define type of event
//And what type of listner that event will have
MyEventEmitter.prototype.on = function(type, listner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listner);
}

//How to trigger eventListner
MyEventEmitter.prototype.emit = function(type){
    this.events[type].forEach(eachListner => {
        eachListner();
    })
}
module.exports = MyEventEmitter;