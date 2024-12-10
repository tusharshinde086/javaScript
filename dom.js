// console.log(document)
console.dir(document)
console.dir(document.all);
console.log( document.getElementById("description") )
console.log( document.getElementsByTagName('p') )
console.log( document.getElementsByClassName("box") );

console.dir(document.all[8]);
console.dir(document.all[8].innerText);
console.dir(document.all[8].innerText = " Peter Parker");

console.log(document.querySelector('p'))
console.log(document.querySelector("#description"))
console.log(document.querySelector(".box"))
console.log(document.querySelectorAll("div a"))
console.log(document.querySelectorAll("h1"))
console.log(document.querySelectorAll(".box"))


let para =document.querySelector("p");
console.log(para);
console.dir(para);