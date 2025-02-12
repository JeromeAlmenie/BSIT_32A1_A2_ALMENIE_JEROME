document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            alert("you just added a new task");
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <span>${task}</span>
                <div>
                    <button class="btn btn-sm btn-success done-button">Done</button>
                    <button class="btn btn-sm btn-danger delete-button">Delete</button>
                    <button class="btn btn-sm btn-danger AddNew-button">Add New</button>
                    <button class="btn btn-sm btn-danger finish-button">Finish</button>
                </div>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const listItem = e.target.parentElement.parentElement;
            alert("Task Delete Complete")
            taskList.removeChild(listItem);
        }
        if (e.target.classList.contains('done-button')) {
            const listItem = e.target.parentElement.parentElement;
            alert("Task Done Complete");
            taskList.removeChild(listItem);
        }
        if(e.target.classList.contains('AddNew-button')) {
            const listItem = e.target.parentElement.parentElement;
            listItem.classList.toggle('list-group-item-success');
        }
        if(e.target.classList.contains('finish-button')) {
            const listItem = e.target.parentElement.parentElement;
            alert("Task Finish Complete");
            taskList.removeChild(listItem);
        }
    });
});