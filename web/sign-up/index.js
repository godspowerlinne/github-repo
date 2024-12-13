// Constants for DOM elements
const errorMessage = document.getElementById("errorMessage");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

// Regular expression for password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

// Function to validate password and confirm password
function validatePassword() {
    if (password.value !== confirmPassword.value) {
        setErrorMessage("Passwords do not match");
    } else if (password.value.length < 8 || password.value.length > 16) {
        setErrorMessage("Password must be between 8 and 16 characters");
    } else if (!passwordRegex.test(password.value)) {
        setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
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

// Event listeners for input validation
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

// Prevent form submission if there are validation errors
submit.addEventListener("click", (event) => {
    if (errorMessage.textContent !== "") {
        event.preventDefault();
    }
});

firstName.addEventListener("focus", () => {
  const flabel = document.getElementById("flabel");
  flabel.classList.add("tansform_label");
})

lastName.addEventListener("focus", () => {
  const llabel = document.getElementById("llabel");
  llabel.classList.add("tansform_label");
})

email.addEventListener("focus", () => {
    const elabel = document.getElementById("elabel");
    elabel.classList.add("tansform_label");
})

phoneNumber.addEventListener("focus", () => {
    const nlabel = document.getElementById("nlabel");
    nlabel.classList.add("tansform_label");
})

password.addEventListener("focus", () => {
    const plabel = document.getElementById("plabel");
    plabel.classList.add("tansform_label");
});

confirmPassword.addEventListener("focus", () => {
    const cplabel = document.getElementById("cplabel");
    cplabel.classList.add("tansform_label");
});