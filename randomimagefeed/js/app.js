//UI
const container = document.querySelector('.container');
const url = "https://source.unsplash.com/random/";
const row = 10;

for(let i = 0; i<3*row;i++){
    const img = document.createElement('img');
    console.log(getrandomsize());
    img.src = `${url}${getrandomsize()}`;
    //classကုိေခၚခ်င္ရင္ေတာ႕  set attribute ထည္႕ေပးရတယ္
    container.appendChild(img);
}

function getrandomnum(){
    return(Math.floor(Math.random()*10)+300);
}

function getrandomsize(){
    return `${getrandomnum()}x${(getrandomnum())}`;
}