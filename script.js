const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

// Create dummy audio object
function createAudio() {
    return {
        play: function () {},
        pause: function () {},
        currentTime: 0
    };
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // stop previous
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // create dummy audio instead of real file
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