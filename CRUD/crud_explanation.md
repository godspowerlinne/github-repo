# CRUD Component Explanation

## Overview
This document provides an explanation of the CRUD component implemented in JavaScript. The component allows users to add, update, and delete user information (name and email) while storing the data in the browser's local storage.

## JavaScript Code Breakdown
The JavaScript file (`index.js`) contains the following code:

```javascript
// Variables
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-email-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
```

### Explanation of Variables
- **Input Elements**: The code retrieves input fields for name and email, as well as buttons for adding and updating users.
- **Users Array**: It initializes an array `users` to store user data, retrieving it from local storage if available.
- **Current User ID**: A variable to keep track of the user currently being updated.
- **Email Validation Regex**: A regular expression to validate email addresses.

## Functions
### `renderTable()`
This function renders the user data in a table format. It creates table rows for each user and adds edit and delete buttons.

### `addUser()`
This function adds a new user to the `users` array. It validates the input and checks for duplicate IDs before pushing the new user to local storage.

### `updateUser()`
This function updates the details of an existing user. It retrieves the current user's ID and updates their name and email in the `users` array.

### `showUpdateForm(userId)`
This function displays the update form with the current user's details pre-filled. It sets up event listeners for the update and cancel buttons.

### `hideUpdateForm()`
This function hides the update form and resets the input fields.

### `deleteUser(userId)`
This function removes a user from the `users` array based on their ID and updates local storage.

## Event Listeners
The code sets up an event listener for the "Add" button to trigger the `addUser()` function when clicked.

## Initialization
The `renderTable()` function is called at the end of the script to initialize the table with existing user data.

## Conclusion
This CRUD component provides a simple interface for managing user data, utilizing local storage for persistence. The code is structured to handle user interactions effectively, ensuring a smooth user experience.
