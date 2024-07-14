const includesAny = (arr, values) => values.some(v => arr.includes(v));

document.querySelectorAll('#characters li').forEach((li) => {
    if (!includesAny([...li.classList], ['good', 'evil', 'unknown'])) {
        li.classList.add('unknown');
    }

    const elements = li.getAttribute('data-element') ?? 'none';
    const wrapper = document.createElement('div');
    
    for (const element of elements.split(' ')) {
        const circle = document.createElement('div');

        circle.classList.add('elem', element);
        if (element === 'none') {
            let line = document.createElement('div');
            line.classList.add('line');
            circle.append(line);
        }

        wrapper.append(circle);
    }

    li.append(wrapper);
});