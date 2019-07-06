let min = 19;
let max = 120; 

//sets random number between 19 and 120
let ranNum = Math.floor(Math.random() *(+max - +min) + +min);

$('#randomNumber').text(ranNum);

let first = Math.floor(Math.random() * 12) + 1;
let second = Math.floor(Math.random() * 12) + 1;
let third = Math.floor(Math.random() * 12) + 1;
let fourth = Math.floor(Math.random() * 12) + 1;

let wins = 0;
let losses = 0;
let playerTotal = 0;