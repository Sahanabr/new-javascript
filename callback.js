//IMPORTANT:

//callback: to handle asynchronous operations/programming in synchronous manner JavaScript.

/*callback is a process of passing a function as a parameter to decide the order of execution
  of my Program. */

//   function one(){
//     setTimeout(()=>{
//         console.log("function one executed");
//     },2000);
//   }
//   function two(){
//     console.log("function two executed");
//   }
//     one();
//     two();


/* In this example, function one contains a setTimeout function that simulates an
asynchronous operation by delaying its execution for 2 seconds. Function two is a 
synchronous function that executes immediately. When we call one() followed by two(),
function two executes first because function one is delayed by the setTimeout. This
demonstrates how asynchronous operations can affect the order of execution in JavaScript. */

// Example 1: using callback to control the order of execution
function one(callback){
    setTimeout(()=>{
        console.log("function one executed");
        callback();
    },2000);
  }
  function two(){
    console.log("function two executed");
  }
    one(two);
    // one(()=>{
    //     return two();
    // });

/* In this modified example, function one now accepts a callback parameter. After the
asynchronous operation (setTimeout) completes, it calls the callback function, which is
function two in this case. This ensures that function two executes only after function
one has completed its asynchronous task, demonstrating how callbacks can be used to
control the order of execution in asynchronous programming. */

// Example 2: callback in real-time scenario
function addMoney(value,callback){
    setTimeout(()=>{
        console.log(`I have added money`,value);
        callback(value);
},2000);
}

function displayBalance(value){
    console.log(`My current balance`,value);
}

//  addMoney(1000);
//  displayBalance();

addMoney(1000,displayBalance);

// Example 3: callback functions to handle multiple asynchronous operations
function fetchData(callback){
    setTimeout(()=>{
        console.log("i am fetching the data ");
        callback();
    },4000);
}

function arrangeData(callback){
    setTimeout(()=>{
        console.log("i am arranging the data ");
        callback();
    },3000);
}

function displayData(){
    setTimeout(()=>{
        console.log("i am displaying the data ");
    },2000);
}

//  fetchData();
//  arrangeData();
//  displayData();

fetchData(() => {
    arrangeData(() => {
        displayData();
    });
});

/* In this example, we have three functions: fetchData, arrangeData, and displayData, each simulating an asynchronous operation using setTimeout. By using callbacks, we
ensure that fetchData completes before arrangeData starts, and arrangeData completes
before displayData starts. This demonstrates how callbacks can be used to manage the
sequence of multiple asynchronous operations in JavaScript.*/

//CALLBACK HELL: when we have multiple nested callbacks which makes the code hard to read and maintain.

//To avoid/overcome callback hell we can use Promises and async/await in JavaScript.


class Car{
    constructor(name){
        this.name = name;
    }
}
let value = new Car("BMW");
console.log(value);
    