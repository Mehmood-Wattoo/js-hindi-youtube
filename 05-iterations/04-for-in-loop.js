// for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
    
}

const programming = ["js", "cpp", "py"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
    
    
}