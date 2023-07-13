//genertae a number betwwn 1 to 100
const randomNumber=Math.floor(Math.random()*100)+1;

//function for guessing
function check(){
const userGuess=parseInt(document.getElementById('user-guess').value);

//message
const messages= document.getElementById("message");


//check if user guessed itright or not
if(userGuess=== randomNumber){
    messages.textContent="Congratulations,you have guessed it right";
    messages.style.color="green";
}
else if(userGuess> randomNumber){
    messages.textContent="Oops! you have written a greater Number";
    messages.style.color="red";
}else{
    messages.style.color="red";
    messages.textContent="Oops! you have written a smaller number";
}
}