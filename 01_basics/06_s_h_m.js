// stack (primitive), Heap (non-primitive)

// ***************** stack memory *****************
//  if
let myYTname = "mehmood@google.com"
let otherYTname = myYTname
otherYTname = "chaiaurcode"
console.table([myYTname, otherYTname]);
// +++++ explain === in stack memory when we put first datatype into second datatype, the value of first datatype is not changed because copy of first datatype is created and the value of that copy is changed

let userOne = {
    email: "user@google.com",
}

let userTwo = userOne

userTwo.email = "sultan@google.com"

console.table([userOne.email, userTwo.email])
// +++++++ explain === in heap, when first datatype is put into second datatype, second datatype get reference from heap memory and value of both first and second datatypes is changed