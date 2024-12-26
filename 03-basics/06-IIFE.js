// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`DB connected`);
    
}
chai();
(function chai1(){
    // named IIFE
    console.log(`DB connected`);
    
})();

( (name) => {
    // un-named IIFE
    console.log(`DB COnnected two ${name}`);
    
} )("wattoo"); //IIFE is used to hide global pollution