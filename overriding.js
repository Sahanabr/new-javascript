/*Method overriding : when a subclass provides a specific implementation of a method
 that is already defined in its superclass, it is known as method overriding.*/

class Bank{
    bankBalance(){
        console.log("My bank balance is");
    }
}
 class AxisBank extends Bank{
    bankBalance(){               // overriding method
        console.log("My Axis bank balance ");
}    
}
let value = new AxisBank();
value.bankBalance();

class DL {
    isEligible(name,age,location){
        if (age == undefined || age <18){
            console.log("Not eligible");
        } else {
            console.log("Eligible")
        }
    }
}
let valuee=new DL();
valuee.isEligible("Sahana");   
valuee.isEligible("Sahana",20);     // method overloading simulation
valuee.isEligible("Sahanaa",22,"rmg");

/* Method overloading : JavaScript does not support method overloading natively. 
 However, we can simulate it by checking the number and types of arguments
 passed to a function and implementing different logic based on that.*/
