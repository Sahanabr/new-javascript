function outer(){
    let count =0;
    function inner(){
       count++;
        console.log("I have a counter",count);
        console.log("-----------");
    }
    return inner;
}

let value=outer();
value();
value();

/*Closure is a function that will retain outer variable 
  even after outer function is closed.*/

/*to access inner function after its outer function has finished executing,
the function must return inner function. This creates closure. */  
// Here inner function is returned from outer function and assigned to value variable.

// So when we invoke value() it runs inner function and retains count variable.

/*A closure allows the returned inner function, to remember and access the variable from its
enclosing scope (outer function) even after the outer function has finished executing.*/


function speedingSystem(){
    let speed=0;
   return function accelerate(){
        speed = speed + 10;
        console.log("Current speed is",speed);
    }
}
let car=speedingSystem();
car();
car();

/*accelerate is inner function that will retain (speed)
 outer variable value even after outer function is closed.*/
// Here accelerate function is returned from speedingSystem function and assigned to car variable.

// So when we invoke car() it runs accelerate function and retains speed variable.


