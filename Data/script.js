var gratefulNotes = [];
var typed_content ='';

// gratefulNotes[0] = { date: new Date().toLocaleDateString(), note: "Listening to my favorite song" }
// gratefulNotes[1] = { date: new Date().toLocaleDateString(), note: "The quiet morning to enjoy a cup of coffee" }
// gratefulNotes[2] = { date: new Date().toLocaleDateString(), note: "My dog greeting me every time I come home" }
// gratefulNotes[3] = { date: new Date().toLocaleDateString(), note: "A peaceful walk outside to clear my mind" }
// gratefulNotes[4] = { date: new Date().toLocaleDateString(), note: "Finishing a tough project" }
// gratefulNotes[5] = { date: new Date().toLocaleDateString(), note: "A beautiful sunset" }

//todo dynamically fill and store table from entries.txt to better database format
// localStorage.setItem('gratefulNotesSaved',JSON.stringify(gratefulNotes)) ; //save to local storage
var savedArray =[]
const saved = localStorage.getItem('gratefulNotesSaved')
if (saved){
    savedArray= JSON.parse(saved);
} 



//populating html container
const nc = document.getElementById('notes-container');

savedArray.forEach(updateUI);

function updateUI(element){
    nc.innerHTML += `<div class="note-card">
            <p>${element.note}</p>
        <small class="date">${element.date}        
         <img src="Data/recycle-bin.png">
         <img src="Data/edit.png">
</small>
    </div>
   `;

}
document.getElementById('note-content').addEventListener('input',(e)=>ncFn(e));
document.getElementById('note-submit').addEventListener('click',(e)=>nnFn(e));
document.getElementById('note-content').addEventListener('keydown',function (e){if (e.key =='Enter'){
    nnFn(e);
}});


function nnFn(e){
    // nc.innerHTML += `add ${typed_content}`;
    const new_note_card = { date: new Date().toLocaleDateString(), note: typed_content };
    savedArray.push( new_note_card);
    localStorage.setItem('gratefulNotesSaved',JSON.stringify(savedArray)) ; //save to local storage
    updateUI(new_note_card);
    document.getElementById('note-content').value=""; //empties the input field 
}


function ncFn(e){
    typed_content = e.target.value;
}