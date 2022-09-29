function playSound(elementButton) {
    document.querySelector(elementButton).play();
}

const keys = document.querySelectorAll(".tecla");

for(let count = 0; count < keys.length; count++) {
    let keyboardKey = keys[count];
    let sound = keyboardKey.classList[1];

    keyboardKey.onclick = function() {
        playSound(`#som_${sound}`);
    };
}
