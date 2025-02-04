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

// function savetoDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     console.log("Your speed:", internetSpeed);

//     if (internetSpeed > 4) {
//         success(data);
//     } else {
//         failure();
//     }
// }

// setTimeout(() => {
//     savetoDB("tushar shinde data",
//         (data) => {
//             console.log("Your data was successfully saved:", data);

//             // Calling savetoDB again inside success callback
//             savetoDB("hello world",
//                 (data) => {
//                     console.log("Your second success 2 data was saved:", data);
//                     savetoDB("new data",
//                         (data)=>{
//                             console.log("Your third success 3  data was saved:", data);
//                         },()=>{
//                             console.log("Weak connection, third data not saved.");
//                         }
//                      ) 

//                 },() => {
//                     console.log("Weak connection, second data not saved.");
//                 }
//             );
//         },() => {
//             console.log("Weak connection, first data not saved.");
//         }
//     );
// }, 12000);

function savetoDB(data) {
    return new Promise((resolve, reject) => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      console.log("Your speed:", internetSpeed);
      
      if (internetSpeed > 4) {
          resolve(`Success! Data was saved: ${data}`);
      } else {
          reject("Weak connection, data not saved.");
      }
    });
  }
  
  // Call savetoDB and handle success/failure
  setTimeout(() => {

  let request = savetoDB("tushar shinde");
  
    request.then((message) => {
      console.log(message);
    })
    request.catch((error) => {
      console.log(error);
    });

    

}, 12000);

console.log("-----------------------------------");

