(()=>{
    

const $doc = document;
const $stBtn = $doc.getElementById(`js-stbtn`);
const $image = $doc.getElementsByClassName(`image-wrapper`);
const imgLng = $image.length;

const quizzs = [{question:"Is he ugly?     ",answer:["Yes","No"],correct:"No"},
                {question:"Is he shy?      ",answer:["Yes","No"],correct:"Yes"},
                {question:"Is he a playboy?",answer:["Yes","No"],correct:"No"},
                {question:"Is he a bad guy?",answer:["Yes","No"],correct:"No"}];

const images = [`images/右白目.png`,`images/左白目.png`,`images/右黒目.png`,`images/左黒目.png`,`images/体①.png`,`images/体②.png`,`images/体③.png`,`images/体④.png`,`images/体⑤.png`,`images/背景①.png`,`images/背景②.png`,`images/背景③.png`,`images/背景④.png`,`images/背景⑤.png`,]

let quizIndex = 0;
let answerIndex = 0;
let answerClick = 0;
const quizLng = quizzs.length;
const $quiz   = $doc.getElementsByClassName(`quizzs`);
const $answer = $doc.getElementsByClassName(`js-answer`);
const btnLng  = quizzs[0].answer.length;
const ansLng = $answer.length;



const init = ()=>{
    $image[0].style.display = `none`;
    $doc.getElementById('imgOut1').classList.remove(`imageOut1`);
    $doc.getElementById('imgOut2').classList.remove(`imageOut2`);

    for(let index = 0;index < images.length; index++){
        const number = images[index];
        let tag = $doc.createElement(`img`);
        tag.src = number;
    }

}

init();


$stBtn.addEventListener(`click`,(e)=>{
    e.target.style.display = `none`;
    $quiz[quizIndex].style.display = `block`;   
});

const quizSet = ()=>{

$doc.getElementsByClassName(`js-question`)[quizIndex].textContent = quizzs[quizIndex].question;
for(let btnIndex = 0; btnIndex < btnLng; btnIndex++){
    $answer[answerIndex].textContent = quizzs[quizIndex].answer[btnIndex];
    
    if(answerIndex < ansLng){
    answerIndex++;
    }
}
}

quizSet();


for(let btnIndex = 0; btnIndex < ansLng; btnIndex++){


    $answer[btnIndex].addEventListener(`click`,(e)=>{

        for(let imgIndex = 0; imgIndex < imgLng; imgIndex++){
            $image[imgIndex].style.display = `none`;
        }
        if(quizzs[quizIndex].correct === e.target.textContent){        
            window.alert(`great!!`);   
            $image[quizIndex].style.display = `block`;  
            $quiz[quizIndex].style.display = `none`;          
        }else{
            window.alert(`OMG!!`); 
            quizIndex--;  
            if(quizIndex >= 0){
            $image[quizIndex].style.display = `block`;
            } 
            answerIndex -= 2;
        }                
          
        quizIndex++;

        if(quizIndex < quizLng){
            $quiz[quizIndex].style.display = `block`;
            quizSet();
        }else{
            window.alert(`see you`);
            $quiz[quizIndex - 1].style.display = `none`;
            $doc.getElementsByClassName(`last-image`)[0].style.display = `block`; 
            $doc.getElementById('js-title').style.display = 'none';          
        }
    });

 
}



$doc.getElementById(`js-lastImg`).addEventListener(`click`,()=>{
    $doc.getElementById('imgOut1').classList.add(`imageOut1`);
    $doc.getElementById('imgOut2').classList.add(`imageOut2`);
    $doc.getElementsByClassName(`sub66`)[0].style.display = `block`;  
});





















    
})();