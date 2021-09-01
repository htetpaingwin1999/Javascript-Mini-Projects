// Ui
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title');
const progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');


// Song Title
const songs = ['sample1','sample2','sample3'];

let songindex =0;

// console.log(songs[songindex]);

loadsong(songs[songindex]);

// Load Song And Song Title
function loadsong(music){
    title.innerText = music;
    audio.src = `music/${music}.mp3`;
    cover.src =`img/${music}.jpg`;
}


// Event Listener
playbtn.addEventListener('click',()=>{
    // console.log('hay');transform

    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }


});


// Play Song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

        // play() form audio api
    audio.play();
}


// Pause Song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

        // play() form audio api
    audio.pause();
}

// Change Song
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);



// Previous Song
function previoussong(){
    // console.log('pev');

    songindex--;

    if(songindex < 0){
        songindex = songs.length - 1;
    }

    loadsong(songs[songindex]);
    
    playsong();

}


// Next Song
function nextsong(){
    // console.log('pev');

    songindex++;

    if(songindex > songs.length -1){
        songindex = 0;
    }

    loadsong(songs[songindex]);
    
    playsong();

}

// Time Song Update
function updateprogress(e){
    //Method 1
    //progress.style.widows=`${audio.currentTime/audio.duration)*100}`+'%';
    
    // Method 2
    // console.log(this);

    const {duration,currentTime} = e.target;
    console.log(currentTime);

    const progresspercent = `${progresspercent}%`;
    progress.style.width = `${(audio.currentTime/ audio.duration) *100}`+"%";

}

audio.addEventListener('timeupdate',updateprogress);


// Set Progress Bar
function setprogress(e){
    const width = this.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;

}


// Click On Progress Bar
progresscontainer.addEventListener('click',setprogress);

// Song End
audio.addEventListener('ended',nextsong);

