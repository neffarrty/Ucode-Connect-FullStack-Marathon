const form = document.querySelector('form');
const input = document.getElementById('input');
const charsets = document.getElementById('charsets');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await fetch('/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            input: input.value,
            charsets: [...charsets.selectedOptions].map(opt => opt.value),
        }),
    });

    document.getElementById('input').value = '';
    document.getElementById('result').innerHTML = '';

    const json = await response.json();
    const result = document.getElementById('result');

    for (const obj of json) {
        const div = document.createElement('div');
        div.innerHTML = `
            <label>${obj.charset}
                <textarea>${obj.string}</textarea>
            </label>
            <br>
        `;

        result.append(div);
    }
});

form.addEventListener('reset', (e) => {
    e.preventDefault();

    document.getElementById('input').value = '';
    document.getElementById('result').innerHTML = '';
});