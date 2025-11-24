function outer(){
    let amount=1000;
    function addMoney(value){
        amount = amount + value;
        console.log("I have amount",amount);
        console.log("-----------");
    }
    return addMoney;
}
let value=outer();
value(1000);
value(1000);