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

// console.log("set timeout");

// setTimeout(() => {
//     console.log("tushar shinde");
// },2000);

// console.log("hello there");
console.log("_--------------------------------------\n\t"); 
// console.log("set interval");
// let id= setInterval(() => {
//     console.log("i love you?");
// },2000);

// console.log(id);   //to stop clearInterval(id)
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
    console.log("hello hi ");
},2000);
       
setTimeout(() => {
    clearInterval(id3);
    console.log("intervel stop");
},10000);

console.log("\n_--------------------------------------\n\t"); 


