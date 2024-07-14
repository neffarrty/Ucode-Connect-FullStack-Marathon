let slider = document.querySelectorAll("img");
let prev   = document.querySelector("#prev");
let next   = document.querySelector("#next");
let index  = 0;

let intervalId = setInterval(() => slideRight(), 3000)

function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
}

function slideLeft() {
    reset();
    if (index === 0) {
        index = slider.length;
    }
    slider[index - 1].style.display = 'block';
    index--;
}

function slideRight() {
    reset();
    if (index === slider.length - 1) {
        index = -1;
    }
    slider[index + 1].style.display = 'block';
    index++;
}

prev.addEventListener('click', () => {
    clearInterval(intervalId);
    slideLeft();
});

next.addEventListener('click', () => {
    clearInterval(intervalId);
    slideRight();
});