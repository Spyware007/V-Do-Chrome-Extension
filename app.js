let tasks = []
const taskInput = document.querySelector("#task-input")
const addTask = document.querySelector("#add-task")
const removeAllTask = document.querySelector("#remove-all-task")
const taskElement = document.querySelector("#task-element")
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))


addTask.addEventListener("click", addTodo ,success)
taskInput.addEventListener("click", initialState)
removeAllTask.addEventListener("click", removeAll)

if(tasksFromLocalStorage){
    tasks = tasksFromLocalStorage
    renderTasks()
}

function addTodo() {
    console.log(taskInput.value)
    if(taskInput.value === ""){
        taskInput.placeholder = "Type Something!"
        taskInput.style.color = "White"
        taskInput.style.backgroundColor = "red"
        addTask.disabled = true
    }
    addTask.disabled = false
    tasks.push(taskInput.value)
    taskInput.value = ""
    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTasks()
}

function initialState() {
    taskInput.style.color = "black"
    taskInput.style.backgroundColor = "bisque"
    taskInput.placeholder = "What you wanna do, Today?"
}

function removeAll() {
    localStorage.clear()
    tasks = []
    renderTasks()
}

function renderTasks() {
    let taskItems = ""
    for( let i=0; i<tasks.length; i++){
        if( tasks[i]){
            taskItems += `
            <li>
                ${tasks[i]}
            </li>
        `
        }
    }
    taskElement.innerHTML = taskItems
}

function success (){
   
}