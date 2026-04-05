//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // stop previous audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.remove();
        }

        // create real audio element
        const audio = document.createElement("audio");

        // IMPORTANT: give a valid (but empty) source to avoid error
        const source = document.createElement("source");
        source.src = ""; // no real file needed
        source.type = "audio/mpeg";

        audio.appendChild(source);
        audio.autoplay = true;

        document.body.appendChild(audio);

        currentAudio = audio;

        // try to play (avoid crash)
        audio.play().catch(() => {});
    });
});

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.remove();
    }
});