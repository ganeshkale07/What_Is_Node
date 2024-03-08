//Pass by value 
function foo(b){
    b = 2;
}
let a = 1;
foo(a); 
// b === a -> a value is get copied in b
//now b has separate memory address
console.log(a);
//a value did not change because a value copied in b

//pass by reference
function greet(obj){
    obj.prop1 = "Ganesh";
    obj.prop2 = 45;
}
let c = {
    prop1 : "Ravi",
    prop2 :44
}
greet(c);
//obj and c are pointing to same memory address now
//so change in obj inside function causing change to memory address 
console.log(c);

//IIFE
var first = "Hrithik";
(function fake(){
    var first = "teja";
    console.log(first);
})()
//() engine understand these is function expression and evalue it
//() after evalution invoke that same function

//IMP - "var first" "inside" function does not affect "var first" "outside" function
//IMP- functional scope :) 
console.log(first);

//We can pass external variable in IIFE
var age = 56;
(function fake2(age){
    var first2 = "teja";
    console.log(first2,age);
})(age)
 
console.log(age);