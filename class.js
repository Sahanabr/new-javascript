class House1{                             // class named House
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
}
let value=new House1("My house","Red");   // object 1 : value
console.log(value);
let final = new House1("kanasu","blue");   //object2 : final
console.log(final);

/* Here we have created a class named House with a constructor that initializes
 its name and color properties. We then create an instance of the House class
 and log it to the console.*/

 //class is a blueprint for creating objects.
 /*object is an instance of a class and non-primitive data type.
 and store key value pairs*/

 class House2{
    constructor(name){
        this.name=name;
    }
    myHouse(){      // method of House2 class
        console.log(`My house name is ${this.name}`);
    }
 }
 let valuee=new House2("My house");    //here we create an instance of House2 class.
 valuee.myHouse();