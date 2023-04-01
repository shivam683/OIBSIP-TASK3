let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
    let taskText = taskInput.value;
    if (taskText !== "") {
        let newTask = document.createElement("li");
        newTask.innerHTML = '<span>' + taskText + '</span>' + '<button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(task) {
    task.parentNode.remove();
}