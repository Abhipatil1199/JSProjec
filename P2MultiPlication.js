const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const quesE = document.getElementById("ques");
const formE = document.getElementById("form");
const inputE = document.getElementById("input");
const scoreE = document.getElementById("score");

quesE.innerHTML = `What is ${num1} multiply by ${num2}?`;

let score = 0;

const correctAns = num1 * num2;

score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreE.innerHTML = `score: ${score}`;

formE.addEventListener("submit", ()=> {
    const userAns = Number(inputE.value);
    // console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
        
    }
    else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
      localStorage.setItem("score", JSON.stringify(score));
}