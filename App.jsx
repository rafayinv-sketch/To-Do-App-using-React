//=================================================
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "./App.css";
//=================================================

//=================================================
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
//=================================================

//=================================================
  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    if (editingIndex !== null) {

      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = taskInput;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      const newTask = {
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTaskInput("");
  };
//=================================================

//=================================================
  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
//=================================================

//=================================================
  const handleEdit = (index) => {
    setTaskInput(tasks[index].text);
    setEditingIndex(index);
  };
//=================================================

//=================================================
  const handleDelete = (index) => {
    alert("Do you want to delete this task?");
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };
//=================================================

//=================================================
  return (
    <div className="container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>

      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <button
              className="complete-btn"
              onClick={() => handleComplete(index)}
            >
              {task.completed ? (
                <i className="bi bi-check-circle-fill"></i>
              ) : (
                <i className="bi bi-check-circle"></i>
              )}
            </button>

            <button
              className="edit-btn"
              onClick={() => handleEdit(index)}
              disabled={task.completed}
            >
              <i className="bi bi-pencil-fill"></i>
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(index)}
              disabled={task.completed}
            >
              <i className="bi bi-archive"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
//=================================================
}

export default App;
