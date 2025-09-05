import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "./App.css";
import CustomButton from "./CustomButton.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add or update task
  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = taskInput;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      const newTask = { text: taskInput, completed: false };
      setTasks([...tasks, newTask]);
    }
    setTaskInput("");
  };

  // Complete/uncomplete task
  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Edit task
  const handleEdit = (index) => {
    setTaskInput(tasks[index].text);
    setEditingIndex(index);
  };

  // Delete task
  const handleDelete = (index) => {
      setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      {/* Add/Update Button */}
      <CustomButton
        className="AddUpdate"
        onClick={handleAddTask}
        iconClass={editingIndex !== null ? "bi bi-arrow-clockwise" : "bi bi-plus-circle-dotted"}
      />
      {/* Add/Update Button */}

      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>

            {/* complete Button */}
            <CustomButton
              className="complete-btn"
              onClick={() => handleComplete(index)}
              iconClass={task.completed ? "bi bi-check-circle-fill" : "bi bi-check-circle"}
            />
            {/* complete Button */}

            {/* edit Button */}
            <CustomButton
              className="edit-btn"
              onClick={() => handleEdit(index)}
              disabled={task.completed}
              iconClass="bi bi-pencil"
            />
            {/* edit Button */}

            {/* delete Button */}
            <CustomButton
              className="delete-btn"
              onClick={() => handleDelete(index)}
              disabled={task.completed}
              iconClass="bi bi-archive"
            />
            {/* delete Button */}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
