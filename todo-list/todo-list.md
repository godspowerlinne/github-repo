# Explanation of the JavaScript Code for the To-Do List Application

The JavaScript code for the to-do list application is responsible for adding, deleting, and marking tasks as completed. Here's a detailed breakdown of the code:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
    }
});
```

### Explanation:

1. **DOMContentLoaded Event**:
   - `document.addEventListener('DOMContentLoaded', () => { ... })` ensures that the JavaScript code runs only after the DOM (Document Object Model) has been fully loaded and parsed.
   - This is important to ensure that all the elements the code interacts with are available in the DOM.

2. **Element Selection**:
   - `const todoForm = document.getElementById('todo-form');` selects the form element with the ID `todo-form`.
   - `const todoInput = document.getElementById('todo-input');` selects the input element with the ID `todo-input`.
   - `const todoList = document.getElementById('todo-list');` selects the unordered list element with the ID `todo-list`.

3. **Form Submission Event**:
   - `todoForm.addEventListener('submit', (e) => { ... })` adds an event listener to the form that listens for the `submit` event.
   - `e.preventDefault();` prevents the default form submission behavior, which would otherwise reload the page.
   - `addTodo(todoInput.value);` calls the `addTodo` function with the value of the input field.
   - `todoInput.value = '';` clears the input field after adding the task.

4. **addTodo Function**:
   - `function addTodo(task) { ... }` is a function that creates a new to-do list item.
   - `const li = document.createElement('li');` creates a new list item element.
   - `li.textContent = task;` sets the text content of the list item to the task.
   - `const deleteButton = document.createElement('button');` creates a new button element.
   - `deleteButton.textContent = 'Delete';` sets the text content of the button to "Delete".
   - `deleteButton.addEventListener('click', () => { ... })` adds an event listener to the delete button that listens for the `click` event.
     - `todoList.removeChild(li);` removes the list item from the DOM when the delete button is clicked.
   - `li.appendChild(deleteButton);` appends the delete button to the list item.
   - `li.addEventListener('click', () => { ... })` adds an event listener to the list item that listens for the `click` event.
     - `li.classList.toggle('completed');` toggles the `completed` class on the list item when it is clicked, which visually marks the task as completed.
   - `todoList.appendChild(li);` appends the list item to the unordered list.

### Example Usage:

1. **Adding a Task**:
   - When the user types a task in the input field and submits the form, the `addTodo` function is called with the task text.
   - A new list item is created with the task text and a delete button.
   - The list item is appended to the unordered list.

2. **Deleting a Task**:
   - When the user clicks the delete button on a list item, the list item is removed from the DOM.

3. **Marking a Task as Completed**:
   - When the user clicks on a list item, the `completed` class is toggled, visually marking the task as completed or uncompleted.
