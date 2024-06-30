console.log("hello world");
// Function to handle input events
function handleInput(event) {
    console.log(`User is typing: ${event.target.value}`);
}

// Attach event listeners to all input and textarea elements
function attachInputListeners() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', handleInput);
    });
}

// Attach listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', attachInputListeners);
