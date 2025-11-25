class Bank{
    constructor(name){
        this.name=name;
    }
}
class AxisBank extends Bank{
    constructor(name,city){
        super(name);               // calling parent class constructor
        this.city=city;
    }
}
let value=new AxisBank("Axis Bank","Bangalore");
console.log(value);

/* In this example, we have a parent class Bank with a constructor that initializes
 the name property. The AxisBank class extends the Bank class and calls the parent
 class constructor using the super keyword to initialize the name property. The 
 AxisBank class also has its own city property. When we create an instance of 
 AxisBank, it contains both the name and city properties.*/