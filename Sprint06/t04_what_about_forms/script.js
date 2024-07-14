document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const answer = document.querySelector('input[name="option"]:checked').value;
    
    fetch('/check-answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answer: answer })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    });
});