 //implicit conversion
console.log(10 + "10");
console.log(10-"10");
console.log(10*"2"); 
console.log(3+true);
console.log(3-false);
console.log("3" + false);
console.log("3"-true);
console.log(2==2);
console.log(2==2==2);
console.log(2==2==2==2==0);

 //explicit conversion
console.log(Number("123")); 
console.log(String(123));
console.log(Boolean("123"));
console.log(Boolean(0));
console.log(Boolean(""));

console.log(x);
var x;

// console.log(y);
// let y;

// let array=[1,0,0,0,0,0,1];
let array=[0,0,1,0,0,0,0,0,1];
let tree=3;
let count=0;
for(let i=0;i<array.length;i++){
    if(array[i]==0){
        let prevValue=(i==0)?0:array[i-1];
        let nextValue=(i==array.length-1)?0:array[i+1];
        // let prevValue = array[i-1];
        // let nextValue = array[i+1];
        if(prevValue==0 && nextValue==0){
            array[i]=1;
            count++;
        }
    }
}
console.log(tree==count);
