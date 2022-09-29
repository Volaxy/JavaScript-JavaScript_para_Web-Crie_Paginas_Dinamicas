function playSound(elementButton) {
    document.querySelector(elementButton).play();
}

const keys = document.querySelectorAll(".tecla");


let count = 0;
while (count < keys.length) {
    // An anonymous function is declared using this sintax, without the function name
    keys[count].onclick = function() {
        playSound("#som_tecla_pom");
    };

    count = count + 1;

    console.log("Count: ", count);
}