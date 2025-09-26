const taskText = document.getElementById("task-text");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const tasks = [];

function drawList(list){
    taskList.innerHTML = "";
    for (let i = 0; i < list.length; i ++){
        const newItem = document.createElement("li");
        newItem.textContent = list[i];
        taskList.appendChild(newItem);
    }
}


addButton.addEventListener("click", () => {
    tasks.push(taskText.value);
    drawList(tasks);
    // const task = taskText.value;
    // const newTask = document.createElement("li");
    // newTask.textContent = task;

    // taskList.appendChild(newTask);
});