function playSound(elementButton) {
    document.querySelector(elementButton).play();
}

const keys = document.querySelectorAll(".tecla");


let count = 0;
while (count < keys.length) {
    let keyboardKey = keys[count];
    // The "classList" returns the classes in list form
    let sound = keyboardKey.classList[1];
    
    
    keyboardKey.onclick = function() {
        // To use the template string, put the string between the `` and when to use a variable, put a "$"" followed by the "()", when inside the "()" the variable name will be placed
        playSound(`#som_${sound}`);
    };
    
    count = count + 1;
    
    // console.log(sound);
    // console.log("Count: ", count);
}