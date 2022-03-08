const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.querySelector('body');
    const lightToggle = document.getElementById('lightmode');
    const darkToggle = document.getElementById('darkmode');
    body.classList.toggle('lightmode');
    body.classList.toggle('darkmode');
    lightToggle.classList.toggle('toggled');
    darkToggle.classList.toggle('toggled')
}