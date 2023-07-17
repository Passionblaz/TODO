const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEdition = document.querySelector("#cancel-edit-btn");

const tasksArray = [];
tasksArray - findIndex()
//Time Settings

function addTask(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) {
    const task = {
      checkbox: false,
      text: inputValue,
      id: Date.now(),
    };
    tasksArray.push(task);
  }
  todoInput.value = "";
  todoInput.focus();
  render();
}

todoForm.addEventListener("submit", addTask);

function render() {
  todoList.innerHTML = "";
  tasksArray.forEach((element) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("id", element.id);

    const doneBtn = document.createElement("input");
    doneBtn.setAttribute("type", "checkbox");
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
    todoInput.value = "";
    todoInput.focus();
  });
}

//     Delete text (still back after add)
// document.addEventListener("click", (e) => {
//   const targetEl = e.target;
//   const parentEl = targetEl.closest("div");
//   let todoTitle;

//   if(targetEl.classList.contains("remove-todo"))
//     parentEl.remove();
// })

function checkOrDelete(event) {
  console.log(event.target.findIndex)
  console.log(event.target.parentNode.id);
  console.log(event.target.checked);
  
}
// // todo.splice(index (1))
//   // if1(delete)//filter
//   // if2(checbox)//find
  
// }
todoList.addEventListener("click", checkOrDelete);
tasksArray = tasksArray.filter(element => element.id !== Number(key));
renderTodo(todoList);
const saveTodo = (text) => {

}

//   }
// }
// const element = document.getElementById("todo-list");
// element.addEventListener("dblclick", function () {

  
// })
