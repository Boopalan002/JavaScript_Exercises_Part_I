// Select the element where the key code will be displayed
const keyDisplay = document.getElementById('key-display');

// Add event listener to capture key presses
document.addEventListener('keydown', event => {
    keyDisplay.textContent = `Key Code: ${event.keyCode}`;
});