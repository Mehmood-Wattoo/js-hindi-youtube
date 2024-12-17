// here we practice the common strings in Javascript

const gameName = new String('mehmood-mc-bd')
// here string acts as object and give the following functions

// ************** anchor() ***************
console.table([`original is${gameName}`, `now anchor is${gameName.anchor("mc")}`])
// above string function is out-dated but it convert js into name attribute of html

//  **************** at() ****************
// see extra video

// **************** big() ****************
console.table([`orginal is ${gameName}`, `big is ${gameName.big('mehmood-mc-bd')}`])
// big is also outdated, it convert js code into big element of html

// **************** blink() *****************
console.table([`orginal is ${gameName}`, `blink is ${gameName.blink('mehmood-mc-bd')}`])
// blink is also outdated, it convert js code into blink element of html

// **************** bold() *******************
console.table([`orginal is ${gameName}`, `bold is ${gameName.bold('mehmood-mc-bd')}`])
// outdated and convert js into html:<b>

// ******************* charAt() ******************
console.table([`orginal is ${gameName}`, `charAt is ${gameName.charAt(6)}`])
// used to find location of char in string

// ++++++++++++++++++ charCodeAt() ++++++++++++++++
console.table([`orginal is ${gameName}`, `charCodeAt is ${gameName.charCodeAt(8)}`])
// used to find numerical code of char in string

// ***************** codePointAt() ****************
console.table([`orginal is ${gameName}`, `codePointAt is ${gameName.codePointAt(3)}`])
// used to find number of icons in js

// **************** concat() *******************
const w1 = "hello"
const w2 = " world"
console.table([w1,w2,w1.concat(' ', w2)])
// used to join two string with each other