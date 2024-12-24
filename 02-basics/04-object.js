// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mehmood",
            lastname: "wattoo"
        }
    }
}

// console.table([regularuser.fullname]);
// console.table([regularuser.fullname.userfullname]);
// console.table([regularuser.fullname.userfullname.lastname]);

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}

// const obj3 = {object1,object2}
// const obj3 = Object.assign({}, object1 , object2) // here {} act as target and object1, object2 act as source, while if {} are removed then object1 is act as target and object2 act as source

const obj3 = {...object1,...object2} // spread

// console.log(obj3);

// if value is coming from database then many objects are stored in array as in following
const user = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]

// console.log(user[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


