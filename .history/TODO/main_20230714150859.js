const data = new Date ()

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-form")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEdition = document.querySelector("#cancel-edit-btn")
  //Time
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();
//time
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