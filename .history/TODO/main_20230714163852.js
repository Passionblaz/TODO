

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEdition = document.querySelector("#cancel-edit-btn")

const tasksArray = []
document.getElementById("date").innerHTML = today.toDateString();
//Time Settings
function time() {
  const data = new Date ();
  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  if(h < 10)
    h = "0"+h;
  if (m < 10)
    m = "0" + m;
  if(s < 10)
    s = "0"+s;

    document.getElementById("hour").innerHTML = h +":" + m + ":" + s;
    setTimeout('time()', 500);
}
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