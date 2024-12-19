let newP = document.createElement('p');
console.dir(newP)
newP.innerText = "Hi,I am a Red";
console.dir(newP)
newP.style.color="red"
document.querySelector("body").append(newP)

let h3 = document.createElement("h3");
h3.innerText="Hi , I am a Blue H3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h2 = document.createElement("h1");
let para2 = document.createElement("p");

h2.innerText="I'm in a div";
para2.innerText="Me Too!";

div.append(h2);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);

//Question  

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText ="Click me ";

document.querySelector("body").append(input);
document.querySelector("body").append(button);
document.querySelector("body").append(h3);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 =document.createElement("h1");
h1.innerHTML ="<u>Dom practice</u>";
h1.classList.add("h1");
document.querySelector("body").append(h1);


let p =document.createElement("p");
p.innerHTML ="Apna College <b>Delta</b> Practice ";

document.querySelector("body").append(p);
