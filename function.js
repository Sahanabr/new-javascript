// function declaration and function expression

// function declaration:
// defines a named function using function keyword.
// u can call it before its defined in the code.
function Hello(){
    console.log("Say hello");
}
Hello();

// function expression
// defines a function as part of an expression - usually assigned to a variable.
// u cannot call before its defined.
var hello=function(){
    console.log("hello!");
}
hello();