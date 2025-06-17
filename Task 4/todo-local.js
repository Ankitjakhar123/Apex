const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function renderTasks() {
    todoList.innerHTML = '';
    getTasks().forEach((task, idx) => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            const tasks = getTasks();
            tasks.splice(idx, 1);
            saveTasks(tasks);
            renderTasks();
        };
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task) {
        const tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
        todoInput.value = '';
    }
});
renderTasks();
