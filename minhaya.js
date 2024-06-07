
// クイズの関数、リスト

const questions = [
    {
        question: "【文学・ことば】日露戦争に際しては帆船小説『日の柱』や『良人の自白』を発表している、1901年に片山潜や幸徳秋水らとともに社会民主党の創立者の1人となった社会運動家は誰でしょう? (9%)",
        answer: "木下尚江 (きのしたなおえ)"
    },
    {
        question: "【スポーツ・趣味】各プレイヤーが粘土細工を作り、それが何なのかを互いに推理する、クラウス・トイバーがデザインしたボードゲームは何でしょう? (9%)",
        answer: "バルバロッサ"
    },
    {
        question: "【社会】お寺の賽銭箱の前面によく書かれている、「寄付によって募られた清らかなお金」を意味する漢字2文字の言葉は何でしょう? (34%)",
        answer: "浄財"
    },
    {
        question: "【社会】1995年、当時の天皇陛下とともに「阪神淡路大震災」の被災地を見舞われた美智子皇后が、崩れた街に手向けた「花」は、皇居で摘んだ何の花でしょう? (10%)",
        answer: "水仙"
    },
    {
        question: "【地理・歴史】日本三大急流に数えられる3つの川とは?",
        answer: "最上川、富士川、球磨川"
    },
    {
        question: "【芸術・エンタメ】ソロとしての代表曲にドラマ『あすなろ白書』の主題歌に起用された『TRUE LOVE』などがある、1983年に音楽バンド・チェッカーズのボーカルとしてデビューしたミュージシャンは誰でしょう? (50%)",
        answer: "藤井フミヤ"
    },
    {
        question: "【スポーツ・趣味】その名は元競泳選手である古橋廣之進の異名に由来する、２００９年に決定した競泳の日本代表チームを、ある魚の名前を使った愛称で何というでしょう？(50%)",
        answer: "トビウオジャパン"
    },
    {
        question: "【生活・雑学】そのブランド名は氷の張った水の底で魚が生息できる温度に由来する、エフ・ディ・シィ・プロダクツが展開するジュエリーブランドは何でしょう？(50%)",
        answer: "4℃ (ヨンドシー)"
    },
    {
        question: "【生活・雑学】コメディアンの三木のり平をモデルとしたCMキャラクターでも知られる、主力商品に「辛そうで辛くない少し辛いラー油」や「ごはんですよ！」がある食品メーカーは何でしょう？(45%)",
        answer: "桃屋"
    },
    {
        question: "【生活・雑学】家電製品や自動車を購入する際に行うことが多い、業者に対して既に持っている製品を引き取らせることで、割引などに利用することを一般になんというでしょう？(49%)",
        answer: "下取り"
    },
    {
        question: "【芸術・エンタメ】かつてはバンド・MALICE MIZERのボーカルを務めていた、代表曲に『Vanilla』、『ANOTHER WORLD』などがある歌手は誰でしょう？",
        answer: "GACKT"
    },
    {
        question: "【生活・雑学】「ZIPコード」の「ZIP」とは何の略でしょう？",
        answer: "Zone Improvement Plan (郵便集配区域改善計画)"
    },
    {
        question: "【社会】日本ではADKや博報堂、電通などが有名な、クライアント企業のマーケティング活動を代わりに行ったり、メディアとの仲介を行ったりする企業を漢字５文字で何というでしょう？(49%)",
        answer: "広告代理店"
    },
    {
        question: "【スポーツ・趣味】正月に行われる「箱根駅伝」で、往路のスタート地点であり復路のゴール地点となっているのは、大会の共催者でもある何という新聞社の本社ビル前でしょう？(37%)",
        answer: "読売新聞"
    },
    
    {
        question: "【生活・雑学】建築物の廊下の中でも、建物と建物を結ぶように作られたもののことを一般に「何廊下」というでしょう？(83%)",
        answer: "渡り廊下"
    },
    {
        question: "【地理・歴史】鉄を含み赤色に変色する塩化物泉の「金泉」とラジウムを含む放射能泉の「銀泉」を擁し、日本三古湯や日本三名泉にも数えられる温泉は「何温泉」でしょう？",
        answer: "有馬温泉"
    },
    {
        question: "【地理・歴史】日本三古湯に数えられる3つの温泉とは？",
        answer: "有馬温泉(兵庫)、白浜温泉(和歌山)、道後温泉(愛媛)"
    },
    {
        question: "【地理・歴史】日本三名泉に数えられる3つの温泉とは？",
        answer: "有馬温泉(兵庫)、草津温泉(群馬)、下呂温泉(岐阜)"
    },
    {
        question: "【文学・ことば】物事の調査などをしらみつぶしにあたりやり方のことを、ある建設機械に由来して「何作戦」というでしょう？(50%)",
        answer: "ローラー作戦"
    },
    {
        question: "【生活・雑学】浴槽やテーブルなどの家具にみられる、上部が太く、下部に行くにつれて湾曲しながら細く丸くなった形の脚のことを「何脚」というでしょう？(42%)",
        answer: "猫脚"
    },
    {
        question: "【地理・歴史】ナミビア西武のナミブ砂漠はこの海流の影響でできたと考えられている、アフリカ大陸南西沖の大西洋を北上する寒流を何海流というでしょう？(16%)",
        answer: "ベンゲラ海流"
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
