function Person(){
    this.quality = "Honest",
    this.hariColor = " black",
    this.introduce = function (){
        console.log(`I am ${this.quality}`)
    }
}
//module.exports = new Person();

//To avoid caching
module.exports = Person;