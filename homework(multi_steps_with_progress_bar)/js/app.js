console.log('hi');

const slidePage = document.querySelector('.slidepage');
const firstNextBtn = document.querySelector('.nextBtn')

console.log(slidePage);
console.log(firstNextBtn);
firstNextBtn.addEventListener("click",function(){
	console.log('hiii');
		slidePage.style.marginLeft = '-25%';
});

function showFunction()
{
	console.log('Hello');
}