
let displayValue = document.getElementById("displayValue");

function handleValue(value) {
    displayValue.value += value;
}

function clearDisplay() {
    displayValue.value = "";
    display.value = "0";
}

function backspace() {
    displayValue.value = displayValue.value.slice(0, -1);
    display.value = '0';
}

function calculate() {
try {
    display.value = eval(displayValue.value);
}  catch (error) {
    displayValue.value = "Error";
    display.value = "0";
}
if (display.value == "undefined" || displayValue.value === "Error"){
    display.value = '0';
}

setTimeout(() => {
    storeHistory();
}, 1000);
}

// // THIS IS FOR KEYBOARD INPUT

document.addEventListener("keydown", (event) => {
const key = event.key;
if (key >= "0" && key <= "9") {
    btn(key);
} else if (key === ".") {
    btn(".");
} else if (key === "+") {
    btn("+");
} else if (key === "-") {
    btn("-");
} else if (key === "*") {
    btn("*");
} else if (key === "/") {
    btn("/");
} else if (key === "%") {
    btn("%");
} else if (key === "Enter") {
    equals();
} else if (key === "=") {
    equals();
} else if (key === "Backspace") {
    remove();
} else if (key === "Escape") {
    clearDisplay();
}
});
// function to store th histories of the calculator

const history = document.getElementById("history-list");

function storeHistory() {
    const historyItem = document.createElement("li");
    if (displayValue.value === '' || displayValue.value === "undefined" || displayValue.value === "Error") {
        return false;
    } else {
        historyItem.textContent = displayValue.value + " = " + display.value;
    }
    history.appendChild(historyItem);
}

function clearHistory() {
    history.innerHTML = "";
}