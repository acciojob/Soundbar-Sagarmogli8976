// Select the audio element from the DOM
const audioPlayer = document.getElementById('audio-player');
// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text inside the button (e.g., "applause")
        const soundName = button.textContent.trim().toLowerCase();

        // Check if the button has the 'stop' class
        if (button.classList.contains('stop')) {
            stopSound();
        } else {
            playSound(soundName);
        }
    });
});

function playSound(name) {
    // Set the source to the sounds folder relative to the html file
    // Path format: sounds/applause.mp3
    audioPlayer.src = `sounds/${name}.mp3`;
    
    // Play the sound
    audioPlayer.play().catch(error => {
        console.error(`Error playing sound ${name}:`, error);
    });
}

function stopSound() {
    // Pause the audio and reset the time to 0
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}