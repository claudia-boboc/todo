//SELECTORS
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todo-list");
//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
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

  todoList.appendChild(todoDiv);
}
