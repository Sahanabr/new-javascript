function outer(){
    let name="Ramesh";
    console.log(name);
    function inner(){
        let name2="Suresh";
        console.log(name2);
        console.log("-----------");
    }
    return inner;
}

let value=outer();
value();
value();

/* here when we invoke outer() function first time it runs both outer and inner function
 but when we invoke that for the second time it only runs inner function
 because outer function is expired.*/
 // It is called closure in javascript.
