// ui
const form = document.querySelector('#task-form');
const taskinput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

// Add Event Listener
form.addEventListener('submit', addtask);

// Remove Task Event Listener
tasklist.addEventListener('click', removetask);

// Clear Task Event Listener
clearbtn.addEventListener('click', cleartasks);

//Filter task Event Listener
filter.addEventListener('keyup',filtertask);

//clear Task Event Listener
clearbtn.addEventListener('click',cleartaskfromlocalstorage);
//clear Task Event Listener
clearbtn.addEventListener('click',cleartaskfromlocalstorage);

document.addEventListener('DOMContentLoaded',gettasks);
function addtask(e) {
    // console.log('hello');

    if (taskinput.value === '') {
        window.alert('Add a task');
    } else {
        // creat li element
        const li = document.createElement('li');
        // add class
        li.className = "collection-item";
        // create text node and append to ul
        li.appendChild(document.createTextNode(taskinput.value));

        const link = document.createElement('a');
        // add class
        link.className = "delete-item secondary-content";
        // add icon
        link.innerHTML = `<i class = 'far fa-trash-alt'></i>`;

        // append link to li
        li.appendChild(link);

        // append li to ul
        tasklist.appendChild(li);

        //Store in localstorage
        storetaskinlocalstorage(taskinput.value);
    }

    e.preventDefault();
}


// <li class = "collection-item" > < a class = "delete-item secondary-content" > < i class = " far fa-trash-alt" > < /i> </a > < /li>


// Remove Task
function removetask(e) {
    // console.log(e.target);

    // e.preventDefault();
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    //remove task from local storage
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

function cleartasks(e) {
    // method 1
    // tasklist.innerHTML='';

    // method 2
    // console.log(tasklist.childElementCount);
    // console.log(tasklist.firstChild);

    let x = 0;
    //const litems = document.querySelectorAll('li');
    // console.log(litems.length);

    // while(x < tasklist.childElementCount)
    // {
    //     tasklist.removeChild(tasklist.firstChild);

    // }

    //const litems = document.querySelectorAll('li');
    //console.log(litems.length);
    // while(x < litems.length)
    // {
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method 3
    while(tasklist.firstChild)
    {
        tasklist.removeChild(tasklist.firstChild);
    } 
}

// Filter Task
function filtertask(e)
{
    // console.log(e.target.value);
    const filter = e.target.value.toLowerCase();
    console.log(filter);

    const tasks = document.querySelectorAll('.collection-item');
    tasks.forEach(function(task)
    {
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(filter) !==-1)
        {
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}


//Store Task
function storetaskinlocalstorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Get Tasks from Localstoarge

function gettasks()
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(tasks)
    {
        //Create li Element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';

        //create text node and ppend to li
        li.appendChild(document.createTextNode(tasks));

        //create new link 
        const link = document.createElement('a');

        //add class
        link.className = 'delete-item secondary-content';

        //add icon
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;

        //append link to li
        li.appendChild(link);

        //append li to ul
        tasklist.appendChild(li);
    });
}

// Remove tasks from localStorage
function removetaskfromlocalstorage(taskitem)
{
    // console.log(taskitem) ;

    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskitem.textContent === task)
        {
            //where we want to start(index), wherer we want to end (how many)
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function cleartaskfromlocalstorage()
{
    localStorage.clear();

}