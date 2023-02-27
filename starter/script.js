'use strict';
/* console.log( document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number❤😊";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 10;

document.querySelector(".highscore").value = 0
*/




 
//create random number between 0 and 20
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20; 
let highScore = 0;
/* document.querySelector(".number").textContent = secretNumber ; */


document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value); 

  
   //when is no input
if(!guess){
  document.querySelector(".message").textContent = " 👀 No Number!";


  //when  player wins
}else if( guess === secretNumber ){
    document.querySelector(".message").textContent = "Correct Number❤😊";
    document.querySelector(".number").textContent = secretNumber ;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    
 if(score > highScore){
    highScore = score
    document.querySelector(".highscore").textContent = highScore;
 }

  // when guess is different 
}else if (guess !== secretNumber){
    if (score > 1){
        document.querySelector(".message").textContent = guess > secretNumber ? "To high ⭕" : "To low 👁‍🗨";
        score-- ;
        document.querySelector(".score").textContent = score;

    }else{
        document.querySelector(".message").textContent = "💥💥Lost the Game 💥💥";
        document.querySelector(".score").textContent = 0;
    
    }
} 

  //when  huess is to high

/* else if ( guess > secretNumber){
    if (score > 1){
        document.querySelector(".message").textContent = "To high ⭕";
        score-- ;
        document.querySelector(".score").textContent = score;

    }else{
        document.querySelector(".message").textContent = "💥💥Lost the Game 💥💥";
        document.querySelector(".score").textContent = 0;
    
    }

 //when  guess is to low 
}else if ( guess < secretNumber){
    if ( score > 1){
      document.querySelector(".message").textContent = "To low 👁‍🗨";
 score-- ;
    document.querySelector(".score").textContent = score;  
    }else{
        document.querySelector(".message").textContent = "💥💥Lost the Game 💥💥";
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    }
}
});
 */


document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start Guessing 🎮";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
}) } )
