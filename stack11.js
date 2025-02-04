function hello1(){
    console.log();
    console.log("calling hello 3");
    console.log("hello");
}
function demo(){
    console.log("calling hello 2 ");
    hello1();
}
console.log("calling hello 1");
demo();
console.log("done , bye");
console.log("-----------------------------------");
//visualizing the call stack 

function one(){
    return 1;
}
function two(){
return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();
console.log("-----------------------------------");

// Breakpoints 

