//UI
const background = document.getElementById('background');
const nextbtn = document.querySelector('.nextbtn');
const header = document.querySelector('.header');
const qs = JSON.parse(localStorage.getItem('questions'));
const ans = JSON.parse(localStorage.getItem('answers'));
console.log(ans);
const rans1 = document.querySelector('.ans1');
const rans2 = document.querySelector('.ans2');
const rans3 = document.querySelector('.ans3');
const rans4 = document.querySelector('.ans4');
const yesbtn = document.querySelector('.Yes');
const nobtn = document.querySelector('.No');
const confirmation = document.querySelector('.confirmation');
// console.log(confirmation);
let i = 0;
// let questions = ['この魚はとても[高]いです','[写真]はバッグの下にありました','友達は[中国]から来ました','[兄]が健康になりますように','母はいつもこ ど も[...]服を着ています'];
// let ans1 = ["ひ ろ い","く ろ い","た か い","や さ い","しゃ しん","と り","き りん","え","かい こ く","ちゅう こ く","に ほん","ちゅ こ く","い も とう","ち ち","は は","あ に","み たい","ぽ い","ら し い","ように","み たい","っぽい","ら し い","ように"];
// localStorage.setItem('answers',JSON.stringify(ans1));

let yourans = [];
if(qs)
{
    header.textContent = "No"+(i+1)+"."+qs[0];
    displayQuestionAndAnswer();
}

yesbtn.addEventListener('click',()=>{
    location.href = "score.html";
    localStorage.setItem('youranswers',JSON.stringify(yourans));
});

nobtn.addEventListener('click',()=>{
    confirmation.classList.toggle('show');
})

nextbtn.addEventListener('click',()=>{

    const rbs = document.querySelectorAll('input[name="ans"]');
    console.log(rbs);
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            let index = parseInt(selectedValue)+i;
            // console.log(ans[index-4]);
            yourans.push(index-4);
            break;

        }
    }
    if(i == 16)
    {
        nextbtn.textContent = 'Submit';

    }
    if(i<20)
    {
        displayQuestionAndAnswer();
    }
    
    else{
        confirmation.classList.add('show');
    }
});

function displayQuestionAndAnswer(){

    if(qs)
    {
        header.textContent = "No"+((i/4)+1)+"."+qs[(i/4)];
        rans1.textContent = `${ans[i]}`;
        rans2.textContent = `${ans[i+1]}`;
        rans3.textContent = `${ans[i+2]}`;
        rans4.textContent = `${ans[i+3]}`;
        i = i + 4;
        background.style.filter = `blur(${20-i}px)`;
    }
}

//
const timedisplay = document.querySelector('.timedisplay');
console.log(timedisplay);

const hour = "0";
const minute = "10";
const seconds = "04";

[h,m,s] = [0,0,0];
h = parseInt(hour);
m = parseInt(minute);
s = parseInt(seconds);
timeCount();

function timeCount(){
    setInterval(display,1000);
}


function display(){
    s = s - 1; 
    if(s <= 0)
    {
        
        if(m == 0)
         {
             h = h - 1;
             m = 60;
         }
         else{
            m = m - 1;
            s = 60;
         } 
         
         if(h<0)
         {
         console.log('less than');
         window.location.href = "./score.html";
         }

    }
    if(h>=0)
    {
        let ss = s<10? "0"+s:s;
        let mm = m<10? "0"+m:m;
        let hh = h<10? "0"+h:h;
        timedisplay.textContent =`${hh} : ${mm} : ${ss}`;    
    }
}


