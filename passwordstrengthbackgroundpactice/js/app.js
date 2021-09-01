// UI
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

//Event Listener
password.addEventListener('input',(e)=>{
    // console.log(e.target);
    const input = e.target.value;

    const inLength = input.length;

    // console.log(inLength);
    const blur = 20 - inLength*2;
    background.style.filter = `blur(${blur}px)`;
})

console.log(eyeicon);
eyeicon.addEventListener('click',()=>{
    // console.log('cicked')
    if(eyeicon.classList.contains('fa-eye'))
    {
      // console.log('show password');
        //Method1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        //Method2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');
        password.setAttribute('type','password');

    }
    else{
        // console.log('hide password');

        //Method1
        // eyeicon.classList.remove('fa-eye-slash');
        // eyeicon.classList.add('fa-eye');
        
        //Method 2 
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
        password.setAttribute('type','text');
    }
})