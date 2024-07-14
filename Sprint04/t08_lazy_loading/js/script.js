const images = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;
const positions = [];

if (images.length > 0) {
    images.forEach(img => {
        if (img.dataset.src) {
            positions.push(img.getBoundingClientRect().top + pageYOffset);
            scrollCheck();
        }
    });
}

window.addEventListener('scroll', () => {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        scrollCheck();
    }
});

function scrollCheck() {
    let index = positions.findIndex(
        pos => pageYOffset > pos - windowHeight
    );

    if (index !== -1) {
        if(images[index].dataset.src) {
            images[index].src = images[index].dataset.src;
            images[index].removeAttribute('data-src');
        }

        delete positions[index];
        updateCounter();
    }
}

function updateCounter() {
    const message = document.getElementById('message');
    const count = document.querySelectorAll('img:not([data-src])').length;

    if (count === images.length) {
        message.style.background = '#90ee91';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }
    
    message.innerText = `${count} images loaded from ${images.length}`;
}