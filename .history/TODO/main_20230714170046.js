

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
  }  
  todoInput.value = "";
  todoInput.focus();
  render()
}

todoForm.addEventListener("submit", addTask)

function render() {
  todoList.innerHTML = '';
  tasksArray.forEach((element) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("id", element.id) 
    
    const doneBtn = document.createElement("input"); 
    doneBtn.setAttribute("type", "checkbox")
    doneBtn.classList.add("finish-todo");
    todo.appendChild(doneBtn);
    
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = element.text;
    todo.appendChild(todoTitle);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-todo");
    removeBtn.innerText = "x";
    todo.appendChild(removeBtn);
    
    todoList.appendChild(todo);
  })
}
function checkOrDelete(event) {
  console.log(event.target.par);
}
todoList.addEventListener("click", checkOrDelete)
// const saveTodo = (text) => {

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