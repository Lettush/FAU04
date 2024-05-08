// DOM Manipulation

/* 
    1. Targetting
    2. Adding an Event/Events
    3. Modifying
*/

// Targetting

/* 
    todo-input
    todo-button
    todo-list
    filter-todo
*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Adding an Event/Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterOption.addEventListener("click", filterTodos);

// Modifying/Functionality
function addTodo(e) {
    // stops the page from refreshing onSubmit
    e.preventDefault();

    // create an element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // add task name to the todoDiv
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // add newTodo to the div
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // add to todo list
    todoList.appendChild(todoDiv);
}

// console.log(e);
// console.log(e.target);
// console.log(e.type);

function deleteOrCompleteTodo() {

}

function filterTodos() {

}