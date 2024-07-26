
 
function oddeventest(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
    }
    else if(request =="even"){
        let even = function(n){
            console.log(n%2==0);
        }

        return even;
    }
    else{
        console.log("wrong rewquest");
    }
}
let request = "odd";
let func = oddeventest(request);
func(3); //true
func(6); //false
console.log("--------------------------------------------------------\n\n\n");
console.log(" array element larger than a number\n\n");

let arr=[2,3,4,5,6,7,8,9,11];
let num=  6;

function largeThanNo(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
largeThanNo(arr,num);

console.log("--------------------------------------------------------\n");
console.log(" get unique str\n\t");

let strr="abcdddcbjiudsia";
function getUnique(strr){
    let ans="";
    for(let i=0;i<strr.length;i++){
        let currchar = strr[i];
        if(ans.indexOf(currchar)== -1){
            ans += currchar;
        }
    }
    return ans;
}
console.log("Unique str = ",getUnique(strr));

console.log("----------------------------------\n");
console.log(" long str name \n\t");

let country =["australia","india","nepal","united state"];

function longname(country){
    let ansidx = 0;
    for(let i =0;i<country.length;i++){
        let anslen = country[ansidx].length;
        let currlen = country[i].length;
        if(currlen > anslen){
            ansidx = i;
        }
    }
    return country[ansidx];
}
console.log("longname = ",longname(country));

console.log("----------------------------------\n");
console.log(" count vowels in str \n\t");

let str1="mycollege";
function countVowels(str1){
    let count = 0;
    for(let i=0; i<str1.length;i++){
         if(
            str1.charAt(i)== "a"||
            str1.charAt(i)== "e"||
            str1.charAt(i)== "i"||
            str1.charAt(i)== "o"||
            str1.charAt(i)== "u"
         ){
             count++;    
           }
    }
    return count;
}
console.log("vowels in str = ",countVowels(str1));

console.log("----------------------------------\n");
console.log(" random no in rangee\n\t");
let abc=Math.random(); 
console.log("random no from 20-25",abc*5+20);

let start =100;
let end= 200;
function randominrange(start,end){
     let diff = end - start;
     return Math.floor(Math.random() * diff) + start ;
}
console.log("randam no from ",start,"to",end ,"is = ",randominrange(start,end) );

function ts(){
    for(let i=0;i<20;i++){
        let b= i++;
        console.log(b);
    }
}
console.log(ts());