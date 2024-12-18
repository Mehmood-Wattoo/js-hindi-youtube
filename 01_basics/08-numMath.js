const score = 400
console.log(score);

const bal = new Number(100)
console.log(bal);

console.log(bal.toString(), bal.toString().length);
console.log(bal.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // toPrecision help to round off the value

const hundreds = 100000000
console.table([hundreds.toLocaleString(), hundreds.toLocaleString('en-IN')]);

// MIN_VALUE, MAX_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER

// ++++++++++++++++ MATH ++++++++++++++++++
console.log(`now methods of maths are explore ${Math}`)
console.table([Math.abs(-5), Math.round(3.6)])
console.table([Math.ceil(5.2), Math.floor(5.9)])
console.table([`min value in the array is ${Math.min(2,4,35,6)}`, `max value in the array is ${Math.max(2,4,35,6)}` ])

