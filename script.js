const container = document.querySelector('#container');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

const dimButton = document.createElement('button');
dimButton.setAttribute('id', 'dimBtn');
dimButton.textContent = 'Change grid dimensions';

container.appendChild(dimButton);
container.appendChild(gridContainer);

function createGridItems(width) {
    for (i = 0; i < width; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.setAttribute('id', 'item' + i)
        gridContainer.appendChild(gridItem);
    }
}

createGridItems(256);

dimButton.addEventListener('click', () => {
    let num = prompt('How many squares per side of the grid?')
    if (isNaN(num)){
        alert('Your input must be a number greater than zero and less than 101!')
    } else if(num < 101 && num > 0) {
        document.documentElement.style.setProperty('--grid-dimension', num)
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild)
        }
        createGridItems(num*num);
    }
})

function changeOnHover(e) {
    let gridItem = document.getElementById(e.target.id)
    gridItem.classList.add('hovered')
}

const test = document.getElementsByClassName('gridItem');
Array.from(test).forEach(gridItem => gridItem.addEventListener('mouseover', changeOnHover))
