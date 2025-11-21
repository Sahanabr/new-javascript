function outer(){
    let count =0;
    function inner(){
       count++;
        console.log("I have a counter",count);
        console.log("-----------");
    }
    inner();
}

outer();
outer();