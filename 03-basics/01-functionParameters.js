// function is used to do something again and again with lesser line

function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("l");
    console.log("t");
    console.log("a");
    console.log("n");
}
// sayMyName()

// function addTwoNumbers(number1,number2){ // parameters enclose in ()
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(2,5) // argument in () but outside of function declaration
// addTwoNumbers()
// addTwoNumbers(2, "5")
// addTwoNumbers(2, null)

function addTwoNumbers(number1,number2){ // parameters enclose in ()
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

console.log("result:", result);


