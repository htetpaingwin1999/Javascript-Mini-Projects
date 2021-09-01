// UI
const addbtn = document.getElementById('add');

// Event Listener
addbtn.addEventListener('click',()=>addnewnote(''));


function addnewnote(text=''){
    // console.log('hay');
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML= `
    <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
        `;

    // console.log(note);

    // UI
    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const txtarea = note.querySelector('textarea');

    editbtn.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        txtarea.classList.toggle('hidden');
    });

    deletebtn.addEventListener('click',()=>{
        note.remove();
        updatelocalstorage();
    });

    txtarea.value = text;
    main.textContent = text;

    txtarea.addEventListener('keyup', (e)=> {
        const {value} = e.target;

        //e.target ကုိ ေခၚရင္ element တစ္ခုလုံး ျပန္ရတာ
        // console.log(value);
        main.textContent = value;
        updatelocalstorage();
    });

    document.body.appendChild(note);
}

function updatelocalstorage(){
    const nodetexts = document.querySelectorAll('textarea');
    let notes = [];
    nodetexts.forEach(notetext=>{
        notes.push(notetext.value);
        console.log(notes);
        localStorage.setItem('notes',JSON.stringify(notes));
    })
}
const getnotes = JSON.parse(localStorage.getItem('notes'));
//string ကုိ JSON နဲ ႕
 //object ျပန္ေျပာင္းရတယ္
 //JS မွာ Array ကုိ Obj အေနနဲ႕ ျပ

 if(getnotes)
 {
    getnotes.forEach(getnote=>{
        addnewnote(getnote);
    })
 }