exports = function interesting(){
    console.log("I am interesting");
}

console.log(exports);
console.log(module.exports);


//Explanation

/***************
 
function (exports,....., module){
    
}

somewhere below called above function

function(module.export,......, module)

exports and module.exports are pointing to same ref


ONLY WHEN IF WE ASSIGN SOME VALUE TO SAME REF OBJECT
referece will break and new value will ASSIGN

so after

exports = function interesting(){
    console.log("I am interesting");
}

export is have reference which is differ than module.exports

*******/