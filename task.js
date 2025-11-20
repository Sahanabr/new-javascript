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