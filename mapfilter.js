//filter is a method used to filter the array of objects.

let obj=[
    {name:"Apple",version:"14"},
    {name:"samsung",version:"15"},
    {name:"Redmi",version:"12"},
    {name:"Apple",version:"13"},
    {name:"Apple",version:"10"},
];

let value = obj.filter((value) => value.name==="Apple");
console.log(value);



//map method
 let value1 = obj.map((value) => console.log("map method",value));



          