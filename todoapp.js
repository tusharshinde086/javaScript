//todo app
console.log("todo app")
let todo =[];
let req= prompt("pleaese enter your request");

while(true){
   if(req=="quit"){
    console.log("quiting app");
    break;
   }
   if(req=="list"){
    console.log("------------------------");
     for(let i=0;i<todo.length;i++){
       console.log(i,todo[i]);
     }
     console.log("------------------------");
   }
   else if(req=="add"){
      let task =prompt("enter the task you want to add");
      todo.push(task);
      console.log("task added");
   }
   else if(req=="delete"){
       let idx=prompt("plese enter task index");
       todo.splice(idx,1);

       console.log("task deleted ");
   }
   else{
    console.log("invalid request");
    }
    
   req= prompt("plese enter your next  request ");
  
}