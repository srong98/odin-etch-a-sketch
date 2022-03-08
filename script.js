const defaultSize = 48;
let currentSize = defaultSize;

const toggleSwitch = document.getElementById('toggle');
const sliderGrid = document.getElementById('penslider');
const drawingBox = document.getElementById('drawing-box');

toggleSwitch.addEventListener('click', toggleDarkMode);
sliderGrid.addEventListener('input', updateCurrentSize);
sliderGrid.addEventListener('change', gridReload);

function toggleDarkMode() {
    const body = document.querySelector('body');
    const lightToggle = document.getElementById('lightmode');
    const darkToggle = document.getElementById('darkmode');
    body.classList.toggle('lightmode');
    body.classList.toggle('darkmode');
    lightToggle.classList.toggle('toggled');
    darkToggle.classList.toggle('toggled')
}

let invertSliderGrid = value => 80 - value;

function updateCurrentSize() {
    currentSize = invertSliderGrid(sliderGrid.value);
    return currentSize;
}
function gridSetup(size) {
    drawingBox.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}

function clearGrid() {
    drawingBox.innerHTML = '';
}

function createDivEach(size) {
    for (let i = 0; i < (size ** 2); i++) {
        let blockDiv = document.createElement('div');
        blockDiv.className ='gridBlocks';
        drawingBox.appendChild(blockDiv);
    }
}

function gridReload() {
    clearGrid();
    gridSetup(currentSize);
    createDivEach(currentSize);
}

window.onload = () => {
    gridSetup(defaultSize);
    createDivEach(defaultSize);
  }
  