// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sultan",
    "full name": "sultan wattoo",
    [mySym]: "mykey1", // intresting: this is only method to declare symbol in object otherwise it will be declare as string not as symbol
    age: 14,
    location: "jbd",
    email: "sultan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "wattoo@chatgpt.com"
// Object.freeze(JsUser) // it will freeze that object, no value can be change furthermore
JsUser.email = "sultan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

