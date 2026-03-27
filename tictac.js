boxes=document.querySelectorAll(".box");
resetGame=document.getElementById("reset");
turnX=true;
wintext1=document.querySelector("#winnerText");
wintext2=document.querySelector("#winnerText");
const winningPositions = [
  // Rows
  [0, 1, 2],  
  [3, 4, 5],  
  [6, 7, 8],  

  // Columns
  [0, 3, 6],  
  [1, 4, 7],  
  [2, 5, 8],  

  // Diagonals
  [0, 4, 8],  
  [2, 4, 6]   
];

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
// const resetGame = () => {
//   turnX = true;
//   count = 0;
//   enableBoxes();}
let disBoxes = () => {
  for (let boxes of box) {
    boxes.disabled = true;
  }}
let winner=false;

function checkwinner(){for (let combo of winningPositions){
    let[a ,b, c ] =combo;
    if (boxes[a].innerText!==""
        &&
        boxes[a].innerText===boxes[b].innerText
        &&
        boxes[a].innerText===boxes[c].innerText){
       alert(`Winner is ${boxes[a].innerText}`);
       disableBoxes();
       winner=true;
      //  if (boxes[a].innerText==="X"){
      //   wintext1.style.display="block";
        
      //  }
      //   else if(boxes[a].innerText==="O"){
      //     wintext2.style.display="block";
      //   }
      //       return;

           
    }
    
   
}}


boxes.forEach((box) => {
     box.addEventListener("click", () => {  
    if (turnX) {
        
            box.innerText = "X";
             turnX=false;   
             box.disabled=true;
            
        }
    else {
      
          box.innerText="O"
          turnX=true;
          box.disabled=true;
    }
    checkwinner();
    if(count===9&& winner===false || checkwinner()===false){
        alert("It's a draw!");
         disableBoxes();
    }
    
 

 } );
         
    }
)

