// let text = "hello world";
// console.log(text.length);     // length of string
// console.log(text.charAt(0));  // character at index 0


let text1 = "sahana";
let text2 = "cherry";
// let value = text1+' '+text2;  // concatenation
let value = text1.concat(' ' ,text2); // concatenation using concat() method
console.log(value);

let text="Hello";
console.log(text.toLocaleUpperCase());   // to uppercase
console.log(text.toLocaleLowerCase());   // to lowercase
console.log(text.repeat(3));

let texts = "  Hello   ";
console.log(texts.trim());      //trim whitespaces both sides
// console.log(texts.trimEnd());    //trim end
// console.log(texts.trimEnd());
// console.log(texts.trimStart());   //trim starting

let city = "I am in Bangalore";
console.log(city.search('ore')); //search prints index number  +ve --> search element is present.
console.log(city.search('nga'));
console.log(city.search('ooo'));   // -ve --> search element is not present.

console.log(city.split("").reverse());   //to reverse a string
console.log(city.split("").reverse().join("")); //to get back original string in reverse ,use join
console.log(city.split("").join(""));


