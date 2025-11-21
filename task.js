let array = [1, 2, 3, 4, 5];
let final = 5;
let array_final = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == final) {
      array_final.push([i, j]);
    }
  }
}
console.log(array_final);


//write a js program to find possibility of climbing stairs.
function possibility(step){
   if (step <= 2){
    return step;
   }

   let array=[];
   array[1]=1;
   array[2]=2;

   for(let i=3;i<=step;i++){
    array[i]=array[i-1]+array[i-2];
   }
   return array[step];
}
let value=possibility(5);
console.log(value);
