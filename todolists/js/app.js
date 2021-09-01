// UI

const formel = document.getElementById('form'); 
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');
//console.log(formel);

const todos = JSON.parse(localStorage.getItem('todos'));
//console.log(typeof todos);

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
		const li = document.createElement('li');

		if(todo && todo.completed){
			//add class
			li.classList.add('completed');
		}

		li.appendChild(document.createTextNode(todotext));
		todoul.appendChild(li);
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
		console.log(todoli);
		console.log(todoli.classList.contains('completed'));
		todos.push({
			text:todoli.innerText,
			completed:todoli.classList.contains('completed')
		});		
	});

	localStorage.setItem('todos',JSON.stringify(todos));
}
