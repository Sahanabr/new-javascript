let person={
    name:"sahana",
    age:22,
    city:"bangalore",
    state:"karnataka"
    
}
console.log(person.city);


//for in loop is used to iterate over properties of an object
for(let key in person){
    console.log(`property$ {key}:value ${person[key]}`);
}

let response=[
    {
        name:"iphone 11",
        company:"apple",
    },
    {
        name:"iphone 14",
        company:"apple",
    },
    {
        name:"galaxy",
        company:"samsung",
    },
    {
        name:"nord",
        company:"oneplus"
    },
]
//console.log(response.length);
let finalarray=[];
for(let i=0;i<response.length;i++){
    if(response[i].company==="apple"){
        finalarray.push(response[i]);
    }
}
 console.log(finalarray);


 let obj={
    name:"iphone",
    company:"apple",
    price:60000,
 }
 console.log(Object.keys(obj));  //keys() method is used to get all the keys of an object.
 console.log(Object.values(obj)); //values() method is used to get all the values of an object.

 let obj2={
    name:"galaxy",
    modal:17,
 }
 console.log(Object.assign(obj,obj2));  //assign() method is used to merge two objects.

 {
    let name="sahana";
    console.log(name);
 }
 //console.log(name);  //error: name is not defined because let is block scope.

  {
    var name="sahana";
    console.log(name);
 }
 console.log(name);  //sahana: var is function scope.


