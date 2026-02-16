document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    const addTask = (event) => {
        const taskText = taskInput.value.trim();
        if(!taskText) {
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    };
    addTaskButton.addEventListener('click', addTask);
});