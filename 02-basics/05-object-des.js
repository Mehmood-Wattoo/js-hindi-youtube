const course = {
    courseName: "js in hindi",
    price: "999",
    courseTeacher: "hitesh"
}

// course.courseTeacher

const {courseTeacher} = course
const {courseTeacher: instructor} = course

console.log(courseTeacher);
console.log(instructor);

// { // JSON is object with no name
//     "name": "hitesh",
//     "course-name": "js in hindi",
//     "price": "free"
// }

[ // JSON can be array with no name and object are included in array
    {},
    {},
    {}
]
