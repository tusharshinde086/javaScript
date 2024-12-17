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
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="Me Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);