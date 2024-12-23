import React, { useState } from "react";
import { useTask } from "../Components/Taskcontext";

const TaskForm = ({ editTask, setEditing }) => {
  const { dispatch } = useTask();
  const [task, setTask] = useState(
    editTask || { name: "", description: "", completed: false }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert("Both fields are required.");
      return;
    }

    if (editTask) {
      dispatch({ type: "UPDATE_TASK", payload: task });
      setEditing(false);
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { ...task, id: Date.now() },
      });
    }

    setTask({ name: "", description: "", completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
