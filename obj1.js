/* Object destructuring allows you to extract properties from an object and
 assign them to variables with the same names (or renamed). */

const obj ={
    name: "Sahana",
    city: "Bangalore",
}
const{name,city} = obj;  //these steps are called as destructuring.
console.log(name);
console.log(city);
