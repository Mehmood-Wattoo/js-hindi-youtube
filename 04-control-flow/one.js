// +++++++++++++++ control flow +++++++++++++++
// if statement

// const isUserLoggedIn = true
// if (2 == "2"){
//     console.log("executed");
    
// }
// if (2 === "2"){
//     console.log("executed");
    
// }

// >, <, >=, <=, ==(equal to), !=(not equal to), ===(strictly equal to), !==(strictly not equal to)

// const temp = 40
// if (temp === 48) {
//     console.log(`temp is less than 45`);
    
// } else {
//     console.log(`temp is greater than 45`);
    
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

// ++++++++ shorthand notation +++++++++

const bal = 1000
// if (bal > 500) console.log("test"); // this code is recommended

// if (bal > 500) console.log("yest"), console.log("yest2"); // this code is not recommended

// if (bal < 500) {
//     console.log(`less than 500`);
    
// } else if (bal < 750) {
//     console.log(`less than 750`);
    
// } else if (bal < 900) {
//     console.log(`less than 900`);
    
// } else {
//     console.log(`less than 1200`);
    
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true
if (isUserLoggedIn && debitCard) {
    console.log("allowed buy courses");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}