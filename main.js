//this is a simple typing game 

const words = ["Appraisal","Abrogate","pizazz","piazzas","suburban","assuming","obstinance","foramens","Bibliography","Catastrophic","advertisement","neurology","methodology","significant","disturbing","jackass","savage","rhinoceros"];          //to generate random words from


const timeline = document.querySelector(".timeleft");
// console.log(timeline);

let timeLeft = document.querySelector(".time");
// console.log(timeLeft);

let word = document.querySelector(".word");



setInterval(()=>{
    const len = words.length;
    const randwordindex = Math.floor(Math.random() * len);
    const randomword = words[randwordindex];
    word.innerText = randomword;
    console.log("Random word is generated!!");
},5000);
