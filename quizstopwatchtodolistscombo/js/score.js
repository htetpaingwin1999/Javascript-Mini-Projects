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

const y = JSON.parse(localStorage.getItem('youranswers'));

const m = JSON.parse(localStorage.getItem('mainanswers'));
console.log(m);

const anss = JSON.parse(localStorage.getItem('answers'));

const y_answer = document.getElementById('y_answer');
// console.log(y_answer);

const total = document.getElementById('total');

const score = document.getElementById('score');

console.log(total);
console.log(score);
// console.log(confirmation);
let i = 0;
// let questions = ['この魚はとても[高]いです','[写真]はバッグの下にありました','友達は[中国]から来ました','[兄]が健康になりますように','母はいつもこ ど も[...]服を着ています'];
// let ans1 = ["ひ ろ い","く ろ い","た か い","や さ い","しゃ しん","と り","き りん","え","かい こ く","ちゅう こ く","に ほん","ちゅ こ く","い も とう","ち ち","は は","あ に","み たい","ぽ い","ら し い","ように","み たい","っぽい","ら し い","ように"];
// localStorage.setItem('answers',JSON.stringify(ans1));

let anstime = 0;
// const yourans = JSON.parse(localStorage.getItem('youranswers'));
// console.log(yourans);
if(qs)
{
    header.textContent = "No"+(i+1)+"."+qs[0];
    displayQuestionAndAnswer();
}


claculate();

nextbtn.addEventListener('click',()=>{

    const rbs = document.querySelectorAll('input[name="ans"]');
    console.log(rbs);
    if(i == 16)
    {
        nextbtn.textContent = 'Final';

    }
    if(i<20)
    {
        console.log('display');
        displayQuestionAndAnswer();
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

        disableAll();
        // console.log(m[anstime]);

        if(m[anstime] == y[anstime])
        {
            score.textContent = "1/1" ;
        }
        else{
            score.textContent = "0/1";
        }

        y_answer.textContent = `Your answer is :${anss[y[anstime]]}`

        if(rans1.textContent === ans[m[anstime]]){
            document.getElementById("r0").checked = true;

        }
        if(rans2.textContent === ans[m[anstime]]){
            document.getElementById("r1").checked = true;
        }
        if(rans3.textContent === ans[m[anstime]]){
            document.getElementById("r2").checked = true;
        }
        if(rans4.textContent === ans[m[anstime]]){
            document.getElementById("r3").checked = true;
        }

        // document.querySelector("ans4").disabled = false;  
        // document.getElementById("angular").disabled = false;  

        console.log(m[anstime]);
        if(anstime<5)
        {
            anstime++;
        }
    }
}

function disableAll(){
    document.getElementById("r0").disabled = true;
    document.getElementById("r1").disabled = true;
    document.getElementById("r2").disabled = true;
    document.getElementById("r3").disabled = true;
}
function disableCheck(){
    document.getElementById("r0").chedked = false;
    document.getElementById("r1").checked = false;
    document.getElementById("r2").checked = false;
    document.getElementById("r3").checked = false;}

function claculate(){
    let totalscore = 0;
    for(j=0;j<5;j++)
    {
        if(m[j] == y[j]){
            totalscore++;
        }
    }
    total.textContent = `${totalscore}/5`;
}