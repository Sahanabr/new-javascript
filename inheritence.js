class House{
    constructor(name){
        this.name=name;
    }
    myHouse(){      // method of House class
        console.log(`My house name is ${this.name}`); 
    }
 }
 let value=new House("My house");    //here we create an instance of House class.
 value.myHouse();

 class MyHouse extends House{}      // MyHouse class inherits from House class
 let value1=new MyHouse("Sahana house");  //here we create an instance of MyHouse class.
 value1.myHouse();