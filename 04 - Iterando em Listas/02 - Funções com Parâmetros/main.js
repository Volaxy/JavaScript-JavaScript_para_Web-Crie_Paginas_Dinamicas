// This function receive a parameter when is called
function playSound(elementButton) {
    document.querySelector(elementButton).play();
}

const keys = document.querySelectorAll(".tecla");


let count = 0;
while (count < keys.length) {
    keys[count].onclick = playSound;

    count = count + 1;

    console.log("Count: ", count);
}