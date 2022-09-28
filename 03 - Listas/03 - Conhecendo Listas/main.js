function playSound() {
    document.querySelector("#som_tecla_pom").play();
}

const keys = document.querySelectorAll(".tecla");

// To access the element of a list, put the index between the "[]"
keys[0].onclick = playSound;