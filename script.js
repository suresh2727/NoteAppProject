function popup() {
    const popupContainer = document.createElement("div");
    popupContainer.innerHTML = `<div id="popupContainer">
    <h1>New Note</h1>
    <textarea id="note-text" placeholder="Enter your Note.."></textarea>
        <div id = "btn-container">
         <button id="submitBtn" onclick="createNote()">Create Note </button>
         <button id="closeBtn" onclick="closePopup()">Close</button>
        </div>
    </div>`;
    document.body.appendChild(popupContainer);
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    if (popupContainer) {
        popupContainer.remove();
    }
}

function createNote() {
    const popupContainer = document.getElementById("popupContainer");
    const noteText = document.getElementById('note-text').value;
    if (noteText.trim() !== ' ') {
        const note = {
            id: new Date().getTime(),
            text: noteText
        };
    }

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    existingNotes.push(note);
    localStorage.setItem('notes',JSON.stringify(existingNotes))
    document.getElementById('note-text').value= '';

    popupContainer.remove();
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML= '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach(note =>{
        const listItem = document.createElement('li');
    }); 
}




