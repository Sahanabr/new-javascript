// write a js function that accepts string as a input.

function tierCheck(input){
    if(input == "Tier 1"){
        console.log("I will get a package of 10 LPA");
    }
    else if(input == "Tier 2"){
        console.log("I will get a package of 7 LPA");
    }
    else if(input == "Tier 3"){
        console.log("I will get a package of 5 LPA");
    }
    else
    {
        console.log("no job");
    }
}
tierCheck("Tier 2");