// for of loop

// this is array special loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

// MAPS
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States')
map.set('FR', 'France')

console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-", value);
    
}

const myObj = {
    game1: 'nfs',
    game2: 'gta'
}

for (const key, value of myObj) {
    console.log(key, ":-", value);
    // here object is not iteratable via for of loop
    
}

