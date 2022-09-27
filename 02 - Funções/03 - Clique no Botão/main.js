function playSound() {
    document.querySelector("#som_tecla_pom").play();
}

// When the result after the "=" is a function followed by "()", only the RESULT is saved in the attribute or variable
// document.querySelector("#som_tecla_pom").onclick = playSound();

// This save the function in the variable
// The "onclick" is the attribute "onClick" present inside the HTML tags
document.querySelector(".tecla_pom").onclick = playSound;