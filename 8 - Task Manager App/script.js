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
filterOption.addEventListener("change", filterTodos);

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

function deleteOrCompleteTodo(e) {
    // console.log(e.target.parentElement);
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        // add if not existing, remove if existing
        todo.classList.toggle("completed");
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    console.log(e.target.value);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"; // invisible
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"; // invisible
                }
        }
    })
}