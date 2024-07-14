const form = document.getElementById('candidate-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    document.querySelectorAll('input:not([type="submit"], [type="reset"]), textarea').forEach(input => {
        formData.append(input.id, input.value);
    });

    const res = await fetch('/submit', {
        method: 'POST',
        body: formData,
    });

    const result = document.getElementById('result')
    result.innerText = await res.text();
    result.style.display = 'block';
});