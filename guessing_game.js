const max = prompt("Enter the maximun number");
console.log("you enterd =",max);

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true){
      if(guess == "quit"){
          console.log("user quit");
          break;
      }
      if(guess==random){
         console.log("you are right  congrats !!");
         break;
      }
      else if(guess>random){
        guess= prompt("your guess was to large . please try again");
      }
      else if(guess<random){
        guess= prompt("your guess was to small . please try again");
      }
      else{
      guess=  prompt("your guess was wrong. please try again");
      }
}