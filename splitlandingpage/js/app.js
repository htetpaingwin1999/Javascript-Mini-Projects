const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

console.log(container);
console.log(left);
console.log(right);
//Event Listener
// left.addEventListener('mouseenter',()=>{
//     // container.classList.add('hover-left');
// })
// left.addEventListener('mouseleave',()=>{
//     // container.classList.remove('hover-left');
// })

left.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));