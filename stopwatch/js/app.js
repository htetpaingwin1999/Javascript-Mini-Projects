//UI 

const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

// let milliseconds = 0,
//     seconds = 0,
//     minutes = 0,
//     hours = 0;

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];         
console.log(milliseconds)

//Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

let isPause = false;
//Start Timer
let time;
function starttimer(){
    console.log('start timer');

    // always refresh ျဖစ္ေအာင္
    // if(time !== null)
    // {
    //     clearInterval(time); // click နွိပ္တုိင္း အလုပ္လုပ္ေနရင္  အဲ႕ time ကုိရွင္းသြားမယ္  မဟုတ္ရင္  setinterval time ေတြ ထပ္ခါထပ္ခါ မလုပ္ေတာ႕ဘူး
    //     // မဟုတ္ရင္ time ေတြျမန္တယ္ set interval ေပၚထပ္ထပ္ခါ ထပ္ခါ လုပ္တဲ႕ သေဘာမ်ဳိးျဖစ္သြားတာ    
    // }
        time = setInterval(displaytimer,10); // works for every 10 ms
        console.log("time"+time);
}

//Pause Timer
function pausetimer(){
   //console.log('pause timer');
    clearInterval(time);
}

//Reset Timer
function resettimer(){
   // console.log('reset timer');
   clearInterval(time);

   milliseconds = 0;
   seconds = 0;
   minutes = 0;
   hours = 0;

   [milliseconds,seconds,minutes,hours] = [0,0,0,0];            
        display.innerText = "00 : 00 : 00 : 000";

}

// Display Timer
function displaytimer(){
    //console.log("hey i'm working");

    milliseconds += 10;


    // console.log(milliseconds);

    if(milliseconds === 1000)
    {
        milliseconds = 0;
        console.log(0);

        /*arithmetic operator*/
        
        seconds++;
        console.log(seconds);


        if(seconds === 60)
        {
            seconds = 0;
            minutes++;

        }

        if(minutes === 60)
        {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0"+hours : hours;
        let m = minutes < 10? "0"+minutes : minutes;
        let s = seconds < 10? "0"+seconds : seconds;
        let ms = milliseconds < 10? "00"+milliseconds :milliseconds < 100 ? "0"+milliseconds: milliseconds;

        display.innerText = `${h} : ${m} : ${s} : ${ms}`;
}