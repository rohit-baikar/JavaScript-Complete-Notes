// const let var
// const – its a block-scoped, cannot be updated or re-declared (value is constant). 

const account_id = 1234567890
console.log(account_id)

// -----------------cannot be updated -------------------
//account_id = 1221
//console.log(account_id) //TypeError: Assignment to constant variable.

// ----------------- cannot be re-declared ------------------- 
//const account_id = 123456
//console.log(account_id) //SyntaxError: Identifier 'account_id' has already been declared

// ----------------- its block scope {} ---------------------- 
function func(){
    const account_id = 123456
    console.log(account_id)
}
func()


// let – Modern way, block-scoped and can be updated but not re-declared in the same scope.

let account_holder = "Rohit"
console.log(account_holder) //op = Rohit

// ----------------  it can be updated ------------------
account_holder = "Rushi"
console.log(account_holder) //op = Rushi

// ------------------ not re-declared -------------------
//let account_holder = "Rohini"
//console.log(account_holder) //SyntaxError: Identifier 'account_holder' has already been declared

// -------------- block scope {} ------------------------
function home(){
    let name = "abc" //local scope
    console.log(name)
}
let name = "xyz" //Global scope
console.log(name)
home()

// var – Old way to declare variables, function-scoped and can be re-declared or updated.
var account_city = "Mumbai"
console.log(account_city)
// ------------- it can be updated -------------
account_city = "Pune"
console.log(account_city)

// -------------- it can be re-declared -------------
var account_city = "Kerla"
console.log(account_city)

// --------------- function scoped ------------------
var age = 25
function func1() {
    var age = 30
    console.log(age) // local age inside the function
}
console.log(age) // global age
func1()

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// another ways to declare variables
year = 2025;
let next_year; 

console.log(year)
console.log(next_year) //undefined
