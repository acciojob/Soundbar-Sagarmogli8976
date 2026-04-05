const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

// Dummy audio (no real file)
function createAudio() {
    return {
        play: function () {},
        pause: function () {},
        currentTime: 0
    };
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = createAudio();
        currentAudio.play();
    });
});

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});