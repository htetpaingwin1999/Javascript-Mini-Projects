// UI

const formel = document.getElementById('form'); 
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');
const display = document.querySelector('.timedisplay');
console.log(display);
console.log(todoul);
//console.log(formel);

const todos = JSON.parse(localStorage.getItem('todos'));
//console.log(typeof todos);

[hour,minute,second] = [0,0,0];
let time;

if(todos)
{
	todos.forEach(todo=>{
		// console.log(todo);
		addtodo(todo);
	});
}

// Event Listener
formel.addEventListener('submit',(e)=>{
	//console.log('hay');
	addtodo();
	e.preventDefault();	
});

function addtodo(todo){
	//console.log('hi working');

	let todotext = inputel.value;
	//console.log(todotext);

	if(todo)
	{
		todotext = todo.text;
	}

	// console.log(todo.text);
	if(todotext)
	{
		//console.log('hi-todotext');

		const div = document.createElement('div');

		const li = document.createElement('li');

		if(todo && todo.completed){
			//add class
			li.classList.add('completed');
		}

		const startbtn = document.createElement('button');
		startbtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		startbtn.classList.add('btn');
		startbtn.classList.add('start');
		const stopbtn = document.createElement('button');
		stopbtn.innerHTML = '<i class="fa fa-stop" aria-hidden="true"></i>';
		stopbtn.classList.add('btn');
		stopbtn.classList.add('stop');

		startbtn.addEventListener('click',()=>{
			console.log('start');
			display.innerText = "00 : 00 : 00";
			if(time !== null)
			{
				clearInterval(time);
			}
			time = setInterval(startTimer,1000);

		});
		stopbtn.addEventListener('click',()=>{
			console.log('stop');
			clearInterval(time);

			[hour,minute,second] = [0,0,0];
		});

		li.appendChild(document.createTextNode(todotext));
		div.appendChild(li);
		div.appendChild(startbtn);
		div.appendChild(stopbtn);

		div.classList.add('tododiv');

		todoul.appendChild(div);

		inputel.value = '';

		//add to local storage
		updatelocalstorage();

		//add line-through by left click
		li.addEventListener('click',()=>{
			li.classList.toggle('completed');
			updatelocalstorage();
		});

		//remove by right click
		li.addEventListener('contextmenu',()=>{
			todoul.remove(li);
			updatelocalstorage();
		});
	}
	// else{
	// 	window.alert("Type ...");
	// }
}

function updatelocalstorage(){
	//console.log("Ready for storage");

	todolis = document.querySelectorAll('li');

	//console.log(todolis);

	//local storage ထဲ ထည္႕ ခ်င္ရင္ JSON အေနနဲ႕ ထည္႕ရတာပါ
	//String အေနနဲ႕ ၀င္သြားတာပါ

	const todos = [];

	todolis.forEach(todoli=>{
		// console.log(todoli);
		// console.log(todoli.classList.contains('completed'));
		todos.push({
			text:todoli.innerText,
			completed:todoli.classList.contains('completed')
		});		
	});

	localStorage.setItem('todos',JSON.stringify(todos));
}

function startTimer(){

	second++;
	if(second == 60)
	{
		minute++;
		second = 0;
		if(minute == 60)
		{
			hour++;
			minute =0;
		}
	}

	let s = second<10? "0"+second:second;
	let m = minute<10? "0"+minute:minute;
	let h = hour<10? "0"+hour:hour;

	console.log(s);

	display.innerText = `${h} : ${m} :${s}`;
}
