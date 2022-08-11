function createGridItems(width) {
    for (i = 0; i < width; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
    }
}

const container = document.querySelector('#container');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

const dimButton = document.createElement('button');
dimButton.setAttribute('id', 'dimBtn');
dimButton.textContent = 'Change grid dimensions';

container.appendChild(dimButton);
container.appendChild(gridContainer);

createGridItems(625);

dimButton.addEventListener('click', () => {
    let num = prompt('How many squares per side of the grid?')
    if(num < 101 && num > 0) {
        document.documentElement.style.setProperty('--grid-dimension', num)
        createGridItems(num*num);
    }
})