const codes = document.querySelectorAll('.code');
// console.log(codes[5]);
codes[0].focus();

codes.forEach((code,index)=>{
    // console.log(code);

    code.addEventListener('keydown',(e)=>{

        //console.log(e.target.value);
        if(e.key >= 0 && e.key <= 9){
            //codes[index+1].focus();
            codes[index].value = '';
            if(index !== 5){
                setTimeout(()=>codes[index+1].focus(),10);
            }
           
        }else if(e.key === "Backspace"){
            if(index !== 0){
                setTimeout(()=>codes[index-1].focus(),10);
            } 
        }
})
});