function a(){
    console.log("I am reading book ");
}
function b(){
    console.log("what are you doing");
    }

b();
function c(msg){
    console.log(msg);
}
c("I love you");
//sum
function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

//arrow fun 
const sum1 = ( a, b ) => {
    return a + b;
}
console.log(sum1(23,3));

function printinfo(name,age) {
    console.log(`${name}'s age is ${age}.`);
}
printinfo("tushar",20);
printinfo("pandu");

//avg of three
function avg(a,b,c){
    let ans=(a+b+c)/3;
    console.log(ans);
}

avg(1,2,5);

//prints the multi table ao a no.
console.log("|table of number ");

function printtable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
// let l=Number(prompt("enter no for table"));
// printtable(l);
printtable(5);

//returnz
function addd(c,d){
    return a+b;
}
console.log (sum(sum(1,2),3));

// sum of 1 to n
// let no=Number(prompt("enter the no for sum"));
function getsum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

let ab=getsum(20);
console.log("sum of no = ",ab);

//concat
let strr= ["h","hello","bye","!"];

function concat(strr){
    let result="";
    for(let i=0;i<strr.length;i++){
        result +=strr[i];
    }
    return result;
}
console.log(strr);
let mix=concat(strr);
console.log(mix);

