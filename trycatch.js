console.log("hello 2");
console.log("hello 2");
try{
   console.log(a);
}catch(err){
    console.log("element not found")
    console.log(err);
};
console.log("hello 2");
console.log("hello 2");
console.log("hello 2");

console.log("_--------------------------------------\n\t");
console.log("Arrowfunction\n");     
let a=33;                  
let b=22;              
const sum = (a ,b) => {                                                                    
    console.log(a+b);
}

sum(a,b);  
sum(11,33);
console.log("_--------------------------------------\n\t");                                                                                                                                                                                  
                                                                                                
const cube =(n)=>{
    return n*3;
}
console.log(cube(3));

const mul=(a,b)=> a*b;// implicit array
console.log(mul(4,5));                                                                    
console.log("_--------------------------------------\n\t"); 

console.log("set timeout");

setTimeout(() => {
    console.log("tushar shinde");
},2000);

console.log("hello there");
console.log("_--------------------------------------\n\t"); 
console.log("set interval");
let id= setInterval(() => {
    console.log("i love you?");
},3000);

console.log(id);   //to stop clearInterval(id)
console.log("_--------------------------------------\n\t"); 

const student ={
    name: "pravin",
    marks :222,
    prp: this,
    getName : function(){
        return this.name;
    }
};
console.log(student);
console.log(student.getName());
console.log("_--------------------------------------\n\t"); 

const square = (n) => n*n;
console.log(square(4));

console.log("\n_--------------------------------------\n\t"); 

let id3 = setInterval(() => {
    console.log("hello hi  fi  ");
},6000);
       
setTimeout(() => {
    clearInterval(id);
    clearInterval(id3);
    console.log("intervel stop");
},10000);

console.log("\n_--------------------------------------\n\t"); 

let id4 = setInterval(() => {
    console.log("hello hi  tiger  ");
},2000);
       
setTimeout(() => {
    clearInterval(id4);
    console.log("intervel stop");
},10000);

console.log("\n_--------------------------------------\n\t"); 

const arrayAverage = (arr) => {
   let total = 0 
   for ( let number of arr){
    total += number;
   }
   return total/arr.length ;
};
let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

console.log("\n_--------------------------------------\n\t"); 

const isEven = (num3) => {
if (num3 %2 == 0){
    console.log("Even number");
} else {
    console.log("odd number");
}
}
let num3 = 4;
console.log(isEven(num3));

console.log("\n_--------------------------------------\n\t"); 
