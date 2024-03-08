let hiddenVal = "only inside function";

function exposure (){
    console.log(`these is hidden value - ${hiddenVal}`);
}

module.exports = exposure;