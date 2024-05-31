
// クイズの関数、リスト

const questions = [
    
    {
        question: "年末年始",
        answer: "the beginning and the end of the year"
    },
    {
        question: "花火大会",
        answer: "firework(s) display"
    },
    {
        question: "打ち上げ花火",
        answer: "skyrocket"
    },
    {
        question: "野球観戦",
        answer: "watch a baseball game"
    },
    {
        question: "野球中継",
        answer: "a live baseball broadcast"
    },
    {
        question: "優勝候補",
        answer: "favorite for the championship"
    },
    {
        question: "全国制覇",
        answer: "domination of national title"
    },
    {
        question: "先制攻撃",
        answer: "pre-emptive strike[attack]"
    },
    {
        question: "秘密基地",
        answer: "secret base"
    },
    {
        question: "一発勝負",
        answer: "the one and only match[game]"
    },
    {
        question: "作戦会議",
        answer: "strategy meeting"
    },
    {
        question: "間接照明",
        answer: "indirect lighting"
    },
    {
        question: "空調設備",
        answer: "air-conditioning system"
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    // {
    //     question: "",
    //     answer: ""
    // },
    
    
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const kaisetsuElement = document.getElementById("kaisetsu");
// const answerButtons = document.getElementById("answer-buttons");
const checkButton = document.getElementById("check-btn");
const correctButton = document.getElementById("correct-btn");
const incorrectButton = document.getElementById("incorrect-btn");
const retryButton = document.getElementById("retry-btn");
const resetButton = document.getElementById("reset-btn");


let currentQuestionIndex = 0;
let score = 0;

start();

function start(){
    currentQuestionIndex = 0;
    score = 0;
    shuffle(questions);

    startQuiz();
}

// Fisher-Yates algorithm  フィッシャーイェーツアルゴリズム
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

function resetState(){
    correctButton.style.display = "none";
    incorrectButton.style.display = "none";
    retryButton.style.display = "none";
    answerElement.innerHTML = "";
}

function startQuiz(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    checkButton.style.display = "block";
    checkButton.innerHTML = "解答へGO!!";

    resetButton.style.display = "block";
    resetButton.innerHTML = "もう一度設定しなおす";

    checkButton.addEventListener("click", showQuestion);
}

function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex]; /* 消すな */

    answerElement.innerHTML = currentQuestion.answer;

    checkButton.style.display = "none";

    correctButton.style.display = "inline-block";
    correctButton.innerHTML = "正解！";
    correctButton.addEventListener("click", correct);

    incorrectButton.style.display = "inline-block";
    incorrectButton.innerHTML = "不正解";
    incorrectButton.addEventListener("click", incorrect);
}

function correct(){
    score++;
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        startQuiz();
    }else{
        showScore();
    }
}
function incorrect(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        startQuiz();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `あなたは ${questions.length} 問中 ${score} 問正解しましたァ!<br>やるなぁ。この調子だよジョジョォォォォォ`;
    retryButton.innerHTML = "もっかいやる";
    resetButton.innerHTML = "もう一度設定しなおす";
    retryButton.style.display = "block";
    resetButton.style.display = "block";

    retryButton.addEventListener("click", start);
}


// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }
