// To create a function in JavaScript, just put the word "function" followed by the function name
function playSound() {
    document.querySelector("#som_tecla_pom").play();
}

// When the navigator finds a code which play an audio on init the page, he block the sound, because the user didn't interacted with the document first
document.querySelector("#som_tecla_pom").play();