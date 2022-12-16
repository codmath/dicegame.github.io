var RandomNumber1=Math.floor(Math.random()*6)+1;
var RandomDice="dice-"+ RandomNumber1 +".png";
var RandomDiceImage="images/" + RandomDice;
document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImage);

var RandomNumber2=Math.floor(Math.random()*6)+1;
var RandomDice2="dice-"+ RandomNumber2 +".png";
var RandomDiceImage2="images/" + RandomDice2;
document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImage2);

if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won!!!";

}
else if(RandomNumber2 > RandomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won!!!";

}
else{
    document.querySelector("h1").innerHTML="Draw!!!!";
}