# Calculator Code Explanation

## HTML Elements and Initial Setup
```javascript
let displayValue = document.getElementById("displayValue");
```
- **`displayValue`**: This variable references the HTML element with the ID `displayValue`, which is likely an input or display element where the calculator's current value is shown.

## Handling Input Values
```javascript
function handleValue(value) {
    displayValue.value += value;
}
```
- **`handleValue(value)`**: This function appends the given `value` to the current value in the `displayValue` element. It is used to handle numeric and operator inputs.

## Clearing the Display
```javascript
function clearDisplay() {
    displayValue.value = "";
    display.value = "0";
}
```
- **`clearDisplay()`**: This function clears the `displayValue` and sets the `display` element to "0". It is used to reset the calculator.

## Backspace Function
```javascript
function backspace() {
    displayValue.value = displayValue.value.slice(0, -1);
    display.value = '0';
}
```
- **`backspace()`**: This function removes the last character from the `displayValue` and sets the `display` element to "0". It is used to delete the last input.

## Calculating the Result
```javascript
function calculate() {
    try {
        display.value = eval(displayValue.value);
    } catch (error) {
        displayValue.value = "Error";
        display.value = "0";
    }
    if (display.value == "undefined" || displayValue.value === "Error") {
        display.value = '0';
    }
    setTimeout(() => {
        storeHistory();
    }, 1000);
}
```
- **`calculate()`**: This function evaluates the expression in `displayValue` using `eval` and sets the result to the `display` element. If an error occurs during evaluation, it sets `displayValue` to "Error" and `display` to "0". It also checks if the result is "undefined" or "Error" and sets `display` to "0" if so. Finally, it calls `storeHistory` after a 1-second delay.

## Keyboard Input Handling
```javascript
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
```
- **Keyboard Event Listener**: This event listener handles keyboard input. It maps specific keys to corresponding functions:
  - Numeric keys (0-9) and the decimal point (.) call `btn(key)`.
  - Operator keys (+, -, *, /, %) call `btn(key)`.
  - Enter and = keys call `equals()`.
  - Backspace key calls `remove()`.
  - Escape key calls `clearDisplay()`.

## Storing Calculation History
```javascript
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
```
- **`storeHistory()`**: This function creates a new list item (`li`) and appends it to the `history` element. It stores the current calculation in the format "expression = result". It checks if `displayValue` is empty, "undefined", or "Error" and returns `false` if so.

## Clearing the History
```javascript
function clearHistory() {
    history.innerHTML = "";
}
```
- **`clearHistory()`**: This function clears the `history` element by setting its `innerHTML` to an empty string.

## Summary
- **`displayValue`**: The input element where the current calculation is displayed.
- **`handleValue(value)`**: Appends a value to the current calculation.
- **`clearDisplay()`**: Clears the display and resets the calculator.
- **`backspace()`**: Removes the last character from the current calculation.
- **`calculate()`**: Evaluates the current calculation and displays the result.
- **Keyboard Input Handling**: Maps specific keys to corresponding functions.
- **`storeHistory()`**: Stores the current calculation in the history.
- **`clearHistory()`**: Clears the history of calculations.