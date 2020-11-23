//SELECTORS
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todo-list");
//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
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
