
// クイズの関数、リスト
window.MathJax = { MathML: { extensions: ["mml3.js", "content-mathml.js"]}}
type="text/javascript" 
src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

// document.getElementById('minpou-title').innerText = questions.length;
const questions = [
    // スー過去「民法Ⅰ」テーマ1より
    {
        question: "自然人の権利能力は死亡によって消滅するため、失踪者が、失踪宣告によって死亡したものとみなされた場合には、その者が生存していたとしても、同宣告後その取り消し前にそのものがした法律行為は無効である。",
        answer: "✖<br>失踪宣告による死亡認定があっても、生存していれば権利能力は消滅しない。"
    },
    {
        question: "未成年者は、法定代理人が目的を定めて処分を許した財産については、法定代理人の同意を得なくとも、その目的の範囲内において自由に処分することができるが、法定代理人が目的を定めないで処分を許した財産については、個別の処分ごとに法定代理人の同意を得なければ処分することはできない。",
        answer: "✖<br>未成年者は、目的を定めずに処分が許された財産を自由に処分できる。"
    },
    {
        question: "未成年者が法定代理人の同意を得ずに土地の売買契約を締結した場合、当該契約の相手方は、当該未成年者が成人した後、その者に対し、１か月以上の期間を定めて、その期間内に当該契約を追認するかどうかを確答すべき旨の催告をすることができ、その者がその期間内に確答しなかったときは、追認したものとみなされる。",
        answer: "◎<br>成年到達後の催告に対し法定期間内(1か月以上の期間、20条1項前段)に返答しないと追認とみなされる(同項後段)"
    },
    {
        question: "成年被後見人は、日用品の購入その他日常生活に関する行為を単独で確定的に有効になすことができるが、これ以外の法律行為については、成年後見人の同意を得ても、単独で確定的に有効になすことはできない。",
        answer: "◎<br>成年被後見人は、日常生活に関するもの以外は法定代理人の同意が必要である。"
    },
    {
        question: "被保佐人が、保佐人の同意を得ずに、同意が必要とされる行為をした場合、被保佐人自身のほか、保佐人も当該行為を取り消すことができる。",
        answer: "◎<br>取消権は、欠陥のある法律行為を行った本人にも認められる。"
    },
    {
        question:"単独で有効に契約などの法律行為をなし得る能力を権利能力といい、権利能力のない者が行った法律行為は取り消し得るものとなる。",
        answer:"✖<br>権利能力のないものが行った法律行為は（当初から）無効である。"
    },
    {
        question:"権利の主体となることができるのは自然人に限られず、法人もまた権利の主体となり得る。法人の設立に関しては、民法は、法人たる実態を備えていれば法律によらず当然法人格が認められる自由設立主義を採っている。",
        answer:"✖<br>法人の設立については自由設立主義でなく、法人法定主義がとられている。"
    },
    {
        question:"法定代理人の同意を得ない未成年者の契約は取り消すことができるが、この取り消しは、未成年者は単独で行うことができず、法定代理人の同意が必要となる。",
        answer:"✖<br>法定代理人の同意を得ないでなされた取り消しも完全に有効な取り消しとなる。これは、「法律関係の無用な複雑化を避ける（重要）」ためである。"
    },
    {
        question:"後見開始の審判を受けたものに付される成年後見人は法定代理人として代理権を有するが、保佐開始の審判を受けたものに付される保佐人は当然には代理権を有しない。",
        answer:"◎<br>保佐人に代理権を付与するには、家庭裁判所の審判が必要である。"
    },
    {
        question:"未成年者がした契約の相手方は、その未成年者が成年となった後、期間を定めて、当該契約を追認するか否かについて確答すべき旨の催告をすることができる。この場合において、当該期間内に確答が発せられなかったときは、当該契約は取り消されたものとみなされる。",
        answer:"✖<br>成年後に催告したが確答がなかった場合は、追認したものとみなされる。"
    },
    {
        question:"",
        answer:""
    },
    {
        question:"",
        answer:""
    },
    {
        question:"",
        answer:""
    },
    {
        question:"",
        answer:""
    },
    {
        question:"",
        answer:""
    },
    // スー過去「民法Ⅰ」テーマ２より
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
