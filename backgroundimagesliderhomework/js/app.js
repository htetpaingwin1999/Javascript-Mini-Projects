

 
 // UI 
 const body = document.body;
 const slides = document.querySelectorAll('.slide');
 console.log(slides);

 const leftbtn = document.getElementById('left');
 console.log(leftbtn)

 
 const rightbtn = document.getElementById('right');

 console.log(rightbtn);

 let activeslide = 0;
let isLoveClick = 0;
let isLikeClick = 0;


 function setbody(){
     body.style.backgroundImage = slides[activeslide].style.backgroundImage;
 }

 var input = [];
 for(var i= 0; i< slides.length;i++)
 {
     input.push(0);
 }
 
 setbody();

 function setactiveslide(){
     slides.forEach(slide=>{
            // console.log(slide);
            // slide.classList.remove('active');
     });
     loveme.style.color = "grey";
     likeme.style.color = "grey";

     slides.forEach(slide=>slide.classList.remove('active'));
     slides[activeslide].classList.add('active');
     if(input[activeslide] == 1)
     {
         loveme.style.color = "red";
     }
     else if(input[activeslide] == 2){
        likeme.style.color = "blue";
     }
}
rightbtn.addEventListener('click',function(){
    // console.log('hay');
    activeslide++;
    if(activeslide> slides.length - 1)
    {
        activeslide = 0;
    }
    setbody();
    setactiveslide();
});

leftbtn.addEventListener('click',function(){
    // console.log('hay');
    activeslide--;
    if(activeslide < 0)
    {
        activeslide = slides.length-1;
    }
    setbody();
    setactiveslide();
});
//  setactiveslide();

const loveme = document.querySelector('.fa-heart');
const likeme = document.querySelector('.fa-thumbs-up');
const times = document.querySelector('#times');

let timesclicked = 0;

let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    
    loveme.style.color="grey";
    likeme.style.color ="grey";
    isLikeClick = 0;
    if(isLoveClick == 0)
    {
        loveme.style.color="red"; 
        isLoveClick = 1; 
        input[activeslide]  = 1;
    }
    else{
        loveme.style.color="grey";
        isLoveClick = 0;
        input[activeslide]  = 0;
    }
});

likeme.addEventListener('click',(e)=>{
    loveme.style.color="grey";
    likeme.style.color ="grey";
    isLoveClick = 0;
    if(isLikeClick == 0)
    {
        likeme.style.color="blue"; 
        isLikeClick = 1;
        input[activeslide]  = 2;  
    }
    else{
        likeme.style.color="grey";
        isLikeClick = 0;
        input[activeslide]  = 0;
    }
});

