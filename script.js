* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.header { text-align: center; margin-bottom: 30px; color: #333; }
.header h1 {
  font-size: 2.5rem; margin-bottom: 10px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stats-container {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px; margin-bottom: 30px;
}
.stat-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white; padding: 20px; border-radius: 15px; text-align: center;
  transition: transform 0.3s ease;
}
.stat-card:hover { transform: translateY(-5px); }
.stat-card h3 { font-size: 2rem; margin-bottom: 5px; }

.input-section {
  background: rgba(102, 126, 234, 0.1); padding: 25px; border-radius: 15px; margin-bottom: 30px;
}
.input-group { display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap; }
.task-input {
  flex: 1; padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px;
  font-size: 16px; transition: border-color 0.3s ease; min-width: 250px;
}
.task-input:focus { outline: none; border-color: #667eea; }
.priority-select {
  padding: 12px 15px; border: 2px solid #ddd; border-radius: 10px;
  font-size: 16px; background: white; cursor: pointer;
}
.add-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer;
}
.add-btn:hover { transform: scale(1.05); }

.filters { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; }
.filter-btn {
  background: rgba(255, 255, 255, 0.8); border: 2px solid #ddd;
  padding: 8px 20px; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;
}
.filter-btn.active { background: #667eea; color: white; border-color: #667eea; }

.tasks-container { min-height: 200px; }
.task-item {
  background: white; border-radius: 12px; padding: 20px; margin-bottom: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-left: 5px solid #667eea;
  transition: all 0.3s ease; animation: slideIn 0.5s ease;
}
.task-item:hover { transform: translateY(-2px); }
.task-item.completed { opacity: 0.7; text-decoration: line-through; }
.task-item.high-priority { border-left-color: #f5576c; }
.task-item.medium-priority { border-left-color: #f093fb; }
.task-item.low-priority { border-left-color: #4facfe; }

.task-header { display: flex; justify-content: between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 10px; }
.task-text { flex: 1; font-size: 18px; color: #333; min-width: 200px; }
.task-priority { background: #667eea; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-transform: uppercase; }

.task-actions { display: flex; gap: 8px; margin-top: 10px; }
.action-btn { padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; }
.complete-btn { background: #4CAF50; color: white; }
.delete-btn { background: #f44336; color: white; }
.edit-btn { background: #ff9800; color: white; }

.task-date { color: #666; font-size: 14px; margin-top: 5px; }
.empty-state { text-align: center; color: #666; font-size: 18px; margin-top: 50px; }

.clear-all-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;
  margin: 20px auto 0; display: block;
}

@keyframes slideIn { from { opacity: 0; transform: translateX(-20px);} to {opacity: 1; transform: translateX(0);} }

@media (max-width: 768px) {
  .input-group { flex-direction: column; }
  .task-input { min-width: 100%; }
  .stats-container { grid-template-columns: repeat(2, 1fr); }
  .filters { flex-direction: column; align-items: center; }
  .task-header { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 480px) { .stats-container { grid-template-columns: 1fr; } .task-actions { justify-content: center; } }
