const timedisplay = document.querySelector('.timedisplay');
console.log(timedisplay);

const hour = "1";
const minute = "30";
const seconds = "00";

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
         m = m - 1;
         s = 60;

         if(m == 0)
         {
             h = h - 1;
             m = 60;
         }
    }

    let ss = s<10? "0"+s:s;
    let mm = m<10? "0"+m:m;
    let hh = h<10? "0"+h:h;

    timedisplay.textContent =`${hh} : ${mm} : ${ss}`;
}


const quiz = document.querySelector('.quizclick');
console.log(quiz);

const confirmation = document.querySelector('.confirmation');
console.log(confirmation);

const yes = document.querySelector('.Yes');
console.log(yes);

const no = document.querySelector('.No');
console.log(no);

yes.addEventListener('click',()=>{
    window.location.href = "./quiz.html";
});

no.addEventListener('click',()=>{
    confirmation.classList.toggle('show');
})

quiz.addEventListener('click',()=>{
    confirmation.classList.toggle('show');
})