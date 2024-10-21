const body = document.querySelector("body");

const userGuess = document.querySelector("#guess");

const userSubmit = document.querySelector("#submit-btn");

let randomNum = Math.floor(Math.random() * 101);

const finalResult = document.createElement("p");

const hint = document.createElement("p");

//const play = document.createElement("button");

const fResult = (n) =>{
   
    if (n==1){
        finalResult.textContent = "Congraulations ! You got it right !";
        finalResult.style.border = "2px solid green";
        finalResult.style.backgroundColor ="green";
        finalResult.style.color = "white";
        body.append(finalResult);
        userGuess.value = "";
    }
   else{
        finalResult.textContent='';
        finalResult.textContent = "Wrong!";
        finalResult.style.border = "2px solid red";
        finalResult.style.backgroundColor ="red";
        finalResult.style.color = "white";
        body.append(finalResult);
        userGuess.value = "";
   }
};
   
   
   // play.textContent = "New Game";
    //play.style.height = "50px";
    //play.style.width = "150px";

/*function playAgain(){
    body.append(play);
}*/



let guessCount = 0;
const maxGuesses = 10; 
function showResult(){ 
        const prevRes = document.querySelector("#prev-result");

        //const hint = document.querySelector("#hint");
    
        if( randomNum === parseInt(userGuess.value)){
            prevRes.textContent = `Previous Guesses: ${userGuess.value}`;
            //finalResult.textContent = "Congraulations ! You got it right !";
            fResult(1);
            //userGuess.value ="";
            hint.remove();
            userGuess.disabled = true;
            userSubmit.disabled = true; 
            const play = document.createElement("button");
            play.textContent = "New Game";
            body.append(play);
            play.onclick = () =>{
                randomNum = Math.floor(Math.random() * 101);
                guessCount = 0;
                userGuess.disabled = false;
                userSubmit.disabled = false; 
                prevRes.textContent = "";
                finalResult.textContent = "";
                finalResult.style ="none";
                play.remove();
            }
            
            //playAgain();
            //body.append(finalResult);
        }
        else if( randomNum < parseInt(userGuess.value)){
            prevRes.textContent = `Previous Guesses: ${userGuess.value}`;
            fResult(2);
            //userGuess.value = "";
            hint.textContent = "Last guess was too high"; 
            body.append(hint);   
            guessCount ++;
        }
        else{
            prevRes.textContent = `Previous Guesses: ${userGuess.value}`;
            fResult(3);
            hint.textContent = "Last guess was too low"; 
            body.append(hint);  
            guessCount ++;
        }
        //guessCount ++;
        if (guessCount >= maxGuesses) {
            finalResult.textContent = `Game Over! You've reached the maximum number of ${maxGuesses} guesses.
            Correct choice was: ${randomNum}`;
            finalResult.style.border = "2px solid black";
            finalResult.style.backgroundColor = "black";
            finalResult.style.color = "white";
            body.append(finalResult);
            userGuess.disabled = true;
            userSubmit.disabled = true; 
            hint.remove(); 
            const play = document.createElement("button");
            play.textContent = "New Game";
            body.append(play);
            play.onclick = () =>{
                randomNum = Math.floor(Math.random() * 101);
                guessCount = 0;
                userGuess.disabled = false;
                userSubmit.disabled = false; 
                prevRes.textContent = "";
                finalResult.textContent = "";
                finalResult.style.border = "";
                finalResult.style.backgroundColor = "";
                finalResult.style.color = "";

                play.remove();
            }
          }
    
    
}
/*play.onclick = () =>{ 
    guessCount = 0; 
    userGuess.disabled = false;
    userSubmit.disabled = false;
    finalResult.remove(); 
    hint.remove();
    randomNum = Math.floor(Math.random() * 101);
    userGuess.value = "";
    document.querySelector("#prev-result").textContent = ""; 
    play.remove(); 
    showResult();
}*/

userSubmit.onclick = () =>{
    showResult();
}
