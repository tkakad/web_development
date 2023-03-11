`use_strict`;

let random_number1 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').src = "images/dice" + random_number1 + ".png";

let random_number2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img2').src = "images/dice" + random_number2 + ".png";

if(random_number1 > random_number2){
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if(random_number1 < random_number2){
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector('h1').innerHTML = "DRAW!";
}