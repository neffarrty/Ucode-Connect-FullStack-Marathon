function addToCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(';');
    
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        if (cookie.trim().indexOf(name) == 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }

    return "";
}

function clearCookies(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

function uploadArchive(archive) {
    let cookie = getCookie('notes');

    if (cookie.length !== 0) {
        let notes = JSON.parse(cookie);
        archive.innerText = notes.map((note) => '--> ' + note).join('\n');
    }
}

const archive = document.getElementById('archive');
const input = document.getElementById('text-input');

uploadArchive(archive);

document.getElementById('add-button').addEventListener('click', () => {
    const value = input.value;
    
    if (value.length > 0) {
        let notesCookie = getCookie('notes');
        let notes = [];

        if (notesCookie.length !== 0) {
            notes = JSON.parse(notesCookie);
        }

        notes.push(value);
        addToCookie('notes', JSON.stringify(notes));
        archive.innerText = notes.map((note) => '--> ' + note).join('\n');
    }
    else {
        alert('It\'s empty. Try to input something in "Text input".');
    }
});

document.getElementById('clear-button').addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        clearCookies('notes');
        archive.innerText = '[Empty]';
    }
});