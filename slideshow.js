(()=>{

const $doc = document;
const setlist    = [{bgList:[`images/slide_1.png`,`images/slide_2.png`,`images/slide_3.png`,`images/slide_4.png`,`images/slide_5.png`]},
                    {bgList:[`images/slide_6.png`,`images/slide_7.png`,`images/slide_8.png`,`images/slide_9.png`,`images/slide_10.png`]},
                    {bgList:[`images/slide_11.png`,`images/slide_12.png`,`images/slide_13.png`,`images/slide_14.png`,`images/slide_15.png`]},
                    {bgList:[`images/slide_16.png`,`images/slide_17.png`,`images/slide_18.png`,`images/slide_19.png`,`images/slide_20.png`]},
                    {bgList:[`images/slide_21.png`,`images/slide_22.png`,`images/slide_23.png`,`images/slide_24.png`,`images/slide_25.png`]},
                    {bgList:[`images/slide_26.png`,`images/slide_27.png`,`images/slide_28.png`,`images/slide_29.png`,`images/slide_30.png`]},
                    {bgList:[`images/slide_31.png`,`images/slide_32.png`,`images/slide_33.png`,`images/slide_34.png`,`images/slide_35.png`]},
                    {bgList:[`images/slide_36.png`,`images/slide_37.png`,`images/slide_38.png`,`images/slide_39.png`,`images/slide_40.png`]}];
const setlistLng = setlist.length;
const bgLng      = setlist[0].bgList.length;
const $target    = $doc.getElementsByClassName('slidebtn');
const $tag       = $doc.getElementsByClassName('tag');
const $img       = $doc.getElementsByClassName('targetimg');
const targetLng  = $target.length;
let setindex;  
let letindex  = -1;



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
  
    imgSet();
    const preloadImg = (path)=>{
        const imgTag = $doc.createElement(`img`);
        imgTag.src = path;
    };
        for(let index = 0; index < bgLng*setlistLng;index++){
            preloadImg(`images/slide_${index+1}.png`);
        }
}

const imgSet = ()=>{
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    

    while(a+b+c+d+e !== 15){
        const roopindex = Math.floor(Math.random()*5)+1;

        if(a !== roopindex && a === 0){
            a = roopindex;
        }else if(b !== roopindex && a !== roopindex && b === 0){
            b = roopindex;
        }else if(c !== roopindex && a !== roopindex && b !== roopindex && c === 0){
            c = roopindex;
        }else if(d !== roopindex && a !== roopindex && b !== roopindex && c !== roopindex && d === 0){
            d = roopindex;
        }else if(d !== roopindex && a !== roopindex && b !== roopindex && c !== roopindex && d !== roopindex && e === 0){
            e = roopindex;
        }
    }

    const listimg = [a,b,c,d,e,];
    const listLng = listimg.length;
    setindex  = Math.floor(Math.random()*setlistLng);
    
      if(setindex === letindex){
        while(setindex === letindex){
          setindex  = Math.floor(Math.random()*setlistLng);
        }
      }

        letindex = setindex;    
 
    for(i=0;i<listLng;i++){
        console.log(setindex);
        $img[i].src = setlist[setindex].bgList[listimg[i]-1];
        $tag[i].dataset.img = listimg[i];
    }
       
};

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

const resetTime =()=>{
    setTimeout(ageSet,1000)
};

ageSet();





$(function(){

    $('#js-slbtn').click(function(){
        $(this).hide();
        $('.slidebtn').show();
        $('.targetimg').show();
    });



    const resetcolor = ()=>{
        $('#toptitle').removeClass('hit');
    };
    
    
    const resetBg = ()=>{
        setTimeout(resetcolor,500);
    };

    const setslide = ()=>{
        $('#js-reslbtn').css('display','inline-block');
        $('#js-reslbtn').fadeIn(2000);       
    };

    
    const resetslide = ()=>{
        setTimeout(setslide,15000);
    };

    var counter = 0;

    $('.slidebtn').click(function(){

        counter++;
      
        $(this).slideUp(1000);  
        var num = $(this).index();
        var number = $('.tag').eq(num).attr('data-img'); 
        $('.tag').eq(num).addClass(`imgpog${number}`);

        console.log(number);
        console.log(counter);        

        if(number == counter){
           $('#toptitle').addClass('hit');
            resetBg();
        }


        if(counter == 5){
            counter = 0;
            resetslide();
        }

    });

    $('#js-reslbtn').click(function(){

        for(i=1;i<=targetLng;i++){
        $('.tag').removeClass(`imgpog${i}`);
        }

        $(this).hide();
        $('.slidebtn').show();
        imgSet();
    });










    
});


    
})();