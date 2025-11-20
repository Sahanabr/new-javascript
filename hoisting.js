//hoisting : moving declarations or functions or constants to the top.
// it will be available to all functions or code blocks.

// function declaration is hoisted (hoisting is achieved).
abc();
function abc(){
    console.log("function");
}

// function expression is not hoisted (hoisting is not achieved).

let abcd=function(){
    console.log("function expression");
}
abcd();