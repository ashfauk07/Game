var noOfLives=document.getElementById("livesNo");
var msg=document.getElementById("message");
var submit=document.getElementById("submit");

var randomNumber=Math.round(Math.random()*100)

var lives=5;
var message;
submit.onclick=()=>{
    var userInput=document.getElementById("number").value;
    lives--;
    if(lives==0)
        location.href="./loss.html";
    else if(userInput==randomNumber)
        location.href="./win.html";
    else if(userInput>randomNumber)
        message="Oops! Your number is  too high!";
    else if(userInput<randomNumber)
        message="Oops! Your number is too low!";

    msg.style.display="inherit";
    msg.innerHTML= message;
    noOfLives.innerHTML= lives;

};