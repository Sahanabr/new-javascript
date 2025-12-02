let doc = document.getElementById("product-data")
let statement="";

async function fetchData(){
// let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
 // let response = await fetch("https://dummyjson.com/products");
  let response=await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await response.json();
    console.log(data);
    statement=data.map((value)=>{
        console.log("i have code",value);
        return `<div class="product">
        <h1>${value.title}</h1>
         </div>`;
    });
    doc.innerHTML = statement;
}


fetchData();