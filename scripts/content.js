
function attachInputListeners() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        input.addEventListener('input', handleInput)
    });
}

function handleInput(event) {
    const value = event.target.value;
    console.log(`User is typing: ${value}`);
}

attachInputListeners(); // Correct function name

