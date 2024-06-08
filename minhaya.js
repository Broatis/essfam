
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
        question: "【生活・雑学】漁獲高減少のためキュウリウオやカペリンがその代用として使われている食用魚は何でしょう？",
        answer: "シシャモ"
    },
    {
        question: "【自然科学】1983年にポール・モカペトリスとジョン・ポステルにより開発されたシステムをアルファベット3文字で何というでしょう？",
        answer: "DNS"
    },
    {
        question: "【生活・雑学】「ジーマーミ豆腐」「ラフテー」「タコライス」といえば、いずれもどこの都道府県の郷土料理でしょう？",
        answer: "沖縄県"
    },
    {
        question: "【自然科学】1983年にチャールズ・シモニーとリチャード・ブロディが中心となって開発したものを起源とするソフトは何でしょう？",
        answer: "Microsoft Word"
    },
    {
        question: "【芸術・エンタメ】本名を忠久をいい、2007年までは山崎まさやとお笑いコンビ・ジョーダンズを組んでいた、武田鉄矢の物まねで人気を博し、現在では俳優としても活躍するお笑い芸人は誰でしょう？(34%)",
        answer: "三又又三(みまたまたぞう)"
    },
    {
        question: "【自然科学】製薬会社で営業販売を行う「医薬情報担当者」のことを、アルファベット2文字の略称で何というでしょう？",
        answer: "MR (Medical Representatives)"
    },
    {
        question: "【自然科学】英語では「オスプレイ」とも呼ばれる、ホバリングや急効果を駆使して魚を捕らえる習性をもつ鳥で、漢字では「鶚」と表記されるのは何でしょう？(22%)",
        answer: "ミサゴ (Osprey, タカ目ミサゴ科ミサゴ属)"
    },
    {
        question: "【芸術・エンタメ】ディズニーアニメ『塔の上のラプンツェル』に登場する、ラプンツェルの友達のカメレオンの名前は何でしょう？(39%)",
        answer: "パスカル"
    },
    {
        question: "【自然科学】数学の「ミレニアム懸賞問題」に懸賞金をかけている、略称を「CMI」というアメリカの研究所は「何数学研究所」でしょう？(28%)",
        answer: "クレイ数学研究所 (Clay Mathematics Institute)"
    },
    {
        question: "【芸術・エンタメ】代表作に『不喰芋と蘇鐵(クワズイモとソテツ)』『アダンの海辺』などがある日本の画家で、1958年に50歳で奄美大島に移住し、そこで植物や鳥を題材とした作品を多く残したことから「日本のゴーギャン」とも称されるのは誰でしょう？(16%)",
        answer: "田中一村"
    },
    {
        question:"【自然科学】江戸時代には「アンジャベル」とも呼ばれたナデシコ科の花は何でしょう？",
        answer:"カーネーション"
    },
    {
        question:"【芸術・エンタメ】ドイツ人の建築家のブルーノ・タウトが「泣きたくなるほど美しい」と述べたエピソードでも知られる、元々は江戸時代に八条宮家の別荘として創設された、京都市西京区に位置する宮内庁所管の離宮は何でしょう？(33%)",
        answer:"桂離宮"
    },
    {
        question:"【芸術・エンタメ】2001年にシングル『さくら』でメジャーデビューした、ボーカルのこしじまとしこと、DJの中田ヤスタカからなる二人音楽ユニットは何でしょう？(11%)",
        answer:"CAPSULE (カプセル)"
    },
    {
        question:"【芸術・エンタメ】香道の二大流派に数えられる2つの流派とは？",
        answer:"志野流 (しのりゅう)、御家流 (おいえりゅう)"
    },
    {
        question:"【自然科学】インド神話や仏教説話における神仏の化身を意味するサンスクリット語が語源といわれる言葉は何でしょう？",
        answer:"アバター"
    },
    {
        question:"【地理・歴史】その名は1610年にここの海域を発見したイギリスの探検家の名に由来する、ラブラドル半島の西側に広がるカナダの湾は何湾でしょう？(12%)",
        answer:"ハドソン湾"
    },
    {
        question:"【芸術・エンタメ】1991年のドラマ『東京ラブストーリー』で、主人公の長尾完治を演じた俳優は誰でしょう？(44%)",
        answer:"織田裕二"
    },
    {
        question:"【芸術・エンタメ】アニメ『忍たま乱太郎』の主人公・乱太郎の苗字は何でしょう？(21%)",
        answer:"猪名寺"
    },
    {
        question:"【地理・歴史】1600年にはイギリスが、1602年にはオランダが、1604年がフランスが設立した、近世のヨーロッパ諸国が東南アジアでの貿易のために設立した特許会社のことを一般に「何会社」というでしょう？(50%)",
        answer:"東インド会社"
    },
    {
        question:"【芸術・エンタメ】収録は原則として東京・渋谷のヨシモト∞ホールで行われる、千原ジュニアとケンドーコバヤシがレギュラー出演する読売テレビのテレビ番組は何でしょう？(34%)",
        answer:"『にけつッ！！』"
    },
    {
        question:"【芸術・エンタメ】1784年にコメディ・フランセーズで初演され、のちにモーツァルトがこれを基にしたオペラと作曲した、フランスの劇作家ボーマルシェによる『セビリアの理髪師』の続編にあたる戯曲は何でしょう？(33%)",
        answer:"『フィガロの結婚』"
    },
    {
        question:"【自然科学】日本語では「石蝋」ともいう、石油から分離して精製され、クレヨンやろうそくの原料として用いられる、白色で半透明の個体を何というでしょう？(18%)",
        answer:"パラフィン"
    },
    {
        question:"【地理・歴史】正式名称「船島」",
        answer:"巌流島"
    },
    {
        question:"【生活・雑学】毎年11月の第3木曜日に解禁される、フランスのある地方で作られた赤ワインの新酒のことを、その地方名と「新しい」という意味のフランス語を組み合わせた言葉で何というでしょう？(49%)",
        answer:"ボジョレー・ヌーボー"
    },
    {
        question:"【地理・歴史】アメリカ50州の州都で、バージニア州の州都はリッチモンドですが、ウエストバージニア州の州都はどこでしょう？(10%)",
        answer:"チャールストン"
    },
    {
        question:"【生活・雑学】シーザーサラダのトッピングポタージュの浮き実などに使われる、サイコロ状に切った揚げパンのことをフランス語で何というでしょう？(64%)",
        answer:"クルトン (crouton)"
    },
    {
        question:"【生活・雑学】直径およそ15㎝の温かいデニッシュパンの上にソフトクリーム、サクランボの実をのせた、喫茶店チェーン・コメダ珈琲店の看板メニューは何でしょう？(58%)",
        answer:"シロノワール"
    },
    {
        question:"【生活・雑学】フランスの数学者リュカが考案し、あるアジアの都市名から名づけられた、1本の柱に通された円盤を別の2本の柱に移し替えることを繰り返し、すべての円盤を元通りの重ね順で別の柱に移すというパズルゲームを「何の塔」というでしょう？(34%)",
        answer:"ハノイの塔"
    },
    {
        question:"【社会】七福神の七人とは？",
        answer:"恵比寿天、大黒天、毘沙門天、布袋尊、福禄寿、寿老人(じゅろうじん)、弁財天(女)"
    },
    {
        question:"【社会】鉄道のレールを枕木に固定させるために打つ釘を、ある動物の名前を使って何というでしょう？(34%)",
        answer:"犬釘 (railroad spike)"
    },
    {
        question:"【社会】現在は毎年150名前後が選ばれている、卓越した技能で産業発展に寄与したとして厚生労働大臣より表彰を受けた人物のことを通称で何と呼ぶでしょう？(13%)",
        answer:"現代の名工"
    },
    {
        question:"【スポーツ・趣味】サッカーにおける試合開始の合図は「キックオフ」ですが、バスケットボールにおける試合開始の合図は何でしょう？(26%)",
        answer:"ティップオフ"
    },
    {
        question:"【自然科学】1754年に死刑囚の腑分けに立ち会い、その記録を日本初の解剖書『蔵志』にまとめた江戸時代の医学者は誰でしょう？(9%)",
        answer:"山脇東洋"
    },
    {
        question:"【芸術・エンタメ】ムッソリーニがローマ郊外に建設した映画撮影所のことを、「映画都市」という意味のイタリア語で何というでしょう？(22%)",
        answer:"チネチッタ"
    },
    {
        question:"【社会】イギリス二大政党の1つで、現在はリシ・スナクが党首を務め、国政与党となっている政党を一般に何党というでしょう？(24%)",
        answer:"保守党"
    },
    {
        question:"【芸術・エンタメ】有名な作家に山田泰幸、田口奈津子、ナンシー関がいる、安価であることから主婦層を中心に人気を集める、身近な文房具を使ったハンドクラフトは何でしょう？(40%)",
        answer:"消しゴムはんこ"
    },
    {
        question:"【生活・雑学】土を小高く盛り上げただけの墓のことを、見た目がある和菓子に似ていることからなんというでしょう？(29%)",
        answer:"土饅頭 (どまんじゅう)"
    },
    {
        question:"【社会】農林水産省が持つ2つの外局とは？",
        answer:"水産庁、林野庁"
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
    {
        question:"",
        answer:""
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
