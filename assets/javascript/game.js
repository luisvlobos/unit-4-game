let min = 19;
let max = 120; 

//sets random number between 19 and 120
let ranNum = Math.floor(Math.random() *(+max - +min) + +min);

$('#randomNumber').append(ranNum);

let first = Math.floor(Math.random() * 12) + 1;
let second = Math.floor(Math.random() * 12) + 1;
let third = Math.floor(Math.random() * 12) + 1;
let fourth = Math.floor(Math.random() * 12) + 1;

let wins = 0;
let losses = 0;
let playerTotal = 0; 

$('#wins').text(wins);
$('#losses').text(losses);

function end() {
    ranNum = Math.floor(Math.random() *(+max - +min) + +min);
    $('#randomNumber').text(ranNum);
    first = Math.floor(Math.random() * 12) + 1;
    second = Math.floor(Math.random() * 12) + 1;
    third = Math.floor(Math.random() * 12) + 1;
    fourth = Math.floor(Math.random() * 12) + 1;
    playerTotal = 0;
    $('#finalScore').text(playerTotal);
}

function youWin() {
    alert('You win!');
    wins++;
    $('#wins').text(wins);
    end();
}

function youLose() {
    alert('You lose!');
    losses++;
    $('#losses').text(losses);
    end();
}

$('#one').on('click', function(){
    playerTotal = playerTotal + first;
    console.log('New playerTotal= ' + playerTotal);
    $('#finalScore').text(playerTotal);
    if (playerTotal == ranNum){
        youWin();
    } else if (playerTotal > ranNum) {
        youLose();
    }
})

$('#two').on('click', function(){
    playerTotal = playerTotal + second;
    console.log('New playerTotal= ' + playerTotal);
    $('#finalScore').text(playerTotal);
    if (playerTotal == ranNum){
        youWin();
    } else if (playerTotal > ranNum) {
        youLose();
    }
})

$('#three').on('click', function(){
    playerTotal = playerTotal + third;
    console.log('New playerTotal= ' + playerTotal);
    $('#finalScore').text(playerTotal);
    if (playerTotal == ranNum){
        youWin();
    } else if (playerTotal > ranNum) {
        youLose();
    }
})

$('#four').on('click', function(){
    playerTotal = playerTotal + fourth;
    console.log('New playerTotal= ' + playerTotal);
    $('#finalScore').text(playerTotal);
    if (playerTotal == ranNum){
        youWin();
    } else if (playerTotal > ranNum) {
        youLose();
    }
})