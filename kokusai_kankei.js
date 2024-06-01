
// クイズの関数、リスト
window.MathJax = { MathML: { extensions: ["mml3.js", "content-mathml.js"]}}
type="text/javascript" 
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

const questions = [
    {
        question: "アメリカの連邦議会は、各州から2名ずつ選出される上院と、各州から人口比例で選出される下院からなり、上院は、大統領が締結した条約に対する同意権を持つ。",
        answer: "◎<br>上院は2名×50州＝100名、下院は各州の人口比例で(令和4年現在)435名。"
    },
    {
        question: "アメリカの大統領は、国民が各州で選んだ大統領選挙人による間接選挙によって選ばれ、軍の最高司令官であり、条約の締結権や議会への法案提出権などを持つが、連邦議会を解散する権限はない。",
        answer: "✖<br>アメリカ大統領制は厳格な権力分立制。米大統領：条約の締結権◎、法案提出権✖、議会の解散権✖"
    },
    {
        question: "フランスは、国民の直接選挙で選出される大統領が議会の解散権などの強大な権限を有する大統領制と、内核が議会に対して責任を負う議院内閣制を併用していることから、半大統領制といわれる。",
        answer: "◎<br>フランスは典型的な半大統領制であり、大統領と首相が両立している。"
    },
    {
        question: "中国では、立法機関としての全国人民代表大会、行政機関としての国務院、司法機関としての最高人民法院が設けられており、厳格な権力分立制が保たれている。",
        answer: "✖<br>中国では、国家のすべてを共産党が統制し、権力分立制ではない。"
    },
    {
        question: "日本では、国会の両院議員がそれぞれ異なる選挙制度で選出されており、衆議院は小選挙区比例代表並立制を、参議院は比例代表制のみを採用している。",
        answer: "✖<br>参議院議員選挙は、選挙区(146人)と比例代表制(96人)により行われる。"
    },
    {
        question: "アメリカ合衆国では、大統領選挙は大統領選挙人を通じた間接選挙により行われているが、大統領選挙人は各州に配分されており、その数はどの州も同じである。",
        answer: "✖<br>大統領選挙人の数は、各州で異なる。"
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
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
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

// Fisher-Yates algorithm ???? フィッシャーイェーツアルゴリズムらしい
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
