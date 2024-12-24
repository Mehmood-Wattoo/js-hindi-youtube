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

// console.log("result:", result);

function loginUserMessage(username){
    // if(username === undefined){
    if(!username){ // this syntax means same as above
        console.log(`please enter a username`);
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
