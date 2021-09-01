// UI
const filter = document.getElementById('filter');
const result = document.getElementById('result');
// console.log(filter);
// console.log(result);

const url = 'https://randomuser.me/api/?results=';
const totalusers = 50;

// AJAX request

async function getdata(){
    const res =await fetch(`${url}${totalusers}`);
    console.log(res);
}

getdata();
