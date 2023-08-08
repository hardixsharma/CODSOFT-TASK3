const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let result = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        handleInput(buttonText);
    });
});

function handleInput(value) {
    if (value >= "0" && value <= "9") {
        currentInput += value;
        display.textContent = currentInput;
    } else if (value === "." && !currentInput.includes(".")) {
        currentInput += value;
        display.textContent = currentInput;
    } else if (value === "C") {
        clear();
    } else if (value === "←") {
        backspace();
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (currentInput !== "") {
            if (operator !== "") {
                calculate();
            }
            operator = value;
            result = parseFloat(currentInput);
            currentInput = "";
            display.textContent = result + " " + operator;
        }
    } else if (value === "=") {
        calculate();
    }
}

function clear() {
    currentInput = "";
    operator = "";
    result = 0;
    display.textContent = "0";
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function calculate() {
    if (operator && currentInput !== "") {
        const inputNumber = parseFloat(currentInput);
        switch (operator) {
            case "+":
                result += inputNumber;
                break;
            case "-":
                result -= inputNumber;
                break;
            case "*":
                result *= inputNumber;
                break;
            case "/":
                result /= inputNumber;
                break;
        }

        currentInput = result.toString();
        display.textContent = currentInput;
        operator = "";
    }
}
