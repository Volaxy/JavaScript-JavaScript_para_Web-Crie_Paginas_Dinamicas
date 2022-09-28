function playSound() {
    document.querySelector("#som_tecla_pom").play();
}

// As this list of keys will probably not change during the execution of the code, the recommended thing is to always use constant values ​​for the variables, using the reserved word "const"
const keys = document.querySelectorAll(".tecla");