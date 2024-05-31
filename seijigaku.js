
// クイズの関数、リスト
window.MathJax = { MathML: { extensions: ["mml3.js", "content-mathml.js"]}}
type="text/javascript" 
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

const questions = [
    {
        question: "衆議院議員選挙における比例代表選挙は、全国１区で実施され、投票者は個人名または政党名を記入して投票することになっている。",
        answer: `✖<br>衆議院議員の比例代表＝拘束名簿式＝政党名を投票。`
    },
    {
        question: "参議院議員選挙では、東北、北陸、中国、四国、九州の５地方に、２県による合同選挙区が存在している。",
        answer: "✖<br>合同選挙区（＝合区）は「鳥取県と島根県」、「徳島県と高知県」の２区。"
    },
    {
        question: "地方公共団体の議会議員の選挙では、地方公共団体を複数の選挙区に分割し、１つの選挙区から１人の議員を選出することになっている。",
        answer: "✖<br>選挙区に分けても定員が複数のところもある（例：都議会議員「板橋区選挙区」の定数は５人）。"
    },
    {
        question: "地方公共団体の首長の多選は、法律では規制されていないが、首長の多選制限に関する条例を定めている地方公共団体がある。",
        answer: "◎<br>多選禁止条例では、「職業選択の自由」が問題となる。"
    },
    {
        question: "SNSにおいて候補者や政党に対する誹謗中傷が激化し、選挙の公平性が損なわれる恐れがあることから、インターネットを用いた選挙運動は禁止されている。",
        answer: "✖<br>候補者・政党と有権者を近づける方法としてインターネットが利用されている。"
    },
    {
        question: "衆議院議員総選挙は、４年ごとに実施され、小選挙区選挙と拘束名簿式比例代表制による。選挙区間の議員1人当たり有権者数に格差があると一票の価値が不平等になるという問題があり、近年の選挙においては、参議院よりも衆議院で一票の最大格差が大きくなっている。",
        answer: "✖<br>参議院のほうが衆議院よりも「一票の格差」は大きい。"
    },
    {
        question: "参議院議員通常選挙は、3年ごとに実施され、議員の半数が改選される。参議院の選挙制度は、選挙区選挙と非拘束名簿式比例代表制となっており、選挙区選出議員の定数のほうが比例代表選出議員の定数よりも多い。",
        answer: "◎<br>参議院議員選挙では、選挙区146名、比例代表96名。"
    },
    {
        question: "期日前投票制度とは、選挙期間中に名簿登録地以外の市区町村に滞在していて投票できない人が、定められた投票所以外の場所や郵便などで、選挙期日前に投票することができる制度である。選挙期日に仕事や旅行などの用務がある場合や、仕事や留学などで海外に住んでいる場合などに利用することができる。",
        answer: "✖<br>期日前投票でも、有権者が直接投票をする。（国外にいる日本人は「在外選挙」）"
    },
    {
        question: "従来、国政選挙の選挙権を有する者を衆・参両議院議員選挙は20歳以上、被選挙権を有する者を衆議院議員選挙は30歳以上",
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
