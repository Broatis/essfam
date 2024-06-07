
// クイズの関数、リスト
window.MathJax = { MathML: { extensions: ["mml3.js", "content-mathml.js"]}}
type="text/javascript" 
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

const questions = [
    // スー過去「憲法」テーマ1より
    {
        question: "社会保障上の施策において在留外国人をどのように処遇するかについては、国は、特別の条約の存しない限り、当該外国人の属する国との外交関係などに照らしながら、その政治的判断によりこれを決定することができ、その限られた財源の下で福祉的給付を行うにあたり、自国民を在留外国人より優先的に扱うことも許されるべきことと解され、障害福祉年金の支給対象から在留外国人を除外することは、立法府の裁量の範囲に属する事項とみるべきであり、憲法25条に違反しない。",
        answer: "◎<br>福祉的給付を行う際、自国民を在留外国人より優先的に扱うことは許容(塩見訴訟の判例より)。"
    },
    {
        question: "外国人登録法が定める在留外国人を対象とする指紋押なつ制度は、同法の目的を達成するために制定されたもので、その立法目的には十分な合理性があり、かつ、必要性も肯定することができる。また、その具体的な制度内容は、精神的、肉体的に過度の苦痛を伴うものとはいえず、方法としても、一般的に許容される限度を超えない相当なものであったと認められるので、このような指紋押なつ制度を定めた同法の規定は憲法13条に違反しない。",
        answer: "◎<br>外国人登録法が定める在留外国人を対象とする指紋押なつ制度は合憲。なお、この制度は平成11年(1999年)に廃止された。"
    },
    {
        question: "地方公共団体の管理職の職務は広範多岐に及び、公権力を行使することなく、また、公の意思に参画する蓋然性が少なく、地方公共団体の行う統治作用にかかわる程度の弱い管理職も存在することから、外国人を任用することが許されない管理職と許される管理職とを区別して任用管理を行う必要があり、このような任用制度を構築することなく、日本国民である職員に限って管理職に昇進することができることとする措置をとることは、合理的な理由を欠き、憲法14条1項に違反する。",
        answer: "✖<br>日本国民である職員のみが管理職に昇任できる措置は合憲である。"
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
