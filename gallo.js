(()=>{

const $doc = document;
const $stBtn = $doc.getElementById(`js-stbtn`);
const $image = $doc.getElementsByClassName(`image-wrapper`);

const quizzs = [{question:"今日は何曜日",answer:["日曜","火曜"],correct:"日曜"},
                {question:"今月は何月",answer:["２月","８月"],correct:"２月"},
                {question:"今年の干支は",answer:["兎","トラ"],correct:"トラ"}];
let quizIndex = 0;
const quizLng = quizzs.length;
const $anzwer = $doc.getElementsByClassName(`js-answer`);
const btnLng  = $anzwer.length;

const init = ()=>{
    $image[0].style.display = `none`;
}

init();


$stBtn.addEventListener(`click`,(e)=>{
    e.target.style.display = `none`;
    $image[0].style.display = `block`;
    $doc.getElementById(`js-quizzs`).style.display = `block`;   
});

const clickHandler = ()=>{
$doc.getElementById(`js-question`).textContent = quizzs[quizIndex].question;
for(let btnIndex = 0; btnIndex < btnLng; btnIndex++){
    $anzwer[btnIndex].textContent = quizzs[quizIndex].answer[btnIndex];
}
}

clickHandler();

for(let btnIndex = 0; btnIndex < btnLng; btnIndex++){
$anzwer[btnIndex].addEventListener(`click`,(e)=>{
    if(quizzs[quizIndex].correct === e.target.textContent){
        window.alert(`正解`);
    }else{
        window.alert(`不正解`);
    }
    quizIndex++;

    if(quizIndex < quizLng){
        clickHandler();
    }else{
        window.alert(`終了`);
    }

});
}

























    
})();