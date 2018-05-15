var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#r");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var displayWinningScore = document.querySelector("#length");
var score=0;
var score2=0;
var temp=0;
var gameOver=false;
var winningScore=5;
p1.addEventListener("click",function(){
    if(!gameOver)
    {
     score++;
     if(score===winningScore)
     {
         p1Display.classList.add("winner");
         gameOver=true;
     }
     p1Display.textContent = score;
    }
});
p2.addEventListener("click",function(){
    if(!gameOver)
    {
     score2++;
     if(score2===winningScore)
     {
         p2Display.classList.add("winner");
         gameOver=true;
     }
    p2Display.textContent = score2;
    }
    });
reset.addEventListener("click",function(){
    score=0;
    score2=0;
    p1Display.textContent = temp;
    p2Display.textContent = temp;
    gameOver=false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    input.addEventListener("change",function()
   {
    displayWinningScore.textContent = input.value;
   })
});