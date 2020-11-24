//SELECTORS
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".selectOption");

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTIONS
function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fa fa-check"></i>`;
  completedButton.classList.add("completed-button");
  todoDiv.appendChild(completedButton);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa fa-trash"></i>`;
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // if (!todoInput.value) {
  //   window.alert("You have to insert a value!");
  //   return;
  // }
  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //check mark
  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
