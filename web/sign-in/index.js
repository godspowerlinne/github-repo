// Constants for DOM elements
const errorMessage = document.getElementById("errorMessage");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("signInForm");

// Function to validate sign-in
function validateSignIn() {
    if (email.value === "" || password.value === "") {
        setErrorMessage("Please fill in all fields");
    } else {
        clearErrorMessage();
    }
}

// Function to set error message
function setErrorMessage(message) {
    errorMessage.textContent = message;
}

// Function to clear error message
function clearErrorMessage() {
    errorMessage.textContent = "";
}

// Event listener for form submission
submit.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    validateSignIn(); // Validate sign-in
});

email.addEventListener("focus", () => {
    const elabel = document.getElementById("elabel");
    elabel.classList.add("tansform_label");
})

password.addEventListener("focus", () => {
    const plabel = document.getElementById("plabel");
    plabel.classList.add("tansform_label");
});
