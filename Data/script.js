const gratefulNotes = [];
var typed_content ='';

gratefulNotes[0] = { date: "123", note: "listening to my favorite song" }
gratefulNotes[1] = { date: "124", note: "The quiet morning to enjoy a cup of coffee before the day starts" }
gratefulNotes[2] = { date: "125", note: "My dog greeting me every time I come home" }
gratefulNotes[3] = { date: "126", note: "A peaceful walk outside to clear my mind" }
gratefulNotes[4] = { date: "127", note: "Finishing a tough project" }
gratefulNotes[5] = { date: "128", note: "A beautiful sunset" }

//todo dynamically fill and store table from entries.txt to better database format
const nc = document.getElementById('notes-container');

gratefulNotes.forEach(updateUI);

function updateUI(element){
    nc.innerHTML += `
    <div class="card"> ${element.note} <br></div>
   `;

}
document.getElementById('note-cotent').addEventListener('input',(e)=>ncFn(e));
document.getElementById('note-submit').addEventListener('click',(e)=>nnFn(e));
document.getElementById('note-cotent').addEventListener('keydown',function (e){if (e.key =='Enter'){
    nnFn(e);
}});


function nnFn(e){
    // nc.innerHTML += `add ${typed_content}`;
    const new_note_card = { date: "129", note: typed_content };
    gratefulNotes.push( new_note_card)
    updateUI(new_note_card);
    e.target.value=''; //empties the input field 
    // todo empty when clicked on '+' button
}


function ncFn(e){
    typed_content = e.target.value;
}