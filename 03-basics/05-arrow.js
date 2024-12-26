const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this refers to current context(values)
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node, value of this will be empty

// in browser, window is global object

// function chai(){
//     let username = "hitssh"
//     console.log(this); 
// }

// chai()

// const chai = function(){
//     let username = "mehmood"
//     console.log(this.username);
// }
// chai()

// const chai1 = () => {
//     let username = "siltan"
//     console.log(this);
// }
// chai1()

// const addTwo = (num1, num2) => { // explicit return
//     return num1 + num2
// }
const addTwo1 = (num1, num2) => num1 + num2 // implicit return
const addTwo2 = (num1, num2) => (num1 + num2) // implicit return
const addTwo3 = (num1, num2) => ({username: "wattoo"}) // implicit return

addTwo1(3,4)
console.log(addTwo1(3,4));
addTwo2(3,4)
console.log(addTwo2(3,4));
console.log(addTwo3());