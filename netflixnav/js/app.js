//UI

const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

console.log(navs);

//Event Listener
openbtn.addEventListener('click',()=>{
    // console.log('open');
    navs.forEach((nav)=>{
        nav.classList.add('visible');
    });
})

closebtn.addEventListener('click',()=>{
    // console.log('close');
    navs.forEach((nav)=>{
        nav.classList.remove('visible');
    });
})