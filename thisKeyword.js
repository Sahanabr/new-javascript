let obj={
    name:"Sahana",
    sayhello:function(){
        console.log(`My name is ${this.name}`);
    }
}
obj.sayhello();

/* Here this refers to the current object context value,and we can access
 its property using this keyword.*/




