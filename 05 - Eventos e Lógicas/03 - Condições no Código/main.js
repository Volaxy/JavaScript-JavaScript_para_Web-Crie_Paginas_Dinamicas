function playSound(elementButton) {
    document.querySelector(elementButton).play();
}

const keys = document.querySelectorAll(".tecla");

for(let count = 0; count < keys.length; count++) {
    let boardKey = keys[count];
    let sound = boardKey.classList[1];

    boardKey.onclick = function() {
        playSound(`#som_${sound}`);
    };

    // The parameter "event" captures the event that was associated with the button's function
    boardKey.onkeydown = function(event) {
        console.log(event.code === "Space");

        // The "===" verify the type of the variables and the value
        if(event.code === "Space") {
            boardKey.classList.add("ativa");
        }
    }

    boardKey.onkeyup = function() {
        boardKey.classList.remove("ativa");
    }
}
