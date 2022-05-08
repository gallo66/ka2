(()=>{
    

const $doc = document;
const $stBtn = $doc.getElementById(`js-stbtn`);
const $image = $doc.getElementsByClassName(`image-wrapper`);
const imgLng = $image.length;

const quizzs = [{question:"Is he ugly?     ",answer:["Yes","No"],correct:"No"},
                {question:"Is he shy?      ",answer:["Yes","No"],correct:"Yes"},
                {question:"Is he a playboy?",answer:["Yes","No"],correct:"No"},
                {question:"Is he a bad guy?",answer:["Yes","No"],correct:"No"}];

let quizIndex    = 0;
let answerIndex  = 0;
const quizLng    = quizzs.length;
const $quiz      = $doc.getElementsByClassName(`quizzs`);
const $answer    = $doc.getElementsByClassName(`js-answer`);
const btnLng     = quizzs[0].answer.length;
const ansLng     = $answer.length;
const $bgimage   = $doc.getElementById(`js_bg`);
const bgList     = [`images/gallo_1.gif`,`images/gallo_2.gif`,`images/gallo_3.gif`,`images/gallo_4.gif`,`images/gallo_5.gif`,`images/gallo_6.gif`,`images/gallo_7.gif`,`images/gallo_8.gif`,`images/gallo_9.gif`,`images/gallo_10.gif`,`images/gallo_11.gif`,`images/gallo_12.gif`,`images/gallo_13.gif`];
const bgLng      = bgList.length;

const age  = new Date(1975,3,11);
const targetAge = age.getTime();
const ageText = $doc.getElementById(`age`);
let notgap = 34;
let gap = 12;
let yaer = 46;

$(function() {
    $('html,body').animate({ scrollTop: 0 },1);
});


const init = ()=>{
    $doc.getElementById('imgOut1').classList.remove(`imageOut1`);
    $doc.getElementById('imgOut2').classList.remove(`imageOut2`);  

    const preloadImg = (path)=>{
        const imgTag = $doc.createElement(`img`);
        imgTag.src = path;
    };

    for(let index = 0; index < bgLng;index++){
        preloadImg(bgList[index]);
    }
}

init();

const ageSet = ()=>{
    const now = new Date();
    const nowdate = now.getTime();
    const nowyear = now.getFullYear();    

    const total = nowdate - targetAge;
        const sec = Math.floor((total/1000)%60);
        const min = Math.floor(Math.floor(total/1000/60)%60);
        const hor = Math.floor(Math.floor((Math.floor(total/1000/60)/60))%24);
        const day = Math.floor(Math.floor((Math.floor(total/1000/60)/60))/24)-(366*gap)-(365*notgap);
        
        if(nowyear%4 === 0 && day > 365 ){
            gap++;
            yaer++;
        }else if(nowyear%4 !== 0 && day > 364){
            notgap++;
            yaer++;
        }


        let secTime ;
        let minTime ;
        let horTime ;
        let dayTime ;
        let yearTime = yaer + 13;
        

        if(sec >=0 && sec <= 1){
            secTime = sec + `second`;
        }else{
            secTime = sec + `seconds`;
        }
        
        if(min >=0 && min <= 1){
            minTime = min + `min`;
        }else{
            minTime = min + `mins`;
        }

        if(hor >=0 && hor <= 1){
            horTime = hor + `hour`;
        }else{
            horTime = hor + `hours`;
        }

        if(day >=0 && day <= 1){
            dayTime = day + `day`;
        }else{
            dayTime = day + `days`;
        }
    
    ageText.textContent = `　　　　　　　　　　　　${yearTime}yaers ` + `${dayTime} ` + `${horTime} ` + `${minTime} ` + secTime;
    resetTime();
};

const bgNone = ()=>{
    $bgimage.style.display = `none`;
};

const bgNoneset = ()=>{
    setTimeout(bgNone,19000);
};

const bgSet = ()=>{
    $bgimage.style.display = `block`;
    let index = Math.floor(Math.random() * 13);
    $bgimage.src = bgList[index];    
    rebgSet();
    bgNoneset();
}

const rebgSet = ()=>{
    setTimeout(bgSet,20000);
};

bgSet();

const resetTime =()=>{
    setTimeout(ageSet,1000)
};

ageSet();

const answerSet = ()=>{
    for(let index = 0; index < ansLng;index++){
        $answer[index].style.display = `block`;
    }
};

const ansSet = ()=>{
    for(let index = 0; index < ansLng;index++){
        $answer[index].style.display = `none`;
    }
    setTimeout(answerSet,8000);
};
                  
$stBtn.addEventListener(`click`,(e)=>{
    e.target.style.display = `none`;
    $quiz[quizIndex].style.display = `block`;  
    ansSet(); 
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
            ansSet();        
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