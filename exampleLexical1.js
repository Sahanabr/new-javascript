function outer(){
    let name="Ramesh";
    console.log(name);
    function inner(){
        let name2="Suresh";
        console.log(name2);
        console.log("-----------");
    }
    inner();
}
outer();
outer();