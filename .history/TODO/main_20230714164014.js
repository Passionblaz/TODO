

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEdition = document.querySelector("#cancel-edit-btn")

const tasksArray = []

//Time Settings

function addTask(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  if(inputValue){
    const task = {
      checkbox: false,
      text: inputValue,
      id: Date.now(),
    }
tasksArray.push(task);
console.log(tasksArray);
  }  
  todoInput.value = "";
  todoInput.focus();
}

todoForm.addEventListener("submit", addTask)

function
// const saveTodo = (text) => {
//   const todo = document.createElement("div");
//   todo.classList.add("todo");

//   const todoTitle = document.createElement("h3");
//   todoTitle.innerText = text;
//   todo.appendChild(todoTitle);

//   const doneBtn = document.createElement("button");
//   doneBtn.classList.add("finish-todo");
//   //doneBtn.innerHTML = 'i class="fa-solid fa-check"></i>';
//   todo.appendChild(doneBtn);
  
//   const editBtn = document.createElement("button");
//   editBtn.classList.add("edit-todo");
//   editBtn.innerHTML = 'i class="fa-solid fa-check"></i>';
//   todo.appendChild(doneBtn);

//   const removeBtn = document.createElement("button");
//   removeBtn.classList.add("remove-todo");
//   removeBtn.innerHTML = 'i class="fa-solid fa-check"></i>';
//   todo.appendChild(doneBtn);

//   todoList.appendChild(todo);

// }
// document.addEventListener("click", (e) => {
//   const targetEl = e.target;
//   const parentEl = target.closes("div");
//   let todoTitle;

//   if(parentEl && parentEl.querySelector("h3"))
//     todoTitle = parentEl.querySelector("h3").innerText;

//     if(parentEl.classList.contains("remove-todo"))
//       parentEl.classList.remove();
// })