console.log("check");
// datatypes has only two types; Primitive and Non-primitive

// **************** Primitive datatypes
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

// **************** Reference Types / Non-Primitive
// 3types : arrays, objects, functions
let name = "mehmood"
let age = 25
let isLogIn = true
let temp = null
let user;
const id = Symbol('123')
const anotherId = Symbol('123')
// values on lnie 10 and line 11 are unique and not equal to each other
// console.log(id === anotherId);
const bigNumber = 1212112121212121n
console.table([typeof name, typeof age, typeof isLogIn,typeof temp, typeof user, typeof id, typeof bigNumber])
// console.log(typeof bigNumber);

const heros = ["shaktiman", "doga"] // array
let myObj = { // object
    name: "mehmood",
    age: 24,
}

const myFunction =  function(){
    console.log("hello");
}

console.table([typeof heros, typeof myObj, typeof myFunction])
