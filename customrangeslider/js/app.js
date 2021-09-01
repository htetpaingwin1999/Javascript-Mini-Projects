// UI
const range = document.getElementById('range');
console.log(range);
range.addEventListener('input',(e)=>{
    const value = +e.target.value;
    // console.log(value);

    const label = e.target.nextElementSibling;
    console.log(label);

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width') //width ကုိ ယူတာ
    // console.log(rangeWidth);
    // console.log(rangeWidth.length);
    const labeWidth = getComputedStyle(label).getPropertyValue('width');
    console.log(labeWidth);
    const numrangewidth = rangeWidth.substring(0,rangeWidth.length-2);
    // console.log(numrangewidth);
    const numlabelwidth = labeWidth.substring(0,labeWidth.length-2);
    // console.log(numlabelwidth);

    const min = +e.target.min; //attribute
    const max = +e.target.max; // attribute
    // console.log(min,max);

    const leftright = (value * (numrangewidth/max)) - numlabelwidth/2+scale(value,min,max,10,-10);
    // console.log(leftright);

    label.style.left = `${leftright}px`;
    label.textContent = value;

});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return ( num-inmin ) * (outmax-outmin ) / (inmax-inmin) + outmin;
}