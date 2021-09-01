const panels = document.querySelectorAll('.panel');
//console.log(panels);

panels.forEach(panel=>{
    removeactivepreclass();
    panel.addEventListener('click',()=>{
        panel.classList.remove('active')
        panel.classList.add('active');
    });


});

function removeactivepreclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}