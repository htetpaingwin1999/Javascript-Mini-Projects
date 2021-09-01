//UI
console.log('Alert');
const video = document.getElementById('video');

const play = document.getElementById('play'),
     stop = document.getElementById('stop'),
     progress = document.getElementById('progress'),
     timestamp = document.getElementById('timestamp');

console.log(video);
console.log(play);
console.log(stop);
console.log(progress);
console.log(timestamp);

// Play & Pause video
function togglevideostatus(){
    if(video.paused)
    {
        // play() from video api
        video.play();  
    }
    else{
        video.pause();
    }
}

// Updte Progress & Time Stamp
function updateprogress()
{
    //currentTime form video api
    // console.log(video.currentTime);
    // console.log(video.duration);

    progress.value = (video.currentTime/video.duration) * 100;
    
    //get minutes
    let mins = Math.floor(video.currentTime/60);
    //console.log(mins);

    if(mins <10)
    {
        mins = '0'+String(mins);
    }

    //get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = "0"+String(secs);
    }
    timestamp.innerText = mins+":"+secs;
}

// Stop Video
function stopvideo()
{
    video.currentTime=0;
    video.pause();
}


//Set video time to progress
function setvideoprogress()
{
    video.currentTime = (progress.value * video.duration)/100;
}

//Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);
progress.addEventListener('click',setvideoprogress);

//Update Play & Puase icon
function updateplayicon(){
    if(video.paused)
    {
        play.innerHTML = `<i class="fa fa-play fa-2x" style="color:green"></i>`;   
    }
    else{
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    }
}

