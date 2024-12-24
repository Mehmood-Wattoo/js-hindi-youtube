// var c = 300 // if we see below 30 will overwrite this value due to its global scope
let a = 300

if (true) { // scope
    let a = 10 // here a will not execute due to its block scope
    console.log(`inner ${a}`);
const b = 20 // here b will not execute due to its block scope
// var c = 30 // here c will execute due to global scope
}


// console.log(a);
// console.log(b);
// console.log(c);

// global scope in browser and global scope in node are different 

