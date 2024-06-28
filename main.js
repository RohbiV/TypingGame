//this is a simple typing game

window.addEventListener("load",init);

const words = [
    "Appraisal",
    "Abrogate",
    "pizazz",
    "piazzas",
    "suburban",
    "assuming",
    "obstinance",
    "foramens",
    "Bibliography",
    "Catastrophic",
    "advertisement",
    "neurology",
    "methodology",
    "significant",
    "disturbing",
    "jackass",
    "savage",
    "rhinoceros",
];

//global variables
let time = 5;
let myscore = 0;
let isPlaying;

//dom elements
const timeleft = document.querySelector(".time");
const wordToEnter = document.querySelector(".word");
const inputText = document.querySelector("#input");
const message = document.querySelector("#msg");
const score = document.querySelector(".score");


//on initial when window loads
function init() {
    generateWord(words);
    inputText.addEventListener("input", matchData);
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
}


function generateWord(words) {
    const len = words.length;
    const index = Math.floor(Math.random() * len); 
    wordToEnter.innerHTML = words[index];
}

function matchData() {
    if(matchWords()){
        isPlaying = true;
        time = 6;
        generateWord(words);
        inputText.value = "";
        myscore++;
    }
    if(myscore === -1) {
        myscore = 0;
        score.innerHTML = `<h4 class="score">Score:${myscore}</h4>`;
    }
    score.innerHTML =  `<h4 class="score">Score:${myscore}</h4>`;
}

function matchWords() {
    if(inputText.value === wordToEnter.innerHTML) {
        message.innerHTML = "correct";
        return true;
    }
    else{
        message.innerHTML = "";
        return false;
    }
}

function countdown() {
    if(time > 0) {
        time--;
    }
    else if(time === 0) {
        isPlaying = false;
    }
    timeleft.innerHTML = `<p class="time"> Time left (second): ${time}`;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = "Game Over!";
        myscore = -1;
    }
}
