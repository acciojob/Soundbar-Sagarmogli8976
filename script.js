// Variable to store the currently playing audio so we can stop it
let currentAudio = null;

// Select all buttons with class 'btn'
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.textContent.toLowerCase();

        // Check if the clicked button is the 'stop' button
        if (button.classList.contains('stop')) {
            stopSound();
        } else {
            playSound(soundName);
        }
    });
});

function playSound(name) {
    // Stop any sound currently playing before starting a new one
    stopSound();

    // Create new audio object. Path: sounds/filename.mp3
    currentAudio = new Audio(`sounds/${name}.mp3`);
    
    currentAudio.play().catch(error => {
        console.error(`Error playing sound ${name}:`, error);
        alert(`Sound file "sounds/${name}.mp3" not found!`);
    });
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset sound to the beginning
    }
}