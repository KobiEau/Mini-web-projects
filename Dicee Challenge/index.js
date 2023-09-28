//Image 1 randomisation
var randNum1=Math.floor((Math.random()*6))+1; //val from 1 to 6

var randDiceImg1="dice"+randNum1+".png"; //dice1.png-dice6.png

var randImgSrc1="images/"+randDiceImg1;//images/dice1.png-images/dice6.png-

var img1=document.querySelectorAll("img")[1];

img1.setAttribute("src",randImgSrc1);


//Image randomisation 2
var randNum2=Math.floor((Math.random()*6))+1;

var randImgSrc2="images/dice"+randNum2+".png";

var img2=document.querySelectorAll("img")[0];

img2.setAttribute("src",randImgSrc2);

// var randNum2=Math.floor((Math.random()*6))+1; //val from 1 to 6

// var randDiceImg2="dice"+randNum2+".png"; //dice1.png-dice6.png

// var randImgSrc2="images/"+randDiceImg2;//images/dice1.png-images/dice6.png-

// var img2=document.querySelectorAll("img")[0];

// img2.setAttribute("src",randImgSrc2);

if(randNum1<randNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(randNum1>randNum2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else if(randNum1==randNum2){
    document.querySelector("h1").innerHTML="It's a tie!👔";
}