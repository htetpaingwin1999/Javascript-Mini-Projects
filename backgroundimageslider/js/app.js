 // UI 
 const body = document.body;
 const slides = document.querySelectorAll('.slide');
 console.log(slides);

 const leftbtn = document.getElementById('left');
 console.log(leftbtn)

 
 const rightbtn = document.getElementById('right');

 console.log(rightbtn);

 let activeslide = 0;

 function setbody(){
     body.style.backgroundImage = slides[activeslide].style.backgroundImage;
 }

 setbody();

 function setactiveslide(){
     slides.forEach(slide=>{
            // console.log(slide);
            // slide.classList.remove('active');
     });

     slides.forEach(slide=>slide.classList.remove('active'));
     slides[activeslide].classList.add('active');
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