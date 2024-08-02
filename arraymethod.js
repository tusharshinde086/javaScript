let arr1=[1,2,3,4,5,6,7];
let print=function(el){
    console.log(el);
};
arr1.forEach(print);
console.log("----------------------------------");

arr1.forEach(function (el){
    console.log(el);
});
console.log("----------------------------------");

arr1.forEach((el) => {
    console.log(el);
});

console.log("----------------------------------");

let arr = [{
     name: "aman",
     marks: 95,
},{
    name:"ranjat",
    marks : 83,
},{
    name: "shardha",
    marks: 66,
}
];
arr.forEach((student)=> {
    console.log(student.marks);
}
);
console.log("----------------------------------");

let num= [1,2,3,4];

let double = num.map((el)=>{
    return el*2;
});
console.log(double);

console.log("----------------------------------");

let students = [{
     name: "aman",
     marks: 95,
},{
    name:"ranjat",
    marks : 83,
},{
    name: "shardha",
    marks: 66,
}
];

let gpa =  students.map((el) => {
    return el.marks/10;
})
console.log(gpa);

console.log("-------------------------------------");

let nums= [1,2,3,4,5,6,7,8,9];
let ans= nums.filter((el) => {
    return el % 2 == 0;/// even no.
});
console.log(ans);

console.log("---------------------------------------");

let arr2 =[2,4,6].every((el)=> el%2 == 0);
console.log(arr2);
// logical and
// some logical OR 
console.log("----------------------------------------");

let arr3 =[1,2,3,4,5];
console.log(arr3);
let finalval =arr3.reduce((res,el) =>{
     console.log(res);
  return res +el ;
});


console.log(finalval);

console.log("-----------------------------------------");

let arr4 =[1,2,3,345,6,7,89,90,88];


let max = -1;
for(let i=0; i<arr4.length; i++){
     if(max < arr4[i]){
         max = arr4[i];
     }
}
console.log(max);

console.log("-----------------------------------------");

 max =0;
 max = arr4.reduce((max,el)=> {
     if (max < el ){
          return el;
     }else{
         return max;
     }
});
console.log(max);


console.log("-----------------------------------------");console.log("-----------------------------------------");

let num4 = [10,20,30,40,50];
let min = num4.reduce((min,el)=> {
    if(min < el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

console.log("-----------------------------------------");console.log("-----------------------------------------");

//default para 
function sum(a,b=4){
    return a+b;
}
console.log(sum(2));

//spread  
// expand an iterable into multiple value 

let arr5 = [22,2,3,4,5,6];

let mini = Math.min(...arr5);
console.log(mini);

console.log("-----------------------------------------");console.log("-----------------------------------------");

// spread with array literals 

let arr6 = [,23,4,56,7,8];
let newarr6 = [...arr6];
console.log(newarr6)

let chars=[..."hello"];
console.log(chars);

console.log("-----------------------------------------");

let odd =[1,3,5,7,9];
let even =[2,4,6,8,10];
let numss = [...odd,...even];
console.log(numss);

console.log("-----------------------------------------");

const data ={
    email: "ironman#gmail.com",
    password :"abcd",
};
const datacopy={...data,id: 123, contry : "india"};
console.log(datacopy);


console.log("-----------------------------------------");


console.log()