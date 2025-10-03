const input = document.getElementById("input");
const button = document.getElementById("submmit");
const taskList = document.getElementById("taskList");
const tasks = [];

function addTask(list){
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i ++){
        const newTask = document.createElement("li");
        newTask.textContent = list[i];
        newTask.className = "task";
        const complete = document.createElement("button");
        complete.textContent = "concluir";
        complete.className = "complete"
        newTask.appendChild(complete);
        taskList.appendChild(newTask);

        complete.addEventListener("click", () => {
           newTask.remove();
        })
    }
}

button.addEventListener("click", () => {
    tasks.push(input.value);
    addTask(tasks);
})
