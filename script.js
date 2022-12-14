const container = document.querySelector('#container');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

const dimButton = document.createElement('button');
dimButton.classList.add('controlButtons');
dimButton.textContent = 'Change grid dimensions';

const colorButton = document.createElement('button');
colorButton.classList.add('controlButtons');
colorButton.textContent = 'Sketch!';

const randButton = document.createElement('button');
randButton.classList.add('controlButtons');
randButton.textContent = 'Random Colors!';

const eraseButton = document.createElement('button');
eraseButton.classList.add('controlButtons');
eraseButton.textContent = 'Erase';

const clearButton = document.createElement('button');
clearButton.classList.add('controlButtons');
clearButton.textContent = 'Clear board';

container.appendChild(dimButton);
container.appendChild(colorButton);
container.appendChild(randButton);
container.appendChild(eraseButton);
container.appendChild(clearButton);
container.appendChild(gridContainer);

let num = 16;
let clicked = 'color';

function createGridItems(width) {
    for (i = 0; i < width; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.setAttribute('id', 'item' + i)
        gridContainer.appendChild(gridItem);
    }
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', onHover))
}

function onHover(e) {
    let gridItem = document.getElementById(e.target.id);
    switch (clicked) {
        case 'color':
            gridItem.classList.add('hovered');
            gridItem.style.removeProperty('background-color');
            break;
        case 'erase':
            gridItem.classList.remove('hovered');
            gridItem.style.removeProperty('background-color');
            break;
        case 'random':
            gridItem.classList.remove('hovered');
            gridItem.style.backgroundColor = getRGBValue()
            break;
    }
}

function getRGBValue() {
    let max = 256;
    let r = Math.floor(Math.random() * (max + 1));
    let g = Math.floor(Math.random() * (max + 1));
    let b = Math.floor(Math.random() * (max + 1));

    return `rgb(${r}, ${g}, ${b})`
}

dimButton.addEventListener('click', () => {
    num = prompt('How many squares per side of the grid?')
    if (isNaN(num)) {
        alert('Your input must be a number!')
    } else if ( num >= 101 || num <= 0) {
        alert('Your input must be a number greater than zero and less than 101!')
    } else if(num < 101 && num > 0) {
        document.documentElement.style.setProperty('--grid-dimension', num)
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild)
        }
        createGridItems(num * num);
    }
})

colorButton.addEventListener('click', () => {
    clicked = 'color';
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', onHover))
})

randButton.addEventListener('click', () => {
    clicked = 'random';
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', onHover))
})

eraseButton.addEventListener('click', () => {
    clicked = 'erase';
    let gridArray = document.getElementsByClassName('gridItem');
    Array.from(gridArray).forEach(gridItem => gridItem.addEventListener('mouseover', onHover))
})

clearButton.addEventListener('click', () => {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    createGridItems(num * num)
})

createGridItems(num * num);