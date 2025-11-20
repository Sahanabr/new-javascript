//object is a non primitive datatype.
//store the collective data.
//object->it is  a collection of key-value pair.
//access the value of an object
//*console=log()

let board = {
  name: "white board",
  isAvailable: true,
  write: function () {
    console.log("I am able to write");
    console.log(board.name);
    console.log(board.write);
  },
};
console.log(board);

let employee = {
  id: "113",
  name: "Sahana",
  DOJ: "18-01-2025",
  Salary: 60000,
  DEpt: "Technology",
};
console.log(employee);

//creation of object
//let obj1 = {};
//let obj = new obj();

let mobile = {
  brand: "samsung",
  color: ["black", "green", "white"],
  storage: ["256gb", "522gb"],
  price: 60000,
};
console.log(mobile);
mobile.description = "I have a mobile";
console.log(mobile);

//key or properties
//operators: 1.arithmatic 2.comparison 3.assignment 4.logical

if (5 > 2 && 2 > 5) {
  console.log("Value");
} else {
  console.log("second value");
}

if (5 > 2 || 2 > 5) {
  console.log("Value");
} else {
  console.log("second value");
}
