// const abc=() =>{
//     console.log("arrow function");
// }
// abc();               //arrow function

// function sum(a,b){
//     return a+b;
// }
// sum(5,10);             //normal function


// const sum=(a,b) =>{
//     return a+b; //logic
// }

// if logic is single line specifically dont have to mention return keyword.
const sum=(a,b) => a+b;

// setTimeout(()=>{
//     console.log("I have a data");
// },5000);  //execute after delay

// setInterval(()=>{
//     console.log("I have a data");
// },5000);   //execute between intervals

// let value =sum(5,10);
// console.log(value);

// console.log(+true);

setTimeout(()=>{
    console.log("value one");
},3000);

setTimeout(()=>{
    console.log("value two");
},2000);

setTimeout(()=>{
    console.log("value three");
},1000);

//It is called as asynchronous behavior in javascript.


console.log("value one");
console.log("value two");
console.log("value three");

//It is called as synchronous behavior (happens sequentially) in javascript.

//in real time scenario we use asynchronous behavior.
