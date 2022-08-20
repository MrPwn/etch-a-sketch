const container = document.querySelector('#container');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

const dimButton = document.createElement('button');
dimButton.classList.add('controlButtons');
dimButton.textContent = 'Change grid dimensions';

const eraseButton = document.createElement('button');
eraseButton.classList.add('controlButtons');
eraseButton.textContent = 'Eraser';

const clearButton = document.createElement('button');
clearButton.classList.add('controlButtons');
clearButton.textContent = 'Clear Grid';

container.appendChild(dimButton);
container.appendChild(eraseButton);
container.appendChild(clearButton);
container.appendChild(gridContainer);

let num = 16;

function createGridItems(width) {
    for (i = 0; i < width; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.setAttribute('id', 'item' + i)
        gridContainer.appendChild(gridItem);
    }
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', colorOnHover))
}

function colorOnHover(e) {
    let gridItem = document.getElementById(e.target.id)
    gridItem.classList.add('hovered')
}

function eraseOnHover(e) {
    let gridItem = document.getElementById(e.target.id)
    gridItem.classList.remove('hovered')
}

dimButton.addEventListener('click', () => {
    num = prompt('How many squares per side of the grid?')
    if (isNaN(num)) {
        alert('Your input must be a number greater than zero and less than 101!')
    } else if(num < 101 && num > 0) {
        document.documentElement.style.setProperty('--grid-dimension', num)
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild)
        }
        createGridItems(num * num);
    }
})

eraseButton.addEventListener('click', () => {
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', eraseOnHover))
})

clearButton.addEventListener('click', () => {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    createGridItems(num * num)
})

createGridItems(num * num);
