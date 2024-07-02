
function attachInputListeners() {
    alert('Hello from content.js!');
    const input = document.getElementById('prompt-textarea');
    if (input) {
        input.addEventListener('input', handleInput);
    } else {
        alert('Input element not found');
    }
}

function handleInput(event) {
    const value = event.target.value;
    console.log(`User is typing: ${value}`);
    alert(`User is typing: ${value}`);
}

attachInputListeners(); // Correct function name

