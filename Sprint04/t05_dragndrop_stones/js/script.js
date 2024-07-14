function toggleDraggable(stone) {
    stone.classList.toggle('active');
}

document.querySelectorAll('.stone').forEach(square => {
    square.addEventListener('dblclick', function() {
        toggleDraggable(this);
    });
});

let clicked = null;

document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('active')) {
        clicked = event.target;
    }
});

document.addEventListener('mousemove', function(event) {
    if (clicked) {
        clicked.style.left = event.pageX - 50 + 'px';
        clicked.style.top = event.pageY - 50 + 'px';
    }
});

document.addEventListener('mouseup', function() {
    clicked = null;
});