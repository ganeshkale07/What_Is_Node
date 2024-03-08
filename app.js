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

//Require statement understanding
let namaskar = require("./namaskar");

namaskar.marathiGreet();
namaskar.hindiGreet();

//Require statement """cached""" the module
// let person1 = require('./one');
// person1.introduce();
// person1.quality = "greedy";

// let person2 = new require('./one');
// person2.introduce();
//I am greedy instead of I am Honest
//because require statement execute once and it is still pointing to same object which is pass to person1

//To avoid caching
let personna = require('./one');
let person3 = new personna();
person3.introduce();
person3.quality = "Kind";

let person4 = new personna();
person4.introduce();


//Revealing Module
let reveal = require('./revealModule');

reveal();

let exportDiff = require('./exportDifference')