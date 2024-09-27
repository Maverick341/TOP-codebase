const container = document.getElementById('grid-container');
const button1 = document.getElementById('new-grid-button');
const button2 = document.getElementById('reset-button');

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 800 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        });

        

        container.appendChild(square);
    }

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function VariedGridSize() {
    let size;
    do {
        size = prompt("Enter the number of squares per side (1-100): ");
        size = parseInt(size, 10);
    } while (isNaN(size) || size < 1 || size > 100);

    createGrid(size);
}

function resetToOriginalColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'aliceblue';
    });
}

button1.addEventListener('click', VariedGridSize);

button2.addEventListener('click', resetToOriginalColor);

createGrid(16);
