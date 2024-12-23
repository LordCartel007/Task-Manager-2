import React from "react";
import TaskList from "./Components/TaskList";
import { TaskProvider } from "./Components/Taskcontext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>To-Do List</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
