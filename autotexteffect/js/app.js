const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
//console.log(speedel.value);

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

let idx = 1;
let speed = 200;

function autotext(){
        //console.log("Hay");

        textel.innerText = text.slice(0,idx);
        idx++;

        //console.log(text.length);
        //console.log(speed);

        if(idx > text.length)
        {
            idx = 1;
        }
        setTimeout(autotext,speed);
};        
autotext();
speedel.addEventListener('click',()=>{
    //  console.log(speedel.value);
        speed = 2000 / speedel.value;
});