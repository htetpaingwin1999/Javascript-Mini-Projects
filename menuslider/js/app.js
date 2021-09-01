  
// Ui
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


// Add Event Listener
toggle.addEventListener('click',()=>{
    // console.log('hello');

    document.body.classList.toggle('show-nav');

});


// Show Modal
open.addEventListener('click',()=>{
    // console.log('signup');

        modal.classList.add('show-modal');

});

// Hide Modal
close.addEventListener('click',()=>{
    // console.log('close');
    modal.classList.remove('show-modal');
});


// Hide Modal by clicking opacity
// METHOD 1
// window.addEventListener('click',function(e){
//     // console.log(e.target);

//     if(e.target === modal){
//         modal.classList.remove('show-modal');
//     }

// });

// METHOD 2
window.addEventListener('click',(e)=> e.target === modal ? modal.classList.remove('show-modal') : false);