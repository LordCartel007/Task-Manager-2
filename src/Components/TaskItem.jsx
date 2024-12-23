import React from "react";
import { useTask } from "./Taskcontext";

const TaskItem = ({ task, setEditing }) => {
  const { dispatch } = useTask();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch({ type: "DELETE_TASK", payload: task.id });
    }
  };

  console.log(setEditing);

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.name}: {task.description}
      </span>
      <button onClick={() => setEditing(task)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
