const container = document.querySelector('#container');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

container.appendChild(gridContainer);

function createGridItems(width) {
    for (i = 0; i < width; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
    }
}

createGridItems(10000);