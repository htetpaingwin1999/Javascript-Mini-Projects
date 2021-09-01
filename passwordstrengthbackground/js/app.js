// UI
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

// Event Listener
password.addEventListener('input',(e)=>{
    // console.log('hay');
    // console.log(e.target);

    const input = e.target.value;
    const inlength = input.length;
    // console.log(inlength);
    // console.log(10-inlength*2);

    const blurvalue = 20 - inlength * 2;
    background.style.filter = `blur(${blurvalue}px)`;
    /*template string နဲ႕ေရးတာပါ*/
});


eyeicon.addEventListener('click',()=>{
    // console.log('clicked');

    if(eyeicon.classList.contains('fa-eye'))
    {
        // console.log("show password");

        //Method 1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        password.setAttribute('type','password');

        //Method 2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
    }
    else{
        // console.log("hide password");
        // eyeicon.classList.remove('fa-eye-slah');
        // eyeicon.classList.add('fa-eye');
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
        password.setAttribute('type','text');
    }
});