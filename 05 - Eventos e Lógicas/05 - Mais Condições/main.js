function playSound(selector) {
    let element = document.querySelector(selector);

    if(element && element.localName === "audio") {
        element.play();
    } else {
        console.log("Element not found!");
    }
}

const keys = document.querySelectorAll(".tecla");

for(let count = 0; count < keys.length; count++) {
    let boardKey = keys[count];
    let sound = boardKey.classList[1];

    boardKey.onclick = function() {
        playSound(`#som_${sound}`);
    };

    boardKey.onkeydown = function(event) {
        if(event.code === "Space" || event.code === "Enter") {
            boardKey.classList.add("ativa");
        }
    }

    boardKey.onkeyup = function() {
        boardKey.classList.remove("ativa");
    }
}
