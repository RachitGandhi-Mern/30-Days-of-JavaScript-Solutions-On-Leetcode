


// ----- DAY1 ------


//Write a function `createHelloWorld` that returns a new function, which always returns `"Hello World"`, regardless of the arguments passed.

let createHelloWorld = function() {  
    return function() {  
        return "Hello World";  
    };  
};  

createHelloWorld()()