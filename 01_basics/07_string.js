const name = "mehmood"
const repoCount = 40

// console.log(name + repoCount); // this is outdated and not recommended 

console.log(`hello i am ${name} and my repo count is ${repoCount}`) 
// above is known as string interpolation and this is recommended and modern way to write string

// other way to write string
const gameName = new String('mehmood-mc-bd')

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const otherString = gameName.slice(-8, 4)
console.log(otherString);

const newString1 = "    mehmood      "
console.table([newString1, newString1.trim()])

const url = "https://mehmood%20wattoo.com"
console.table([url, url.replace('%20', '-')])
console.log(url.includes('sultan'));

console.log(gameName.split('-'));
