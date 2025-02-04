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

console.log("-----------------------------------");

//js is  single threaded 

setTimeout( function () {
    console.log("tushar shinde ");
},2000);
setTimeout( function () {
    console.log("hello world ");
},2000);

console.log("hello ....") ;

//callback hell 

console.log("-----------------------------------");

let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColorChange) {
    setTimeout(()=>{
        h1.style.color = color;
        console.log("color chaged to " , color );
       if(nextColorChange) nextColorChange();
    },delay);
}

setTimeout(() => changeColor("red"), 2000);
setTimeout(() => changeColor("orange"), 3000);
changeColor("green", 4000);
changeColor("yellow", 5000);

//callback nesting 

changeColor("purple", 6000,()=> {
    changeColor("gray",1000, ()=> {
        changeColor("white",1000,()=> {
            changeColor("lime",1000,()=> {
                changeColor("maroon",1000);
            });
        });
    });
}); 

setTimeout(() => {
    h1.style.color = "blue";
    console.log("color chaged to blue" );
}, 11000);

setTimeout(() => {
console.log("-----------------------------------");
}, 11000);


console.log("-----------------------------------");

//  promises  


function savetoDB(data,success , failure ){
    let internetSpeed = Math.floor(Math.random()* 10) +1  ;
    console.log("your speed" ,internetSpeed);
   if(internetSpeed > 4 ){
    success(data);
    
   }else{
      failure(data);
   }
}
setTimeout(() => {
    savetoDB("tushar shinde data",(data)=>{
        console.log("your data was succes saved" , data),()=>{
            savetoDB("hello world" , ()=>{
                console.log("your succes 2 data was saved" , data);
            },()=>{
                console.log("week  connection failure 2  data not saved ");
            }
        )
        }
    },
    ()=>{
        console.log("week  connection  failure data not saved ");
    }
    )
},12000);