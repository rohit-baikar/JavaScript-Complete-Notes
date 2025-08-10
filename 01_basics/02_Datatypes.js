// Datatypes 
// Primitive : These represent single, immutable values and include:
// number, bigint, string, boolean, null(standalone value), undefined, symbol(unique)
let age = 25;
let name = "Rohit";
let isLogined = true;
let emptyValue = null;
let rollNo = Symbol('id') 

console.log(typeof(age))
console.log(typeof(name))
console.log(typeof(isLogined))
console.log(typeof(emptyValue))
console.log(typeof(rollNo))

// Non Primitive : This type can hold collections of data and more complex entities:
// arrays, objects 
let students = {
    1 : "rohit",
    2 : "lavkesh",
    3 : "vishal"
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(typeof(students))
console.log(typeof(numbers))



