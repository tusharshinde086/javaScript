function a(){
    console.log("I am reading book ");
}
function b(){
    console.log("what are you doing");
    }

//b();
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

console.log("\n---------------------------------\n");
console.log("forEach")
console.log("\n------------------------------------\n");


let arr =["hello",2,"welcome",4,5,6,"my ",8,9,"hi"];
arr.forEach((val,idx,arr)=> {
    console.log(idx,val,arr);
});
console.log("\n-----------------------------------\n");


let practice = (val,idx) => {
     console.log(idx,val);
};
arr.forEach(practice);
console.log("\n------------------------------------\n");
console.log("map")
console.log("\n------------------------------------\n");

let numm=[11,22,33,44,55,66,77,88,99];
let summ =numm.map((val)=>{
   return val %2;
});
console.log(summ);
console.log("\n------------------------------------\n");
console.log("  this fu");

const tuss= { 
         name:"pravin",
          email:"mylif",
          eng :22,
           math :11,
           sci: 44,

          getavg(){
            let avg= (this.eng +this.math + this.sci )/3;
             console.log(avg);

          }
}
console.log(tuss.getavg());
console.log("--------------------------");
console.log(this);
