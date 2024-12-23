import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./Taskform";
import { useTask } from "..//Components/Taskcontext";

const TaskList = () => {
  const { tasks } = useTask();
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="task-list">
      {editingTask ? (
        <TaskForm editTask={editingTask} setEditing={setEditingTask} />
      ) : (
        <TaskForm />
      )}

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} setEditing={setEditingTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
