//Promise is a javascript object it will either resolve or reject(successful or failure).

// Example 1: creating a simple promise
let lifeline = new Promise((resolve,reject)=>{
    let haveJob = false;
    if(haveJob){
        resolve("He/She accepted");
    }else{
        reject("He/She rejected");
    }
});

lifeline.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

// Example 2: creating a promise that resolves or rejects after a delay
let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let haveJob = false;
    if(haveJob){
        resolve("He/She accepted");
    }else{
        reject("He/She rejected");
    }
},2000);
});

myPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise operation completed");
});

// Example 3: using promise to handle multiple asynchronous operations
function fetchData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isTrue = true;
        if(isTrue){
            resolve("i am fetching the data");
        }else{
            reject("i am not able to fetch the data");
}
        },4000);
});
}

function arrangeData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("i am arranging the data");
    },3000);
});
}

function displayData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("i am displaying the data");
    },2000);
});
}

fetchData()
  .then((message)=>{
    console.log(message);
    return arrangeData();
})
  .then((message)=>{
    console.log(message);
    return displayData();
})
  .then((message)=>{
    console.log(message);
})
  .catch((error)=>{
    console.log(error);
});







