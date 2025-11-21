//Lexical scope: set of rules to access the data.
// 1.global scope
// 2.local scope
// 3.nested scope
// 4.block scope

// let name="Amar";
// function outer(){
//     console.log(name);  //accessing global variable
// }
// console.log(name);  //accessing global variable
// outer();


// let name="Amar";
// function outer(){
//     console.log(name);  //accessing global variable
//     let name2="Akbar";
//     console.log(name2); //accessing local variable

//     function inner(){
//         let name3="Anthony";
//         console.log(name3); //accessing nested variable
// }
// inner();
// }
// outer();


let name ="Amar";
function outer(){
    let name2="Akbar";
    function inner(){
        let name3="Anthony";
        console.log(name);
        console.log(name2);
        console.log(name3);
    }
    inner();
}
outer();








