(()=>{
    

const $doc = document;
const $stBtn = $doc.getElementById(`js-stbtn`);
const $image = $doc.getElementsByClassName(`image-wrapper`);
const imgLng = $image.length;

const quizzs = [{question:"今日は何曜日",answer:["日曜","火曜"],correct:"日曜"},
                {question:"今月は何月",answer:["２月","８月"],correct:"２月"},
                {question:"今年の干支は",answer:["兎","トラ"],correct:"トラ"},
                {question:"今日の曜日は",answer:["月曜","金曜"],correct:"金曜"}];

let quizIndex = 0;
const quizLng = quizzs.length;
const $quiz   = $doc.getElementById(`js-quizzs`);
const $anzwer = $doc.getElementsByClassName(`js-answer`);
const btnLng  = $anzwer.length;

const init = ()=>{
    $image[0].style.display = `none`;
}

init();


$stBtn.addEventListener(`click`,(e)=>{
    e.target.style.display = `none`;
    $quiz.style.display = `block`;   
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
        for(let imgIndex = 0; imgIndex < imgLng; imgIndex++){
            $image[imgIndex].style.display = `none`;
        }

        if(quizzs[quizIndex].correct === e.target.textContent){
            $image[quizIndex].style.display = `block`;
            window.alert(`正解`);    
        }else{
            window.alert(`不正解`);
            quizIndex--;
        }
        quizIndex++;

        if(quizIndex < quizLng){
            clickHandler();
        }else{
            window.alert(`終了`);
            $quiz.style.display = `none`;
            $doc.getElementsByClassName(`last-image`)[0].style.display = `block`;              
        }

    });
}

$doc.getElementById(`js-lastImg`).addEventListener(`click`,()=>{
    $doc.getElementsByClassName(`sub66`)[0].style.display = `block`;
});





















    
})();