let tasks = JSON.parse(localStorage.getItem('dailyTasks')) || [];
let currentFilter = 'all';

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const taskText = taskInput.value.trim();

  if (taskText === '') { alert('Please enter a task!'); return; }

  const newTask = {
    id: Date.now(),
    text: taskText,
    priority: prioritySelect.value,
    completed: false,
    createdAt: new Date().toLocaleDateString('hi-IN')
  };

  tasks.unshift(newTask);
  taskInput.value = '';
  prioritySelect.value = 'medium';

  saveTasks();
  renderTasks();
  updateStats();
}

function renderTasks() {
  const container = document.getElementById('tasksContainer');
  let filteredTasks = filterTasksByType(tasks, currentFilter);

  if (filteredTasks.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>🎯 Koi task nahi mila!</p></div>';
    return;
  }

  container.innerHTML = filteredTasks.map(task => `
    <div class="task-item ${task.completed ? 'completed' : ''} ${task.priority}-priority">
      <div class="task-header">
        <div class="task-text">${task.text}</div>
        <span class="task-priority ${task.priority}-priority">${task.priority}</span>
      </div>
      <div class="task-date">📅 ${task.createdAt}</div>
      <div class="task-actions">
        ${!task.completed ? 
          `<button class="action-btn complete-btn" onclick="toggleTask(${task.id})">✓ Complete</button>` :
          `<button class="action-btn complete-btn" onclick="toggleTask(${task.id})">↩ Undo</button>`}
        <button class="action-btn edit-btn" onclick="editTask(${task.id})">✏ Edit</button>
        <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">🗑 Delete</button>
      </div>
    </div>`).join('');
}

function filterTasksByType(tasksArray, filterType) {
  switch(filterType) {
    case 'completed': return tasksArray.filter(task => task.completed);
    case 'pending': return tasksArray.filter(task => !task.completed);
    case 'high': return tasksArray.filter(task => task.priority === 'high');
    default: return tasksArray;
  }
}

function filterTasks(filterType) {
  currentFilter = filterType;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task);
  saveTasks(); renderTasks(); updateStats();
}

function deleteTask(id) {
  if (confirm('Kya aap sure hain ki aap ye task delete karna chahte hain?')) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(); renderTasks(); updateStats();
  }
}

function editTask(id) {
  const task = tasks.find(task => task.id === id);
  const newText = prompt('Task edit kariye:', task.text);
  if (newText && newText.trim()) {
    tasks = tasks.map(t => t.id === id ? {...t, text: newText.trim()} : t);
    saveTasks(); renderTasks();
  }
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  document.getElementById('totalTasks').textContent = total;
  document.getElementById('completedTasks').textContent = completed;
  document.getElementById('pendingTasks').textContent = pending;

  document.getElementById('clearAllBtn').style.display = completed > 0 ? 'block' : 'none';
}

function clearAllTasks() {
  if (confirm('Kya aap sare completed tasks clear karna chahte hain?')) {
    tasks = tasks.filter(task => !task.completed);
    saveTasks(); renderTasks(); updateStats();
  }
}

function saveTasks() { localStorage.setItem('dailyTasks', JSON.stringify(tasks)); }

document.getElementById('taskInput').addEventListener('keypress', e => { if (e.key === 'Enter') addTask(); });
document.addEventListener('DOMContentLoaded', () => { renderTasks(); updateStats(); });
