//UI
const display = document.querySelector('.display');

const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

// console.log(display);
// console.log(resetbtn);

// clearInterval(time);
// var time = setInterval(function, 1000);

[milliseconds,seconds,minutes,hours] = [0,0,0,0];

//Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

var time;
function starttimer(){

    if(time !== null)
    {
        clearInterval(time);
    }

    time = setInterval(displaytime,10);
    console.log(time);
}

function pausetimer(){
    clearInterval(time);
}

function resettimer(){
    clearInterval(time);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    display.textContent = "00 : 00 :00 : 000";
}

function displaytime(){
    milliseconds+= 10;

    if(milliseconds === 1000){
        milliseconds = 0;
        seconds+=1;

        if(seconds === 60)
        {
            seconds = 0;
            minutes+=1;
        }
        if(minutes === 60)
        {
            minutes = 0;
            hours+=1;
        }
    }

    let ms = milliseconds<10? "00"+milliseconds : milliseconds<100? "0"+milliseconds : milliseconds;
    let s = seconds<10? "0"+seconds : seconds;
    let m = minutes<10? "0"+minutes : minutes;
    let h = hours<10? "0"+hours : hours;

    display.textContent = `${h} : ${m} : ${s} : ${ms}`;

}