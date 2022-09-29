function playSound() {
    document.querySelector("#som_tecla_pom").play();
}

const keys = document.querySelectorAll(".tecla");


let count = 0;
// The "while" repeat a block code while the condition is true
while (count < keys.length) {
    keys[count].onclick = playSound;

    count = count + 1;

    // The "console" is an object that access the navigator console
    // The "log()" function write in the navigator console
    console.log("Count: ", count);
}