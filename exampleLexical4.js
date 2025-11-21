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