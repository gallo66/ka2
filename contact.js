(()=>{

const $doc = document;
const $bgimage   = $doc.getElementById(`js_bg`);
const bgList     = [`images/gallo_1.gif`,`images/gallo_2.gif`,`images/gallo_3.gif`,`images/gallo_4.gif`,`images/gallo_5.gif`,`images/gallo_6.gif`,`images/gallo_7.gif`,`images/gallo_8.gif`,`images/gallo_9.gif`,`images/gallo_10.gif`,`images/gallo_11.gif`,`images/gallo_12.gif`,`images/gallo_13.gif`];
const bgLng      = bgList.length;


const age  = new Date(1975,3,11);
const targetAge = age.getTime();
const ageText = $doc.getElementById(`age`);
let notgap = 34;
let gap = 12;
let yaer = 46;

const init = ()=>{
    
    $(function() {
        $('html,body').animate({ scrollTop: 0 },1);
    });
    
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
    
    const resetTime =()=>{
    setTimeout(ageSet,1000)
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

ageSet();


$(function(){
    

    var num;

    const userageset = ()=>{
        setusertime = num; 
        const now = new Date();
        const nowdate = now.getTime();
        
    
        const total = nowdate - setusertime;
            const sec = Math.floor((total/1000)%60);
            const min = Math.floor(Math.floor(total/1000/60)%60);
            const hor = Math.floor(Math.floor((Math.floor(total/1000/60)/60))%24);
            const day = Math.floor(Math.floor((Math.floor(total/1000/60)/60))/24); 
               
    
            let secTime ;
            let minTime ;
            let horTime ;
            let dayTime ;
            let yearTime = 0;
            
    
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
        
        $doc.getElementById('userage').textContent = `　　　　　　　　　　　　${yearTime}yaers ` + `${dayTime} ` + `${horTime} ` + `${minTime} ` + secTime;
        userresetTime();
    };
    
    const userresetTime =()=>{
        setTimeout(userageset,1000)
    };
    
    
    $('form').submit(function(){
        var usernow = new Date();
        var comeadd = '';

        num     = usernow.getTime();       
        
        var username = $('#username').val();
        var usercom = $('textarea').val();

        const toZenKaku = (str)=>{
            return str.replace(/[A-Za-z]/g, function(s){
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
            });
        };

        usercom = toZenKaku(usercom);

        for(i = 0; i < 500;i++){
         comeadd += usercom;
        }

        $('body').css('background-color','#034959');
        $('#toptitle').hide();
        $('#usernameTop').show();
        $('#usernameTop').css('display','inline-block');
        $('#usernameTop').text(`${username}'s Room`);
        $('#recommend').text(`${username}さんへ おすすめのKa2動画`);
        $('#age').hide();
        $(this).hide();
        $('#userage').show(); 
        $('#userage').css('display','inline-block'); 
        $('.container').css('width','115%');
        $('.top-comment').css('width','115%');
        $('.video-container').show();

        $('.comBg').text(comeadd);
        $('.header-comment').text(comeadd);

        var setyoutube  = Math.floor(Math.random()*9);

        $('.video-wrap').eq(setyoutube).show();
        
        userageset(num);
        
        return false;
    });

    
});


    
})();