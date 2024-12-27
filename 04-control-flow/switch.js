// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4

switch (month) {
    case 1:
        console.log(`january`);
        break; 
    case 2:
        console.log(`febuary`);
        break;
    case 3:
        console.log(`march`);
        break;
    case 4:
        console.log(`april`);
        break; // break is used because if break is present then all code before default will be executed

    default:
        console.log(`default case match`);
        
        break;
}