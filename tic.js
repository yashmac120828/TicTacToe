let boxes = document.querySelectorAll(".btn1");
let resetbtn = document.querySelector(".rstbtn");
let bd = document.querySelector("body");
let newbtn=document.querySelector(".newbtn");
let msgcon = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg");
let backturn = document.querySelector(".vertical");
let backturn1 = document.querySelector(".vertical1");
let backtext= document.querySelector(".h1");
let backtext1= document.querySelector(".h12");
let happyimg = document.querySelector(".rdsd");
let happyblue=document.querySelector(".blsd");
let count=0;
let turnO; //playerX , playerO
let winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let side=prompt("Choose the side for playing : PLAYER O(RED) & PLAYER X(BLUE)");
if(side=="O" || side=="o" || side=="RED" || side=="red" || side=="Red")
{
    turnO=true;
    backtext.classList.remove("hide");
    backtext1.classList.remove("hide");
    backtext.innerText="RED";
    backtext1.innerText="TURN";
    backtext.style.color="pink";
    backtext1.style.color="pink";
    bd.style.backgroundColor="red";
    bd.style.transition="0.5s ease-in-out 0.1s";
}
else if(side=="X"|| side=="x" || side=="Blue" || side=="BLUE" || side=="blue"){
    turnO=false;
    bd.style.backgroudColor="blue";
    bd.style.transition="0.5s ease-in-out 0.1s";
    backtext.classList.remove("hide");
    backtext1.classList.remove("hide");
    backtext.innerText="BLUE";
    backtext1.innerText="TURN";
    backtext.style.color="pink";
    backtext1.style.color="pink";
    
}
else{
    alert("INVALID CHOICE !!!! Note : Game will be start from BLUE(X) Side"
    );
    turnO=false;
    backtext.classList.remove("hide");
    backtext1.classList.remove("hide");
    backtext.innerText="BLUE";
    backtext1.innerText="TURN";
    backtext.style.color="pink";
    backtext1.style.color="pink";
    bd.style.backgroundColor="blue";
    bd.style.transition="0.5s ease-in-out 0.1s";
}
boxes.forEach((btn1)=>{
    // count=count+1;
    // console.log(`after enter into the loop the count value is ${count}`);
    btn1.addEventListener("click",()=>{
        if(turnO){
            btn1.innerText="O";
            btn1.style.color="red";
            turnO=false;
            // backturn.classList.remove("hide");
            // backturn1.classList.remove("hide");
            backtext.classList.remove("hide");
            backtext1.classList.remove("hide");
            backtext.innerText="BLUE";
            backtext1.innerText="TURN";
            backtext.style.color="pink";
            backtext1.style.color="pink";
            bd.style.backgroundColor="blue";
            bd.style.transition="0.5s ease-in-out 0.1s";
        }
        else{
            btn1.innerText="X";
            btn1.style.color="blue";
            backturn.classList.remove("hide");
            backturn1.classList.remove("hide");
            backtext.style.color="pink";
            backtext1.style.color="pink";
            backtext.innerText="RED";
            backtext1.innerText="TURN";
            turnO=true;
            bd.style.backgroundColor="red";
            bd.style.transition="0.5s ease-in-out 0.1s";
        }
        btn1.disabled=true;
        let winner=checkWinner();
    })
});
const disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const EnableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}
const ResetGame=()=>{
    count=0;
    side=prompt("Choose the side for playing : PLAYER O(RED) & PLAYER X(BLUE)");
    if(side=="O" || side=="o" || side=="RED" || side=="red" || side=="Red")
    {
        turnO=true;
        happyimg.classList.add("hide");
        happyblue.classList.add("hide");
        backtext.innerText="RED";
        backtext1.innerText="TURN";
        bd.style.backgroundColor="red";
        backtext.classList.remove("hide");
        backtext1.classList.remove("hide");
        backtext.style.color="pink";
        backtext1.style.color="pink";
        showWinner;
    }
    else if(side=="X" || side=="x" || side=="Blue"||side=="BLUE"||side=="blue") {
        turnO=false;
        happyimg.classList.add("hide");
        happyblue.classList.add("hide");
        bd.style.backgroundColor="blue";
        backtext.innerText="BLUE";
        backtext1.innerText="TURN";
        backtext.classList.remove("hide");
        backtext1.classList.remove("hide");
        backtext.style.color="pink";
        backtext1.style.color="pink";
        showWinner;
    }
    else{
        alert("INVALID CHOICE !!!! Game Stopped, please refresh the page"
        );
        window.history.back();

    }
    EnableBoxes();
    msgcon.classList.add("hide");
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! The winnner is ${winner}`;
    console.log(winner);
    if(winner=="O")
    {
        backtext1.innerText="WINNER";
        backtext.innerText="LOOSER";
        happyblue.src="happyred.png";
        happyblue.classList.remove("hide");
        happyimg.src="bluesad.png";
        happyimg.classList.remove("hide");
        bd.style.backgroundColor="red";
        bd.style.transition="0.5s ease-in-out 0.1s";
    }
    else
    {
        backtext1.innerText="WINNER";
        backtext.innerText="LOOSER";
        happyblue.src="happyblue.png";
        happyblue.classList.remove("hide");
        happyimg.src="redsad.png";
        happyimg.classList.remove("hide");
        bd.style.backgroundColor="blue";
        bd.style.transition="0.5s ease-in-out 0.1s";
    }
    msgcon.classList.remove("hide");
    disableBoxes();
}
const drawMatch=()=>{
        msg.innerText="The Game Is Draw!Better Luck Next Time";
        msgcon.classList.remove("hide");
        bd.style.backgroundColor="purple";
        backtext1.innerText="DRAW";
        backtext.innerText="DRAW";
        happyimg.src="redsad.png";
        happyblue.src="bluesad.png";
        happyblue.classList.remove("hide");
        happyimg.classList.remove("hide");
        disableBoxes();
    }
const checkWinner=(btn1)=>{
    count=count+1;
    console.log(count);
    if(count==9){
        drawMatch();
    }
    for(let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=" " && pos3val!=" "){
            if(pos1val===pos2val && pos2val===pos3val){
              showWinner(pos1val);
            }
            
        }
    }

}
newbtn.addEventListener("click",ResetGame);
resetbtn.addEventListener("click",ResetGame);

