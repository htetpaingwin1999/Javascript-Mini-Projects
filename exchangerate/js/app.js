//UI
const currencyone = document.getElementById('currency-one');
const amountone = document.getElementById('amount-one');
const currencytwo = document.getElementById('currency-two');
const amounttwo = document.getElementById('amount-two');
const ratee1 = document.getElementById('rate');
const swap = document.getElementById('swap');


// Calculate Exchange Rate and Update by AJAX

function calculate()
{
    const currone = currencyone.value;
    const currtwo = currencytwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/c5c9a9cbcffd91057d1174e4/latest/${currone}`)
    .then(res=>res.json())
    .then(data=>{
        const rate = data.conversion_rates[currtwo];
        // console.log(rate);
        ratee1.innerText = `1${currone} = ${rate}${currtwo}`;
        amounttwo.value = (amountone.value*rate).toFixed(2);
    })
}

swap.addEventListener('click',()=>{
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value = temp;
    calculate(); 
});

//Event Listener
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);

calculate();