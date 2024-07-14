function parseDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear().toString().slice(2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

function addNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes'));
}

function clearNotes(name) {
    localStorage.removeItem('notes');
}

function uploadArchive(archive) {
    let notes = getNotes();

    if (notes !== null) {
        archive.innerText = notes.map((note) => `--> ${note.text} [${note.date}]`).join('\n');
    }
}

const archive = document.getElementById('archive');
const input = document.getElementById('text-input');

uploadArchive(archive);

document.getElementById('add-button').addEventListener('click', () => {
    const value = input.value;
    
    if (value.length > 0) {
        let note = {
            text: value,
            date: parseDate(new Date()),
        };
        let notes = getNotes() || [];

        notes.push(note);

        addNotes(notes);
        uploadArchive(archive);
    }
    else {
        alert('It\'s empty. Try to input something in "Text input".');
    }
});

document.getElementById('clear-button').addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        clearNotes();
        archive.innerText = '[Empty]';
    }
});