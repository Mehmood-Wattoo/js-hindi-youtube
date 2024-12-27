// truety means assume to be true

// falsety means assume to be false

const userEmail = "hitesh.ai"

if(userEmail) { // truety
    console.log(`got user email`);
} else {
    console.log(`don't got user email`);
    
}

const userEmail2 = ""
if (userEmail2) {
    console.log(`get user 2 email`);
    
} else {
    console.log(`dont get user 2 email`);
    
}

//---------------- falsy values -----------------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//++++++++++++++++ truthy values ++++++++++++++++++++
// "0", 'false', " ", [], {}, function(){} 

const arr = []
if (arr.length === 0) {
    console.log(`array is empty`);
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`object is empty`);
    
}

// nullish coalescing operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null  ?? 10 ?? 15
// val1 = null  ?? undefined

console.log(val1);

// teriary operator

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log(`more than or equal to 80`) : console.log(`less than 80`);

