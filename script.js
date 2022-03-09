const defaultSize = 48;
const defaultColor = '#000000';
let currentSize = defaultSize;
let currentColor = defaultColor;

const toggleSwitch = document.getElementById('toggle');
const sliderGrid = document.getElementById('penslider');
const colorChoice = document.getElementById('color-selection');
const drawingBox = document.getElementById('drawing-box');
const eraser = document.getElementById('eraser');
const clearCanvas = document.getElementById('clear-canvas')

toggleSwitch.addEventListener('click', toggleDarkMode);
sliderGrid.addEventListener('input', updateCurrentSize);
sliderGrid.addEventListener('change', gridReload);
colorChoice.addEventListener('input', updateCurrentColor);
eraser.addEventListener('click', useEraser);
clearCanvas.addEventListener('click', gridReload);

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

function updateCurrentColor() {
    currentColor = colorChoice.value;
    return currentColor;
}

function useEraser() {
    currentColor = '#FFFFFF';
    return currentColor;
}

let mouseClick = false;
drawingBox.addEventListener('mousedown', (e) => mouseClick = true);
drawingBox.addEventListener('mouseup', (e) => mouseClick = false);

function draw(e) {
    if (!mouseClick) return;
    e.target.style.backgroundColor = currentColor;
}

function createDivEach(size) {
    for (let i = 0; i < (size ** 2); i++) {
        const blockDiv = document.createElement('div');
        blockDiv.className ='gridBlock';
        blockDiv.addEventListener('mouseover', draw);
        drawingBox.appendChild(blockDiv);
    }
}

function gridSetup(size) {
    drawingBox.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
}

function clearGrid() {
    drawingBox.innerHTML = '';
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
  