
// クイズの関数、リスト

const questions = [
    {
        question: "【文学・ことば】日露戦争に際しては帆船小説『日の柱』や『良人の自白』を発表している、1901年に片山潜や幸徳秋水らとともに社会民主党の創立者の1人となった社会運動家は誰でしょう? (9%)",
        answer: "木下尚江 (きのしたなおえ) (S)"
    },
    {
        question: "【スポーツ・趣味】各プレイヤーが粘土細工を作り、それが何なのかを互いに推理する、クラウス・トイバーがデザインしたボードゲームは何でしょう? (9%)",
        answer: "バルバロッサ (S)"
    },
    {
        question: "【社会】お寺の賽銭箱の前面によく書かれている、「寄付によって募られた清らかなお金」を意味する漢字2文字の言葉は何でしょう? (34%)",
        answer: "浄財 (S)"
    },
    {
        question: "【社会】1995年、当時の天皇陛下とともに「阪神淡路大震災」の被災地を見舞われた美智子皇后が、崩れた街に手向けた「花」は、皇居で摘んだ何の花でしょう? (10%)",
        answer: "水仙 (S)"
    },
    {
        question: "【地理・歴史】日本三大急流に数えられる3つの川とは? (34%)",
        answer: "最上川、富士川、球磨川 (S)"
    },
    {
        question: "【芸術・エンタメ】ソロとしての代表曲にドラマ『あすなろ白書』の主題歌に起用された『TRUE LOVE』などがある、1983年に音楽バンド・チェッカーズのボーカルとしてデビューしたミュージシャンは誰でしょう? (50%)",
        answer: "藤井フミヤ (S)"
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
