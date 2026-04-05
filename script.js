//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

// Play sound
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");

        // Stop previous audio if playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.play();
    });
});

// Stop sound
stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});