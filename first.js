let data=["pandu","pillu","janu","sonu","my"];
for(let i=0; i< data.length; i++){
    console.log(data[i]);
}
console.log(data.length);
console.log(data);
console.log(data[2]);
for (let dat of data){
console.log(dat.toUpperCase());
}
let marks=[11,22,33,44,55,66,77,88,99];
let sum=0;
  for(let sub of marks){
    sum+=sub;
  }
  console.log(sum/marks.length);
let i=0;
 for(let val of marks){
      console.log(`value for item ${i} = ${val}`);
      let offer= val/10;
      marks[i]= marks[i] - offer;
      console.log(`after offer is = ${marks[i]}`);
      i++;
 }
 let u=0;
 for(let j=0;j<marks.length;j++){
    offer=marks[j]/10;
    marks[j]=marks[j]+offer;
    console.log(`without offer no ${u} =${marks[j]}`);
    u++;
    }
// nested array
console.log("nested array");
let heros=[["superman","bananana","orange"],["shaktiman","spiderman","doremon"]];
 for(hero of heros){
    for(name of hero){
      console.log(name);
    }
 }

//
//string 
let fruits=["apple","bananana","orange","stobery"];
console.log(fruits);
fruits.push("coconut","mango");
console.log(fruits);
let deleted =fruits.pop();
console.log(fruits);
console.log('deleted =',deleted);
//tostring
let num=[11,33,54];
num.toString();
console.log(num);
//concat
let info = data.concat(fruits);
console.log(info);
//push
info.push("done");
console.log("last added = ",info);
//shift
let shiftt= info.shift();
console.log("deleted= ",shiftt);
console.log("after deletded = ",info);
info.unshift("pravin","pratik");
console.log("after front add = ",info);
//slice
let slicee= info.slice(2,4);
console.log("slice = ",slicee);
console.log(info);
//splice
let numm=[1,2,3,4,5,6,7];
console.log(numm);
numm.splice(2,2,22,33,44);
console.log(numm);
numm.splice(5,0,77);
console.log(numm);

//ARRAY METHOD

let colors=["yellow","blue","orange"];
console.log(colors);
let a=colors.indexOf("blue");
console.log(a);
let b=colors.indexOf("green");
console.log(b);
let c=colors.includes("blue");
console.log(c);
let d=colors.includes("green");
console.log(d);

const arr2 =[1,2,3,4];
console.log(arr2);
arr2.push(5);
console.log(arr2);


//object literals
console.log("object literals");
const post={
  username:"@tusharshinde",
  content:"this is my first post",
  likes : 200,
  reposts: 44,
  tags:["@tscreation086","ts086"]
};
console.log(post);
// get value

let gg=post["content"];
console.log(gg);
let og=post.content;
console.log(og);
let ff=post.tags;
console.log(ff);
let fg=post.tags[1];
console.log(fg);
console.log(post);

post.likes=330;
console.log(post);
post.reposts=44;
console.log(post);
post.reposts='a';
console.log(post);
post.reposts=[11,33];
console.log(post);
delete post.content;
console.log(post);                                                                                                                                 

console.log("nested object"); 
const classinfo={
  aman:{
     grade:"a",
     city:"delhi"
  },
  shradha:{
      grade:"b",
      city:"pune"
  },
  karaan:{
      grade:"c",
      city:"mumbai"
  }
};

console.log(classinfo);
 //math
 //Math.pi
// undefined
// Math.PI
// 3.141592653589793
// Math.E
// 2.718281828459045
// Math.abs(-12);
// 12
//Math.pow(3,2)  = 9;
//Math.floor(5.5)  =5;
//Math.ceil(5.6) =6;
let abc=Math.random();
console.log("random FROM 1-10-=",abc*10+1);  
console.log("random no from 20-25",abc*5+20);