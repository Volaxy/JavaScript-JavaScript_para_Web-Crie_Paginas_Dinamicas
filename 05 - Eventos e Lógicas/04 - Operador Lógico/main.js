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

    boardKey.onkeydown = function(event) {
        console.log(event.code === "Space");

        if(event.code === "Space" || event.code === "Enter") {
            boardKey.classList.add("ativa");
        }
    }

    boardKey.onkeyup = function() {
        boardKey.classList.remove("ativa");
    }
}
