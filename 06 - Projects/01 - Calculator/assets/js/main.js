function calculate() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);

    let operator = document.querySelector(".operator").innerText;

    let result = document.getElementById("result");
    switch (operator) {
        case "+":
            result.value = x + y;
            break;
        case "-":
            result.value = x - y;
            break;
        case "*":
            result.value = x * y;
            break;
        case "/":
            result.value = x / y;
            break;
    }
}

let signals = document.querySelectorAll(".signal");
for(let i = 0; i < signals.length; i++) {
    let signal = signals[i];

    signal.onclick = function() {
        let $operator = document.querySelector(".operator");

        $operator.innerText = signal.innerText;
    };
}