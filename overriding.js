/*Method overriding : when a subclass provides a specific implementation of a method
 that is already defined in its superclass, it is known as method overriding.*/

class Bank{
    bankBalance(){
        console.log("My bank balance");
    }
}
 class AxisBank extends Bank{
    bankBalance(){               // overriding method
        console.log("My Axis bank balance ");
}    
}


class DL {
    isEligible(name,age){
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

/* Method overloading : JavaScript does not support method overloading natively. 
 However, we can simulate it by checking the number and types of arguments
 passed to a function and implementing different logic based on that.*/
