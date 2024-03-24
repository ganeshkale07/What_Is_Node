let fs = require('fs');

let file = fs.readFileSync(__dirname + '/sample.txt','utf8');
//console.log(file);

//Asynchronous File Reading
let file2 = fs.readFile(__dirname+'/sample.txt', 'utf8', function(error,data){
    // Error first callback
    //console.log(data)
})

let readFile = fs.createReadStream(__dirname + '/sample.txt',{
    encoding : 'utf-8'
});

readFile.on('data', function(data){
    console.log(data.length)
})

//let understand bite , byte , kb , GB concept now
/***
1 bit - 0 1 
8 bit makes 1 Byte - 1 byte we can represent 256 characters
If character is tool large we take help of multiple bytes

1024 bytes makes 1 kb
1024kb makes 1 GB
1024GB makes 1 TB

***/