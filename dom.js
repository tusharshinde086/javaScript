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
//para.innerText= 'abcd'
console.log(para);
//para.innerText= 'Hi , I am a'
console.log(para);
let heading = document.querySelector('h1')
console.log(heading);
//console.log(heading.innerHTML ='<u>$(heading.innerText)</u>');
let img = document.querySelector('img');
//img.getAttribute('id')
//img.setAttribute('id','spiderman_img')
//img.setAttribute('src',"assets/creation_1.png")
// img.getAttribute('class')
// img.setAttribute('class','image')
// img.getAttribute('class')
heading.style.color="blue";
//heading.style.color="green"
heading.style.backgroundColor="yellow"
//heading.style.backgroundColor="red"
let links = document.querySelectorAll('.box a')
console.log(links);

for(let i=0 ; i<links.length;i++){
    links[i].style.color = "blue";
 }

 for(link of links) { 
    link.style.color="purple" 
}

// Manipulating Style ********

let box = document.querySelector('.box')
console.dir(box.style)

//img.classList

//heading.classList
//heading.classList.add("abc");
let head = document.querySelector('h2');
head.classList.add('green')
console.dir(head.classList)

head.classList.remove('green')
console.dir(head.classList.contains('underline'))
head.classList.toggle('green')
head.classList.toggle('green')


let h4 =document.querySelector('h4')
console.log(h4)
console.log(h4.parentElement)
    console.log( h4.children)
    console.log( h4.childElementCount)

let ul =document.querySelector('ul')
console.log(ul.parentElement)
console.log(ul.children)
console.log(ul.children[1])
console.log(ul.children[1].previousElementSibling)
console.log(ul.children[1].nextElementSibling)
console.log(ul.childElementCount)

console.log(img)
console.log(img.previousElementSibling.style)
console.log(img.previousElementSibling.style.color="red")

document.createElement('p');
let newP = document.createElement('p');
console.dir(newP)
newP.innerText = "Hi,I am a new P";
console.dir(newP)
//box.appendChild(newP)
<p>​Hi,I am a new P​</p>​
console.log(newP)
let body = document.querySelector("body")
console.log(body.appendChild(newP))
let btn = document.createElement('button')
// btn.innerText="Click Me"
// box.appendChild(btn)
let p = document.querySelector('p')
console.dir(p.insertAdjacentElement('beforebegin',btn))
console.dir(p.insertAdjacentElement('afterbegin',btn))



                                                                           



