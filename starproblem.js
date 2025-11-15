/* for(let i=1;i<=5;i++){
   let text = '*';
   console.log(text.repeat(i));  
} */
    
          // OR

for(let i=1;i<=5;i++){
    let text='';
    for(let j=1;j<=i;j++){
         text=text+'*';
    }
    console.log(text);
}

//array --> collection of data
// let array=[1,"sahana"];
// console.log(array);


let array = [1,2,3,4,5];
console.log(array);
let data = new Array(1,2,3,4,5);
console.log(data);
array.push(6);
console.log(array);
array.pop();
console.log(array);